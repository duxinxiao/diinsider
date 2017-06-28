<template>
  <div id="program" class="program">
    <p class="title">
      Our Program
    </p>
    <p class="text">
      We work with a wide range of stakeholders to create sustainable impacts in the grassroots level
    </p>
    <div class="row">
      <el-card class="col" v-for="item in items">
        <img class="img" :src="item.src"></img>
        <div class="item">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="babel">
export default {
  components: {
  },
  data: function () {
    return {
      items: [{
        src: '/static/test6.png',
        title: 'Grassroots Social Enterprises',
        desc: 'We assist social enterprises that serve the grassroots with business development support, market accesibility, human resources and impact investments, to scale up social impacts with sustainable economic returns.',
      }, {
        src: '/static/test7.png',
        title: 'Impact Investors',
        desc: 'We assist impact investors to identify outstanding practices of social innovations in the grassroots level, and make good decisions to support the grassroots.',
      }, {
        src: '/static/test6.png',
        title: 'Corporations, government, academia',
        desc: 'We assist corporations, governments, academia and other stakeholders to connect with the grassroots, and create positive values for both sides.',
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
.program {
  background: rgba(255, 255, 255, 0);
  padding-top: 2%;
  height: 90%;
  width: 100%;
  font-family: 'Times New Roman';
  .title {
    color: white;
    font-size: 30px;
    text-align: center;
  }
  .text {
    color: white;
    text-align: center;
    margin-top: -12px;
    font-size: 20px;
  }
  .row {
    height: 70%;
    width: 100%;
    padding-left: 5%;
    .col {
      display: inline-block;
      width: 28%;
      margin: 0 1%;
      height: 100%;
      .img {
        display: block;
        margin: 0 auto;
        width: 90%;
        height: 45%;
      }
      .item {
        width: 90%;
        height: 55%;
        margin: 0 auto;
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
  }
}

</style>
<style>
.el-card {
  background: rgba(255,255,255,0.5);
  overflow-y: auto;
  height: 100%;
}
.el-card__body {
  height: 100%;
  padding: 20px;
}
</style>
