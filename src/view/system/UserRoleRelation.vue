<template>
  <div>
    <basic-table-temp :ref="refName"
                      :url="url"
                      :search-list="tableHeaderList"
                      :table-header-list="tableHeaderList"
                      :button-show="buttonShow"
                      :func-btn="funcBtn"
                      @click-row="clickRow"
                      @btn-disabled="btnDisabled"
                      @btn-click="btnClick"
                      @data-format="dataFormat">
      <div slot="other-dialog">
        <el-dialog ref="userRoleDialog" title="用户角色分配" :visible.sync="userRoleDialogVisible">
          <el-form style="overflow: auto" label-width="120px" ref="roleMenuRelation">
            <el-form-item label="勾选菜单:">
              <el-select v-model="selectRole" multiple placeholder="请选择">
                <el-option
                  v-for="item in allRole"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer">
            <el-button @click.native="userRoleDialogVisible = false">取消</el-button>
            <el-button type="primary" @click.native="userRoleUpdate">确定</el-button>
          </div>
        </el-dialog>
      </div>
        <el-form slot="addForm" :model="addForm" style="overflow: auto" label-width="120px" ref="addForm"
                 :rules="addFormRules">
          <el-form-item label="添加示例：" prop="name">
            <el-input v-model="addForm.name"></el-input>
          </el-form-item>
        </el-form>
        <el-form slot="editForm" :model="editForm" style="overflow: auto" label-width="120px" ref="editForm"
                 :rules="editFormRules">
          <el-form-item label="修改示例：" prop="name">
            <el-input v-model="editForm.name"></el-input>
          </el-form-item>
        </el-form>
      </basic-table-temp>
  </div>
</template>

<script>

export default {
  name: 'UserRoleRelation',
  data () {
    return {
      refName: 'userRoleForm',
      url: {
        refreshUrl: '/userInfo/list',
        searchUrl: '/userInfo/list',
        findAllRole: '/permission/role/list',
        findRoleIdByUserId: '/permission/findRoleIdByUser/',
        changeUserRoleRelation: '/permission/userRoleRelation/'
      },
      tableHeaderList: [
        {value: 'name', label: '员工姓名', width: '180'},
        {value: 'staffNumber', label: '员工编号', width: '220'},
        {value: 'phoneNumber', label: '电话号码', width: '180'},
        {value: 'sex', label: '性别', width: '120'},
        {value: 'others', label: '添加信息位置', minWidth: '120'}
      ],
      buttonShow: {
        addButton: false,
        editButton: false,
        deleteButton: false,
        refreshButton: true,
        downloadButton: false,
        importButton: false,
        exportButton: false
      },
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
        width: 150,
        buttons: [
          {
            value: 'userRoleRelation',
            name: '角色分配',
            icon: 'el-icon-edit'
          }
        ]
      },
      selectUserId: null,
      selectRole: [],
      allRole: [],
      userRoleDialogVisible: false
    }
  },
  created () {
  },
  mounted () {
    this.$refs[this.refName].getRecord(this.url.refreshUrl)
    this.$api.http.get(this.url.findAllRole).then(res => {
      this.allRole = res.data
    })
  },
  methods: {
    // 点击将基本信息项的某一行信息付给编辑表
    clickRow (row) {
      this.editForm = row
    },
    btnDisabled (value, row, callback) {
      let flag = false
      callback(flag)
    },
    btnClick (value, index) {
      this.selectUserId = this.$refs[this.refName].tableData[index].userId
      if (value === 'userRoleRelation') {
        this.$api.http.get(this.url.findRoleIdByUserId + this.selectUserId)
          .then(res => {
            this.selectRole = res.data
          })
        this.userRoleDialogVisible = true
      }
    },
    userRoleUpdate () {
      this.$api.http.postJson(this.url.changeUserRoleRelation + this.selectUserId, this.selectRole)
        .then(res => {
          this.$message.success('更新成功!')
          this.userRoleDialogVisible = false
        })
        .catch(error => {
          console.log(error)
        })
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
    },
    dataFormat (data, tableHeader, callback) {
      if (tableHeader === 'sex') {
        let a = '未知'
        if (data === true) {
          a = '男'
        } else if (data === false) {
          a = '女'
        }
        callback(a)
      }
      if (tableHeader === 'status') {
        let a = '未知'
        if (data === true) {
          a = '通过'
        } else if (data === false) {
          a = '拒绝'
        }
        callback(a)
      }
    }
  }
}
</script>

<style scoped>

</style>
