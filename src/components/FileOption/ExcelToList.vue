<template>
  <div>
    <el-upload ref="upload"
               action
               :auto-upload="false"
               :limit="1"
               accept=".xls,.xlsx"
               :file-list="fileList"
               :before-upload="beforeUpload"
               :on-change="handleChange"
               :on-remove="handleRemove">
      <el-button>
        上传&nbsp;<font-awesome-icon :icon="['fas', 'cloud-upload-alt']" class="button-icon"></font-awesome-icon>
      </el-button>
    </el-upload>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import {Message, Loading} from 'element-ui'

export default {
  name: 'ExcelToList',
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    async beforeUpload (file) {
      const extension = file.name.substring(file.name.lastIndexOf('.') + 1)
      console.log(extension)
      const size = file.size / 1024 / 1024
      if (extension !== 'xlsx' && extension !== 'xls') {
        this.$message.warning('只能上传后缀是.xls或.xlsx的文件')
      }
      if (size > 10) {
        this.$message.warning('文件大小不得超过10M')
      }
    },
    // 文件状态改变
    async handleChange (file, fileList) {
      Loading.service({text: '表格读取中...'})
      if (file) {
        this.fileList = fileList.slice(-1)
        try {
          var reader = new FileReader()
          reader.onload = e => {
            const excelData = e.target.result
            this.wb = XLSX.read(excelData, {
              type: 'binary'
            })
            const data = []
            this.wb.SheetNames.forEach((sheetName, index) => {
              data[index] = XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName])
            })
            this.$emit('submit-json-list', data)
          }
          reader.readAsBinaryString(file.raw)
          Message.success({message: '数据读取成功，点击确定上传数据!'})
        } catch (e) {
          alert('无文件！')
          Message.error({message: '数据读取失败，请检查文格式是否有误!'})
        }
      }
      Loading.service().close()
    },
    // 删除文件
    async handleRemove (file, fileList) {
      this.fileList = []
    }
  }
}
</script>

<style scoped>

</style>
