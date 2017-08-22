<template>
  <div class="filter-container">
    <span class="title">{{ title }}</span>
    <span class="first-item">
      <item :closable="false" :active="actived.length === 0">{{ $t('all') }}</item>
    </span>
    <span class="all-select">
      <span class="item-container" v-for="key, index in items">
        <item :active="actived.indexOf(index) !== -1" @click.native="click(index)" @close="close(index)">{{ key }}</item>
      </span>
    </span>
  </div>
</template>

<script lang="babel">
  import Item from './Item'

  export default {
    components: {
      Item,
    },
    props: {
      title: String,
      items: Array,
      multiSelect: {
        type: Boolean,
        default: true,
      },
    },
    data: function () {
      return {
        actived: [],
        expanded: false,
      }
    },
    computed: {
    },
    methods: {
      click: function (item) {
        if (this.multiSelect) {
          if (this.actived.indexOf(item) === -1) {
            this.actived = []
            this.actived.push(item)
          }
        } else {
          this.actived = [item]
        }
      },
      close: function (item) {
        this.actived = this.actived.filter(_ => _ !== item)
      },
      expand: function () {
        this.expanded = !this.expanded
      },
    },
    watch: {
      actived: function (newValue, oldValue) {
        this.$emit('select-change', newValue)
      },
    },
    filters: {
    },
  }
</script>

<style lang="scss" scoped>
.filter-container {
  background: transparent;
  padding: 1.8em 0 0 3em;
  user-select: none;
  .all-select {
    font-size: 0.9em;
    vertical-align: top;
    display: inline-block;
    width: 70%;
    border-bottom: 1px dashed #DDD;
    .item-container {
      font-size: 0.8em;
      padding-right: 18px;
      display: inline-block;
      margin-bottom: 1rem;
    }
  }
  .first-item {
    margin-left: 30px;
    margin-right: 20px;
  }
  .title {
    font-size: 0.8em;
    padding: 25px;
    min-width: 200px;
  }
}
</style>
