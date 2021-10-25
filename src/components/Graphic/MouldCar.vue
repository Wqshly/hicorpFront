<template>
    <div>
      <div style="position: absolute; z-index: 999;">
        <div class="mould-style">
          <div class="mould-inner" style="float: left;" :style="'background-color: ' + mouldColor + ';'">
            <div v-for="index of 2" style="height: 100%; width: 1px; background-color: #999999; position: absolute;" :style="'left:' + (33.3 * index) + '%;'" :key="index"></div>
            <div v-for="index of 5 " :key="index" style="height: 16.6%; width: 100%; position: relative;">
              <div style="bottom: 0; height: 1px; width: 100%; background-color: #999999; position: absolute;"></div>
            </div>
          </div>
          <div class="mould-inner" style="float: right;" :style="'background-color: ' + mouldColor + ';'">
            <div v-for="index of 2" style="height: 100%; width: 1px; background-color: #999999; position: absolute;" :style="'left:' + (33.3 * index) + '%;'" :key="index"></div>
            <div v-for="index of 5" :key="index" style="height: 16.6%; width: 100%; position: relative;">
              <div style="bottom: 0; height: 1px; width: 100%; background-color: #999999; position: absolute;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MouldCar',
  props: {
    mouldColor: {type: String, default: '#13ce66'}
  }
}
</script>

<style scoped>

  .mould-style {
    margin: 0 10px;
    width: 50px;
    height: 32px;
    border-top: #666666;
    border-top-style: solid;
    border-bottom: #666666;
    border-bottom-style: solid;
  }

  .mould-inner {
    width: 15px;
    height: 100%;
    margin: 0 5px;
    position: relative;
  }
</style>
