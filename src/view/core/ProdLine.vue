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
        <div class="table-container-style">
          <div id="test3" style="width: 1200px;height:600px;"></div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ProdLine',
  data () {
    let data = []

    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }
    var testData = [{
      name: 'Grandpa',
      children: [{
        name: 'Uncle Leo',
        value: 15,
        children: [{
          name: 'Cousin Jack',
          value: 2
        }, {
          name: 'Cousin Mary',
          value: 5,
          children: [{
            name: 'Jackson',
            value: 2
          }]
        }, {
          name: 'Cousin Ben',
          value: 4
        }]
      }, {
        name: 'Father',
        value: 10,
        children: [{
          name: 'Me',
          value: 5
        }, {
          name: 'Brother Peter',
          value: 1
        }]
      }]
    }, {
      name: 'Nancy',
      children: [{
        name: 'Uncle Nike',
        children: [{
          name: 'Cousin Betty',
          value: 1
        }, {
          name: 'Cousin Jenny',
          value: 2
        }]
      }]
    }]
    return {
      option1: {
        title: {
          text: '基础雷达图'
        },
        legend: {
          data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            {
              name: '销售（Sales）', max: 6500
            },
            {
              name: '管理（Administration）', max: 16000
            },
            {
              name: '信息技术（Information Technology）', max: 30000
            },
            {
              name: '客服（Customer Support）', max: 38000
            },
            {
              name: '研发（Development）', max: 52000
            },
            {
              name: '市场（Marketing）', max: 25000
            }
          ]
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: '预算分配（Allocated Budget）'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: '实际开销（Actual Spending）'
            }
          ]
        }]
      },
      option2: {
        series: {
          type: 'sunburst',
          // emphasis: {
          //     focus: 'ancestor'
          // },
          data: testData,
          radius: [0, '90%'],
          label: {
            rotate: 'radial'
          }
        }
      },
      option3: {
        title: {
          text: '按份额显示大小的图',
          subtext: '纯属虚构',
          left: 'Center.vue'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'Center.vue',
          top: 'bottom',
          data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        series: [
          {
            name: '半径模式',
            type: 'pie',
            radius: [20, 140],
            center: ['25%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 5
            },
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              {value: 40, name: 'rose 1'},
              {value: 33, name: 'rose 2'},
              {value: 28, name: 'rose 3'},
              {value: 22, name: 'rose 4'},
              {value: 20, name: 'rose 5'},
              {value: 15, name: 'rose 6'},
              {value: 12, name: 'rose 7'},
              {value: 10, name: 'rose 8'}
            ]
          },
          {
            name: '面积模式',
            type: 'pie',
            radius: [20, 140],
            center: ['75%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              {value: 30, name: 'rose 1'},
              {value: 28, name: 'rose 2'},
              {value: 26, name: 'rose 3'},
              {value: 24, name: 'rose 4'},
              {value: 22, name: 'rose 5'},
              {value: 20, name: 'rose 6'},
              {value: 18, name: 'rose 7'},
              {value: 16, name: 'rose 8'}
            ]
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
    }
  },
  mounted () {
    this.test1()
    this.test2()
    this.test3()
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
