<template>
  <div style="width: 100%; min-width: 1250px">
    <div style="height: 600px">
      <hover></hover>
      <search></search>
    </div>
    <introduction></introduction>
    <program></program>
    <div class="member"></div>
    <div class="team"></div>
    <div class="seen"></div>
    <div class="contact"></div>
  </div>
</template>

<script lang="babel">
import Hover from '@/components/hover/Hover'
import Introduction from '@/components/intro/Introduction'
import Program from '@/components/intro/Program'
import Search from '@/components/common/search/Search'

export default {
  components: {
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
