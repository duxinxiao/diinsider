<template>
  <div class="sub-menu-item">
    <router-link :to="to">
      <img  v-bind:src="src" class="icon">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </router-link>
  </div>
</template>

<script lang="babel">

  export default {
    props: {
      src: String,
      title: String,
      subtitle: String,
      to: String,
    },
    data: function () {
      return {}
    },
    computed: {
    },
    methods: {
    },
    filters: {
    },
  }
</script>

<style lang="scss" scoped>
.sub-menu-item {
  vertical-align: top;
  display: inline-block;
  width: 300px;
  height: 125px;
  // background-color: red;
  position: relative;
}
.icon {
  width: 60px;
  height: 60px;
  margin: auto;
  display: block;
  background-color: white;
}
.title {
  height: 25px;
  line-height: 25px;
  margin-top: 10px;
  font-size: 18px;
}
.subtitle {
  height: 20px;
  line-height: 20px;
  margin-top: 10px;
  color: #68727D;
  font-size: 14px;
}

</style>
