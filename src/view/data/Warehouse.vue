<template>
    <div>
      <basic-table-temp
        :search-list="tableSearchList"
        :table-header-list="tableHeaderList">
        <el-form slot="addForm" :model="addForm" style="overflow: auto" label-width="120px" ref="addForm"
                 :rules="addFormRules">
          <el-form-item label="仓库地址：" prop="address">
            <el-input v-model="addForm.address"></el-input>
          </el-form-item>
          <el-form-item label="仓库名：" prop="name">
            <el-input v-model="addForm.name"></el-input>
          </el-form-item>
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
  name: 'Warehouse',
  data () {
    return {
      tableSearchList: [
        {value: 'address', label: '仓库地址'},
        {value: 'fixed', label: '其他字段'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '最后修改人'},
        {value: 'modifiedGmt', label: '最后修改时间'}
      ],
      tableHeaderList: [
        {value: 'address', label: '仓库地址', width: 160},
        {value: 'fixed', label: '其他字段', minWidth: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {address: null, name: null},
      addFormRules: {
        name: [
          {required: true, message: '仓库名不能为空!', trigger: 'blur'}
        ],
        fixed: [
          {required: true, message: '非空验证示例!', trigger: 'blur'}
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
