<template>
  <div style="width: 100%; min-width: 1250px">
    <navigation-bar></navigation-bar>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="babel">
import NavigationBar from '@/components/common/navigation-bar/NavigationBar'
import Hover from '@/components/hover/Hover'
import Introduction from '@/components/intro/Introduction'
import Program from '@/components/intro/Program'
import Search from '@/components/common/search/Search'

export default {
  components: {
    NavigationBar,
    Hover,
    Search,
    Introduction,
    Program,
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
