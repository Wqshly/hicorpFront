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
            <el-col :span="12">
              <el-form-item label="员工姓名：" prop="name">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="员工编号：" prop="number">
                <el-input v-model="addForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="性别：" prop="sex">
                <el-radio-group v-model="addForm.sex">
                  <el-radio :label="1">男</el-radio>
                  <el-radio :label="2">女</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="身份证号：" prop="idCard">
                <el-input v-model="addForm.idCard"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="所属承包队：" prop="teamName">
                <el-input v-model="addForm.teamName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-form slot="editForm" :model="editForm" style="overflow: auto" label-width="120px" ref="editForm"
                 :rules="editFormRules">
          <el-row>
            <el-col :span="12">
              <el-form-item label="员工姓名：" prop="name">
                <el-input v-model="editForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="员工编号：" prop="number">
                <el-input v-model="editForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="性别：" prop="sex">
                <el-radio-group v-model="editForm.sex">
                  <el-radio :label="1">男</el-radio>
                  <el-radio :label="2">女</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="身份证号：" prop="idCard">
                <el-input v-model="editForm.idCard"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="所属承包队：" prop="teamName">
                <el-input v-model="editForm.teamName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </basic-table-temp>
    </div>
</template>

<script>
export default {
  name: 'ExternalStaff',
  data () {
    return {
      refName: 'ExternalStaffForm',
      fileName: 'ExternalStaff.xlsx',
      url: {
        refreshUrl: '/basicCategoryData/list/externalStaff',
        searchUrl: '/basicCategoryData/list/externalStaff',
        addUrl: '/basicCategoryData/add',
        editUrl: '/basicCategoryData/',
        deleteUrl: '/basicCategoryData/deleteList',
        uploadUrl: '/basicCategoryData/addList'
      },
      searchList: [
        {value: 'name', label: '员工姓名'},
        {value: 'number', label: '员工编号'},
        {value: 'sex', label: '性别'},
        {value: 'age', label: '年龄'},
        {value: 'idCard', label: '身份证号'},
        {value: 'teamName', label: '所属承包队'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '最后修改人'},
        {value: 'modifiedGmt', label: '最后修改时间'}
      ],
      tableHeaderList: [
        {value: 'name', label: '员工姓名', width: 200},
        {value: 'number', label: '员工编号', width: 200},
        {value: 'sex', label: '性别', width: 200},
        {value: 'age', label: '年龄', width: 200},
        {value: 'idCard', label: '身份证号', width: 200},
        {value: 'teamName', label: '所属承包队', width: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {},
      addFormRules: {
        name: [
          {required: true, message: '员工名不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '员工编号不能为空!', trigger: 'blur'}
        ],
        sex: [
          {required: true, message: '请选择性别!', trigger: 'blur'}
        ],
        age: [
          {required: true, message: '年龄不能为空!', trigger: 'blur'}
        ],
        idCard: [
          {required: true, message: '身份证号不能为空!', trigger: 'blur'}
        ],
        teamName: [
          {required: true, message: '所属承包队不能为空!', trigger: 'blur'}
        ]
      },
      editForm: {},
      editFormRules: {
        name: [
          {required: true, message: '员工名不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '员工编号不能为空!', trigger: 'blur'}
        ],
        sex: [
          {required: true, message: '请选择性别!', trigger: 'blur'}
        ],
        age: [
          {required: true, message: '年龄不能为空!', trigger: 'blur'}
        ],
        idCard: [
          {required: true, message: '身份证号不能为空!', trigger: 'blur'}
        ],
        teamName: [
          {required: true, message: '所属承包队不能为空!', trigger: 'blur'}
        ]
      }
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
      this.addForm.type = 'department'
      await this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.addForm.createGmt = new Date()
          console.log(this.url.addUrl)
          console.log(this.addForm)
          this.$refs[this.refName].createMethod(this.url.addUrl, this.addForm)
        }
      })
    },
    async editRecord () {
      this.editForm.type = 'department'
      await this.$refs.editForm.validate((valid) => {
        if (valid) {
          this.$refs[this.refName].updateMethod(this.url.editUrl + this.editForm.id, this.editForm)
        }
      })
    },
    dataFormat (data, tableHeader, callback) {
      if (tableHeader === 'sex') {
        let status = data ? '男' : '女'
        callback(status)
      }
    },
    clearNewAndEditTables () {
      this.addForm = {
        number: '', name: ''
      }
      // this.editForm = {
      //   id: null, number: null, name: null
      // }
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
