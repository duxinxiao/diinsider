<template>
  <div id="hover" class="block">
    <el-carousel style="height: 500px;" trigger="click">
			<el-carousel-item style="height: 500px" v-for="item in items" :key="item">
        <a v-bind:href="item.link">
          <div style="width: 100%; height: 100%;"></div>
        </a>
			</el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="babel">

  export default {
    components: {
    },
    data: function () {
      return {
        items: [{
          name: '杂志',
          link: 'http://www.baidu.com/',
        }, {
          name: '地图',
          link: 'http://www.changemag-diinsider.com/',
        }],
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
  .block {
    display: inline-block;
    width: 60%;
    min-width: 750px;
    height: 550px;
    padding: 50px 50px 0px 50px;
  }

  .el-carousel__item:nth-child(2n) {
    background: url("/static/headline2.png");
    background-size: 100% 100%;
    background-repeat:no-repeat;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background: url("/static/headline1.png");
    background-size: 100% 100%;
    background-repeat:no-repeat;
  }
</style>
