<template>
  <div class="col" @click="open(item.link)">
    <el-card>
      <img class="img" :src="item.src"></img>
      <div class="item">
        <p class="item-title">{{ item.title }}</p>
        <p class="item-desc">{{ item.desc }}</p>
      </div>
    </el-card>
  </div>
</template>
<script lang="babel">

  export default {
    props: {
      item: Object,
    },
    data: function () {
      return {
      }
    },
    computed: {
    },
    methods: {
      open: function (link) {
        this.$router.push({ path: link })
      },
    },
    filters: {
    },
  }
</script>
<style lang="scss" scoped>

.col {
  height: 100%;
  display: inline-block;
  margin: 0 1%;
  .img {
    padding-top: 1%;
    display: block;
    margin: 0 auto;
    width: 90%;
    height: 45%;
  }
  .item {
    width: 90%;
    height: 45%;
    margin: 0 auto;
    .item-title {
      font-size: calc(1.2em + 0.6vw);
      text-align: center;
    }
    .item-desc {
      font-size: calc(1.2em + 0.3vw);
      padding: 0 5%;
      text-align: center;
    }
  }
}
</style>
<style>
.el-card {
  background-color: rgba(255, 255, 255, 0.8);
  overflow-y: auto;
  height: 100%;
}
.el-card__body {
  height: 90%;
  padding: 5%;
}
</style>
