<template>
<div class="header-wrapper">
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="../../../assets/logo.png" alt="">
        <span class="logo-text">scaling up social impacts with the grassroots</span>
      </div>
      <div class="menu">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">社创前沿</template>
            <div class="submenu">
              <submenu-item class="menu-item" title="深度访谈" src="/static/interview.png" to="home"></submenu-item>
              <submenu-item class="menu-item" title="案例分析" src="/static/investor.png" to=""></submenu-item>
              <submenu-item class="menu-item" title="机遇动态" src="/static/solution.png" to=""></submenu-item>
              <submenu-item class="menu-item" title="活动速递" src="/static/authen.png" to=""></submenu-item>
            </div>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">初创企业</template>
            <div class="submenu">
              <submenu-item class="menu-item" title="寻求报道" subtitle="有机会登上Diinsider首页" src="/static/interview.png" to="interview.png"></submenu-item>
              <submenu-item class="menu-item" title="投资对接" subtitle="为你找到最匹配的投资人" src="/static/investor.png" to=""></submenu-item>
              <submenu-item class="menu-item" title="解决方案" subtitle="完善你的社会影响力解决方案" src="/static/solution.png" to=""></submenu-item>
              <submenu-item class="menu-item" title="申请认证" subtitle="认证后更容易得到投资人青睐" src="/static/authen.png" to=""></submenu-item>
            </div>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">非营利组织</template>
            <div class="submenu">
              <submenu-item class="menu-item" title="创新咨询 " subtitle="subtitle" src="/static/interview.png" to="home"></submenu-item>
              <submenu-item class="menu-item" title="合作机会" subtitle="subtitle" src="/static/investor.png" to=""></submenu-item>
            </div>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">影响力投资者</template>
            <div class="submenu">
              <submenu-item class="menu-item" title="项目对接" subtitle="为你找到最合适的项目" src="/static/interview.png" to="home"></submenu-item>
              <submenu-item class="menu-item" title="定制研究" subtitle="市场/项目尽职调查，助力投资决策" src="/static/investor.png" to=""></submenu-item>
            </div>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">更多机构</template>
            <div class="submenu">
              <submenu-item class="menu-item" title="项目对接" subtitle="匹配社会企业/NGO，合作实现双赢" src="/static/interview.png" to="home"></submenu-item>
              <submenu-item class="menu-item" title="定制研究" subtitle="关于社会创新解决发展问题的研究" src="/static/investor.png" to=""></submenu-item>
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
  width: 100%;
  border-bottom: 2px solid #EEE;
  .header {
    width: 100%;
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
  z-index: 999;
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
  .logo {
    display: inline-block;
    height: 100%;
    line-height: 60px;
    vertical-align: top;
    color: #48576a;
    font-family: element-icons;
    font-weight: bold;
    width: 750px;
    .logo-text {
        font-size: 15px;
        vertical-align: top;
        padding: -10px 30px;
        white-space: nowrap;
    }
  }
  .menu {
    display: inline-block;
    height: 100%;
    width: 1000px;
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
  };
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
