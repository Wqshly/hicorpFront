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
              <el-form-item label="设备编号：" prop="number">
                <el-input v-model="addForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="设备名称：" prop="name">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="存放地点：" prop="address">
                <el-input v-model="addForm.address"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="状态：" prop="status">
                <el-input v-model="addForm.status"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="开始使用时间" prop="useBegin">
                <el-date-picker
                  v-model="addForm.useBegin"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-form slot="editForm" :model="editForm" style="overflow: auto" label-width="120px" ref="editForm"
                 :rules="editFormRules">
          <el-row>
            <el-col :span="12">
              <el-form-item label="设备编号：" prop="number">
                <el-input v-model="editForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="设备名称：" prop="name">
                <el-input v-model="editForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="存放地点：" prop="address">
                <el-input v-model="editForm.address"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="状态：" prop="status">
                <el-input v-model="editForm.status"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="开始使用时间" prop="useBegin">
                <el-date-picker
                  v-model="editForm.useBegin"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </basic-table-temp>
    </div>
</template>

<script>
export default {
  name: 'Equipment',
  data () {
    return {
      refName: 'EquipmentForm',
      fileName: 'Equipment.xlsx',
      url: {
        refreshUrl: '/device/list/equipment',
        searchUrl: '/device/list/equipment',
        addUrl: '/device/add',
        editUrl: '/device/',
        deleteUrl: '/device/deleteList',
        uploadUrl: '/device/addList'
      },
      searchList: [
        {value: 'number', label: '设备编号'},
        {value: 'name', label: '设备名称'},
        {value: 'address', label: '存放点位'},
        {value: 'status', label: '状态'},
        {value: 'useBegin', label: '开始使用时间'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '最后修改人'},
        {value: 'modifiedGmt', label: '最后修改时间'}
      ],
      tableHeaderList: [
        {value: 'number', label: '设备编号', width: 200},
        {value: 'name', label: '设备名称', width: 200},
        {value: 'address', label: '存放点位', width: 200},
        {value: 'status', label: '状态', minWidth: 200},
        {value: 'useBegin', label: '开始使用时间', minWidth: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {number: null, name: null, address: null, status: null, useBegin: null},
      addFormRules: {
        number: [
          {required: true, message: '设备编号不能为空!', trigger: 'blur'}
        ],
        name: [
          {required: true, message: '设备名称不能为空!', trigger: 'blur'}
        ],
        address: [
          {required: true, message: '存放点位不能为空!', trigger: 'blur'}
        ],
        status: [
          {required: true, message: '状态不能为空!', trigger: 'blur'}
        ],
        useBegin: [
          {required: true, message: '开始使用时间不能为空!', trigger: 'blur'}
        ]
      },
      editForm: {id: null, number: null, name: null, address: null, status: null, useBegin: null},
      editFormRules: {
        number: [
          {required: true, message: '设备编号不能为空!', trigger: 'blur'}
        ],
        name: [
          {required: true, message: '设备名称不能为空!', trigger: 'blur'}
        ],
        address: [
          {required: true, message: '存放点位不能为空!', trigger: 'blur'}
        ],
        status: [
          {required: true, message: '状态不能为空!', trigger: 'blur'}
        ],
        useBegin: [
          {required: true, message: '开始使用时间不能为空!', trigger: 'blur'}
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
      this.addForm.type = 'equipment'
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
      this.editForm.type = 'equipment'
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
        status: null,
        useBegin: null
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
