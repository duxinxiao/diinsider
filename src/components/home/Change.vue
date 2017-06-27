<template>
  <div class="change">
    <img class="img" src="/static/change.png"></img>
    <div class="text">
      <p class="title">Diinsier</p>
      <p class="slogen">Scaling up social impacts with the grassroots</p>
    </div>
  </div>
</template>

<script lang="babel">

  export default {
    components: {
    },
    data: function () {
      return {
      }
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
  .change {
    float: right;
    display: inline-block;
    width: 30%;
    height: 60%;
    .text {
      margin-left: 15%;
      margin-top: -5%;
      .title {
        font-weight: bold;
        color: #6399DC;
        font-size: 30px;
      }
      .slogen {
        font-size: 20px;
        margin-top: -5%;
        font-family: 'Times New Roman'
      }
    }
    .img {
      width: 70%;
      padding-left: 20%;
      margin-top: 5%;
      height: 60%;
    }
  }
</style>
