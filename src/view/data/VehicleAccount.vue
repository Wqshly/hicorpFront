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
  name: 'VehicleAccount',
  data () {
    return {
      tableSearchList: [],
      tableHeaderList: [
        {value: 'number', label: '车辆编号', minWidth: 200},
        {value: 'vehicleNumber', label: '车牌号', width: 200},
        {value: 'driverName', label: '驾驶员姓名', width: 200},
        {value: 'driverIdNumber', label: '驾驶员身份证号', width: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
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
