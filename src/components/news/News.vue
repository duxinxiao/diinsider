<template>
  <div class="all">
    <div class="news">
      <el-table :data="tableData" :show-header="false" class="row" @click="source(item.source)">
        <el-table-column>
          <template scope="item">
            <img class="img" v-bind:src="item.row.image"></img>
            <div class="text">
              <div class="title">{{ item.row.title }}</div>
              <div class="desc">{{ item.row.description }}</div>
              <div class="context">{{ item.row.context }}</div>
            </div>
          </template>
        </el-table-column>
  
      </el-table>
      <div class="more">
        <el-button v-if="moreShow" class="moreButton" type="primary" @click="more">more</el-button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      moreShow: true,
      index: 1,
      page: 1,
      tableData: [],
    }
  },
  methods: {
    show: async function (index) {
      this.page = 1
      const response = await this.$ajax('/test/news/listTop', { params: { type: index } })
      this.tableData = response.data.data
    },
    more: async function () {
      this.page += 1
      const response = await this.$ajax('/test/news/listMore', { params: { type: this.index, page: this.page } })
      const data = response.data.data
      if (data.length === 0) {
        this.moreShow = false
      } else {
        this.tableData = this.tableData.concat(response.data.data)
      }
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    source(link) {
      window.open(link)
    },
  },
  created: function () {
    this.index = this.$route.query.index
    this.show(this.$route.query.index)
  },
  updated: function () {
    console.log(this.$route.query.index)
    // this.show(this.$route.query.index)
  },
}
</script>

<style lang="scss" scoped>
.all {
  background: rgba(#EDEDED, 0.8);
  width: 100%;
  .news {
    padding-top: 20px;
    padding-bottom: 20px;
    .row {
      margin: 0 auto;
      width: 1200px;
      display: flex;
      align-items: center;
      min-height: 280px;
      padding-top: 20px;
      .img {
        float: left;
        width: 450px;
        height: 280px;
      }
      .text {
        padding: 50px;
        width: 700px;
        display: inline-block;
        line-height: 25px;
        .title {

          font-size: 20px;
          padding-bottom: 10px;
        }
        .desc {
          font-size: 15px;
          color: #768eab;
          padding-bottom: 10px;
        }
        .context {
          color: #454c54;
          font-size: 15px;
        }
      }
    }
    .more {
      .moreButton {
        width: 100px;
      }
      margin: 0 auto;
      height: 100px;
      width: 100px;
    }
  }
}
</style>
