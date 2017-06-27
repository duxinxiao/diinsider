<template>
  <el-card class="col">
    <img class="img" :src="src"></img>
    <div class="item">
      <p class="item-title">{{ title }}}</p>
      <p class="item-desc">{{ desc }}</p>
    </div>
  </el-card>
</template>
<script lang="babel">
export default {
  props: {
    src: String,
    title: String,
    desc: String,
  },
  data: function() {
    return {}
  },
  computed: {},
  methods: {
    open(title, msg) {
      const h = this.$createElement
      this.$msgbox({
        title: title,
        message: h('div', {
          style: ''
        }, [
          h('div', {
            style: 'background: url(/static/qrcode.jpeg); background-repeat: no-repeat; height: 200px; width: 200px; margin: 0 auto;'
          }, ''),
          h('p', {
            style: 'text-align: center; margin: 0 5rem; margin-top: 2rem'
          }, `扫描二维码，关注diinsider公众号，回复"${msg}"，我们会提供更细致的服务`),
        ]),
      }).then((action) => {

      })
    },
  },
  filters: {},
}
</script>
<style lang="scss" scoped>
.col {
  display: inline-block;
  margin: 0 1%;
  height: 100%;
  .img {
    position: absolute;
    display: block;
    width: 25%;
    height: 30%;
  }
  .item {
    position: absolute;
    width: 25%;
    height: 15%;
    margin: 0 auto;
    margin-top: 15%;
    .item-title {
      font-size: 20px;
      text-align: center;
    }
    .item-desc {
      padding: 0 5%;
      text-align: center;
    }
  }
}
</style>
