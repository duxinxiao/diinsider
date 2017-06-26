<template>
  <div class="searchResult">
    <el-table :data="tableData" class="table">
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
    components: {
    },
    data: function () {
      return {
        tableData: [{
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
