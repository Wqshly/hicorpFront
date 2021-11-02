<template>
  <div class="fill-container">
    <v-sidebar></v-sidebar>
    <div class="main-container" :class="{'main-container-collapse':collapse}">
      <manage-header style="z-index: 999" @open-user-info="openUserInfo"></manage-header>
      <v-tags></v-tags>
      <div class="content scroll-style">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
    <!-- 账号信息窗口 -->
<!--    <el-dialog ref="userInfoDialog" title="用户信息" :visible.sync="userInfoDialogVisible" :close-on-click-modal="false"-->
<!--               class="dialog-style" width="25%">-->
<!--      <el-form style="height: 350px" label-width="120px">-->
<!--        <el-form-item label="姓名："><div style="text-align: center">{{this.userInfo.name}}</div></el-form-item>-->
<!--        <el-form-item label="员工编号："><div style="text-align: center">{{this.userInfo.staffNumber}}</div></el-form-item>-->
<!--        <el-form-item label="所属部门："><div style="text-align: center">{{this.userInfo.department}}</div></el-form-item>-->
<!--        <el-form-item label="电话号码："><div style="text-align: center">{{this.userInfo.phone}}</div></el-form-item>-->
<!--        <el-form-item label="身份证号码："><div style="text-align: center">{{this.userInfo.idCard}}</div></el-form-item>-->
<!--      </el-form>-->
<!--      <div slot="footer">-->
<!--        &lt;!&ndash; 作为模板时，不加.native将不会生效 &ndash;&gt;-->
<!--        <el-button @click.native="userInfoDialogVisible = false">关闭</el-button>-->
<!--      </div>-->
<!--    </el-dialog>-->
  </div>
</template>

<script>
import ManageHeader from '@/components/PageTemplate/Header'
import VSidebar from '@/components/PageTemplate/Sidebar'
import VTags from '@/components/PageTemplate/Tags'
import bus from '@/components/PageTemplate/bus'
export default {
  name: 'ManageTemplate',
  components: {
    ManageHeader,
    VSidebar,
    VTags
  },
  data () {
    return {
      tagsList: [],
      collapse: false,
      userInfoDialogVisible: false,
      userInfo: []
    }
  },
  methods: {
    openUserInfo () {
      this.userInfoDialogVisible = true
    }
  },
  mounted () {
    // const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    // this.username = userInfo.username
    // this.userInfo = userInfo.principal.userInfo
  },
  created () {
    bus.$on('collapse', msg => {
      this.collapse = msg
    })
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on('Tags.vue', msg => {
      let arr = []
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name)
      }
      this.tagsList = arr
    })
  }
}
</script>

<style lang="less">

  .main-container {
    position: absolute;
    left: 260px;
    right: 0;
    top: 0;
    bottom: 0;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
  }

  .main-container-collapse {
    left: 65px;
  }

  .content {
    top: 115px;
    position: absolute;
    width: 100%;
    height: calc(100% - 115px);
    /*overflow-y: hidden;*/
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #f0f2f5;
  }

  .content-tags {
    padding: 0 10px;
  }
</style>
