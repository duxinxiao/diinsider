<template>
  <div class="home">
    <hover></hover>
    <introduction></introduction>
    <program></program>
    <member></member>
    <div class="team"></div>
    <div class="seen"></div>
    <div class="contact"></div>
  </div>
</template>

<script lang="babel">
import Hover from '@/components/home/Hover'
import Introduction from '@/components/intro/Introduction'
import Program from '@/components/intro/Program'
import Member from '@/components/intro/Member'

export default {
  components: {
    Hover,
    Introduction,
    Program,
    Member,
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
.home {
  height: 100%;
}
</style>
