<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :collapse="collapse" background-color="#304156" text-color="#ffffff" active-text-color="#1890ff" unique-opened router>
      <template v-for="item in items">
        <!--        有子目录的-->
        <template v-if="item.children">
          <el-submenu :index="item.path" :key="item.path">
            <template slot="title">
              <font-awesome-icon :icon="['fas', item.icon]"></font-awesome-icon>
              <span slot="title">{{item.title}}</span>
            </template>
            <!--            子目录下拉内容-->
            <template v-for="subItem in item.children">
              <el-menu-item :index="subItem.path" :key="subItem.path">
                <span>{{subItem.title}}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!--        无子目录的-->
        <template v-else>
          <el-menu-item :index="item.path" :key="item.path">
            <font-awesome-icon :icon="['fas', item.icon]"></font-awesome-icon>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '@/components/Manage/bus'

export default {
  name: 'Sidebar',
  data () {
    return {
      collapse: false,
      items: []
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  // 通过 Event Bus 进行组件间通信，来折叠侧边栏
  created () {
    bus.$on('collapse', msg => {
      this.collapse = msg
    })
  },
  mounted () {
    this.items = JSON.parse(sessionStorage.getItem('userMenu'))
    this.deleteChildren(this.items)
  },
  methods: {
    // 删除空的children节点
    deleteChildren (arr) {
      let child = arr
      for (let i = child.length; i--; i > 0) {
        if (child[i].children) {
          if (child[i].children.length) {
            this.deleteChildren(child[i].children)
          } else {
            delete child[i].children
          }
        }
      }
      return arr
    }
  }
}
</script>

<style>

  .el-menu--popup {
    background: rgba(255, 255, 255, 0.7);
  }

  .el-menu .el-submenu__title:hover {
    font-weight: 700;
    -webkit-transition: all .5s;
  }

  .el-submenu .el-menu {
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;
    background: rgba(255, 255, 255, .1);
  }

  .el-menu-item:hover {
    font-weight: 700;
    -webkit-transition: all .5s;
  }
</style>

<style scoped lang="less">

  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }

  .sidebar::-webkit-scrollbar {
  }

  .sidebar-el-menu {
  }

  /*未折叠时侧边栏的宽度*/
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }

  .sidebar > ul {
    height: 100%;
  }
</style>
