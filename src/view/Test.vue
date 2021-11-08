<template>
    <div>
      <el-row>
        test
        <el-col :span="8">
          <span>设置工作线条数：</span>
          <el-select v-model="workLineNum" placeholder="请选择" size="small">
            <el-option
              v-for="(item, index) in setWorkLine"
              :key="index"
              :label="item + '条'"
              :value="item">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="8"><span>设置蒸养线条数：</span>
          <el-select v-model="steamLineNum" placeholder="请选择" size="small">
            <el-option
              v-for="(item, index) in setSteamLine"
              :key="index"
              :label="item + '条'"
              :value="item">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <span>设置蒸养线条数：</span>
          <el-select v-model="mouldNum" placeholder="请选择" size="small">
            <el-option
              v-for="(item, index) in setMouldNum"
              :key="index"
              :label="item + '套'"
              :value="item">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          test
        </el-col>
        <el-col :span="20">
          <div style="position: absolute; z-index: 1;">
            <div style="height: 100px;" v-for="totalLineIndex of workLineNum + steamLineNum" :key="totalLineIndex">
              <el-divider></el-divider>
            </div>
          </div>
          <div style="position: relative; z-index: 999;">
            <div style="height: 100px;" v-for="totalLineIndex of workLineNum + steamLineNum" :key="totalLineIndex">
              <div :id="'line-' + totalLineIndex + '-' + mouldNumIndex" v-for="mouldNumIndex of mouldNum"
                   :key="mouldNumIndex" style="float: left;"
                   class="mould-style">
                <div class="mould-inner" style="float: left;"></div>
                <div class="mould-inner" style="float: right;"></div>
                <div>{{'line-' + totalLineIndex + '-' + mouldNumIndex}}</div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="2">
          test
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      setWorkLine: [1, 2, 3], // 工作线条数选择
      workLineNum: 2, // 工作线条数
      setSteamLine: [2, 3, 4], // 蒸养线条数选择
      steamLineNum: 3, // 蒸养线条数
      setMouldNum: [8, 12, 16, 20], // 设置单线模具数
      mouldNum: 8, // 单条线的模具数
      moulds: []
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

  .table-container-style {
    margin: 15px;
    padding: 15px;
    background-color: #ffffff;
    min-height: 300px;
    border-radius: 10px;
  }

  .mould-style {
    margin: 0 10px;
    width: 70px;
    height: 45px;
    border-top: #666666;
    border-top-style: solid;
    border-bottom: #666666;
    border-bottom-style: solid;
  }

  .mould-inner {
    width: 20px;
    height: 100%;
    margin: 0 5px;
    background-color: #13ce66;
  }
</style>
