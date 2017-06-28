<template>
  <div class="header">
    <div class="logo">
      <img class="logo-img" src="~@/assets/logo.png" alt="">
      <div class="logo-text">grassroots first</div>
    </div>
    <navigationBar></navigationBar>
    <div class="login">
      <router-link to="login">登录</router-link>
      /
      <router-link to="register">注册</router-link>
    </div>
  </div>
</template>
<script lang="babel">
import NavigationBar from '@/components/common/navigation-bar/NavigationBar'

export default {
  components: {
    NavigationBar,
  },
  data: function () {
    return {}
  },
  computed: {},
  methods: {},
  filters: {},
}
</script>
<style lang="scss" scoped>
.header {
  display: block;
  z-index: 999;
  height: 10%;
  max-height: 800px;
  width: 100%;
  .logo {
    float: left;
    height: 100%;
    width: 25%;
    .logo-img {
      vertical-align: middle;
      width: 45%;
      height: 100%;
    }
    .logo-text {
      vertical-align: middle;
      display: inline-block;
      color: white;
      font-size: 15px;
      font-weight: bold;
      white-space: nowrap;
    }
  }
  .login {
    float: right;
    height: 80%;
    width: 7%;
    text-align: right;
    padding-right: 2%;
    padding-top: 2%;
    font-size: 16px;
    a {
      color: #B5B7BD;
    }
  }
}
</style>
