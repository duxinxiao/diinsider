<template>
  <div class="all">
    <div class="tac">
      <el-menu class="menu" :default-active="String(this.$route.query.index)" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1" class="item" @click="show('1')">
          <i class="el-icon-message"></i>背景知识</el-menu-item>
        <el-menu-item index="2" class="item" @click="show('2')">
          <i class="el-icon-menu"></i>创变杂志</el-menu-item>
        <el-menu-item index="3" class="item" @click="show('3')">
          <i class="el-icon-setting"></i>机遇动态</el-menu-item>
        <el-menu-item index="4" class="item" @click="show('4')">
          <i class="el-icon-setting"></i>活动速递</el-menu-item>
      </el-menu>
    </div>
    <div class="news">
      <div class="new" v-for="data in tableData" :key="data.id">
        <div class=" logo ">
          <img v-bind:src="data.img " class="img "></img>
        </div>
        <div class="name ">
          <p style="font-size: 15px; font-family: Microsoft YaHei " class="test ">{{ data.title }}</p>
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
<style>
.el-menu {
  height: 100%;
}
</style>
