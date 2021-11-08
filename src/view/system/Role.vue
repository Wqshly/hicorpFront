<template>
  <div>
    <basic-table-temp :ref="refName"
                      :url="url"
                      :search-list="searchHeaderList"
                      :table-header-list="tableHeaderList"
                      :func-btn="funcBtn"
                      @click-row="clickRow"
                      @add-record="addRecord"
                      @edit-record="editRecord"
                      @upload-data="uploadDataMethod"
                      @cancel-export-data="cancelExportData"
                      @btn-disabled="btnDisabled"
                      @btn-click="btnClick">
      <el-form slot="addForm" :model="addForm" style="overflow: auto" label-width="120px" ref="addForm"
               :rules="addFormRules">
        <el-form-item label="角色名：" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="具体描述：" prop="introduction">
          <el-input v-model="addForm.introduction"></el-input>
        </el-form-item>
      </el-form>
      <el-form slot="editForm" :model="editForm" style="overflow: auto" label-width="120px" ref="editForm"
               :rules="editFormRules">
        <el-form-item label="角色名：" prop="name">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="具体描述：" prop="introduction">
          <el-input v-model="editForm.introduction"></el-input>
        </el-form-item>
      </el-form>
      <div slot="uploadDataSlot">
        <excel-to-list @submit-json-list="getJsonList" ref="excelToList"></excel-to-list>
      </div>
      <div slot="other-dialog">
        <el-dialog ref="roleMenuDialog" title="角色访问权限设置" width="1200px" :visible.sync="roleMenuDialogVisible">
          <el-form style="overflow: auto;" label-width="120px" ref="roleMenuRelation">
            <el-form-item class="menu-container" label="勾选页面:" prop="menu">
              <el-cascader-panel
                v-model="selectMenu"
                :options="allMenu"
                :props="menuCascadeProps"
                clearable></el-cascader-panel>
            </el-form-item>
            <el-form-item class="menu-container" style="width: 400px;" label="已选页面:" prop="menu">
<!--              <div v-for="(item, index) in selectMenu" :key="index">{{item}}</div>-->
              <el-cascader
                v-model="selectMenu"
                :options="allMenu"
                :props="menuCascadeProps"
                clearable></el-cascader>
            </el-form-item>
          </el-form>
          <div slot="footer">
            <el-button @click.native="roleMenuDialogVisible = false">取消</el-button>
            <el-button type="primary" @click.native="roleMenuUpdate">确定</el-button>
          </div>
        </el-dialog>
        <el-dialog ref="rolePermissionDialog" title="角色功能权限设置" :visible.sync="rolePermissionDialogVisible">
          <el-form style="overflow: auto" label-width="120px" ref="roleMenuRelation">
            <el-form-item label="勾选菜单:">
              <el-select v-model="selectPermission" multiple placeholder="请选择">
                <el-option
                  v-for="item in allPermission"
                  :key="item.id"
                  :label="item.tag + ': ' + item.summary"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer">
            <el-button @click.native="rolePermissionDialogVisible = false">取消</el-button>
            <el-button type="primary" @click.native="rolePermissionUpdate">确定</el-button>
          </div>
        </el-dialog>
      </div>
    </basic-table-temp>
  </div>
</template>

<script>

export default {
  name: 'Role',
  data () {
    return {
      refName: 'roleForm',
      url: {
        refreshUrl: '/permission/role/list',
        addUrl: '/permission/role',
        editUrl: '/permission/role/',
        searchUrl: '/permission/role/list',
        deleteUrl: '/permission/role/deleteList',
        uploadUrl: '/permission/roles',
        findAllMenuTree: '/permission/menu/allTree',
        findMenuIdByRoleId: '/permission/findMenuIdByRole/',
        changeRoleMenuRelation: '/permission/roleMenuRelation/',
        findAllPermission: '/permission/permission/list',
        findPermissionIdByRoleId: '/permission/findPermissionIdByRole/',
        changeRolePermissionRelation: '/permission/rolePermissionRelation/'
      },
      searchHeaderList: [
        {value: 'name', label: '角色名'},
        {value: 'createUser', label: '创建人'},
        {value: 'modifiedUser', label: '修改人'},
        {value: 'introduction', label: '具体描述'}
      ],
      tableHeaderList: [
        {value: 'name', label: '角色名', width: '180'},
        {value: 'createUser', label: '创建人', width: '220'},
        {value: 'createGmt', label: '创建时间', width: '220'},
        {value: 'modifiedUser', label: '修改人', width: '220'},
        {value: 'modifiedGmt', label: '修改时间', width: '220'},
        {value: 'introduction', label: '具体描述', minWidth: '220'}
      ],
      addForm: {name: '', introduction: '', createGmt: '', modifiedGmt: ''},
      addFormRules: {
        name: [
          {required: true, message: '非空验证示例!', trigger: 'blur'}
        ]
      },
      editForm: {id: null, name: null, introduction: null, createGmt: null, modifiedGmt: null},
      editFormRules: {
        name: [
          {required: true, message: '非空验证示例!', trigger: 'blur'}
        ]
      },
      funcBtn: {
        isShow: true,
        fixed: 'right',
        width: 300,
        buttons: [
          {
            value: 'pagePermission',
            name: '角色访问权限',
            icon: 'el-icon-edit'
          },
          {
            value: 'apiPermission',
            name: '角色功能权限',
            icon: 'el-icon-edit'
          }
        ]
      },
      selectRoleId: null,
      roleMenuDialogVisible: false,
      allMenu: [],
      selectMenu: [],
      updateMenuId: [],
      menuCascadeProps: {multiple: true, label: 'title', value: 'id', emitPath: false},
      rolePermissionDialogVisible: false,
      allPermission: [],
      selectPermission: [],
      jsonList: []
    }
  },
  created () {
  },
  mounted () {
    this.$refs[this.refName].getRecord(this.url.refreshUrl)
    this.$api.http.get(this.url.findAllMenuTree).then(res => {
      this.allMenu = res.data
      this.deleteChildren(this.allMenu)
    })
    this.$api.http.get(this.url.findAllPermission).then(res => {
      this.allPermission = res.data
    })
  },
  methods: {
    async addRecord () {
      await this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.addForm.createGmt = new Date()
          this.$refs[this.refName].createMethod(this.url.addUrl, this.addForm)
        }
      })
    },
    // 点击将基本信息项的某一行信息付给编辑表
    clickRow (row) {
      console.log(this.testName)
      this.editForm = row
    },
    async editRecord () {
      await this.$refs[this.refName].updateMethod(this.url.editUrl + this.editForm.id, this.editForm)
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
      for (var i = 0; i < data[0].length; i++) {
        this.jsonList[i] = {}
        this.jsonList[i].name = data[0][i]['角色名']
        this.jsonList[i].introduction = data[0][i]['角色介绍']
      }
    },
    btnDisabled (value, row, callback) {
      let flag = false
      callback(flag)
    },
    btnClick (value, row) {
      this.selectRoleId = row.id
      if (value === 'pagePermission') {
        this.$api.http.get(this.url.findMenuIdByRoleId + this.selectRoleId)
          .then(res => {
            this.selectMenu = res.data
          })
        this.roleMenuDialogVisible = true
        // console.log(this.$refs[this.refName].tableData[index].id)
      } else if (value === 'apiPermission') {
        this.$api.http.get(this.url.findPermissionIdByRoleId + this.selectRoleId)
          .then(res => {
            this.selectPermission = res.data
          })
        this.rolePermissionDialogVisible = true
      }
    },
    // 更新角色的访问权限
    roleMenuUpdate () {
      console.log(this.selectMenu)
      this.updateMenuId = []
      this.selectMenu.forEach(id => {
        this.getFathersById(id, this.allMenu)
      })
      this.updateMenuId = this.uniqueValue(this.updateMenuId).reverse()
      this.$api.http.postJson(this.url.changeRoleMenuRelation + this.selectRoleId, this.updateMenuId).then(res => {
        this.$message.success('更新成功!')
        this.roleMenuDialogVisible = false
      })
    },
    // 更新角色的功能权限
    rolePermissionUpdate () {
      this.$api.http.postJson(this.url.changeRolePermissionRelation + this.selectRoleId, this.selectPermission).then(res => {
        this.$message.success('更新成功!')
        this.rolePermissionDialogVisible = false
      })
    },
    // 删除空的children节点
    deleteChildren (arr) {
      let child = arr
      for (let i = child.length; i--; i > 0) {
        if (child[i].children) {
          if (child[i].children.length) {
            this.deleteChildren(child[i].children)
          } else {
            delete child[i].children
          }
        }
      }
      return arr
    },
    getFathersById (id, data, prop = 'id') {
      const rev = (data, nodeId) => {
        for (let i = 0, length = data.length; i < length; i++) {
          const node = data[i]
          if (node[prop] === nodeId) {
            this.updateMenuId.unshift(node[prop])
            return true
          } else {
            if (node.children && node.children.length) {
              if (rev(node.children, nodeId)) {
                this.updateMenuId.unshift(node[prop])
                return true
              }
            }
          }
        }
        return false
      }
      rev(data, id)
    },
    // 去掉重复值
    uniqueValue (arr) {
      var hash = []
      for (var i = 0; i < arr.length; i++) {
        if (hash.indexOf(arr[i]) === -1) {
          hash.push(arr[i])
        }
      }
      return hash
    }
  }
}
</script>

<style lang="less">
.menu-container .el-cascader-menu__wrap {
  height: 410px !important;
}
</style>

<style lang="less" scoped>
.menu-container {
  width: 600px;
  float: left;
}
</style>
