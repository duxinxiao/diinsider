<template>
  <div class="container">
    <div class="header">
    <item-filter
      class="filter"
      title="影响领域"
      :items="['教育', '环境', '健康', '农业', '可再生能源', '小微金融', '性别平等', '其他']"
      @select-change="changeHandler"
    ></item-filter>
    <item-filter
      class="filter"
      title="投资额度"
      :items="['< 50,000$', '< 100,000$', '< 500,000$', '>= 500,000$']"
      @select-change="changeHandler"
    ></item-filter>
    <item-filter
      class="filter"
      title="资金来源"
      :items="['借贷', '股权投资', '个人', '其他']"
      @select-change="changeHandler"
    ></item-filter>
    </div>
    <search-result index="3"></search-result>
  </div>
</template>

<script lang="babel">
  import ItemFilter from '@/components/common/filter/ItemFilter'
  import SearchResult from '@/components/common/SearchResult/SearchResult'

  export default {
    components: {
      ItemFilter,
      SearchResult,
    },
    data: function () {
      return {}
    },
    computed: {
    },
    methods: {
      changeHandler: function (val) {
        console.log(val)
      },
    },
    filters: {
    },
  }
</script>

<style lang="scss" scoped>
.container {
  background: #DAE5EC;
  height: 100%;
  min-height: 1000px;
  padding: 0 50px;
  .header {
    padding-top: 10px;
  }
}

</style>
