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
  name: 'Equipment',
  data () {
    return {
      refName: 'EquipmentForm',
      fileName: 'Equipment.xlsx',
      url: {
        refreshUrl: '/basicCategoryData/list/equipment',
        searchUrl: '/basicCategoryData/list/equipment',
        addUrl: '/basicCategoryData/add',
        editUrl: '/basicCategoryData/',
        deleteUrl: '/basicCategoryData/deleteList',
        uploadUrl: '/basicCategoryData/addList'
      },
      searchList: [
        {value: 'name', label: '设备名称'},
        {value: 'number', label: '设备编号'},
        {value: 'category', label: '所属类别'},
        {value: 'categoryNumber', label: '类别编号'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '最后修改人'},
        {value: 'modifiedGmt', label: '最后修改时间'}
      ],
      tableHeaderList: [
        {value: 'name', label: '设备名称', width: 200},
        {value: 'number', label: '设备编号', width: 200},
        {value: 'category', label: '所属类别', width: 200},
        {value: 'categoryNumber', label: '类别编号', minWidth: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {name: null, number: null, category: null, categoryNumber: null},
      addFormRules: {
        name: [
          {required: true, message: '设备名称不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '设备编号不能为空!', trigger: 'blur'}
        ],
        category: [
          {required: true, message: '所属类别不能为空!', trigger: 'blur'}
        ],
        categoryNumber: [
          {required: true, message: '类别编号不能为空!', trigger: 'blur'}
        ]
      },
      editForm: {},
      editFormRules: {
        name: [
          {required: true, message: '设备名称不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '设备编号不能为空!', trigger: 'blur'}
        ],
        category: [
          {required: true, message: '所属类别不能为空!', trigger: 'blur'}
        ],
        categoryNumber: [
          {required: true, message: '类别编号不能为空!', trigger: 'blur'}
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
