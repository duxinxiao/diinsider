<template>
  <div>
    <navigation-bar></navigation-bar>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="babel">
import NavigationBar from '@/components/common/navigation-bar/NavigationBar'

export default {
  components: {
    NavigationBar,
  },
  data: function () {
    return {
    }
  },
  computed: {},
  methods: {},
  filters: {},
}
</script>

<style lang="scss" scoped>
.content-container {
}
</style>
