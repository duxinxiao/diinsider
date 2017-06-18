<template>
  <navigation-bar></navigation-bar>
</template>

<script lang="babel">
import NavigationBar from '@/components/common/NavigationBar'

export default {
  components: {
    NavigationBar,
  },
  data: function () {
    return {
      activeIndex: 1,
    }
  },
  computed: {},
  methods: {},
  filters: {},
}
</script>

<style lang="scss" scoped>
</style>
