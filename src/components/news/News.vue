<template>
  <div style="height: 100%">
    <div class="tac">
      <el-menu class="menu" :default-active="String(this.$route.query.index)" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1" class="item" @click="show('1')"><i class="el-icon-message"></i>背景知识</el-menu-item>
        <el-menu-item index="2" class="item" @click="show('2')"><i class="el-icon-menu"></i>创变杂志</el-menu-item>
        <el-menu-item index="3" class="item" @click="show('3')"><i class="el-icon-setting"></i>机遇动态</el-menu-item>
        <el-menu-item index="4" class="item" @click="show('4')"><i class="el-icon-setting"></i>活动速递</el-menu-item>
      </el-menu>
    </div>
    <div class="news">
      <div class="new" v-for="data in tableData">
          <div class="logo">
            <img v-bind:src="data.img" class="img"></img>
          </div>
          <div class="name">
            <p style="font-size: 15px; font-family: Microsoft YaHei" class="test">{{ data.title }}</p>
            <p>{{ data.desc }}</p>
          </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {

  data() {
    return {
      status: 1,
      tableData: '',
    }
  },
  methods: {
    show: async function (index) {
      const response = await this.$ajax('/test/news/list', { params: { type: index } })
      this.tableData = response.data.data
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
  created: function () {
    this.show(this.$route.query.index)
  },
}
</script>
<style type="scss" scoped>
  .tac {
    float: left;
    width: 10%;
    height: 100%;
    padding: 100px;
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
<style>
.el-menu {
  height: 100%;
}
</style>
