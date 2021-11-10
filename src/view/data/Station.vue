<template>
    <div>
      <basic-table-temp
        :search-list="tableSearchList"
        :table-header-list="tableHeaderList">
        <el-form slot="addForm" :model="addForm" style="overflow: auto" label-width="120px" ref="addForm"
                 :rules="addFormRules">
          <el-form-item label="添加示例：" prop="name">
            <el-input v-model="addForm.name"></el-input>
          </el-form-item>
        </el-form>
        <el-form slot="editForm" :model="editForm" style="overflow: auto" label-width="120px" ref="editForm"
                 :rules="editFormRules">
          <el-form-item label="修改示例：" prop="name">
            <el-input v-model="editForm.name"></el-input>
          </el-form-item>
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
  }
}
</script>

<style scoped>

</style>
