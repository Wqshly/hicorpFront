<template>
  <div class="fill-contain">
    <!-- 表前工具栏 -->
    <template v-if="tableTools ===true">
      <div class="table-tools-column">
        <el-button-group>
          <el-button v-if="buttonShow.addButton" style="color: #13ce66;" size="small" @click.native="openAddDialog"
                     icon="el-icon-circle-plus-outline">新增
          </el-button>
          <el-button v-if="buttonShow.editButton" style="color: #f7c900;" size="small" @click.native="openEditDialog"
                     icon="el-icon-edit-outline">编辑
          </el-button>
          <el-button v-if="buttonShow.deleteButton" style="color: #b9c9c7;" size="small" @click.native="deleteRecord"
                     icon="el-icon-delete"
                     :disabled="this.allSelects.length === 0 && this.currentPageSelects.length === 0">删除
          </el-button>
          <el-button v-if="buttonShow.refreshButton" style="color: #12ce66;" size="small" @click.native="refreshRecord"
                     icon="el-icon-refresh-right">刷新
          </el-button>
          <el-button v-if="buttonShow.downloadButton" style="color: #12ce66" size="small" @click.native="downloadTemp(fileName)"
                     icon="el-icon-download">下载模板
          </el-button>
          <el-button v-if="buttonShow.importButton" style="color: #12ce66" size="small"
                     @click.native="openImportDataDialog" icon="el-icon-upload">批量导入
          </el-button>
          <el-button v-if="buttonShow.editButton" style="color: #f7c900;" size="small" @click.native="openCheckDialog"
                     icon="el-icon-edit-outline">审核
          </el-button>
          <el-button v-if="buttonShow.editButton" style="color: #f7c900;" size="small" @click.native="invalidMethod"
                     icon="el-icon-edit-outline">作废
          </el-button>
          <!--          <el-button v-if="buttonShow.exportButton" style="color: #12ce66" size="small" @click.native="exportData()"-->
          <!--                     icon="el-icon-tickets">数据导出-->
          <!--          </el-button>-->
        </el-button-group>
        <slot name="expand-button"></slot>
        <div v-if="searchShow" class="search-box-style">
          <el-input v-model="searchData.content" class="search-box" placeholder="请输入内容搜索" size="small" clearable>
            <template slot="prepend">
              <el-select style="width: 100px;" v-model="searchData.title" placeholder="请选择">
                <el-option v-for="(item, index) in searchList"
                           :key="index"
                           :label="item.label"
                           :value="item.value"></el-option>
              </el-select>
            </template>
          </el-input>
          <el-button-group>
            <el-button size="small" @click.native="search" icon="el-icon-search">搜索</el-button>
            <el-button size="small" @click.native="reset" icon="el-icon-refresh">重置</el-button>
          </el-button-group>
        </div>
      </div>
    </template>
    <!-- 表格内容 -->
    <el-row>
      <!-- @为v-on的缩写，:为v-bind的缩写 -->
      <el-table :data="tableData" ref="TableTemplate"
                @row-click="rowClick"
                @row-dblclick="rowDoubleClick"
                @selection-change="selectChange"
                :default-sort="defaultSort" @sort-change="sortChange"
                v-loading="tableLoading"
                :header-cell-style="{background: '#36507E', color: '#ffffff'}" stripe>
        <!-- 选择框 -->
        <el-table-column type="selection" width="55"></el-table-column>
        <!-- 序号 -->
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <!-- 正式内容 -->
        <!-- 通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据。 -->
        <!-- 使用sortable="custom" 即可通过后端排序 -->
        <el-table-column v-for="tableHeader in tableHeaderList" :key="tableHeader.value"
                         :label="tableHeader.label" :prop="tableHeader.value"
                         :min-width="tableHeader.minWidth" :width="tableHeader.width"
                         header-align="center" align="center"
                         :fixed="tableHeader.fixed" :sortable="sortable"
                         show-overflow-tooltip>
          <!-- Element UI固定写法 -->
          <template slot-scope="scope">
            <el-tag v-if="tableHeader.value === 'isApprove' && scope.row[tableHeader.value] === '未审批'" type="warning">
              {{ dataFormat(scope.row[tableHeader.value], tableHeader.value) }}
            </el-tag>
            <el-tag v-else-if="tableHeader.value === 'isApprove' && scope.row[tableHeader.value] === '已审批'"
                    type="success">{{ dataFormat(scope.row[tableHeader.value], tableHeader.value) }}
            </el-tag>
            <div v-else>{{ dataFormat(scope.row[tableHeader.value], tableHeader.value) }}</div>
          </template>
        </el-table-column>
        <!-- 右侧操作栏 -->
        <el-table-column label="操作" :min-width="funcBtn.minWidth" :width="funcBtn.width" v-if="funcBtn.isShow"
                         :fixed="funcBtn.fixed">
          <template slot-scope="scope">
            <!-- 通过tableHeader.value获取按钮名 -->
            <el-button size="small" v-for="(item, index) in funcBtn.buttons"
                       @click="btnClick(item.value, scope.row)" :icon="item.icon" :key="index">
              <!-- :disabled="btnDisabled(item.value, scope.row)"> -->
              {{ item.name }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!-- 表后页码等 -->
    <el-row>
      <div class="table-footer" style="float: right;">
        <el-pagination
          :hide-on-single-page="hidePagination"
          @size-change="sizeChange"
          @current-change="currentChange"
          :current-page="currentPageNumber"
          :page-sizes="[5, 10, 15, 20, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="recordTotal"
          class="pagination-style"></el-pagination>
      </div>
    </el-row>
    <!-- 新增窗口 -->
    <el-dialog ref="addFormDialog" title="新增" :visible.sync="addDialogVisible" :close-on-click-modal="false"
               class="dialog-style" :width="addDialog.width">
      <slot name="addForm"></slot>
      <div slot="footer">
        <!-- 作为模板时，不加.native将不会生效 -->
        <el-button type="primary" @click.native="addRecord">保存</el-button>
        <el-button type="primary" @click.native="addAndClose">保存并关闭</el-button>
        <el-button @click.native="addDialogVisible = false">取消</el-button>
      </div>
    </el-dialog>
    <!-- 编辑窗口 -->
    <el-dialog ref="editFormDialog" :title="editDialog.name" :visible.sync="editDialogVisible"
               :close-on-click-modal="false"
               class="dialog-style" :width="editDialog.width">
      <slot name="editForm"></slot>
      <div slot="footer">
        <div style="float:left;">
          <el-button type="primary" @click.native="previousRecord" v-show="editDialog.upChange">上一条</el-button>
          <el-button type="primary" @click.native="nextRecord" v-show="editDialog.downChange">下一条</el-button>
        </div>
        <!-- 作为模板时，不加.native将不会生效 -->
        <el-button type="primary" @click.native="editRecord" v-show="editDialog.saveBtnSaveShow">
          {{ editDialog.saveBtnSaveName }}
        </el-button>
        <el-button type="primary" @click.native="editAndClose" v-show="editDialog.saveBtnSaveCloseShow">
          {{ editDialog.saveBtnSaveCloseName }}
        </el-button>
        <el-button @click.native="editDialogVisible = false">取消</el-button>
      </div>
    </el-dialog>
    <!-- 详情窗口 -->
    <el-dialog ref="detailFormDialog" title="详情" :visible.sync="detailDialogVisible" :close-on-click-modal="false"
               class="dialog-style" :width="detailDialog.width">
      <div id="printForm">
        <slot name="detailForm"></slot>
      </div>
      <div slot="footer">
        <div style="float: left;">
          <el-button v-print="'#printForm'" type="primary">打印</el-button>
        </div>
        <el-button @click.native="closeDetailDialog">关闭</el-button>
      </div>
    </el-dialog>
    <!-- 上传Excel窗口 -->
    <el-dialog ref="importExcelFormDialog" title="批量导入" :visible.sync="importDataDialogVisible"
               :close-on-click-modal="false"
               class="dialog-style">
      <slot name="uploadDataSlot"></slot>
      <div slot="footer">
        <div style="float: left;">
          <el-button @click.native="closeImportExcelFormDialog">取消</el-button>
        </div>
        <el-button type="primary" @click.native="uploadExcel">确认上传</el-button>
      </div>
    </el-dialog>
    <slot name="other-dialog"></slot>
  </div>
</template>

<script>
import {formatDate} from '@/commons/date'

export default {
  name: 'BasicTableTemp',
  props: {
    defaultMsg: {type: String, default: '修改成功'},
    fileName: {type: String, default: 'fileName'},
    url: {
      default () {
        return {
          refreshUrl: '',
          searchUrl: '',
          addUrl: '',
          editUrl: '',
          deleteUrl: '',
          invalidUrl: ''
        }
      }
    },
    tableTools: {type: Boolean, default: true},
    searchShow: {type: Boolean, default: true},
    dateSearchShow: {type: Boolean, default: true},
    buttonShow: {
      default () {
        return {
          addButton: true,
          editButton: true,
          deleteButton: true,
          refreshButton: true,
          downloadButton: true,
          importButton: true
          // exportButton: true
        }
      }
    },
    tableHeaderList: {type: Array, required: true}, // 表头数据
    searchList: {type: Array, required: true}, // 搜索字段
    tablePK: {default: 'id'}, // 表的主键
    sortable: {type: Boolean | String, default: 'custom'}, // 是否排序/前端/后端排序
    hidePagination: {type: Boolean, default: false}, // 是否隐藏页码
    addDialog: {
      default () {
        return {
          width: '50%'
        }
      }
    },
    editDialog: {
      default () {
        return {
          name: '编辑',
          width: '50%',
          saveBtnSaveShow: true,
          saveBtnSaveName: '保存',
          saveBtnSaveCloseShow: true,
          saveBtnSaveCloseName: '保存并关闭',
          upChange: true,
          downChange: true
        }
      }
    },
    detailDialog: {
      default () {
        return {
          width: '50%'
        }
      }
    },
    funcBtn: {
      default () {
        return {
          isShow: false,
          fixed: 'right',
          width: 200,
          buttons: []
        }
      }
    } // 右侧操作栏
  },
  data () {
    return {
      tableData: [], // 表数据
      searchData: {title: '', content: ''},
      defaultSort: {prop: 'id', order: 'ascending'},
      selectRow: null, // 当前选中行
      tableDataIndex: -1, // 当前选中行的序号，用于编辑、详情页中的上一条下一条读取数据。如无该变量，直接使用indexOf(selectRow)查行号，则编辑后无法回到正确的行数上。
      allSelects: [], // 所有选中的数据
      currentPageSelects: [], // 当前页列表中选中的多行数据
      lastUrl: '', // 查询和刷新页面用的Url
      lastObject: {}, // 查询和刷新页面用的Object
      recordTotal: 0, // 数据的总条数
      currentPageNumber: 1, // 当前页
      pageSize: 10, // 每页显示条数
      sortField: 'id', // 排序的字段
      sortMethod: 'ascending', // 排序方法(升序、降序、不排序)
      tableLoading: false, // 表格显示loading
      addDialogVisible: false, // 添加窗口
      editDialogVisible: false, // 编辑窗口
      detailDialogVisible: false, // 查看详情窗口
      importDataDialogVisible: false // 上传Excel窗口
    }
  },
  methods: {
    // 打开新增页面
    openAddDialog () {
      this.addDialogVisible = true
    },
    // 打开编辑页面
    openEditDialog () {
      if (this.selectRow !== null) {
        this.editDialogVisible = true
      } else {
        this.$message.warning('请点击一条记录，而不是勾选！')
      }
    },
    // 添加记录
    addRecord () {
      this.$emit('add-record')
    },
    // 添加并关闭窗口
    addAndClose () {
      this.addRecord()
      this.addDialogVisible = false
    },
    // 具体的新增记录的方法
    createMethod (url, param) {
      let JsonParam = JSON.stringify(param)
      this.$api.http.postJson(url, JsonParam)
        .then(res => {
          this.refreshRecord()
          this.$message.success('添加成功')
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 编辑记录
    editRecord () {
      this.$emit('edit-record')
    },
    // 编辑并关闭窗口
    editAndClose () {
      this.editRecord()
      this.editDialogVisible = false
    },
    // 具体的修改记录的方法
    updateMethod (url, param) {
      let jsonParam = JSON.stringify(param)
      this.$api.http.putJson(url, jsonParam)
        .then(res => {
          this.$message.success(this.defaultMsg)
          this.refreshRecord()
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 关闭详情页面
    closeDetailDialog () {
      this.detailDialogVisible = false
    },
    // 删除记录(批量删除)
    async deleteRecord () {
      this.rememberSelects()
      const selectMultipleId = this.allSelects.map(item => item[this.tablePK])
      console.log(selectMultipleId)
      await this.$confirm('确认删除 "选中的 ' + selectMultipleId.length + ' 条" 记录吗？', '提示', {type: 'warning'})
        .then(() => {
          this.tableLoading = true
          this.$api.http.postJson(this.url.deleteUrl, selectMultipleId)
            .then(res => {
              this.tableLoading = false
              this.$message.success('删除成功!')
              this.refreshRecord()
            })
            .catch(err => {
              console.log(err)
              this.tableLoading = false
            })
        })
        .catch(() => {
        })
    },
    // 刷新记录
    refreshRecord () {
      this.allSelects = []
      this.getRecord(null)
      this.$emit('clear-new-and-edit-tables')
    },
    search () {
      if (this.searchData.title === '') {
        this.$message.warning('请勾选要筛选的项')
      } else if (this.searchData.content === '') {
        this.$message.warning('请输入搜索内容！')
      } else {
        this.allSelects = []
        this.getRecord(this.url.searchUrl + '/' + this.searchData.title + '/' + this.searchData.content)
      }
    },
    reset () {
      this.allSelects = []
      this.searchData = {title: '', content: ''}
      this.getRecord(this.url.refreshUrl)
    },
    // 打开上传数据页面
    openImportDataDialog () {
      this.importDataDialogVisible = true
    },
    // 上传数据表
    uploadExcel () {
      this.$emit('upload-data')
      this.importDataDialogVisible = false
    },
    exportData () {
      this.$emit('export-data')
    },
    // 打开审核dialog窗口
    openCheckDialog () {},
    // 作废事件
    async invalidMethod () {
      this.rememberSelects()
      const selectMultipleId = this.allSelects.map(item => item[this.tablePK])
      console.log(selectMultipleId)
      if (selectMultipleId.length === 0) {
        this.$message.success('选中数据条数为0，不能作废!')
      } else {
        await this.$confirm('确认作废 "选中的 ' + selectMultipleId.length + ' 条" 数据吗？', '提示', {type: 'warning'})
          .then(() => {
            this.tableLoading = true
            this.$api.http.postJson(this.url.invalidUrl, selectMultipleId)
              .then(res => {
                this.tableLoading = false
                this.$message.success('作废成功!')
                this.refreshRecord()
              })
              .catch(err => {
                console.log(err)
                this.tableLoading = false
              })
          })
          .catch(() => {
          })
      }
    },
    // 关闭上传数据页面
    closeImportExcelFormDialog () {
      this.$emit('cancel-export-data')
      this.importDataDialogVisible = false
    },
    // 驼峰转下划线
    toLine (name) {
      return name.replace(/([A-Z])/g, '_$1').toLowerCase()
    },
    // 排序
    sortChange (data) {
      // 由于后端排顺序，故在此处将sort排序中的null值排除。
      if (data.order === null) {
        data.column.order = this.sortMethod === 'descending' ? data.order = 'ascending' : data.order = 'descending'
        this.sortMethod = data.prop
      }
      this.sortField = data.prop
      this.sortMethod = data.order
      this.refreshRecord()
    },
    // 获取记录
    getRecord (url) {
      this.selectRow = null
      let obj = {}
      if (url === null) {
        url = this.lastUrl
        obj = this.lastObject
      }
      obj.num = this.currentPageNumber
      obj.size = this.pageSize
      obj.sort = this.toLine(this.sortField) + '->' + this.sortMethod.replace('descending', 'desc').replace('ascending', 'asc')
      this.tableLoading = true
      this.$api.http.get(url + '?page=' + obj.num + '&size=' + obj.size + '&sort=' + obj.sort)
        .then(res => {
          this.tableLoading = false
          this.tableData = res.data.list
          this.recordTotal = res.data.total // 总条数
          this.$emit('record-processing') // 其他的刷新事件，通过此处返还
          this.lastUrl = url
          this.lastObject = obj
          setTimeout(() => {
            this.setSelectRow()
          }, 100)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 点击某一行
    rowClick (row, column, event) {
      // assign 使后者的值赋到前者中。
      this.$emit('click-row', Object.assign({}, row))
      this.selectRow = row
      this.tableDataIndex = this.tableData.indexOf(this.selectRow)
    },
    // 双击某行时的事件
    rowDoubleClick (row, column, event) {
      this.$emit('click-row-double', Object.assign({}, row))
    },
    // 多选记忆，记住之前页面所选
    rememberSelects () {
      // 标识当前行的唯一键的名称
      let tablePK = this.tablePK
      let that = this
      // 如果总记忆中还没有选择的数据，那么就直接取当前页选中的数据，不需要后面一系列计算
      if (this.allSelects.length <= 0) {
        this.allSelects = this.currentPageSelects
        this.initSelects = this.currentPageSelects
        console.log('non select')
        return
      } else if (this.allSelects === this.initSelects) {
        if (this.currentPageSelects.length === 0) {
          console.log('init select1')
          return
        }
        if (this.currentPageSelects.length !== 0 && this.currentPageSelects === this.initSelects) {
          console.log('init select')
          return
        }
      }
      // 总选择里面的key集合
      let selectAllIds = []
      this.allSelects.forEach(row => {
        selectAllIds.push(row[tablePK])
      })
      let selectIds = []
      // 获取当前页选中的id
      this.currentPageSelects.forEach(row => {
        selectIds.push(row[tablePK])
        // 如果总选择里面不包含当前页选中的数据，那么就加入到总选择集合里
        if (selectAllIds.indexOf(row[tablePK]) < 0) {
          that.allSelects.push(row)
        }
      })
      let noSelectIds = []
      // 得到当前页没有选中的id
      this.tableData.forEach(row => {
        if (selectIds.indexOf(row[tablePK]) < 0) {
          noSelectIds.push(row[tablePK])
        }
      })
      noSelectIds.forEach(id => {
        if (selectAllIds.indexOf(id) >= 0) {
          for (let i = 0; i < that.allSelects.length; i++) {
            if (that.allSelects[i][tablePK] === id) {
              // 如果总选择中有未被选中的，那么就删除这条
              that.allSelects.splice(i, 1)
              break
            }
          }
        }
      })
    },
    // 选中多行数据
    selectChange (selects) {
      this.currentPageSelects = selects
      this.$emit('select-change', selects)
    },
    // 当跳转到有勾选项的页面时，将已勾选项渲染到页面上
    setSelectRow () {
      if (!this.allSelects || this.allSelects.length <= 0) {
        return
      }
      // 标识当前行的唯一键的名称
      let idKey = this.tablePK
      let selectAllIds = []
      this.allSelects.forEach(row => {
        selectAllIds.push(row[idKey])
      })
      this.$refs.TableTemplate.clearSelection()
      for (let i = 0; i < this.tableData.length; i++) {
        if (selectAllIds.indexOf(this.tableData[i][idKey]) >= 0) {
          this.$refs.TableTemplate.toggleRowSelection(this.tableData[i], true)
        }
      }
    },
    // 每页显示数据条数
    sizeChange (val) {
      this.pageSize = val
      this.rememberSelects()
      this.getRecord(null)
    },
    // 页码发生改变
    currentChange (val) {
      this.currentPageNumber = val
      this.rememberSelects()
      this.getRecord(null)
    },
    // 右侧操作按钮点击事件
    btnClick (value, row) {
      this.$emit('btn-click', value, row)
    },
    // 右侧操作栏是否可点击
    btnDisabled (value, row) {
      let data = {}
      this.$emit('btn-disabled', value, row, val => {
        // console.log(val)
        data = val
      })
      return data
    },
    // 编辑界面中的上一条按钮
    previousRecord () {
      if (this.tableDataIndex - 1 === -1) {
        this.tableDataIndex = this.tableData.length - 1
      } else {
        this.tableDataIndex -= 1
      }
      this.selectRow = this.tableData[this.tableDataIndex]
      this.$emit('click-row', Object.assign({}, this.tableData[this.tableDataIndex]))
    },
    // 编辑页面中的下一条按钮
    nextRecord () {
      if (this.tableDataIndex + 1 === this.tableData.length) {
        this.tableDataIndex = 0
      } else {
        this.tableDataIndex += 1
      }
      this.selectRow = this.tableData[this.tableDataIndex]
      this.$emit('click-row', Object.assign({}, this.tableData[this.tableDataIndex]))
    },
    dataFormat (data, tableHeader) {
      if (tableHeader === 'gmtCreate' || tableHeader === 'gmtModified') {
        if (data === '' || data === null) {
          return '——'
        } else {
          const date = new Date(data)
          return formatDate(date, 'yyyy年MM月dd日 hh时mm分ss秒')
        }
      }
      this.$emit('data-format', data, tableHeader, val => {
        data = val
      })
      return data
    },
    // 下载模板
    downloadTemp (fileName) {
      window.open('http://115.29.108.131:8088/api/download/' + fileName, '')
    }
  }
}
</script>

<style lang="less" scoped>

.table-tools-column {
  width: 100%;
  min-height: 50px;
}

.search-box-style {
  float: right
}

.search-box {
  width: 250px;
}

.button {
  color: #fff;
  background: inherit;
  border: none inherit;
}

.button:hover {
  background-color: #49c7ff;
}

.button:active {
  background-color: #49c7ff;
}

.button:focus {
  background-color: #49c7ff;
}

.button-icon {
  margin: 5px;
}

.table-footer {
  background: rgba(255, 255, 255, 0.7);
  height: 40px;
}

</style>
