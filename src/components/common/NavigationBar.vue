<template>
<div class="header-wrapper">
  <header class="header">
    <div class="container">
      <div class="logo">
        LOGO
      </div>
      <div class="menu">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </div>
      <div class="login">
        登录 / 注册
      </div>
    </div>
  </header>
</div>
</template>

<script lang="babel">
export default {
  data: function () {
    return {
      activeIndex: 1,
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
  }
}
</style>

<style lang="scss">
.header-wrapper {
  .el-menu {
    background-color: white;
  }
}
</style>
