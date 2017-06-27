<template>
  <div class="searchResult">
    <el-table :data="tableData" class="table" @row-click="open">
      <el-table-column label="机构" min-width="55%">
        <template scope="org">
          <div class="logo">
            <img v-bind:src="org.row.img" class="img"></img>
          </div>
          <div class="name">
            <p style="font-size: 20px">{{ org.row.name }}</p>
            <p>{{ org.row.desc }}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="最近投资" min-width="25%" align="center">
        <template scope="org">
          <p>{{ org.row.total }}</p>
        </template>
      </el-table-column>
      <el-table-column label="投资总数" min-width="15%" align="center">
        <template scope="org">
          <p>{{ org.row.total }}</p>
        </template>
      </el-table-column>
      <el-table-column label="成员" min-width="15%" align="center">
        <template scope="org">
          <p>{{ org.row.amount }}</p>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script lang="babel">
  export default {
    props: {
      index: String,
    },
    components: {
    },
    data: function () {
      const tableData1 = [{
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
      }]
      const tableData2 = [{
        name: 'IDG资本',
        img: '/static/interview.png',
        desc: 'IDG资本于1992年开始在中国进行风险投资，是最早进入中国的外资投资基金。24年来，IDG资本重点关注互联网、移动互联网、文化娱乐、新型消费品及服务等领域，投资项目覆盖各个阶段，规模从上百万美元到上亿美元不等。迄今为止，IDG资本已在中国扶植超过500家优秀企业',
        total: 1000,
        amount: '>10000$',
      }, {
        name: '机构名称',
        img: '/static/solution.png',
        desc: '发送到发送到发送发送到发送的方法玩儿去额外让我发 i 哦俄军',
        total: 1000,
        amount: '>10000$',
      }, {
        name: '机构名称',
        desc: '发送到发送到发送发送到发送的方法玩儿去额外让我发 i 哦俄军',
        total: 1000,
        amount: '>10000$',
      }, {
        name: '机构名称',
        desc: '发送到发送到发送发送到发送的方法玩儿去额外让我发 i 哦俄军',
        total: 1000,
        amount: '>10000$',
      }, {
        name: '机构名称',
        desc: '发送到发送到发送发送到发送的方法玩儿去额外让我发 i 哦俄军',
        total: 1000,
        amount: '>10000$',
      }, {
        name: '机构名称',
        desc: '发送到发送到发送发送到发送的方法玩儿去额外让我发 i 哦俄军',
        total: 1000,
        amount: '>10000$',
      }]
      return {
        tableData: this.index === '1' ? tableData1 : tableData2,
      }
    },
    computed: {
    },
    methods: {
      open() {
        this.$router.push({ path: '/detail' })
      },
    },
    filters: {
    },
  }
</script>

<style lang="scss" scoped>
.searchResult {
  height: 100%;
  margin-top: 15px;
  .table {
    .logo {
      padding-top: 15px;
      width: 100px;
      height: 100px;
      float: left;
      .img {
        width: 80px;
        height: 80px;
      }
    }
    .name {
      margin-left: 100px;
    }
  }

}

</style>
