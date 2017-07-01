<template>
  <div class="sub-menu-item">
    <router-link v-if="this.to !== '' " :to="{ path: to, query: param }">
      <img v-bind:src="src" class="icon">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </router-link>
    <div v-if="this.to === ''" @click="open(title, title)">
      <img v-bind:src="src" class="icon">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script lang="babel">

  export default {
    props: {
      src: String,
      title: String,
      subtitle: String,
      to: String,
      param: Object,
    },
    data: function () {
      return {}
    },
    computed: {
    },
    methods: {
      open(title, msg) {
        const h = this.$createElement
        this.$msgbox({
          title: title,
          message: h('div', { style: '' }, [
            h('div', { style: 'background: url(/static/qrcode.jpeg); background-repeat: no-repeat; height: 200px; width: 200px; margin: 0 auto;' }, ''),
            h('p', { style: 'text-align: center; margin: 0 5rem; margin-top: 2rem' }, `扫描二维码，关注diinsider公众号，回复"${msg}"，我们会提供更细致的服务`),
          ]),
        }).then((action) => {

        })
      },
    },
    filters: {
    },
  }
</script>

<style lang="scss" scoped>
.sub-menu-item {
  vertical-align: top;
  display: inline-block;
  width: 20%;
  height: 125px; // background-color: red;
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
  color: #144282;
  font-weight: bold;
}

.subtitle {
  height: 20px;
  line-height: 20px;
  margin-top: 10px;
  color: black;
  font-size: 12px;
}
</style>
