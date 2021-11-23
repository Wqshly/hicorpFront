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
            <el-col :span="12">
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
                <el-input  v-model="addForm.customerNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同结束日期：" prop="customerName">
                <el-input  v-model="addForm.customerNumber"></el-input>
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
              <el-form-item label="合同总金额：" prop="status">
                <el-input  v-model="addForm.status"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同进度：" prop="status">
                <el-input  v-model="addForm.status"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
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
  name: 'ContractExecution',
  data () {
    return {
      refName: 'ContractExecutionForm',
      fileName: 'ContractExecution.xlsx',
      url: {
        refreshUrl: '/basicCategoryData/list/contractExecution',
        searchUrl: '/basicCategoryData/list/contractExecution',
        addUrl: '/basicCategoryData/add',
        editUrl: '/basicCategoryData/',
        deleteUrl: '/basicCategoryData/deleteList',
        uploadUrl: '/basicCategoryData/addList'
      },
      searchList: [
        {value: 'number', label: '合同编号'},
        {value: 'name', label: '合同名称'},
        {value: 'customerNumber', label: '客户编号'},
        {value: 'customerName', label: '客户名称(简称)'},
        {value: 'contractDate', label: '签约日期'},
        {value: 'startDate', label: '合同开始日期'},
        {value: 'endingDate', label: '合同结束日期'},
        {value: 'statusCode', label: '状态编码'},
        {value: 'status', label: '状态'},
        {value: 'totalAmount', label: '合同总金额'},
        {value: 'progress', label: '合同进度'},
        {value: 'createUser', label: '创建人'},
        {value: 'fixed', label: '其他字段'},
        {value: 'createUser', label: '创建人'},
        {value: 'createGmt', label: '创建时间'},
        {value: 'modifiedUser', label: '最后修改人'},
        {value: 'modifiedGmt', label: '最后修改时间'}
      ],
      tableHeaderList: [
        {value: 'number', label: '合同编号', minWidth: 200},
        {value: 'name', label: '合同名称', minWidth: 200},
        {value: 'customerNumber', label: '客户编号', width: 200},
        {value: 'customerName', label: '客户名称(简称)', minWidth: 200},
        {value: 'contractDate', label: '签约日期', minWidth: 200},
        {value: 'startDate', label: '合同开始日期', minWidth: 200},
        {value: 'endingDate', label: '合同结束日期', minWidth: 200},
        {value: 'statusCode', label: '状态编码', minWidth: 200},
        {value: 'status', label: '状态', minWidth: 200},
        {value: 'totalAmount', label: '合同总金额', minWidth: 200},
        {value: 'progress', label: '合同进度', minWidth: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'fixed', label: '其他字段', minWidth: 200},
        {value: 'createUser', label: '创建人', width: 200},
        {value: 'createGmt', label: '创建时间', width: 200},
        {value: 'modifiedUser', label: '最后修改人', width: 200},
        {value: 'modifiedGmt', label: '最后修改时间', width: 200}
      ],
      addForm: {},
      addFormRules: {
        name: [
          {required: true, message: '合同名称不能为空!', trigger: 'blur'}
        ],
        number: [
          {required: true, message: '合同编号不能为空!', trigger: 'blur'}
        ],
        customerNumber: [
          {required: true, message: '客户编号不能为空!', trigger: 'blur'}
        ],
        customerName: [
          {required: true, message: '客户名称不能为空!', trigger: 'blur'}
        ],
        contractDate: [
          {required: true, message: '签约日期不能为空!', trigger: 'blur'}
        ],
        startDate: [
          {required: true, message: '客户编号不能为空!', trigger: 'blur'}
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
