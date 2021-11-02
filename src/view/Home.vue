<template>
  <div></div>
<!--  <div class="fill-container scroll-style">-->
<!--    &lt;!&ndash; 展示图区 &ndash;&gt;-->
<!--    <div class="graphic-container">-->
<!--      &lt;!&ndash; 底层绘图 &ndash;&gt;-->
<!--      <div class="underlying-background">-->
<!--        <div style="height: 50px;"></div>-->
<!--        &lt;!&ndash; 厂区 &ndash;&gt;-->
<!--        <div class="factory-area">-->
<!--          &lt;!&ndash; 钢筋笼区 &ndash;&gt;-->
<!--          <div class="reinforcement-cage-area">-->
<!--            <a href="#/employment/department">-->
<!--              &lt;!&ndash; 顶层区域话分(实现点击跳转到区域详情页) &ndash;&gt;-->
<!--              <div class="area-style">-->
<!--                <p>钢筋笼加工区</p>-->
<!--              </div>-->
<!--            </a>-->
<!--          </div>-->
<!--          &lt;!&ndash; 生产区车间 &ndash;&gt;-->
<!--          <div class="production-workshop">-->
<!--            &lt;!&ndash; 生产区 &ndash;&gt;-->
<!--            <div class="production-area">-->
<!--              &lt;!&ndash; 实际产线区域 &ndash;&gt;-->
<!--              <div class="operation-area">-->
<!--                &lt;!&ndash; 横移车位 &ndash;&gt;-->
<!--                <div class="traverse-car-area">-->
<!--                  &lt;!&ndash; 水平分割线 &ndash;&gt;-->
<!--                  <div class="horizontal-border"></div>-->
<!--                  <div class="traverse-car-center">-->
<!--                    &lt;!&ndash; 垂直分割线 &ndash;&gt;-->
<!--                    <div class="vertical-border"></div>-->
<!--                    &lt;!&ndash; 垂直分割线 &ndash;&gt;-->
<!--                    <div class="vertical-border" style="left: 4px;"></div>-->
<!--                    &lt;!&ndash; 垂直分割线 &ndash;&gt;-->
<!--                    <div class="vertical-border" style="left: 14px;"></div>-->
<!--                    <div class="traverse-car-core">-->
<!--                      &lt;!&ndash; 横移小车位 &ndash;&gt;-->
<!--                      <div class="traverse-car">-->
<!--                        <div class="horizontal-border traverse-car-track"></div>-->
<!--                        <div class="horizontal-border"-->
<!--                             style="top: 13px;width: calc(100% - 10px);left: 5px;height: 3px;"></div>-->
<!--                        <div class="horizontal-border"-->
<!--                             style="top: 20px;width: calc(100% - 10px);left: 5px;height: 3px;"></div>-->
<!--                        <div class="horizontal-border traverse-car-track" style="top: 32px;"></div>-->
<!--                        <div v-for="index in 4" class="vertical-border traverse-track-sleeper"-->
<!--                             :style="'left: calc(' + (index * 15) + '% + 5px);'" :key="index"></div>-->
<!--                        <div v-for="index in 4" class="vertical-border traverse-track-sleeper" style="top: 20px;"-->
<!--                             :style="'left: calc(' + (index * 15) + '% + 5px);'" :key="index"></div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    &lt;!&ndash; 垂直分割线 &ndash;&gt;-->
<!--                    <div class="vertical-border" style="left: calc(100% - 15px);"></div>-->
<!--                    &lt;!&ndash; 垂直分割线 &ndash;&gt;-->
<!--                    <div class="vertical-border" style="left: calc(100% - 5px);"></div>-->
<!--                    &lt;!&ndash; 垂直分割线 &ndash;&gt;-->
<!--                    <div class="vertical-border" style="left: calc(100% - 1px);"></div>-->
<!--                  </div>-->
<!--                  &lt;!&ndash; 水平分割线 &ndash;&gt;-->
<!--                  <div class="horizontal-border" style="top: 100%;"></div>-->
<!--                </div>-->
<!--                &lt;!&ndash; 产线区域 &ndash;&gt;-->
<!--                <div class="production-line-area">-->
<!--                  <div v-for="index of 3" :key="index" style="height: 20%;width: 100%;position: relative;">-->
<!--                    &lt;!&ndash; 水平分割线 &ndash;&gt;-->
<!--                    <div class="horizontal-border" style="height: 3px; top: 5px;"></div>-->
<!--                    <div class="horizontal-border" style="height: 3px; top: 16px;"></div>-->
<!--                    <div v-for="index in 100" class="vertical-border traverse-track-sleeper" style="top: 5px;"-->
<!--                         :style="'left: calc(' + (index - 1) + '% + 3px);'" :key="index"></div>-->
<!--                    <div v-for="index in 100" class="vertical-border traverse-track-sleeper" style="top: 24px;"-->
<!--                         :style="'left: calc(' + (index - 1) + '% + 3px);'" :key="index"></div>-->
<!--                    <div v-for="index of 12" :key="index" style="position: relative;">-->
<!--                      <mould-car style="top: 2px;position: absolute;"-->
<!--                                 :style="'left: calc(' + (index - 1) * 8.33 + '%);'"></mould-car>-->
<!--                    </div>-->
<!--                    &lt;!&ndash; 水平分割线 &ndash;&gt;-->
<!--                    <div class="horizontal-border" style="height: 3px; top: 24px;"></div>-->
<!--                    <div class="horizontal-border" style="height: 3px; top: 35px;"></div>-->
<!--                  </div>-->
<!--                  <div v-for="index of 2" :key="index" style="height: 20%;width: 100%;position: relative;">-->
<!--                    <div v-for="index of 8" :key="index" style="position: relative;">-->
<!--                      <mould-car style="top: 30px;position: absolute;"-->
<!--                                 :style="'left: calc(' + (index - 1) * 12.5 + '%);'"-->
<!--                                 :mould-color="mouldColor[index - 1]"></mould-car>-->
<!--                    </div>-->
<!--                    &lt;!&ndash; 水平分割线 &ndash;&gt;-->
<!--                    <div class="horizontal-border" style="height: 3px; bottom: 5px;"></div>-->
<!--                    <div class="horizontal-border" style="height: 3px; bottom: 16px;"></div>-->
<!--                    <div v-for="index in 100" class="vertical-border traverse-track-sleeper" style="bottom: 5px;"-->
<!--                         :style="'left: calc(' + (index - 1) + '% + 3px);'" :key="index"></div>-->
<!--                    <div v-for="index in 100" class="vertical-border traverse-track-sleeper" style="bottom: 24px;"-->
<!--                         :style="'left: calc(' + (index - 1) + '% + 3px);'" :key="index"></div>-->
<!--                    &lt;!&ndash; 水平分割线 &ndash;&gt;-->
<!--                    <div class="horizontal-border" style="height: 3px; bottom: 24px;"></div>-->
<!--                    <div class="horizontal-border" style="height: 3px; bottom: 35px;"></div>-->
<!--                  </div>-->
<!--                  &lt;!&ndash; 水泥搅拌位 &ndash;&gt;-->
<!--                  <div class="cement-mixer">-->
<!--                    <div></div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash; 横移车位 &ndash;&gt;-->
<!--                <div class="traverse-car-area">-->
<!--                  &lt;!&ndash; 水平分割线 &ndash;&gt;-->
<!--                  <div class="horizontal-border"></div>-->
<!--                  <div class="traverse-car-center">-->
<!--                    &lt;!&ndash; 垂直分割线 &ndash;&gt;-->
<!--                    <div class="vertical-border"></div>-->
<!--                    &lt;!&ndash; 垂直分割线 &ndash;&gt;-->
<!--                    <div class="vertical-border" style="left: 4px;"></div>-->
<!--                    &lt;!&ndash; 垂直分割线 &ndash;&gt;-->
<!--                    <div class="vertical-border" style="left: 14px;"></div>-->
<!--                    <div class="traverse-car-core">-->
<!--                      &lt;!&ndash; 横移小车位 &ndash;&gt;-->
<!--                      <div class="traverse-car">-->
<!--                        <div class="horizontal-border traverse-car-track"></div>-->
<!--                        <div class="horizontal-border"-->
<!--                             style="top: 13px;width: calc(100% - 10px);left: 5px;height: 3px;"></div>-->
<!--                        <div class="horizontal-border"-->
<!--                             style="top: 20px;width: calc(100% - 10px);left: 5px;height: 3px;"></div>-->
<!--                        <div class="horizontal-border traverse-car-track" style="top: 32px;"></div>-->
<!--                        <div v-for="index in 4" class="vertical-border traverse-track-sleeper"-->
<!--                             :style="'left: ' + (index * 8 + 5) + 'px;'" :key="index"></div>-->
<!--                        <div v-for="index in 4" class="vertical-border traverse-track-sleeper" style="top: 20px;"-->
<!--                             :style="'left: ' + (index * 8 + 5) + 'px;'" :key="index"></div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    &lt;!&ndash; 垂直分割线 &ndash;&gt;-->
<!--                    <div class="vertical-border" style="left: calc(100% - 15px);"></div>-->
<!--                    &lt;!&ndash; 垂直分割线 &ndash;&gt;-->
<!--                    <div class="vertical-border" style="left: calc(100% - 5px);"></div>-->
<!--                    &lt;!&ndash; 垂直分割线 &ndash;&gt;-->
<!--                    <div class="vertical-border" style="left: calc(100% - 1px);"></div>-->
<!--                  </div>-->
<!--                  &lt;!&ndash; 水平分割线 &ndash;&gt;-->
<!--                  <div class="horizontal-border" style="top: 100%;"></div>-->
<!--                </div>-->
<!--              </div>-->
<!--              &lt;!&ndash; 过道区域 &ndash;&gt;-->
<!--              <div class="aisle-area"></div>-->
<!--              <a href="#/employment/department">-->
<!--                &lt;!&ndash; 顶层区域话分(实现点击跳转到区域详情页) &ndash;&gt;-->
<!--                <div class="area-style">-->
<!--                  <p>生产区</p>-->
<!--                </div>-->
<!--              </a>-->
<!--            </div>-->
<!--            &lt;!&ndash; 添加标号区域 &ndash;&gt;-->
<!--            <div class="add-key-area">-->
<!--              <a href="#/employment/department">-->
<!--                &lt;!&ndash; 顶层区域话分(实现点击跳转到区域详情页) &ndash;&gt;-->
<!--                <div class="area-style">-->
<!--                  <p>标号区</p>-->
<!--                </div>-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash; 外场区域 &ndash;&gt;-->
<!--          <div class="outside-area">-->
<!--            &lt;!&ndash; 外场水养区 &ndash;&gt;-->
<!--            <div class="pool-area">-->
<!--              <a href="#/employment/department">-->
<!--                &lt;!&ndash; 顶层区域话分(实现点击跳转到区域详情页) &ndash;&gt;-->
<!--                <div class="area-style">-->
<!--                  <p>静置区</p>-->
<!--                </div>-->
<!--              </a>-->
<!--            </div>-->
<!--            &lt;!&ndash; 外场静养区 &ndash;&gt;-->
<!--            <div class="standing-area">-->
<!--              <a href="#/employment/department">-->
<!--                &lt;!&ndash; 顶层区域话分(实现点击跳转到区域详情页) &ndash;&gt;-->
<!--                <div class="area-style">-->
<!--                  <p>水养区</p>-->
<!--                </div>-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div style="height: 50px;"></div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import MouldCar from '@/components/Graphic/MouldCar'

export default {
  name: 'Home',
  components: {
    MouldCar
  },
  data () {
    return {
      traverseTrackSleeperNumber: 6,
      mouldColor: ['#13ce66', '#7acdce', '#6097ce', '#ce5b63', '#13ce66', '#13ce66', '#13ce66', '#13ce66']
    }
  },
  mounted () {
  },
  watch: {},
  methods: {
    // initMould (workLine, steamLine, mouldNum) {
    // }
  }
}
</script>

<style scoped lang="less">

.graphic-container {
  margin: 0 auto;
  width: 95%;
  min-width: 1850px;
  height: 100%;
}

.underlying-background {
  position: relative;
  z-index: 1;
  background-color: #ffffff;
}

.factory-area {
  width: 80%;
  min-width: 1600px;
  margin: 0 auto;
  /*border: solid 1px;*/
}

.reinforcement-cage-area, .production-workshop, .outside-area {
  display: block;
  position: relative;
  width: 80%;
  min-width: 1600px;
  margin: 0 auto;
}

.reinforcement-cage-area {
  height: 180px;
  /*border-bottom: double 3px;*/
}

.production-workshop {
  height: 500px;

  .production-area {
    width: 1200px;
  }

  .add-key-area {
    width: 400px;
  }
}

.outside-area {
  height: 400px;

  .pool-area {
    width: 800px;
  }

  .standing-area {
    width: 800px;
  }
}

.production-area, .add-key-area, .pool-area, .standing-area {
  display: block;
  position: relative;
  float: left;
  height: 100%;
}

.operation-area {
  height: 400px;
}

.traverse-car-area, .production-line-area {
  float: left;
  height: 100%;
  position: relative;

  /*轨枕样式*/

  .traverse-track-sleeper {
    height: 14px;
    width: 3px;
  }
}

.traverse-car-area {
  width: 70px;
}

.production-line-area {
  width: 1050px;

  .cement-mixer {
    position: absolute;
    z-index: 10;
    top: 60%;
    left: 50%;
    width: 12.5%;
    height: 40%;
  }
}

/*水平分割线*/
.horizontal-border {
  height: 1px;
  width: 100%;
  background: #000000;
  z-index: 10;
  position: absolute;
}

.traverse-car-center {
  height: 100%;
  width: 100%;
}

.traverse-car-core {
  position: relative;
  height: 100%;
  width: 100%;
  float: left;
}

.traverse-car {
  position: absolute;
  top: 244px;
  width: 100%;
  height: 35px;

  .traverse-car-track {
    height: 3px;
  }
}

/*垂直分割线*/
.vertical-border {
  height: 100%;
  width: 1px;
  background: #000000;
  z-index: 10;
  position: absolute;
}

.area-style {
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: calc(100% - 20px);
  width: calc(100% - 30px);
  border: dashed 1px #666666;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  background-color: #eeeeee;

  p {
    display: block;
    float: left;
    font-size: 30px;
    font-style: italic;
    height: auto;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 3;
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0);
    transform: translate(-50%, -50%);
    transition: border-bottom 0.3s ease-out;
    padding-bottom: 5px;
  }

  p:after {
    content: '';
    width: 0;
    height: 2px;
    background: #fff;
    bottom: -2px;
    left: 0;
    position: absolute;
    opacity: 0;
    -webkit-transition: all 0.2s linear;
    border-radius: 20px;
  }
}

.area-style:after {
  display: block;
  content: '';
  height: 100%;
  width: 100%;
  background: rgba(0, 82, 217, 0.7);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease-out;
  border-radius: 20px;
}

.area-style:hover {
  &:after {
    opacity: 0.5;
  }

  p:after {
    opacity: 1;
    left: 0;
    width: 100%;
  }
}

@media screen and (min-width: 1200px)  and (max-width: 1920px) {
  .graphic-container {
    min-width: 1100px;
  }

  .factory-area {
    min-width: 1100px;
    /*border: solid 1px;*/
  }

  .reinforcement-cage-area, .production-workshop, .outside-area {
    min-width: 1100px;
  }

  .reinforcement-cage-area {
    height: 100px;
    /*border-bottom: double 3px;*/
  }

  .production-workshop {
    height: 400px;

    .production-area {
      width: 75%;
      min-width: 750px;
    }

    .add-key-area {
      width: 25%;
      min-width: 250px;
    }
  }

  .operation-area {
    height: 350px;
  }

  .outside-area {
    height: 230px;

    .pool-area, .standing-area {
      width: 50%;
      min-width: 550px;
    }
  }

  .traverse-car-area {
    width: 50px;
  }

  .production-line-area {
    width: 725px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1199px) {
  .graphic-container {
    min-width: 550px;
  }
}

@media screen and (max-width: 600px) {
}
</style>
