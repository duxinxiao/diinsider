<template>
  <div id="hover" class="block">
    <el-carousel trigger="click" height="450px">
			<el-carousel-item v-for="item in items" :key="item">
        <a href="http://www.changemag-diinsider.com/">
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
          link: 'http://www.changemag-diinsider.com/',
        }, {
          name: '地图',
          link: 'http://www.changemag-diinsider.com/',
        }],
      }
    },
    computed: {
    },
    methods: {
      handleItemClick() {
        this.$alert('这是一段内容', '标题名称')
      },
    },
    filters: {
    },
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background: url("/static/headline1.png");
     background-size: 100% 100%;
     background-repeat:no-repeat;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background: url("/static/headline2.png");
     background-size: 100% 100%;
     background-repeat:no-repeat;
  }
</style>
