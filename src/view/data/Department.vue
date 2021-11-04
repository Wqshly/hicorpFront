<template>
  <div>
    <basic-table-temp :ref="refName"
                      :url="url"
                      :search-list="searchList"
                      :table-header-list="tableHeaderList"
                      :file-name="fileName"
                      @click-row="clickRow"
                      @add-record="addRecord"
                      @edit-record="editRecord"
                      @data-format="dataFormat"
                      @upload-data="uploadDataMethod"
                      @cancel-export-data="cancelExportData"
                      @clear-new-and-edit-tables="clearNewAndEditTables"
    >
      <el-form slot="addForm" :model="addForm" style="overflow: auto" label-width="120px" ref="addForm"
               :rules="addFormRules">
        <el-row>
          <el-col :span="11">
            <el-form-item label="部门编号：" prop="number">
              <el-input v-model="addForm.number"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="部门名称：" prop="name">
              <el-input v-model="addForm.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-form slot="editForm" :model="editForm" style="overflow: auto" label-width="120px" ref="editForm"
               :rules="editFormRules">
        <el-form-item label="部门编号：" prop="number">
          <el-input v-model="editForm.number"></el-input>
        </el-form-item>
        <el-form-item label="部门名称：" prop="name">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="uploadDataSlot">
        <excel-to-list @submit-json-list="getJsonList" ref="excelToList"></excel-to-list>
      </div>
    </basic-table-temp>
  </div>
</template>

<script>
export default {
  name: 'Department',
  data () {
    return {
      refName: 'DepartmentForm',
      fileName: 'Department.xlsx',
      url: {
        refreshUrl: '/department/list',
        searchUrl: '/department/list',
        addUrl: '/department/add',
        editUrl: '/department/',
        deleteUrl: '/department/deleteList',
        uploadUrl: '/department/addList'
      },
      searchList: [
        {value: 'name', label: '员工姓名'},
        {value: 'staffNumber', label: '员工编号'},
        {value: 'phoneNumber', label: '电话号码'},
        {value: 'idCard', label: '身份证号'},
        {value: 'sex', label: '性别'}
      ],
      tableHeaderList: [
        {value: 'number', label: '部门编号', width: '220'},
        {value: 'name', label: '部门名称', width: '220'},
        {value: 'others', label: '添加信息位置', minWidth: '140'},
        {value: 'createUser', label: '创建人', width: '220'},
        {value: 'gmtCreate', label: '创建时间', width: '220'},
        {value: 'modifiedUser', label: '修改人', width: '220'},
        {value: 'gmtModified', label: '修改时间', width: '220'}
      ],
      addForm: {number: '', name: ''},
      addFormRules: {},
      editForm: {id: null, number: null, name: null},
      editFormRules: {},
      // 按钮显示控制 buttonShow: {}
      jsonList: [] // 这个用于批量导入
    }
  },
  // 这个用于批量导入，使用批量导入功能记得复制过去。
  mounted () {
    this.$refs[this.refName].getRecord(this.url.refreshUrl)
  },
  methods: {
    // 点击将基本信息项的某一行信息付给编辑表
    clickRow (row) {
      this.editForm = row
    },
    async addRecord () {
      await this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.addForm.gmtCreate = new Date()
          console.log(this.url.addUrl)
          this.$refs[this.refName].createMethod(this.url.addUrl, this.addForm)
        }
      })
    },
    async editRecord () {
      await this.$refs.editForm.validate((valid) => {
        if (valid) {
          this.$refs[this.refName].updateMethod(this.url.editUrl + this.editForm.id, this.editForm)
        }
      })
    },
    dataFormat (data, tableHeader, callback) {
    },
    clearNewAndEditTables () {
      this.addForm = {
        number: '', name: ''
      }
      this.editForm = {
        id: null, number: null, name: null
      }
    },
    // 上传Excel方法
    uploadDataMethod () {
      if (this.jsonList.length > 0) {
        this.$refs[this.refName].createMethod(this.url.uploadUrl, this.jsonList)
      } else {
        this.$message.warning('请先选择要上传的excel表格!')
      }
    },
    cancelExportData () {
      this.jsonList = []
      this.$refs.excelToList.fileList = []
    },
    getJsonList (data) {
      for (let i = 0; i < data[0].length; i++) {
        // 存入字段名和excel表中的名称的映射，记得修改
        this.jsonList[i] = {}
        this.jsonList[i].number = data[0][i]['部门编号']
        this.jsonList[i].name = data[0][i]['部门名称']
      }
    }
    // 批量导入时上面三个方法，一起复制。
  }
}
</script>

<style scoped>

</style>
