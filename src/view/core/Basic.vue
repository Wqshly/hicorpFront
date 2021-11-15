<template>
  <div class="fill-container scroll-style">
    <el-row>
      <el-col :span="12">
        <div class="table-container-style">
          <div id="test1" style="width: 600px;height:400px;"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="table-container-style">
          <div id="test2" style="width: 700px;height:400px;"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="table-container-style">
          <div id="test3" style="width: 600px;height:400px;"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="table-container-style">
          <div id="test4" style="width: 700px;height:400px;"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Basic',
  data () {
    let data = []

    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }
    return {
      option1: {
        title: {
          text: '收支瀑布阶梯',
          subtext: 'From ExcelHome',
          sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var tar
            if (params[1].value !== '-') {
              tar = params[1]
            } else {
              tar = params[0]
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
          }
        },
        legend: {
          data: ['支出', '收入']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          splitLine: {show: false},
          data: (function () {
            var list = []
            for (var i = 1; i <= 11; i++) {
              list.push('20年' + i + '月')
            }
            return list
          }())
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            },
            emphasis: {
              itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
          },
          {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'top'
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'bottom'
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
          }
        ]
      },
      option2: {
        title: {
          text: '成本统计',
          subtext: '动态数据',
          x: 'Center.vue'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          show: true,
          orient: 'vertical',
          left: 'left',
          data: ['物料成本', '工资成本', '运输成本', '沟通成本', '设备维护成本']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '物料成本'},
              {value: 1548, name: '工资成本'},
              {value: 234, name: '运输成本'},
              {value: 135, name: '沟通成本'},
              {value: 310, name: '设备维护成本'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      option3: {
        title: {
          text: '工资分布图'
        },
        tooltip: {},
        legend: {
          data: ['人数占比']
        },
        xAxis: {
          data: ['0-4999', '5000-5999', '6000-6999', '7000-7999', '8000-8999', '9000+']
        },
        yAxis: {},
        series: [{
          name: '人数占比',
          type: 'bar',
          data: [5, 25, 40, 15, 5, 10]
        }]
      },
      option4: {
        title: {
          text: '员工每时效益折线图'
        },
        tooltip: { // 设置tip提示
          trigger: 'axis'
        },

        legend: { // 设置区分（哪条线属于什么）
          data: ['当月收入', '当月开销']
        },
        color: ['#8AE09F', '#FA6F53'], // 设置区分（每条线是什么颜色，和 legend 一一对应）
        xAxis: { // 设置x轴
          type: 'category',
          boundaryGap: false, // 坐标轴两边不留白
          data: ['09:00', '10:00', '11"00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
          name: '时间', // X轴 name
          nameTextStyle: { // 坐标轴名称的文字样式
            color: '#FA6F53',
            fontSize: 16,
            padding: [0, 0, 0, 20]
          },
          axisLine: { // 坐标轴轴线相关设置。
            lineStyle: {
              color: '#FA6F53'
            }
          }
        },
        yAxis: {
          nameTextStyle: {
            color: '#FA6F53',
            fontSize: 16,
            padding: [0, 0, 10, 0]
          },
          axisLine: {
            lineStyle: {
              color: '#FA6F53'
            }
          },
          type: 'value'
        },
        series: [
          {
            name: '员工甲',
            data: [220, 232, 201, 234, 290, 230, 220, 180, 150],
            type: 'line', // 类型为折线图
            lineStyle: { // 线条样式 => 必须使用normal属性
              normal: {
                color: '#8AE09F'
              }
            }
          },
          {
            name: '员工乙',
            data: [125, 205, 182, 99, 79, 68, 150, 170, 120],
            type: 'line',
            lineStyle: {
              normal: {
                color: '#f154fa'
              }
            }
          },
          {
            name: '员工丙',
            data: [200, 200, 134, 80, 46, 110, 130, 75, 200],
            type: 'line',
            lineStyle: {
              normal: {
                color: '#2f4ffa'
              }
            }
          },
          {
            name: '员工丁',
            data: [120, 200, 150, 80, 70, 110, 130, 100],
            type: 'line',
            lineStyle: {
              normal: {
                color: '#FA6F53'
              }
            }
          }
        ]

      }
    }
  },
  methods: {
    test1 () {
      var myChart = this.$echarts.init(document.getElementById('test1'))
      myChart.setOption(this.option1)
    },
    test2 () {
      var myChart = this.$echarts.init(document.getElementById('test2'))
      myChart.setOption(this.option2)
    },
    test3 () {
      var myChart = this.$echarts.init(document.getElementById('test3'))
      myChart.setOption(this.option3)
    },
    test4 () {
      var myChart = this.$echarts.init(document.getElementById('test4'))
      myChart.setOption(this.option4)
    }
  },
  mounted () {
    this.test1()
    this.test2()
    this.test3()
    this.test4()
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
</style>
