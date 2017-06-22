<template>
  <div class="filter-container">
    <span class="title">行业</span>
    <span class="first-item">
      <item :closable="false" :active="actived.length === 0">不限</item>
    </span>
    <span class="all-select">
      <span class="item-container" v-for="item,index in itemsToShow" :key="index">
        <item :active="actived.indexOf(item) !== -1" @click.native="click(item)" @close="close(item)">{{ item }}</item>
      </span>
    </span>
    <span class="expand-btn" @click="expand"><i class="el-icon-arrow-down" :class="{active:expanded}"></i></span>
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
      itemsToShow: function () {
        if (!this.expanded) {
          return this.items.slice(0, 9)
        }
        return this.items
      },
    },
    methods: {
      click: function (item) {
        if (this.multiSelect) {
          if (this.actived.indexOf(item) === -1) {
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
  padding: 1rem 0;
  user-select: none;
  .all-select {
    vertical-align: top;
    display: inline-block;
    max-width: 900px;
    border-bottom: 1px dashed #DDD;
    .item-container {
      display: inline-block;
      width: 100px;
      margin-bottom: 1rem;
    }
  }
  .first-item {
    margin-left: 30px;
    margin-right: 20px;
  }
  .title {
    font-size: 14px;
  }
  .expand-btn {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #BBB;
    color: #BBB;
    cursor: pointer;
    .el-icon-arrow-down {
      transform: scale(0.5);
      &.active {
        transition: 0.2s;
        transform: scale(0.5) rotate(180deg);
      }
    }
  }
}
</style>
