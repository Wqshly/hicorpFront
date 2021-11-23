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
              <el-form-item label="类别名称：" prop="name">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="类别编号：" prop="number">
                <el-input v-model="addForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="品牌：" prop="brand">
                <el-input v-model="addForm.brand"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="规格型号：" prop="specificationModel">
                <el-input v-model="addForm.specificationModel"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="（计量）单位：" prop="unit">
                <el-input v-model="addForm.unit"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注：" prop="remarks">
                <el-input v-model="addForm.remarks"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-form slot="editForm" :model="editForm" style="overflow: auto" label-width="120px" ref="editForm"
                 :rules="editFormRules">
          <el-row>
            <el-col :span="12">
              <el-form-item label="类别名称：" prop="name">
                <el-input v-model="editForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="类别编号：" prop="name">
                <el-input v-model="editForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="品牌：" prop="brand">
                <el-input v-model="editForm.brand"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="规格型号：" prop="specificationModel">
                <el-input v-model="editForm.specificationModel"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="（计量）单位：" prop="unit">
                <el-input v-model="editForm.unit"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注：" prop="remarks">
                <el-input v-model="editForm.remarks"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </basic-table-temp>
    </div>
</template>

<script>
export default {
  name: 'EquipmentCategory',
  data () {
    return {
      refName: 'EquipmentCategoryForm',
      fileName: 'EquipmentCategory.xlsx',
      url: {
        refreshUrl: '/deviceCategory/list/equipmentCategory',
        searchUrl: '/deviceCategory/list/equipmentCategory',
        addUrl: '/deviceCategory/add',
        editUrl: '/deviceCategory/',
        deleteUrl: '/deviceCategory/deleteList',
        uploadUrl: '/deviceCategory/addList'
      },
      searchList: [
        {value: 'name', label: '类别名称'},
        {value: 'number', label: '类别编号'},
        {value: 'brand', label: '品牌'},
        {value: 'specificationModel', label: '规格型号'},
        {value: 'unit', label: '(计量)单位'},
        {value: 'remarks', label: '备注'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '最后修改人'},
        {value: 'modifiedGmt', label: '最后修改时间'}
      ],
      tableHeaderList: [
        {value: 'name', label: '类别名称', width: 200},
        {value: 'number', label: '类别编号', width: 200},
        {value: 'brand', label: '品牌', width: 200},
        {value: 'specificationModel', label: '规格型号', minwidth: 200},
        {value: 'unit', label: '（计量）单位', width: 200},
        {value: 'remarks', label: '备注', width: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 220},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {name: null, number: null, brand: null, specificationModel: null, unit: null, remarkss: null},
      addFormRules: {
        name: [
          {required: true, message: '类别名称不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '类别编号不能为空!', trigger: 'blur'}
        ],
        brand: [
          {required: true, message: '品牌不能为空!', trigger: 'blur'}
        ],
        specificationModel: [
          {required: true, message: '规格型号不能为空!', trigger: 'blur'}
        ],
        unit: [
          {required: true, message: '（计量）单位不能为空!', trigger: 'blur'}
        ],
        remarkss: [
          {required: true, message: '备注不能为空!', trigger: 'blur'}
        ]
      },
      editForm: {id: null, name: null, number: null, brand: null, specificationModel: null, unit: null, remarkss: null},
      editFormRules: {
        name: [
          {required: true, message: '类别名称不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '类别编号不能为空!', trigger: 'blur'}
        ],
        brand: [
          {required: true, message: '品牌不能为空!', trigger: 'blur'}
        ],
        specificationModel: [
          {required: true, message: '规格型号不能为空!', trigger: 'blur'}
        ],
        unit: [
          {required: true, message: '（计量）单位不能为空!', trigger: 'blur'}
        ],
        remarks: [
          {required: true, message: '备注不能为空!', trigger: 'blur'}
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
      this.addForm.type = 'equipmentCategory'
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
      this.editForm.type = 'equipmentCategory'
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
        remarks: null
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
        this.jsonList[i].name = data[0][i]['类别名称']
        this.jsonList[i].number = data[0][i]['类别编号']
        this.jsonList[i].brand = data[0][i]['品牌']
        this.jsonList[i].specificationModel = data[0][i]['规格型号']
        this.jsonList[i].unit = data[0][i]['（计量）单位']
        this.jsonList[i].remarks = data[0][i]['备注']
      }
    }
    // 批量导入时上面三个方法，一起复制。
  }
}
</script>

<style scoped>

</style>
