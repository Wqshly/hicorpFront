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
              <el-form-item label="客户编码：" prop="number">
                <el-input v-model="addForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="客户名称：" prop="name">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="全称：" prop="fullName">
                <el-input v-model="addForm.fullName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系人：" prop="contactPerson">
                <el-input v-model="addForm.contactPerson"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="邮箱：" prop="email">
                <el-input v-model="addForm.email"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="地址：" prop="address">
                <el-input v-model="addForm.address"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系电话：" prop="phoneNumber">
                <el-input oninput="value=value.replace(/[^\d]/g,'')" v-model="addForm.phoneNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注：" prop="remark">
                <el-input v-model="addForm.remark"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-form slot="editForm" :model="editForm" style="overflow: auto" label-width="120px" ref="editForm"
                 :rules="editFormRules">
          <el-row>
            <el-col :span="12">
              <el-form-item label="客户编码：" prop="number">
                <el-input v-model="editForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="客户名称：" prop="name">
                <el-input v-model="editForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="全称：" prop="fullName">
                <el-input v-model="editForm.fullName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系人：" prop="contactPerson">
                <el-input v-model="editForm.contactPerson"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="邮箱：" prop="email">
                <el-input v-model="editForm.email"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="地址：" prop="address">
                <el-input v-model="editForm.address"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系电话：" prop="phoneNumber">
                <el-input oninput="value=value.replace(/[^\d]/g,'')" v-model="editForm.phoneNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注：" prop="remark">
                <el-input v-model="editForm.remark"></el-input>
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
  name: 'CustomerMaintenance',
  data () {
    return {
      refName: 'CustomerMaintenanceForm',
      fileName: 'CustomerMaintenance.xlsx',
      url: {
        refreshUrl: '/customer/list/customerMaintenance',
        searchUrl: '/customer/list/customerMaintenance',
        addUrl: '/customer/add',
        editUrl: '/customer/',
        deleteUrl: '/customer/deleteList',
        uploadUrl: '/customer/addList'
      },
      searchList: [
        {value: 'name', label: '客户姓名'},
        {value: 'number', label: '类别编号'},
        {value: 'fullName', label: '全称'},
        {value: 'contactPerson', label: '联系人'},
        {value: 'email', label: '邮箱'},
        {value: 'phoneNumber', label: '手机号'},
        {value: 'address', label: '地址'},
        {value: 'remark', label: '备注'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '最后修改人'},
        {value: 'modifiedGmt', label: '最后修改时间'}
      ],
      tableHeaderList: [
        {value: 'name', label: '客户名称', width: 200},
        {value: 'number', label: '类别编号', width: 200},
        {value: 'fullName', label: '全称', width: 200},
        {value: 'contactPerson', label: '联系人', minWidth: 200},
        {value: 'email', label: '邮箱', minWidth: 200},
        {value: 'phoneNumber', label: '手机号', minWidth: 200},
        {value: 'address', label: '地址', minWidth: 200},
        {value: 'remark', label: '备注', minWidth: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {number: null, name: null, fullName: null, contactPerson: null, email: null, remark: null},
      addFormRules: {
        name: [
          {required: true, message: '名称不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '类别编号不能为空!', trigger: 'blur'}
        ],
        fullName: [
          {required: true, message: '全称不能为空!', trigger: 'blur'}
        ],
        contactPerson: [
          {required: true, message: '联系人不能为空!', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '邮箱不能为空!', trigger: 'blur'}
        ],
        phoneNumber: [
          {required: true, trigger: 'blur', validator: validPhone}
        ],
        address: [
          {required: true, message: '地址不能为空!', trigger: 'blur'}
        ]
      },
      editForm: {id: null, number: null, name: null, fullName: null, contactPerson: null, email: null, remark: null},
      editFormRules: {
        name: [
          {required: true, message: '名称不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '类别编号不能为空!', trigger: 'blur'}
        ],
        fullName: [
          {required: true, message: '全称不能为空!', trigger: 'blur'}
        ],
        contactPerson: [
          {required: true, message: '联系人不能为空!', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '邮箱不能为空!', trigger: 'blur'}
        ],
        phoneNumber: [
          {required: true, trigger: 'blur', validator: validPhone}
        ],
        address: [
          {required: true, message: '地址不能为空!', trigger: 'blur'}
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
      this.addForm.type = 'customerMaintenance'
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
      this.editForm.type = 'customerMaintenance'
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
        description: null,
        remark: null
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
