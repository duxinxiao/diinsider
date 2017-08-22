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
    <!--<el-carousel class="carousel" arrow="always" trigger="click">
            <el-carousel-item class="item" v-for="item in items" :key="item">
              <a v-bind:href="item.link">
                <div class="img" :style="{background: 'url(' + item.src + ')', backgroundSize: size }">
                  <div class="title">{{ item.desc }}</div>
                </div>
              </a>
            </el-carousel-item>
          </el-carousel>-->
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
          name: '地图',
          link: 'http://www.changemag-diinsider.com/',
          src: '/static/castle2.png',
          desc: 'Scaling up social impacts with grassroots',
        }, {
          name: '杂志',
          link: 'http://www.baidu.com/',
          src: '/static/castle1.png',
          desc: 'A total number of 200,000+ audience from 70+ countries',
        }, {
          name: '地图',
          link: 'http://www.changemag-diinsider.com/',
          src: '/static/castle3.jpg',
          desc: 'Diinsider advised JYOTI on women empowerment in Kushadevi village, Nepal',
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
  height: 80%;
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
          height: 60px;
          line-height: 60px;
          bottom: 0px;
          font-size: 1em;
          background: black;
          color: #F5F5F5;
          opacity: 0.6;
        }
      }
    }
  }
}

// .hover {
//   display: block;
//   margin: 0 auto;
//   width: 100%;
//   height: 90%;
//   .carousel {
//     height: 100%;
//     .item {
//       height: 100%;
//       .img {
//         height: 100%;
//         position: relative;
//         .title {
//           position: absolute;
//           width: 100%;
//           text-align: center;
//           height: 100px;
//           line-height: 100px;
//           bottom: 0px;
//           font-size: 2em;
//           background: black;
//           color: #F5F5F5;
//           opacity: 0.6;
//         }
//       }
//     }
//   }
// }
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
