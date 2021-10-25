<template>
  <div class="fill-container scroll-style">
        <div class="table-container-style">
          <div id="test1" style="width: 1000px;height:800px;"></div>
        </div>
        <div class="table-container-style">
          <div id="test2" style="width: 1000px;height:800px;"></div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ReinforcementCage',
  data () {
    let data = []

    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }
    var builderJson = {
      'all': 10887,
      'charts': {
        'map': 3237,
        'lines': 2164,
        'bar': 7561,
        'line': 7778,
        'pie': 7355,
        'scatter': 2405,
        'candlestick': 1842,
        'radar': 2090,
        'heatmap': 1762,
        'treemap': 1593,
        'graph': 2060,
        'boxplot': 1537,
        'parallel': 1908,
        'gauge': 2107,
        'funnel': 1692,
        'sankey': 1568
      },
      'components': {
        'geo': 2788,
        'title': 9575,
        'legend': 9400,
        'tooltip': 9466,
        'grid': 9266,
        'markPoint': 3419,
        'markLine': 2984,
        'timeline': 2739,
        'dataZoom': 2744,
        'visualMap': 2466,
        'toolbox': 3034,
        'polar': 1945
      },
      'ie': 9743
    }

    var downloadJson = {
      'echarts.min.js': 17365,
      'echarts.simple.min.js': 4079,
      'echarts.common.min.js': 6929,
      'echarts.js': 14890
    }

    var themeJson = {
      'dark.js': 1594,
      'infographic.js': 925,
      'shine.js': 1608,
      'roma.js': 721,
      'macarons.js': 2179,
      'vintage.js': 1982
    }

    var waterMarkText = 'ECHARTS'

    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d')
    canvas.width = canvas.height = 100
    ctx.textAlign = 'Center.vue'
    ctx.textBaseline = 'middle'
    ctx.globalAlpha = 0.08
    ctx.font = '20px Microsoft Yahei'
    ctx.translate(50, 50)
    ctx.rotate(-Math.PI / 4)
    ctx.fillText(waterMarkText, 0, 0)
    return {
      option1: {
        backgroundColor: {
          type: 'pattern',
          image: canvas,
          repeat: 'repeat'
        },
        tooltip: {},
        title: [{
          text: '在线构建',
          subtext: '总计 ' + builderJson.all,
          left: '25%',
          textAlign: 'Center.vue'
        }, {
          text: '各版本下载',
          subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
            return all + downloadJson[key]
          }, 0),
          left: '75%',
          textAlign: 'Center.vue'
        }, {
          text: '主题下载',
          subtext: '总计 ' + Object.keys(themeJson).reduce(function (all, key) {
            return all + themeJson[key]
          }, 0),
          left: '75%',
          top: '50%',
          textAlign: 'Center.vue'
        }],
        grid: [{
          top: 50,
          width: '50%',
          bottom: '45%',
          left: 10,
          containLabel: true
        }, {
          top: '55%',
          width: '50%',
          bottom: 0,
          left: 10,
          containLabel: true
        }],
        xAxis: [{
          type: 'value',
          max: builderJson.all,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.all,
          gridIndex: 1,
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          data: Object.keys(builderJson.charts),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 1,
          type: 'category',
          data: Object.keys(builderJson.components),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          stack: 'chart',
          z: 3,
          label: {
            position: 'right',
            show: true
          },
          data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.charts[key]
          })
        }, {
          type: 'bar',
          stack: 'chart',
          silent: true,
          itemStyle: {
            color: '#eee'
          },
          data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.all - builderJson.charts[key]
          })
        }, {
          type: 'bar',
          stack: 'component',
          xAxisIndex: 1,
          yAxisIndex: 1,
          z: 3,
          label: {
            position: 'right',
            show: true
          },
          data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.components[key]
          })
        }, {
          type: 'bar',
          stack: 'component',
          silent: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            color: '#eee'
          },
          data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.all - builderJson.components[key]
          })
        }, {
          type: 'pie',
          radius: [0, '30%'],
          center: ['75%', '25%'],
          data: Object.keys(downloadJson).map(function (key) {
            return {
              name: key.replace('.js', ''),
              value: downloadJson[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '30%'],
          center: ['75%', '75%'],
          data: Object.keys(themeJson).map(function (key) {
            return {
              name: key.replace('.js', ''),
              value: themeJson[key]
            }
          })
        }]
      },
      option2: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series'
            },
            markLine: {
              lineStyle: {
                type: 'dashed'
              },
              data: [
                [{type: 'min'}, {type: 'max'}]
              ]
            }
          },
          {
            name: '百度',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            emphasis: {
              focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: '谷歌',
            type: 'bar',
            stack: '搜索引擎',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: '必应',
            type: 'bar',
            stack: '搜索引擎',
            emphasis: {
              focus: 'series'
            },
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            emphasis: {
              focus: 'series'
            },
            data: [62, 82, 91, 84, 109, 110, 120]
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
    }
  },
  mounted () {
    this.test1()
    this.test2()
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
