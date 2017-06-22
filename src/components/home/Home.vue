<template>
  <div class="container">
    <item-filter
      class="filter"
      title="行业"
      :items="['电商', '社交', '硬件', '文娱传媒', '工具', '消费生活', '电商', '社交', '硬件', '文娱传媒', '工具', '消费生活', '电商', '社交', '硬件', '文娱传媒', '工具', '消费生活']"
      @select-change="changeHandler"
    ></item-filter>
    <item-filter
      class="filter"
      title="行业"
      :items="['电商', '社交', '硬件', '文娱传媒', '工具', '消费生活', '电商', '社交', '硬件', '文娱传媒', '工具', '消费生活', '电商', '社交', '硬件', '文娱传媒', '工具', '消费生活']"
      @select-change="changeHandler"
    ></item-filter>
    <search-result></search-result>
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
  .filter {
    margin: 0 4rem;
  }
}

</style>
