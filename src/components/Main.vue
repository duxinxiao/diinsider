<template>
  <div>
    <navigation-bar></navigation-bar>
    <div class="content-container">
      <router-view></router-view>
    </div>
    <div class="headline">
      <hover></hover>
    </div>
    <div class="introduction"></div>
    <div class="member"></div>
    <div class="team"></div>
    <div class="seen"></div>
    <div class="contact"></div>
  </div>
</template>

<script lang="babel">
import NavigationBar from '@/components/common/navigation-bar/NavigationBar'
import Hover from '@/components/hover/Hover'

export default {
  components: {
    NavigationBar,
    Hover,
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
