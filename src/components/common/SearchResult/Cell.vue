<template>
  <el-row class="cell">
    <el-col :span="8">
      <div class="">
        <img class="img" src="" alt="">
      </div>
    </el-col>
    <el-col :span="7">
      <div>
        <p>Early Salary</p>
        <p>News Break</p>
        <p>特斯联</p>
      </div>
    </el-col>
    <el-col :span="4">517</el-col>
    <el-col :span="4">50</el-col>
  </el-row>
</template>

<script lang="babel">

  export default {
    data: function () {
      return {}
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
.cell {
  height: 100px;
  border-bottom: 1px solid #ddd;
  text-align: center;
  .img {
    width: 42px;
    height: 42px;
    background-color: yellow;
  }
}

</style>
