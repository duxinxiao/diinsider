<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
html {
  font-family: Helvetica Neue, Helvetica, Roboto, sans-serif, Arial;
}
a {
  text-decoration: none;
  color: inherit;
}
#app {
  background: url('/static/background.jpg');
  width: 100%;
  min-width: 1250px;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
