<template>
  <div class="container">
    <div class="center">
      <div class="header">
        <img class="img" v-bind:src="item.logo"></img>
        <div class="intro">
          <div class="name">{{ item.name }}</div>
          <div class="des">
            <p v-html="item.desc"></p>
          </div>
        </div>
        <!-- <el-button style="width: 200px; font-size: ;: 50px; " type="primary " @click="open() ">我要投资</el-button> -->
      </div>
      <div v-if="show == 0" class="contextBlur">
        <div class="auth">
          <el-button class="button" type="primary" @click="open()">登录可查看更多信息哦</el-button>
        </div>
      </div>
      <div v-if="show == 2" class="contextBlur">
        <div class="auth">
          <el-button class="button" type="primary" @click="open()">完成认证可查看更多信息哦</el-button>
        </div>
      </div>
      <div v-if="show == 1" class="context">
        <div v-if="item.location !== null" class="detail">
          <div class="title">
            {{ $t('location') }}
          </div>
          <div class="info">
            {{ item.location }}
          </div>
        </div>
        <div v-if="item.sector !== null" class="detail">
          <div class="title">
            {{ $t('sector') }}
          </div>
          <div class="info">
            {{ item.sector }}
          </div>
        </div>
        <div v-if="item.representative !== null" class="detail">
          <div class="title">
            {{ $t('representative') }}
          </div>
          <div class="info">
            {{ item.representative }}
          </div>
        </div>
        <div v-if="item.founded !== null" class="detail">
          <div class="title">
            {{ $t('founded') }}
          </div>
          <div class="info">
            {{ item.founded }}
          </div>
        </div>
        <div v-if="item.stage !== 0" class="detail">
          <div class="title">
            {{ $t('stage') }}
          </div>
          <div class="info">
            <div v-if="item.stage === 1">{{ $t('idea') }}</div>
            <div v-if="item.stage === 2">{{ $t('start') }}</div>
            <div v-if="item.stage === 3">{{ $t('scaling') }}</div>
          </div>
        </div>
        <div class="detail">
          <div class="title">
            {{ $t('budget') }}
          </div>
          <div class="info">
            {{ range[item.budget] }}
          </div>
        </div>
        <div v-if="item.fundSource !== null" class="detail">
          <div class="title">
            {{ $t('funding') }}
          </div>
          <div class="info">
            {{ item.fundSource }}
          </div>
        </div>
        <div v-if="item.staff !== null" class="detail">
          <div class="title">
            {{ $t('staff') }}
          </div>
          <div class="info">
            {{ item.staff }}
          </div>
        </div>
        <div v-if="item.revenue !== null" class="detail">
          <div class="title">
            {{ $t('revenue') }}
          </div>
          <div class="info">
            <div v-if="item.revenue === 0">{{ $t('no') }}</div>
            <div v-if="item.revenue === 1">{{ $t('yes') }}</div>
          </div>
        </div>
        <div v-if="item.assistance !== null" class="detail">
          <div class="title">
            {{ $t('assistance') }}
          </div>
          <div class="info">
            {{ item.assistance }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="babel">

  export default {
    data: function () {
      return {
        item: {},
        show: 0,
        range: [this.$t('noLimit'), '< 50,000$', ' 50,000 ~ 100,000$', '100,000 ~ 500,000$', '>= 500,000$'],
        stage: ['idea', 'start', 'scaling'],
      }
    },
    beforeCreate: async function () {
      let response = await this.$ajax('/test/startup/getStartupDetail', { params: { id: this.$route.query.id } })
      let result = response.data
      if (result.errCode === 'success') {
        this.item = result.data
        this.show = 1
        if (this.item.founded !== null) {
          const newDate = new Date()
          newDate.setTime(this.item.founded)
          this.item.founded = newDate.toDateString()
        }
      } else {
        this.show = 2
        if (result.errCode === 'unauthorized_login') {
          sessionStorage.setItem('loginStatus', 0)
          this.show = 0
        }
        this.$emit('admin', result.data)
        response = await this.$ajax('/test/startup/getStartup', { params: { id: this.$route.query.id } })
        result = response.data
        if (result.errCode === 'success') {
          this.item = result.data
        } else {
          this.message = result.message
        }
      }
    },
    computed: {
    },
    methods: {
      changeHandler: function (val) {
        console.log(val)
      },
      open() {
        if (sessionStorage.getItem('loginStatus') === '0') {
          this.$router.push({ path: '/login' })
        } else {
          this.$router.push({ path: '/register', query: { step: sessionStorage.getItem('type') === '0' ? 2 : 3 } })
        }
      },
    },
    filters: {
    },
  }
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 1000px;
  padding-top: 20px;
  padding-bottom: 50px;
  .center {
    width: 1250px;
    margin: 0 auto;
  }
  .header {
    float: left;
    .img {
      width: 450px;
      height: 280px;
      padding-bottom: 20px;
    }
    width: 450px;
    margin: 20px;
    margin-left: 50px;
    background: white;
    padding: 20px;
    .intro {
      width: 400px;
      line-height: 30px;
      padding-left: 10px;
      float: left;
      margin-bottom: 20px;
      .name {
        font-size: 22px;
        padding-top: 20px;
      }
      .des {
        font-size: 18px;
        color: grey;
        padding-top: 20px;
      }
    }
  }
  .contextBlur {
    display: inline-block;
    width: 48%;
    margin: 0 auto;
    background: white;
    margin-top: 20px;
    background: url("/static/blur.png");
    background-size: 100% 100%;
    height: 400px;
    .auth {
      width: 350px;
      margin: 0 auto;
      vertical-align: center;
      padding-top: 180px;
    }
    .button {
      width: 350px;
      text-align: center;
      font-size: 24px;
    }
  }
  .context {
    display: inline-block;
    width: 620px;
    margin-top: 20px;
    margin-left: 30px;
    .detail {
      background: rgba(255, 255, 255, 0.8);
      margin-bottom: 20px;
      color: #947764;
      .title {
        padding-left: 50px;
        padding-top: 25px;
        font-size: 25px;
        .p {
          line-height: 50px;
        }
      }
      .info {
        padding: 50px;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 18px;
      }
    }
  }
}
</style>
