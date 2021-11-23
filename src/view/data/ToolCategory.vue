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
              <el-form-item label="类别编号：" prop="number">
                <el-input v-model="addForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="工具名称：" prop="name">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="简介：" prop="description">
                <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}" v-model="addForm.description"></el-input>
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
          <el-form-item label="类别编号：" prop="number">
            <el-input v-model="editForm.number"></el-input>
          </el-form-item>
          <el-form-item label="工具名称：" prop="name">
            <el-input v-model="editForm.name"></el-input>
          </el-form-item>
          <el-form-item label="简介：" prop="description">
            <el-input v-model="editForm.description"></el-input>
          </el-form-item>
          <el-form-item label="备注：" prop="remark">
            <el-input v-model="editForm.remark"></el-input>
          </el-form-item>
        </el-form>
      </basic-table-temp>
    </div>
</template>

<script>
export default {
  name: 'ToolCategory',
  data () {
    return {
      refName: 'ToolCategoryForm',
      fileName: 'ToolCategory.xlsx',
      url: {
        refreshUrl: '/basicCategoryData/list/toolCategory',
        searchUrl: '/basicCategoryData/list/toolCategory',
        addUrl: '/basicCategoryData/add',
        editUrl: '/basicCategoryData/',
        deleteUrl: '/basicCategoryData/deleteList',
        uploadUrl: '/basicCategoryData/addList'
      },
      searchList: [
        {value: 'number', label: '类别编号'},
        {value: 'name', label: '工具名称'},
        {value: 'description', label: '简介'},
        {value: 'remark', label: '备注'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '修改人'},
        {value: 'modifiedGmt', label: '修改时间'}
      ],
      tableHeaderList: [
        {value: 'name', label: '工具名称', width: 200},
        {value: 'number', label: '类别编号', width: 200},
        {value: 'description', label: '简介', width: 200},
        {value: 'remark', label: '备注', minWidth: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {number: null, name: null, description: null, remark: null},
      addFormRules: {
        name: [
          {required: true, message: '名称不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '类别编号不能为空!', trigger: 'blur'}
        ],
        description: [
          {required: true, message: '简介不能为空!', trigger: 'blur'}
        ],
        remark: [
          {required: true, message: '备注不能为空!', trigger: 'blur'}
        ]
      },
      editForm: {id: null, number: null, name: null, description: null, remark: null},
      editFormRules: {
        name: [
          {required: true, message: '物料名称不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '类别编号不能为空!', trigger: 'blur'}
        ],
        description: [
          {required: true, message: '简介不能为空!', trigger: 'blur'}
        ],
        remark: [
          {required: true, message: '备注不能为空!', trigger: 'blur'}
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
      this.addForm.type = 'toolCategory'
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
      this.editForm.type = 'toolCategory'
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
        this.jsonList[i].name = data[0][i]['工具名称']
        this.jsonList[i].number = data[0][i]['类别编号']
        this.jsonList[i].description = data[0][i]['简介']
        this.jsonList[i].remark = data[0][i]['备注']
      }
    }
    // 批量导入时上面三个方法，一起复制。
  }
}
</script>

<style scoped>

</style>
