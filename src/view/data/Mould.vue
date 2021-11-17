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
              <el-form-item label="基础编码：" prop="baseNumber">
                <el-input v-model="addForm.baseNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="模具编码：" prop="number">
                <el-input v-model="addForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="类别编号：" prop="typeNumber">
                <el-input v-model="addForm.typeNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="类别名称：" prop="typeName">
                <el-input v-model="addForm.typeName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="RFID标签识别号：" prop="rfidNumber">
                <el-input v-model="addForm.rfidNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="生产厂家：" prop="manufacturer">
                <el-input v-model="addForm.manufacturer"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="规格、尺寸：" prop="specificationSize">
                <el-input v-model="addForm.specificationSize"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="单位(规格)：" prop="unit">
                <el-input v-model="addForm.unit"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="累计使用次数：" prop="cumulativeUsageTimes">
                <el-input v-model="addForm.cumulativeUsageTimes"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="入厂时间：" prop="incomingTime">
                <el-date-picker
                  v-model="addForm.incomingTime"
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
              <el-form-item label="基础编码：" prop="baseNumber">
                <el-input v-model="editForm.baseNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="模具编码：" prop="number">
                <el-input v-model="editForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="类别编号：" prop="typeNumber">
                <el-input v-model="editForm.typeNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="类别名称：" prop="typeName">
                <el-input v-model="editForm.typeName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="RFID标签识别号：" prop="rfidNumber">
                <el-input v-model="editForm.rfidNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="生产厂家：" prop="manufacturer">
                <el-input v-model="editForm.manufacturer"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="规格、尺寸：" prop="specificationSize">
                <el-input v-model="editForm.specificationSize"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="单位(规格)：" prop="unit">
                <el-input v-model="editForm.unit"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="累计使用次数：" prop="cumulativeUsageTimes">
                <el-input v-model="editForm.cumulativeUsageTimes"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="入厂时间：" prop="incomingTime">
                <el-date-picker
                  v-model="editForm.incomingTime"
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
  name: 'Mould',
  data () {
    return {
      refName: 'MouldForm',
      fileName: 'Mould.xlsx',
      url: {
        refreshUrl: '/mould/list/mould',
        searchUrl: '/mould/list/mould',
        addUrl: '/mould/add',
        editUrl: '/mould/',
        deleteUrl: '/mould/deleteList',
        uploadUrl: '/mould/addList'
      },
      searchList: [
        {value: 'baseNumber', label: '基础编码'},
        {value: 'number', label: '模具编号'},
        {value: 'typeNumber', label: '模具类别编号'},
        {value: 'typeName', label: '模具类别名称'},
        {value: 'rfidNumber', label: 'RFID标签识别号'},
        {value: 'manufacturer', label: '生产厂家'},
        {value: 'specificationSize', label: '规格、尺寸'},
        {value: 'unit', label: '单位(规格)'},
        {value: 'cumulativeUsageTimes', label: '累计使用次数'},
        {value: 'incomingTime', label: '入厂时间'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '修改人'},
        {value: 'modifiedGmt', label: '修改时间'}
      ],
      tableHeaderList: [
        {value: 'baseNumber', label: '基础编码', width: 200},
        {value: 'number', label: '模具编号', width: 200},
        {value: 'typeNumber', label: '模具类别编号', width: 200},
        {value: 'typeName', label: '模具类别名称', width: 200},
        {value: 'rfidNumber', label: 'RFID标签识别号', width: 200},
        {value: 'manufacturer', label: '生产厂家', width: 200},
        {value: 'specificationSize', label: '规格、尺寸', width: 200},
        {value: 'unit', label: '单位(规格)', width: 200},
        {value: 'cumulativeUsageTimes', label: '累计使用次数', width: 200},
        {value: 'incomingTime', label: '入厂时间', width: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {baseNumber: null, number: null, typeNumber: null, typeName: null, rfidNumber: null, manufacturer: null, specificationSize: null, unit: null, cumulativeUsageTimes: null, incomingTime: null},
      addFormRules: {
        baseNumber: [
          {required: true, message: '基础编码不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '模具编号不能为空!', trigger: 'blur'}
        ],
        typeNumber: [
          {required: true, message: '模具类别编号不能为空!', trigger: 'blur'}
        ],
        typeName: [
          {required: true, message: '模具类别名称不能为空!', trigger: 'blur'}
        ],
        rfidNumber: [
          {required: true, message: 'RFID标签识别号不能为空!', trigger: 'blur'}
        ],
        manufacturer: [
          {required: true, message: '生产厂家不能为空!', trigger: 'blur'}
        ],
        specificationSize: [
          {required: true, message: '规格、尺寸不能为空!', trigger: 'blur'}
        ],
        unit: [
          {required: true, message: '单位(规格)不能为空!', trigger: 'blur'}
        ],
        cumulativeUsageTimes: [
          {required: true, message: '累计使用次数不能为空!', trigger: 'blur'}
        ],
        incomingTime: [
          {required: true, message: '入厂时间不能为空!', trigger: 'blur'}
        ]
      },
      editForm: {id: null, baseNumber: null, number: null, typeNumber: null, typeName: null, rfidNumber: null, manufacturer: null, specificationSize: null, unit: null, cumulativeUsageTimes: null, incomingTime: null},
      editFormRules: {
        baseNumber: [
          {required: true, message: '基础编码不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '模具编号不能为空!', trigger: 'blur'}
        ],
        typeNumber: [
          {required: true, message: '模具类别编号不能为空!', trigger: 'blur'}
        ],
        typeName: [
          {required: true, message: '模具类别名称不能为空!', trigger: 'blur'}
        ],
        rfidNumber: [
          {required: true, message: 'RFID标签识别号不能为空!', trigger: 'blur'}
        ],
        manufacturer: [
          {required: true, message: '生产厂家不能为空!', trigger: 'blur'}
        ],
        specificationSize: [
          {required: true, message: '规格、尺寸不能为空!', trigger: 'blur'}
        ],
        unit: [
          {required: true, message: '单位(规格)不能为空!', trigger: 'blur'}
        ],
        cumulativeUsageTimes: [
          {required: true, message: '累计使用次数不能为空!', trigger: 'blur'}
        ],
        incomingTime: [
          {required: true, message: '入厂时间不能为空!', trigger: 'blur'}
        ]
      }
    }
  },
  mounted () {
    this.$refs[this.refName].getRecord(this.url.refreshUrl)
  },
  methods: {
    // 点击将基本信息项的某一行信息付给编辑表
    clickRow (row) {
      this.editForm = row
    },
    async addRecord () {
      this.addForm.type = 'mould'
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
      this.editForm.type = 'mould'
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
        category: null,
        typeNumber: null
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
