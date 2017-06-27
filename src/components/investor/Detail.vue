<template>
  <div class="container">
    <div class="header">
      <img src="/static/test4.png" style="width: 500px; height: 300px"></img>
      <el-button style="width: 200px; font-size: ;: 50px;" type="primary" @click="open()">我要投资</el-button>
    </div>
    <div v-if="rank !== 0" class="contextBlur">
      <div class="auth">
      <el-button class="button" type="primary" @click="open()">完成认证可查看更多信息哦</el-button>
      </div>
    </div>
    <div v-if="rank === 0" class="context">
      <div class="detail">
        <p style="line-height: 30px">
        此外，物链平台在聚合了各种商品信息后，还可以撮合上下游合作。比如某商超需要羊肉供应，物链就会把羊肉生产方推荐出去，并在其中分成，分成按照成交商品数量计算，不同商品价钱不等。当然，后续平台沉淀数据也可以用来精准投放产品和个性化服务。<br/>

可能会有不少人有疑问，物链做的是不是一种溯源行为呢？对此，李少恒认为，物链其实是一个品控平台，溯源只是其中一个部分，如果只是溯源，那么多方的参与其实是被动、强制的。物链的定位在于做流通领域的信用支撑平台和供需对接平台，更是一个需要多方参与和互动的平台。信息规范化后能形成良好的信用体系，自然会有更多商家愿意分享信息。更进一步的想法是物链可以成为基于区块链的商品及服务交易所 。<br/>

目前在物链平台上有几十种品类的商品和几十家注册客户，包括原生溯源、蒙天源、天虎云商等。行业竞品有两类，第一类是可追溯体系，像印链、唯链，二者更多强调的是溯源；国外有Skuchain，做钻石跟踪、证明和质量保障的。第二类是供需对接平台，有阿里巴巴、京东、每日优鲜等，这类平台品控和信用保证成本高。<br/><br/>
</p>
      </div>
    </div>
      
    </div>
  </div>
</template>

<script lang="babel">
  import ItemFilter from '@/components/common/filter/ItemFilter'
  import SearchResult from '@/components/common/SearchResult/SearchResult'

  export default {
    components: {
      ItemFilter,
      SearchResult,
    },
    data: function () {
      return {
        rank: 1,
      }
    },
    computed: {
    },
    methods: {
      changeHandler: function (val) {
        console.log(val)
      },
      open() {
        this.$router.push({ path: '/register', params: { index: this.rank } })
      },
    },
    filters: {
    },
  }
</script>

<style lang="scss" scoped>
.container {
  .header {
    background: white;
    padding: 20px 20px;
    .img {

    }
  }
  .contextBlur {
    background: white;
    margin-top: 30px;
    background: url("/static/blur.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 300px;
    .auth {
      background: white;
      width: 350px;
      margin: 0 auto;
      padding-top: 100px;
    }
    .button {
      width: 350px;
      text-align: center;
      font-size: 24px;
    }
  }
  .context {
    background: white;
    margin-top: 30px;
    height: 500px;
    .detail {
      padding: 50px;
      font-size: 18px;
      .p {
        line-height: 50px;
      }
    }
  }
  background: #DAE5EC;
  height: 100%;
  min-height: 1000px;
  padding: 0 50px;
  padding-top: 20px;
}

</style>
