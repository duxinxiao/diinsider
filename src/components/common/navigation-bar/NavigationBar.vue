<template>
<div class="header-wrapper">
  <header class="header">
    <div class="container">
      <div class="logo">
        LOGO
      </div>
      <div class="menu">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">社创前沿</el-menu-item>
          <el-menu-item index="3">初创企业</el-menu-item>
          <el-menu-item index="4">非营利组织</el-menu-item>
          <el-menu-item index="5">影响力投资者</el-menu-item>
          <el-submenu index="6">
            <template slot="title">其他机构</template>
            <div class="submenu">
              <submenu-item class="menu-item" title="子菜单1" subtitle="subtitle" src="" to="home"></submenu-item>
              <submenu-item class="menu-item" title="子菜单2" subtitle="subtitle" src="" to=""></submenu-item>
              <submenu-item class="menu-item" title="子菜单3" subtitle="subtitle" src="" to=""></submenu-item>
              <submenu-item class="menu-item" title="子菜单4" subtitle="subtitle" src="" to=""></submenu-item>
            </div>
          </el-submenu>
        </el-menu>
      </div>
      <div class="login">
        <router-link to="login">登录</router-link>
        /
        <router-link to="register">注册</router-link>
      </div>
    </div>
  </header>
</div>
</template>

<script lang="babel">
import SubmenuItem from './MenuItem'

export default {
  components: {
    SubmenuItem,
  },
  data: function () {
    return {
      activeIndex: '1',
    }
  },
  computed: {},
  methods: {},
  filters: {},
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  display: block;
  height: 60px;
  border-bottom: 2px solid #EEE;
  .header {
    height: 60px;
    background-color: white;
    color: #333;
    position: relative;
    left: 0;
    top: 0;
    right: 0;
  }
}
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .logo {
    display: inline-block;
    height: 100%;
    line-height: 60px;
    vertical-align: top;

    width: 200px;
  }
  .menu {
    display: inline-block;
    height: 100%;
    line-height: 60px;
    vertical-align: top;
  }
  .login {
    display: inline-block;
    height: 100%;
    line-height: 60px;
    vertical-align: top;
    float: right;
    margin-right: 30px;

    font-size: 14px;
    color: #48576a;
    & a {
      color: #48576a;
    }
  }
}
.submenu {
  text-align: center;
  .menu-item {
    margin: 1rem 0;
  }
}
</style>

<style lang="scss">
.header-wrapper {
  .el-menu {
    background-color: white;
    position: static;
  }
  .el-submenu {
    position: static;
  }
}
</style>
