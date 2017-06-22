<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeCreate() {
    const adminId = sessionStorage.getItem('adminId')
    if (!adminId) {
      console()
    }
  },
}
</script>

<style>
html {
  font-size: 16px;
  font-family: Helvetica Neue, Helvetica, Roboto, sans-serif, Arial;
  /*background: url("/static/background.jpg");*/
  background-repeat: no-repeat;
  background-size: 100%, 100%;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
