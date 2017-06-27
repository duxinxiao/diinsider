<template>
  <div>
    <div class="tac">
      <el-menu class="menu" default-active="3" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1" class="item" @click="show(1)"><i class="el-icon-message"></i>背景知识</el-menu-item>
        <el-menu-item index="2" class="item" @click="show(2)"><i class="el-icon-menu"></i>创变杂志</el-menu-item>
        <el-menu-item index="3" class="item" @click="show(1)"><i class="el-icon-setting"></i>机遇动态</el-menu-item>
        <el-menu-item index="4" class="item" @click="show(2)"><i class="el-icon-setting"></i>活动速递</el-menu-item>
      </el-menu>
    </div>
    <div class="news">
      <div class="new" v-for="data in tableData">
          <div class="logo">
            <img v-bind:src="data.img" class="img"></img>
          </div>
          <div class="name">
            <p style="font-size: 15px; font-family: Microsoft YaHei" class="test">{{ data.name }}</p>
            <p>{{ data.desc }}</p>
          </div>
      </div>
    </div>
    <div class="news" v-if="false">
      <div class="new" v-for="data in tableData">
          <div class="logo">
            <img v-bind:src="data.img" class="img"></img>
          </div>
          <div class="name">
            <p style="font-size: 20px">{{ data.name }}</p>
            <p style="font-size: 25px; line-height: 100">{{ data.desc }}</p>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    index: String,
  },
  data() {
    const tableData = [{
      name: '污染，教育',
      img: '/static/test1.png',
      desc: '成立于2010年的 Satellogic 曾在2015年获得由腾讯领投的A轮融资',
      total: 1000,
      amount: '>10000$',
    }, {
      name: '新闻命啊风景大煞风景阿里；说的风景啊速递发牢骚减肥',
      img: '/static/test2.png',
      desc: '发送到发送到发送发送到发送的方法玩儿去额外让我发 i 哦俄军',
      total: 1000,
      amount: '>10000$',
    }, {
      name: 'afqjwejqiowerquwpoieruqwopeirupqwoeuroqwe',
      img: '/static/test3.png',
      desc: 'sakdfja;skfjaosidfjpioewurqpoiweurqpoweurqopwifujiweqjfqoiwj',
      total: 1000,
      amount: '>10000$',
    }, {
      name: '小卫星解决大问题，太空科技初创公司 Satellogic 获2700万美元B轮融资',
      img: '/static/test4.png',
      desc: '近日，专门研制迷你卫星的太空科技初创公司 Satellogic 获得了2700万美元 B 轮融资，投资方为腾讯，参投方为 CrunchFund。不久前，在酒泉卫星中心发射的中国长征4B火箭搭载了这家公司的第六颗微型卫星。',
      total: 1000,
      amount: '>10000$',
    }, {
      name: '机构名称',
      img: '/static/headline1.png',
      desc: '发送到发送到发送发送到发送的方法玩儿去额外让我发 i 哦俄军',
      total: 1000,
      amount: '>10000$',
    }]
    return {
      status: 1,
      index: 1,
      tableData: tableData,
      tableData1: [{
        name: '赛后份 i 苏阿双方 i 去哦委员任期为 u 起哦肥马轻裘贷款门槛父亲节尾气污染',
        img: '/static/test1.png',
        desc: '到上亿美元不分赛区污染强迫 i 为 u 去我诶清华五道口优秀企业',
        total: 1000,
        amount: '>10000$',
      }, {
        name: '新闻命啊风景大煞风景阿里；说的风景啊速递发牢骚减肥',
        img: '/static/test2.png',
        desc: '发送到发送到发送发送到发送的方法玩儿去额外让我发 i 哦俄军',
        total: 1000,
        amount: '>10000$',
      }, {
        name: '机构名称',
        img: '/static/headline1.png',
        desc: '发送到发送到发送发送到发送的方法玩儿去额外让我发 i 哦俄军',
        total: 1000,
        amount: '>10000$',
      }],
      tableData2: [{
        name: 'afqjwejqiowerquwpoieruqwopeirupqwoeuroqwe',
        img: '/static/test3.png',
        desc: 'sakdfja;skfjaosidfjpioewurqpoiweurqpoweurqopwifujiweqjfqoiwj',
        total: 1000,
        amount: '>10000$',
      }, {
        name: '小卫星解决大问题，太空科技初创公司 Satellogic 获2700万美元B轮融资',
        img: '/static/test4.png',
        desc: '近日，专门研制迷你卫星的太空科技初创公司 Satellogic 获得了2700万美元 B 轮融资，投资方为腾讯，参投方为 CrunchFund。不久前，在酒泉卫星中心发射的中国长征4B火箭搭载了这家公司的第六颗微型卫星。',
        total: 1000,
        amount: '>10000$',
      }, {
        name: '机构名称',
        img: '/static/headline1.png',
        desc: '发送到发送到发送发送到发送的方法玩儿去额外让我发 i 哦俄军',
        total: 1000,
        amount: '>10000$',
      }],
    }
  },
  methods: {
    show(index) {
      if (index === 1) {
        this.index = index
        this.tableData = this.tableData1
      } else if (index === 2) {
        this.tableData = this.tableData2
      }
    },
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
<style type="scss" scoped>
  .tac {
    float: left;
    width: 10%;
    background: white;
    padding: 100px;
  }
  .menu {
    background: white;
  }
  .item {
    height: 100px;
  }
  .news {
    padding-top: 50px;
    width: 95%;
  }
  .new {
    margin-left: 20px;
    float: left;
    display: inline-block;
    height: 350px;
    width: 400px;
  }
  .img {
    width: 300px;
    height: 200px;
  }
  .name {
    float: left;
    display: inline-block;
    width: 300px;

  }
  .test {
    font-family: '微软雅黑';
  }
</style>
