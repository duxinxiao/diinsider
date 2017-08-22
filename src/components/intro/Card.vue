<template>
  <div class="col" @click="open(item.link)">
  
    <img class="img" :src="item.image"></img>
    <div class="item">
      <p class="item-title">{{ item.title }}</p>
      <div class="item-desc">{{ item.description }}</div>
      <div class="item-source">{{ item.source }}</div>
      <div class="item-time">2017-01-01</div>
    </div>
  
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
  background: white;
  height: 100%;
  display: inline-block;
  margin: 0 1%;
  .img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 50%;
  }
  .item {
    width: 100%;
    height: 40%;
    margin: 0 auto;
    overflow-y: auto;
    .item-title {
      font-size: 1.5em;
      text-align: left;
      padding: 0 5%;
      font-weight: bold;
    }
    .item-desc {
      font-size: 1.2em;
      padding: 0 5%;
      text-align: left;
      color: #FF830F;
    }
    .item-source {
      display: inline-block;
      margin-top: 2%;
      font-size: 1em;
      padding: 0 5%;
      text-align: left;
    }
    .item-time {
      margin-top: 2%;
      float: right;
      font-size: 1em;
      padding: 0 5%;
      text-align: left;
    }
  }
}
</style>
<style>
.el-card {
  overflow-y: auto;
  height: 100%;
  border: none;
}

.el-card__body {
  height: 95%;
  padding: 0;
  border: none;
}
</style>
