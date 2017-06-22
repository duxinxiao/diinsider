<template>
  <div class="container">
    <item-filter
      title="行业"
      :items="['电商', '社交', '硬件', '文娱传媒', '工具', '消费生活', '电商', '社交', '硬件', '文娱传媒', '工具', '消费生活', '电商', '社交', '硬件', '文娱传媒', '工具', '消费生活']"
      @select-change="changeHandler"
    ></item-filter>
    <item-filter
      title="行业"
      :items="['电商', '社交', '硬件', '文娱传媒', '工具', '消费生活', '电商', '社交', '硬件', '文娱传媒', '工具', '消费生活', '电商', '社交', '硬件', '文娱传媒', '工具', '消费生活']"
      @select-change="changeHandler"
    ></item-filter>
  </div>
</template>

<script lang="babel">
  import ItemFilter from '@/components/common/filter/ItemFilter'

  export default {
    components: {
      ItemFilter,
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
  padding: 2rem 4rem;
}

</style>
