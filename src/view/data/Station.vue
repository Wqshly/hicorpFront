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
              <el-form-item label="工位名称：" prop="name">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="所属类别：" prop="name">
                <el-input v-model="addForm.category"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="类别编号：" prop="number">
                <el-input v-model="addForm.categoryNumber"></el-input>
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
              <el-form-item label="工位名称：" prop="name">
                <el-input v-model="editForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="所属类别：" prop="name">
                <el-input v-model="editForm.category"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="类别编号：" prop="number">
                <el-input v-model="editForm.categoryNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注：" prop="remark">
                <el-input v-model="editFor.remark"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </basic-table-temp>
    </div>
</template>

<script>
export default {
  name: 'Station',
  data () {
    return {
      refName: 'StationForm',
      fileName: 'Station.xlsx',
      url: {
        refreshUrl: '/basicCategoryData/list/station',
        searchUrl: '/basicCategoryData/list/station',
        addUrl: '/basicCategoryData/add',
        editUrl: '/basicCategoryData/',
        deleteUrl: '/basicCategoryData/deleteList',
        uploadUrl: '/basicCategoryData/addList'
      },
      searchList: [
        {value: 'name', label: '工位名称'},
        {value: 'category', label: '所属类别'},
        {value: 'categoryNumber', label: '类别编号'},
        {value: 'remark', label: '备注'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '修改人'},
        {value: 'modifiedGmt', label: '修改时间'}
      ],
      tableHeaderList: [
        {value: 'name', label: '工位名称', minWidth: 200},
        {value: 'category', label: '所属类别', minWidth: 200},
        {value: 'categoryNumber', label: '类别编号', minWidth: 200},
        {value: 'remark', label: '备注', width: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {name: null, category: null, categoryNumber: null, remark: null},
      addFormRules: {
        name: [
          {required: true, message: '工位名称不能为空!', trigger: 'blur'}
        ],
        category: [
          {required: true, message: '所属类别不能为空!', trigger: 'blur'}
        ],
        categoryNumber: [
          {required: true, message: '类别编号不能为空!', trigger: 'blur'}
        ],
        remark: [
          {required: true, message: '备注不能为空!', trigger: 'blur'}
        ]
      },
      editForm: {},
      editFormRules: {
        name: [
          {required: true, message: '非空验证示例!', trigger: 'blur'}
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
      this.addForm.type = 'station'
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
      this.editForm.type = 'station'
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
        this.jsonList[i].name = data[0][i]['部门名称']
        this.jsonList[i].number = data[0][i]['部门编号']
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
