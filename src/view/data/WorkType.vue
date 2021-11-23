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
  name: 'WorkType',
  data () {
    return {
      refName: 'WorkTypeForm',
      fileName: 'WorkType.xlsx',
      url: {
        refreshUrl: '/basicCategoryData/list/workType',
        searchUrl: '/basicCategoryData/list/workType',
        addUrl: '/basicCategoryData/add',
        editUrl: '/basicCategoryData/',
        deleteUrl: '/basicCategoryData/deleteList',
        uploadUrl: '/basicCategoryData/addList'
      },
      searchList: [
        {value: 'name', label: '工种名'},
        {value: 'required', label: '工种要求'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '最后修改人'},
        {value: 'modifiedGmt', label: '最后修改时间'}
      ],
      tableHeaderList: [
        {value: 'name', label: '工种名', width: 200},
        {value: 'required', label: '工种要求', width: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {name: null, required: null},
      addFormRules: {
        name: [
          {required: true, message: '工种名不能为空!', trigger: 'blur'}
        ],
        required: [
          {required: true, message: '工种要求不能为空!', trigger: 'blur'}
        ]
      },
      editForm: {name: null, required: null},
      editFormRules: {
        name: [
          {required: true, message: '工种名不能为空!', trigger: 'blur'}
        ],
        required: [
          {required: true, message: '工种要求不能为空!', trigger: 'blur'}
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
