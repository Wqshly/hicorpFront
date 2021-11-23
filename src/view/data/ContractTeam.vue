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
              <el-form-item label="承包队名：" prop="name">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="承包队编号：" prop="number">
                <el-input v-model="addForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="负责人：" prop="chargePerson">
                <el-input  v-model="addForm.chargePerson"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系电话：" prop="phoneNumber">
                <el-input oninput="value=value.replace(/[^\d]/g,'')" v-model="addForm.phoneNumber"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-form slot="editForm" :model="editForm" style="overflow: auto" label-width="120px" ref="editForm"
                 :rules="editFormRules">
          <el-row>
            <el-col :span="12">
              <el-form-item label="承包队名：" prop="name">
                <el-input v-model="editForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="承包队编号：" prop="number">
                <el-input v-model="editForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="负责人：" prop="chargePerson">
                <el-input  v-model="editForm.chargePerson"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系电话：" prop="phoneNumber">
                <el-input oninput="value=value.replace(/[^\d]/g,'')" v-model="editForm.phoneNumber"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </basic-table-temp>
    </div>
</template>

<script>

import {validPhone} from '@/commons/validPhone'

export default {
  name: 'ContractTeam',
  data () {
    return {
      refName: 'ContractTeamForm',
      fileName: 'ContractTeam.xlsx',
      url: {
        refreshUrl: '/contractTeam/list/contractTeam',
        searchUrl: '/contractTeam/list/contractTeam',
        addUrl: '/contractTeam/add',
        editUrl: '/contractTeam/',
        deleteUrl: '/contractTeam/deleteList',
        uploadUrl: '/contractTeam/addList'
      },
      searchList: [
        {value: 'name', label: '承包队名'},
        {value: 'number', label: '承包队编号'},
        {value: 'chargePerson', label: '负责人'},
        {value: 'phoneNumber', label: '联系电话'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '最后修改人'},
        {value: 'modifiedGmt', label: '最后修改时间'}
      ],
      tableHeaderList: [
        {value: 'name', label: '承包队名', width: 200},
        {value: 'number', label: '承包队编号', width: 200},
        {value: 'chargePerson', label: '负责人', width: 200},
        {value: 'phoneNumber', label: '联系电话', width: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {number: null, name: null, chargePerson: null, phoneNumber: null},
      addFormRules: {
        name: [
          {required: true, message: '承包队名不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '承包队编号不能为空!', trigger: 'blur'}
        ],
        chargePerson: [
          {required: true, message: '负责人不能为空!', trigger: 'blur'}
        ],
        phoneNumber: [
          {required: true, trigger: 'blur', validator: validPhone}
        ]
      },
      editForm: {id: null, number: null, name: null, chargePerson: null, phoneNumber: null},
      editFormRules: {
        name: [
          {required: true, message: '承包队名不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '承包队编号不能为空!', trigger: 'blur'}
        ],
        chargePerson: [
          {required: true, message: '负责人不能为空!', trigger: 'blur'}
        ],
        phoneNumber: [
          {required: true, trigger: 'blur', validator: validPhone}
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
      this.addForm.type = 'contractTeam'
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
      this.editForm.type = 'contractTeam'
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
        number: null,
        name: null,
        chargePerson: null,
        phoneNumber: null
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
        this.jsonList[i].name = data[0][i][' 承包队名称']
        this.jsonList[i].number = data[0][i][' 承包队编号']
        this.jsonList[i].chargePerson = data[0][i]['负责人']
        this.jsonList[i].phoneNumber = data[0][i]['联系电话']
      }
    }
    // 批量导入时上面三个方法，一起复制。
  }
}
</script>

<style scoped>

</style>
