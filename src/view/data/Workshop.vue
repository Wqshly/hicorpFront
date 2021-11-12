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
            <el-form-item label="车间编号：" prop="number">
              <el-input v-model="addForm.number"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="车间名称：" prop="name">
              <el-input v-model="addForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-select style="width: 500px;" v-model="addForm.name"
                       @click.native="getDeviceCategoryList()" placeholder="请选择">
              <el-option v-for="(item,index) of deviceCategoryList"
                         :label="item.name "
                         :value="item.name"
                         :key="index"></el-option>
            </el-select>
          </el-col>
          <el-col :span="12">
            <el-form-item label="工厂名称：" prop="name">
              <el-input v-model="addForm.factoryName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="工厂编号：" prop="name">
              <el-input v-model="addForm.factoryNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负责人：" prop="name">
              <el-input v-model="addForm.chargePerson"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-form slot="editForm" :model="editForm" style="overflow: auto" label-width="120px" ref="editForm"
               :rules="editFormRules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="车间编号：" prop="number">
              <el-input v-model="editForm.number"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="车间名称：" prop="name">
              <el-input v-model="editForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="工厂名称：" prop="name">
              <el-input v-model="editForm.factoryName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负责人：" prop="name">
              <el-input v-model="editForm.chargePerson"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </basic-table-temp>
  </div>
</template>

<script>
export default {
  name: 'Workshop',
  data () {
    return {
      refName: 'WorkshopForm',
      fileName: 'Workshop.xlsx',
      url: {
        refreshUrl: '/workshop/list/workshop',
        searchUrl: '/workshop/list/workshop',
        addUrl: '/workshop/add',
        editUrl: '/workshop/',
        deleteUrl: '/workshop/deleteList',
        uploadUrl: '/workshop/addList'
      },
      searchList: [
        {value: 'name', label: '车间名'},
        {value: 'number', label: '车间编号'},
        {value: 'factoryName', label: '所属工厂'},
        {value: 'factoryNumber', label: '工厂编号'},
        {value: 'chargePerson', label: '负责人'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '最后修改人'},
        {value: 'modifiedGmt', label: '最后修改时间'}
      ],
      tableHeaderList: [
        {value: 'name', label: '车间名', width: 200},
        {value: 'number', label: '车间编号', width: 200},
        {value: 'factoryName', label: '所属工厂', width: 200},
        {value: 'factoryNumber', label: '工厂编号', width: 200},
        {value: 'chargePerson', label: '负责人', minWidth: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {number: null, name: null, factoryName: null, factoryNumber: null, chargePerson: null},
      addFormRules: {
        name: [
          {required: true, message: '名称不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '编号不能为空!', trigger: 'blur'}
        ],
        factoryName: [
          {required: true, message: '车间名不能为空!', trigger: 'blur'}
        ],
        factoryNumber: [
          {required: true, message: '车间编号不能为空!', trigger: 'blur'}
        ],
        chargePerson: [
          {required: true, message: '负责人不能为空!', trigger: 'blur'}
        ]
      },
      editForm: {id: null, number: null, name: null, factoryName: null, factoryNumber: null, chargePerson: null},
      editFormRules: {
        name: [
          {required: true, message: '名称不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '编号不能为空!', trigger: 'blur'}
        ],
        factoryName: [
          {required: true, message: '车间名不能为空!', trigger: 'blur'}
        ],
        factoryNumber: [
          {required: true, message: '车间编号不能为空!', trigger: 'blur'}
        ],
        chargePerson: [
          {required: true, message: '负责人不能为空!', trigger: 'blur'}
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
      this.addForm.type = 'workshop'
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
      this.editForm.type = 'workshop'
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
        this.jsonList[i].number = data[0][i]['车间编号']
        this.jsonList[i].name = data[0][i]['车间名称']
      }
    }
    // 批量导入时上面三个方法，一起复制。
  }
}
</script>

<style scoped>

</style>
