<template>
  <div id="program" class="program">
    <p class="title">
      Our Program
    </p>
    <p class="text">{{ this.t }}
      We work with a wide range of stakeholders to create sustainable impacts in the grassroots level
    </p>
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
      },
      items: [{
        src: '/static/test6.png',
        title: 'Grassroots Social Enterprises',
        link: '/registry',
        desc: 'We assist social enterprises that serve the grassroots with business development support, market accesibility, human resources and impact investments, to scale up social impacts with sustainable economic returns.',
      }, {
        src: '/static/test7.png',
        title: 'Impact Investors',
        link: 'www.baidu.com',
        desc: 'We assist impact investors to identify outstanding practices of social innovations in the grassroots level, and make good decisions to support the grassroots.',
      }, {
        src: '/static/test6.png',
        link: 'www.baidu.com',
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
  background: rgba(255, 255, 255, 0.3);
  padding-top: 2%;
  height: 90%;
  width: 100%;
  font-family: 'Times New Roman';
  .title {
    color: white;
    font-size: 2vw;
    text-align: center;
    font-weight: bold;
  }
  .text {
    color: white;
    text-align: center;
    margin-top: -12px;
    font-size: 1.5vw;
  }
  .row {
    height: 70%;
    width: 100%;
    padding-left: 5%;
  }
}

</style>
