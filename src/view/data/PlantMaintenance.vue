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
                      @cancel-export-data="cancelExportData" @clear-new-and-edit-tables="clearNewAndEditTables"
    >
      <el-form slot="addForm" :model="addForm" style="overflow: auto" label-width="120px" ref="addForm"
               :rules="addFormRules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="工厂编号：" prop="number">
              <el-input v-model="addForm.number"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="工厂名称：" prop="name">
              <el-input v-model="addForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="地址：" prop="address">
              <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}" v-model="addForm.address"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="法人：" prop="legalPerson">
              <el-input v-model="addForm.legalPerson"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="邮编：" prop="zipCode">
              <el-input oninput="value=value.replace(/[^\d]/g,'')" v-model="addForm.zipCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="电话：" prop="phoneNumber">
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
        <el-form-item label="工厂编号：" prop="number">
          <el-input v-model="editForm.number"></el-input>
        </el-form-item>
        <el-form-item label="工厂名称：" prop="name">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="地址：" prop="address">
          <el-input v-model="editForm.address"></el-input>
        </el-form-item>
        <el-form-item label="法人：" prop="legalPerson">
          <el-input v-model="editForm.legalPerson"></el-input>
        </el-form-item>
        <el-form-item label="邮编：" prop="zipCode">
          <el-input v-model="editForm.zipCode"></el-input>
        </el-form-item>
        <el-form-item label="电话：" prop="phoneNumber">
          <el-input v-model="editForm.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="备注：" prop="remark">
          <el-input v-model="editForm.remark"></el-input>
        </el-form-item>
      </el-form>
    </basic-table-temp>
  </div>
</template>

<script>

import {validPhone} from '@/commons/validPhone'

export default {
  name: 'PlantMaintenance',
  data () {
    return {
      refName: 'PlantMaintenanceForm',
      fileName: 'PlantMaintenance.xlsx',
      url: {
        refreshUrl: '/factory/list/plantMaintenance',
        searchUrl: '/factory/list/plantMaintenance',
        addUrl: '/factory/add',
        editUrl: '/factory/',
        deleteUrl: '/factory/deleteList',
        uploadUrl: '/factory/addList'
      },
      searchList: [
        {value: 'name', label: '工厂名'},
        {value: 'number', label: '工厂编号'},
        {value: 'address', label: '工厂地址'},
        {value: 'legalPerson', label: '法人'},
        {value: 'zipCode', label: '邮编'},
        {value: 'phoneNumber', label: '电话'},
        {value: 'remark', label: '备注'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '最后修改人'},
        {value: 'modifiedGmt', label: '最后修改时间'}
      ],
      tableHeaderList: [
        {value: 'name', label: '工厂名', minWidth: 200},
        {value: 'number', label: '工厂编号', width: 200},
        {value: 'address', label: '工厂地址', width: 200},
        {value: 'legalPerson', label: '法人', width: 200},
        {value: 'zipCode', label: '邮编', width: 200},
        {value: 'phoneNumber', label: '电话', width: 200},
        {value: 'remark', label: '备注', width: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {number: null, name: null, address: null, legalPerson: null, zipCode: null, remark: null},
      addFormRules: {
        name: [
          {required: true, message: '名称不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '类别编号不能为空!', trigger: 'blur'}
        ],
        address: [
          {required: true, message: '工厂地址不能为空!', trigger: 'blur'}
        ],
        legalPerson: [
          {required: true, message: '法人不能为空!', trigger: 'blur'}
        ],
        zipCode: [
          {required: true, message: '邮编不能为空!', trigger: 'blur'},
          {min: 6, max: 6, message: '邮编不正确!', trigger: 'blur'}
        ],
        phoneNumber: [
          {required: true, trigger: 'blur', validator: validPhone}
        ]
      },
      editForm: {id: null, number: null, name: null, address: null, legalPerson: null, zipCode: null, remark: null},
      editFormRules: {
        name: [
          {required: true, message: '名称不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '类别编号不能为空!', trigger: 'blur'}
        ],
        address: [
          {required: true, message: '工厂地址不能为空!', trigger: 'blur'}
        ],
        legalPerson: [
          {required: true, message: '法人不能为空!', trigger: 'blur'}
        ],
        zipCode: [
          {required: true, message: '邮编不能为空!', min: 6, trigger: 'blur'}
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
      this.addForm.type = 'plantMaintenance'
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
      this.editForm.type = 'plantMaintenance'
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
        address: null,
        legalPerson: null,
        zipCode: null,
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
        this.jsonList[i].number = data[0][i]['工厂编号']
        this.jsonList[i].name = data[0][i]['工厂名称']
      }
    }
    // 批量导入时上面三个方法，一起复制。
  }
}
</script>

<style scoped>

</style>
