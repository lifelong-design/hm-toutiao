<template>
  <el-container class="wrapper">
    <el-aside :width="isCollapse?'64px':'200px'">
      <!-- logo -->
      <div class="logo" :class="{mimiLogo:isCollapse}"></div>
      <!-- 导航菜单 -->
      <el-menu
        :collapse="isCollapse"
        :collapse-transition="false"
        :default-active="$route.path"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggleMenu" class="el-icon-s-fold"></span>
        <span class="text">江苏传智播客科技教育有限公司</span>
        <!-- 下拉菜单 -->
        <el-dropdown class="my-dropdown" @command="clickMenu">
          <span class="el-dropdown-link">
            <img class="member" :src="photo" alt />
            {{name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              command="setting"
              @click.native="setting()"
              icon="el-icon-setting"
            >个人设置</el-dropdown-item>
            <el-dropdown-item
              command="loginout"
              @click.native="loginout()"
              icon="el-icon-unlock"
            >退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <!-- 二级菜单的出口，组件显示位置 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
      isCollapse: false,
      name: '',
      photo: ''
    }
  },
  created () {
    const user = store.getUser()
    this.name = user.name
    this.photo = user.photo
  },
  methods: {
    toggleMenu () {
      this.isCollapse = !this.isCollapse
    },
    setting () {
      this.$router.push('/setting')
    },
    loginout () {
      store.clearUser()
      this.$router.push({ name: 'login' })
    },
    // elementui提供的方法
    clickMenu (menuType) {
      // <el-dropdown class="my-dropdown" @command="clickMenu">
      // <el-dropdown-item command="setting"
      this[menuType]()
    }
  }
}
</script>
<style scoped lang='less'>
.el-menu {
  border-right: none;
}
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .el-aside {
    background: #002033;
  }
}

.el-header {
  border-bottom: 1px solid #ddd;
  line-height: 60px;
}
.el-icon-s-fold {
  font-size: 24px;
  vertical-align: middle;
}
.text {
  vertical-align: middle;
  margin-left: 10px;
}
.my-dropdown {
  float: right;
}
.el-dropdown-link {
  font-weight: 700;
}
.member {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.logo {
  height: 60px;
  width: 100%;
  background: #002244 url(../../assets/images/logo_admin.png) no-repeat
    center/140px auto;
}
.mimiLogo {
  background-image: url(../../assets/images/logo_admin_01.png);
  background-size: 36px auto;
}

/* 问题 */
/* 1、字体图标哪些地方用类名，哪些地方直接调用，有分类吗，还是具体地方自己查看文档 */
/* 4、写了很多行内样式，这样会不会不太好，
    还是因为上课方便演示，直接写的，工作也是这样吗 */
/* 5、路径别称怎么使用 */
</style>
