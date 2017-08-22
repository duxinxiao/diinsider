<template>
  <div class="container">
    <div class="header">
      <item-filter class="filter" :title="$t('sector')" :items="$t('sectorDetail')" @select-change="changeSector"></item-filter>
      <item-filter class="filter" :title="$t('budget')" :items="range" @select-change="changeRange"></item-filter>
      <item-filter class="filter" :title="$t('stage')" :items="$t('stageDetail')" @select-change="changeType"></item-filter>
      <item-filter class="filter" :title="$t('revenueType')" :items="$t('revenueDetail')" @select-change="changeRevenue"></item-filter>
    </div>
    <search-result :result="this.result"></search-result>
    <div class="load">
      <el-pagination layout="prev, pager, next" :total="total" :current-page="form.page" @current-change="currentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script lang="babel">
  import ItemFilter from '@/components/common/filter/ItemFilter'
  import SearchResult from '@/components/list/StartupResult'

  export default {
    components: {
      ItemFilter,
      SearchResult,
    },
    data: function () {
      return {
        sectorMap: {
          '4': 'renewable energy',
          '5': 'inclusive finance',
          '6': 'gender equity',
          '0': 'education',
          '1': 'environment',
          '2': 'health',
          '3': 'agriculture',
        },
        total: 0,
        revenue: ['no', 'yes'],
        range: ['< 50,000$', ' 50,000 ~ 100,000$', '100,000 ~ 500,000$', '>= 500,000$'],
        stage: ['idea', 'start', 'scaling'],
        result: [],
        form: {
          sector: '',
          destination: '',
          budget: 0,
          stage: 0,
          revenue: -1,
          page: 1,
        },
      }
    },
    created: function () {
      this.searchNew()
    },
    computed: {
    },
    methods: {
      search: async function () {
        const response = await this.$ajax('/test/startup/list', { params: this.form })
        const result = response.data
        if (result.errCode === 'success') {
          this.result = result.data.list
          this.total = result.data.total
        } else {
          this.message = result.message
        }
      },
      searchNew: function () {
        this.form.page = 1
        this.search()
      },
      changeSector: function (val) {
        this.form.sector = val.map(data => this.sectorMap[data]).join(',')
        this.searchNew()
      },
      changeRevenue: function (val) {
        if (val.length === 0) {
          this.form.revenue = -1
        }
        this.form.revenue = val.join(',')
        this.searchNew()
      },
      changeRange: function (val) {
        if (val.length === 0) {
          this.form.budget = 0
        } else {
          this.form.budget = parseInt(val.join(','), 10) + 1
        }
        this.searchNew()
      },
      changeType: function (val) {
        if (val.length === 0) {
          this.form.stage = 0
        } else {
          this.form.stage = parseInt(val.join(','), 10) + 1
        }
        this.searchNew()
      },
      currentChange: function (val) {
        this.form.page = val
        this.search()
      },
    },
    filters: {
    },
  }
</script>

<style lang="scss" scoped>
.container {
  color: black;
  width: 100%;
  .header {
    background: #F5F6F9;
    width: 90%;
    min-width: 1150px;
    max-width: 1500px;
    height: 40%;
    margin: 0 auto;
    margin-top: 10px;
  }
  .filter {
    height: 10%;
  }
  padding-bottom: 100px;
}

.load {
  font-size: 20px;
  width: 200px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
