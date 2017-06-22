<template>
  <div class="container">
    <el-row class="header">
      <el-col :span="8">机构</el-col>
      <el-col :span="7">最近投资</el-col>
      <el-col :span="4">投资总数</el-col>
      <el-col :span="4">成员</el-col>
    </el-row>
    <cell></cell>
    <cell></cell>
    <cell></cell>
  </div>

</template>

<script lang="babel">
  import Cell from './Cell'

  export default {
    components: {
      Cell,
    },
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
.container {
  .header {
    text-align: center;
    font-size: 14px;
    padding: 10px 0px;
    border-bottom: 1px solid #ddd;
  }
}

</style>
