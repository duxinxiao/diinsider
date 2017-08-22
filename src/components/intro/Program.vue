<template>
  <div id="program" class="program">
    <div class="title">
      Our Program
    </div>
    <div class="text"> We work with a wide range of stakeholders to create sustainable impacts in the grassroots level
    </div>
    <div class="text">{{ this.a }}aaa
    </div>
    <div class="row">
      <card v-for="item in items" :style="style" :item="item"></card>
    </div>
  </div>
</template>
<script lang="babel">
import Card from '@/components/intro/Card'

export default {
  components: {
    Card,
  },
  data: function () {
    return {
      style: {
        width: '28%',
        marginTop: '100px',
      },
      items: [{
        image: '/static/headline3.png',
        title: 'Scale up your intiatives',
        link: '/registry',
        description: 'We assist social enterprises that serve the grassroots with business development support, market accesibility, human resources and impact investments, to scale up social impacts with sustainable economic returns.',
      }, {
        image: '/static/sub3.jpeg',
        title: 'Impact investing',
        link: 'www.baidu.com',
        description: 'We assist impact investors to identify outstanding practices of social innovations in the grassroots level, and make good decisions to support the grassroots.',
      }, {
        image: '/static/sub5.jpeg',
        link: 'www.baidu.com',
        title: 'Corporations, government, academia',
        description: 'We assist corporations, governments, academia and other stakeholders to connect with the grassroots, and create positive values for both sides.',
      }],
    }
  },
  beforeCreate: function () {
    this.a = sessionStorage.getItem('email')
  },
  computed: function () {
    // this.a = sessionStorage.getItem('email')
    this.a = 'aaaaaa'
  },
  methods: {
  },
  filters: {
  },
}
</script>
<style lang="scss" scoped>
.program {
  background: #000000;
  height: 100%;
  width: 100%;
  font-family: 'Times New Roman';
  .title {
    color: white;
    font-size: 2em;
    text-align: center;
    font-weight: bold;
  }
  .text {
    color: white;
    text-align: center;
    font-size: 1em;
  }
  .row {
    height: 80%;
    width: 100%;
    padding-top: 1%;
    padding-left: 6%;
  }
}
</style>
<style>
.el-card {
  overflow-y: auto;
  height: 100%;
}

.el-card__body {
  height: 100%;
  padding: 20px;
}
</style>
