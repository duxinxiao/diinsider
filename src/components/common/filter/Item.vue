<template>
  <span class="item" :class="{active: active}">
    <slot></slot>
    <span v-if="active && closable" class="close" @click.stop="close"><i class="el-icon-close"></i></span>
  </span>
</template>

<script lang="babel">

  export default {
    props: {
      closable: {
        type: Boolean,
        default: true,
      },
      active: Boolean,
    },
    data: function () {
      return {
      }
    },
    computed: {
    },
    methods: {
      close: function () {
        if (this.closable) {
          this.$emit('close')
        }
      },
    },
    filters: {
    },
  }
</script>

<style lang="scss" scoped>
.item {
  cursor: pointer;
  padding: 4px 12px;
  font-size: 14px;
  position: relative;
  user-select: none;
  &.active {
    color: #2868d1;
    background: rgba(107,162,252,.2);
  }
  .close {
    position: absolute;
    top: 0;
    right: 0;

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 14px 14px 0;
    border-color: transparent rgba(107,162,252,.9) transparent transparent;

    .el-icon-close {
      position: relative;
      top: -3px;
      right: -3px;
      color: white;
      transform: scale(0.3);
    }
  }
}
</style>
