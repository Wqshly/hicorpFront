<template>
  <div class="header-style">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChange">
      <el-tooltip effect="dark" :content="collapse ? `展开侧边栏` : `折叠侧边栏`" placement="bottom">
        <i :class="[collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
      </el-tooltip>
    </div>
    <div class="title-style">
      <img class="logo-style" src="../../assets/img/logo.png"/>
      <span style="margin-left: 30px;">盾构管片智能制造信息管理系统</span>
    </div>
    <div class="right-menu">
      <span style="font-size: 20px;" >{{username}}</span>
      <el-avatar @click.native="openUserInfoDialog"
                 src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <!-- 全屏显示按钮 -->
      <div class="header-btn-style" style="margin: 0 20px;" @click="fullScreen">
        <el-tooltip effect="dark" :content="fullscreen ? `取消全屏` : `全屏`" placement="bottom">
          <div>
            <font-awesome-icon :icon="['fas', fullscreen ? 'compress' : 'expand']"></font-awesome-icon>
          </div>
        </el-tooltip>
      </div>
      <div class="header-btn-style" @click="logout">
        <el-tooltip effect="dark" content="退出登陆" placement="bottom">
          <div>
            <font-awesome-icon :icon="['fas', 'sign-out-alt']"></font-awesome-icon>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/components/PageTemplate/bus'

export default {
  name: 'ManageHeader',
  data () {
    return {
      username: '未加载',
      collapse: false,
      fullscreen: false,
      message: 1
    }
  },
  methods: {
    // 打开用户信息页面
    openUserInfoDialog () {
      this.$emit('open-user-info')
    },
    // 侧边栏折叠
    collapseChange () {
      this.collapse = !this.collapse
      console.log(this.collapse)
      // 将折叠or展开的信息传到父组件中。
      bus.$emit('collapse', this.collapse)
    },
    // 全屏事件
    fullScreen () {
      const docElement = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (docElement.requestFullscreen) {
          docElement.requestFullscreen()
        } else if (docElement.webkitRequestFullScreen) {
          docElement.webkitRequestFullScreen()
        } else if (docElement.mozRequestFullScreen) {
          docElement.mozRequestFullScreen()
        } else if (docElement.msRequestFullscreen) {
          // IE11
          docElement.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },
    // 退出登录
    logout () {
      sessionStorage.removeItem('userInfo')
      sessionStorage.removeItem('userMenu')
      this.$api.http.get('/logout')
        .then(
          this.$message.success('退出成功!')
        )
        .catch(err => {
          this.$message.error('您已退出登录！请勿重复操作！')
          console.log(err)
        })
      this.$router.push('/login')
    }
  },
  mounted () {
    if (document.body.clientWidth < 1500) {
      this.collapseChange()
    }
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    this.username = userInfo.name
  }
}
</script>

<style scoped lang="less">
.header-style {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  background: rgba(255, 255, 255, .2);
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .1);
}

.collapse-btn {
  float: left;
  padding: 0 21px;
  width: 40px;
  cursor: pointer;
  line-height: 70px;
}

.title-style .logo-style {
  width: 200px;
  height: 30px;
  vertical-align: middle;
}

.header-style .title-style {
  float: left;
  display: flex;
  align-items: center;
  line-height: 70px;
}

.header-style .right-menu {
  float: right;
  height: 100%;
  padding-right: 20px;
  display: flex;
  align-items: center;
  vertical-align: text-bottom;
}

.header-style .tips {
  float: left;
  line-height: 70px;
  font-size: 15px;
}

.header-style .hide-tips {
  display: none;
}

.message-tips, .header-btn-style {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}

.header-btn-style {
  /*transform: rotate(45deg);*/
  margin-right: 5px;
  font-size: 24px;
}

.message-tips .el-icon-bell {
  color: #fff;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
</style>
