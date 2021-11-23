<template>
    <div>
      <basic-table-temp
        :search-list="tableSearchList"
        :table-header-list="tableHeaderList">
        <el-form slot="addForm" :model="addForm" style="overflow: auto" label-width="120px" ref="addForm"
                 :rules="addFormRules">
          <el-row>
            <el-col :span="12">
              <el-form-item label="合同编号：" prop="number">
                <el-input v-model="addForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同名称：" prop="name">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="客户编号：" prop="customerNumber">
                <el-input  v-model="addForm.customerNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="客户名称：" prop="customerName">
                <el-input  v-model="addForm.customerNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="签约日期：" prop="customerName">
                <el-date-picker
                  v-model="editForm.wordYear"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同开始日期：" prop="customerName">
                <el-date-picker
                  v-model="editForm.wordYear"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="合同结束日期：" prop="customerName">
                <el-date-picker
                  v-model="editForm.wordYear"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="状态编码：" prop="statusCode">
                <el-input  v-model="addForm.statusCode"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="状态：" prop="status">
                <el-input  v-model="addForm.status"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同总金额：" prop="totalAmount">
                <el-input  v-model="addForm.status"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同进度：" prop="progress">
                <el-input  v-model="addForm.status"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-form slot="editForm" :model="editForm" style="overflow: auto" label-width="120px" ref="editForm"
                 :rules="editFormRules">
          <el-row>
            <el-col :span="12">
              <el-form-item label="合同编号：" prop="number">
                <el-input v-model="addForm.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同名称：" prop="name">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="客户编号：" prop="customerNumber">
                <el-input  v-model="addForm.customerNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="客户名称：" prop="customerName">
                <el-input  v-model="addForm.customerNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="签约日期：" prop="customerName">
                <el-date-picker
                  v-model="editForm.wordYear"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同开始日期：" prop="customerName">
                <el-date-picker
                  v-model="editForm.wordYear"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="合同结束日期：" prop="customerName">
                <el-date-picker
                  v-model="editForm.wordYear"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="状态编码：" prop="statusCode">
                <el-input  v-model="addForm.statusCode"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="状态：" prop="status">
                <el-input  v-model="addForm.status"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同总金额：" prop="totalAmount">
                <el-input  v-model="addForm.status"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同进度：" prop="progress">
                <el-input  v-model="addForm.status"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </basic-table-temp>
    </div>
</template>

<script>
export default {
  name: 'ContractMaintenance',
  data () {
    return {
      tableSearchList: [],
      tableHeaderList: [
        {value: 'fixed', label: '其他字段', minWidth: 200},
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
