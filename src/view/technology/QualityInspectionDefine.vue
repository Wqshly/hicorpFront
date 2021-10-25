<template>
    <div>

    </div>
</template>

<script>
export default {
  name: 'QualityInspectionDefine',
  data () {
    return {
      tableSearchList: [],
      tableHeaderList: [
        {value: 'fixed', label: '其他字段', minWidth: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'gmtCreate', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'gmtModified', label: '最后修改时间', width: 200}
      ],
      addForm: {},
      addFormRules: {
        name: [
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
