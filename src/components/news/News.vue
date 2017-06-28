<template>
  <div class="all">
    <div class="tac">
      <el-menu class="menu" default-active="3" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1" class="item" @click="show(1)"><i class="el-icon-message"></i>背景知识</el-menu-item>
        <el-menu-item index="2" class="item" @click="show(2)"><i class="el-icon-menu"></i>创变杂志</el-menu-item>
        <el-menu-item index="3" class="item" @click="show(1)"><i class="el-icon-setting"></i>机遇动态</el-menu-item>
        <el-menu-item index="4" class="item" @click="show(2)"><i class="el-icon-setting"></i>活动速递</el-menu-item>
      </el-menu>
    </div>
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
<script>
export default {
  props: {
    index: String,
  },
  data() {
    const items = [{
      title: '污染，教育',
      src: '/static/test1.png',
      desc: '成立于2010年的 Satellogic 曾在2015年获得由腾讯领投的A轮融资',
      total: 1000,
      amount: '>10000$',
    }, {
      title: '新闻命啊风景大煞风景阿里；说的风景啊速递发牢骚减肥',
      src: '/static/test2.png',
      desc: '发送到发送到发送发送到发送的方法玩儿去额外让我发 i 哦俄军',
      total: 1000,
      amount: '>10000$',
    }, {
      title: 'afqjwejqiowerquwpoieruqwopeirupqwoeuroqwe',
      src: '/static/test3.png',
      desc: 'sakdfja;skfjaosidfjpioewurqpoiweurqpoweurqopwifujiweqjfqoiwj',
      total: 1000,
      amount: '>10000$',
    }, {
      title: '小卫星解决大问题，太空科技初创公司 Satellogic 获2700万美元B轮融资',
      src: '/static/test4.png',
      desc: '近日，专门研制迷你卫星的太空科技初创公司 Satellogic 获得了2700万美元 B 轮融资，投资方为腾讯，参投方为 CrunchFund。不久前，在酒泉卫星中心发射的中国长征4B火箭搭载了这家公司的第六颗微型卫星。',
      total: 1000,
      amount: '>10000$',
    }, {
      title: '机构名称',
      src: '/static/headline1.png',
      desc: '发送到发送到发送发送到发送的方法玩儿去额外让我发 i 哦俄军',
      total: 1000,
      amount: '>10000$',
    }]
    return {
      status: 1,
      index: 1,
      items: items,
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="scss" scoped>
.all {
  width: 100%;
  height: 100%;
  .tac {
    float: left;
    width: 10%;
    height: 100%;
    padding: 50px;
    .menu {
      height: 100%;
      .item {
        height: 20%;
      } 
    }
  }
  .row {
    float: left;
    display: inline-block;
    height: 50%;
    width: 80%;
    margin-bottom: 200px;
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
  background: transparent;
  overflow-y: scroll;
  height: 100%;
}
.el-card__body {
  height: 100%;
  padding: 20px;
}
</style>
