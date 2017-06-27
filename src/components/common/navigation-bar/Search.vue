<template>
  <div class="search">
    <div class="input">
      <el-input
        placeholder="输入关键字搜索感兴趣的内容"
        icon="search"
        v-model="input2"
        :on-icon-click="handleIconClick">
      </el-input>
    </div>
  </div>
</template>

<script lang="babel">

  export default {
    components: {
    },
    data: function () {
      return {
        input2: '',
        items: ['教育', '环境', '健康', '可再生能源', '农业', '小微金融', '性别平等', '北京', '上海', '海外'],
      }
    },
    computed: {
    },
    methods: {
      handleIconClick(txt) {
        console.log(txt)
      },
    },
    filters: {
    },
  }
</script>
<style lang="scss" scoped>
  .search {
    display: inline-block;
    width: 30%;
    min-width: 375px;
    height: 600px;
    .input {
      padding: 50px 50px 0 50px;
    }
    .img {
      width: 100%;
      height: 400px;
    }
  }

</style>
