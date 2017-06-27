<template>
  <div class="main">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="babel">
import Introduction from '@/components/intro/Introduction'
import Program from '@/components/intro/Program'
import Header from '@/components/common/navigation-bar/Header'

export default {
  components: {
    Header,
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
.main {
  width: 100%;
  height: 100%;
  .container {
    position: absolute;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>
