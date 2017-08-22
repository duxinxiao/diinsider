<template>
  <div class="searchResult">
    <el-table :data="result" class="table" @row-click="open">
      <el-table-column :label="$t('org')" min-width="60%">
        <template scope="org">
          <div class="logo">
            <img v-bind:src="org.row.logo" class="img"></img>
          </div>
          <div class="name">
            <p style="font-size: 20px">{{ org.row.name }}</p>
          </div>
          <div class="name">
            <p style="font-size: 12px">{{ org.row.desc }}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column :label="$t('sector')" min-width="20%" align="center">
        <template scope="org">
          <p>{{ org.row.sector }}</p>
        </template>
      </el-table-column>
      <el-table-column :label="$t('destination')" min-width="15%" align="center">
        <template scope="org">
          <p>{{ org.row.destination }}</p>
        </template>
      </el-table-column>
      <el-table-column :label="$t('investRange')" min-width="15%" align="center">
        <template scope="org">
          <p v-if="org.row.budget == 0">{{ $t('all') }}</p>
          <p v-if="org.row.budget != 0">{{ range[org.row.budget] }}</p>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="babel">
  export default {
    props: {
      result: Object,
    },
    data: function () {
      return {
        range: ['', '< 50,000$', ' 50,000 ~ 100,000$', '100,000 ~ 500,000$', '>= 500,000$'],
      }
    },
    computed: {
    },
    methods: {
      open(val) {
        this.$router.push({ path: '/investorDetail', query: { id: val.id } })
      },
    },
    filters: {
    },
  }
</script>

<style lang="scss" scoped>
.searchResult {
  width: 90%;
  min-width: 1150px;
  max-width: 1500px;
  margin: 0 auto;
  margin-top: 15px; // padding-bottom: 100px;
  .table {
    .logo {
      padding-top: 15px;
      width: 100px;
      height: 100px;
      float: left;
      .img {
        width: 80px;
        height: 80px;
      }
    }
    .name {
      margin-left: 100px;
    }
  }
}
</style>
