<template>
  <div class="hover">
    <el-carousel class="carousel" type="card" arrow="always" trigger="click">
			<el-carousel-item class="item" v-for="item in items" :key="item">
        <a v-bind:href="item.link">
          <div class="img" :style="{background: 'url(' + item.src + ')', backgroundSize: size }">
            <div class="title">{{ item.desc }}</div>
          </div>
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
        size: '100% 100%',
        items: [{
          name: '杂志',
          link: 'http://www.baidu.com/',
          src: '/static/test1.png',
          desc: '图灵机器人与国资委达成合作',
        }, {
          name: '地图',
          link: 'http://www.changemag-diinsider.com/',
          src: '/static/test4.png',
          desc: 'Headstart面临的又一个问题是同领域的竞争',
        }, {
          name: '地图',
          link: 'http://www.changemag-diinsider.com/',
          src: '/static/test5.png',
          desc: '编不出来',
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
  .hover {
    display: block;
    padding-top: 5%;
    margin: 0 auto;
    width: 90%;
    height: 70%;
    .carousel {
      height: 100%;
      .item {
        height: 100%;
        .img {
          height: 100%;
          position: relative;
          .title {
            position: absolute;
            width: 100%;
            text-align: center;
            height: 80px;
            line-height: 60px;
            bottom: 0px;
            font-size: 25px;
            background: black;
            color: white;
            opacity: 0.6;
          }
        }
      }
    }
  }
</style>
<style>
.el-carousel__indicators--outside .el-carousel__indicator:hover button {
    opacity: .84
}

.el-carousel__indicators--outside button {
    background-color: white;
    opacity: .48
}
.el-carousel__arrow {
    width: 66px;
    height: 66px;
    font-size: 25px
}
.el-carousel__container {
    position: relative;
    height: 80%
}
</style>
