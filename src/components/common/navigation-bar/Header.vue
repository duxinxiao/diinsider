<template>
  <div class="header">
    <div class="logo">
      <img class="logo-img" src="/static/logo2.png" alt="">
      <div class="logo-text"></div>
    </div>
    <navigationBar></navigationBar>
  
    <div class="user" v-if="loginStatus != 1">
      <router-link :to="{ path: 'register', query: { step: 1 } }">
        <img src="/static/register.png" class="loginImg">
        <div class="userText">{{ $t("register") }}</div>
      </router-link>
    </div>
    <div class="user" v-if="loginStatus != 1">
      <router-link to="login">
        <img src="/static/login.png" class="loginImg">
        <div class="userText">{{ $t("login") }}</div>
      </router-link>
    </div>
    <div class="user" v-if="loginStatus == 1" @click="exit">
      <img src="/static/exit.png" class="loginImg">
      <div class="userText">{{ $t("exit") }}</div>
    </div>
  
  </div>
</template>
<script lang="babel">
import NavigationBar from '@/components/common/navigation-bar/NavigationBar'

export default {
  props: [
    'status',
    'admin',
  ],
  components: {
    NavigationBar,
  },
  data: function () {
    return {
      loginStatus: this.status,
    }
  },
  watch: {
    status(curVal, oldVal) {
      this.loginStatus = sessionStorage.getItem('loginStatus')
    },
  },
  computed: function () {
    this.loginStatus = sessionStorage.getItem('loginStatus')
  },
  beforeCreate: function () {
    this.loginStatus = sessionStorage.getItem('loginStatus')
  },
  created: function () {
    this.loginStatus = sessionStorage.getItem('loginStatus')
  },
  methods: {
    exit: async function () {
      this.loginStatus = false
      sessionStorage.setItem('loginStatus', 0)
      await this.$ajax('/test/admin/logout')
    },
  },
  filters: {},
}
</script>
<style lang="scss" scoped>
.header {
  background-color: transparent;
  display: block;
  z-index: 999;
  height: 10%;
  max-height: 800px;
  width: 100%;
  .logo {
    float: left;
    height: 100%;
    width: 15%;
    .logo-img {
      vertical-align: middle;
      width: 80%;
      height: 80%;
      padding: 2% 5% 1% 10%;
    }
  }
  .user {
    float: right;
    height: 80%;
    width: 3%;
    text-align: center;
    padding-top: 1%;
    padding-right: 1%;
    font-size: 12px;

    .loginImg {
      height: 40%;
      width: 60%;
    }
    .userText {
      padding-top: 5%;
      color: #96CBFB;
    }
    .lang {
      padding-top: 40%;
      color: #96CBFB;
    }
  }
  .lang {
    float: right;
    height: 80%;
    width: 4%;
    text-align: center;
    padding-top: 1%;
    padding-right: 1%;
    font-size: 12px;
    .langText {
      padding-top: 20%;
      color: white;
    }
  }
}
</style>
