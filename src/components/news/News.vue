<template>
  <el-tabs v-model="activeName2" @tab-click="handleClick">
    <div style="width: 1000px">
    <el-tab-pane class="test" width="1000px" label="用户管理" name="first">用户管理</el-tab-pane>
    </div>
    <div style="width: 1000px">
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    </div>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName2: 'first',
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      },
    },
  }
</script>
<style type="" scoped>
  .el-tabs {
    padding: 0 200px;
    background: white;
  }
</style>
