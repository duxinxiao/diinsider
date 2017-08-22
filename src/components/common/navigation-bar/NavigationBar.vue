<template>
  <div class="bar">
    <el-menu default-active="1" mode="horizontal" :router="true">
      <el-menu-item class="menu-home" index="1" route="/">{{ $t('home') }}</el-menu-item>
      <el-submenu class="menu" v-for="item in items" :key="item.id" :index="item.key" :style="item.style">
        <template slot="title">{{ $t(item.title) }}</template>
        <div class="submenu">
          <submenu-item v-for="subItem in item.value" :key="subItem.id" class="menu-item" :title="$t(subItem.title)" :subtitle="$t(subItem.subtitle)" :src="subItem.src" :to="subItem.to" :param="subItem.param"></submenu-item>
        </div>
      </el-submenu>
      <el-menu-item class="menu-home" index="5" route="/">{{ $t('menu.others') }}</el-menu-item>
      <el-input class="search" :placeholder="$t('search')" icon="search" v-model="input2" :on-icon-click="handleIconClick">
      </el-input>
      <el-button class="lang" type="text" @click="changeLang">en/中文</el-button>
    </el-menu>
  </div>
</template>
<script lang="babel">
import Vue from 'vue'
import SubmenuItem from './MenuItem'

export default {
  components: {
    SubmenuItem,
  },
  data: function () {
    return {
      items: [{
        key: 2,
        title: 'menu.changemakers',
        style: {
          width: '18%',
        },
        value: [{
          title: 'subMenu.interview',
          subtitle: 'subMenu.interviewDes',
          src: '/static/interview.png',
          to: '',
        }, {
          title: 'subMenu.findInvestor',
          subtitle: 'subMenu.findInvestorDes',
          src: '/static/find.png',
          to: 'investor',
        }, {
          title: 'subMenu.consult',
          subtitle: 'subMenu.consultDes',
          src: '/static/consult.png',
          to: '',
        }, {
          title: 'subMenu.accreditation',
          subtitle: 'subMenu.accreditationDes',
          src: '/static/accreditation.png',
          to: 'register',
        }],
      }, {
        key: 3,
        title: 'menu.investors',
        style: {
          width: '18%',
        },
        value: [{
          title: 'subMenu.findProject',
          subtitle: 'subMenu.findProjectDes',
          src: '/static/find.png',
          to: 'startup',
        }, {
          title: 'subMenu.investDiinsider',
          subtitle: 'subMenu.investDiinsiderDes',
          src: '/static/invest.png',
          to: 'investor',
        }, {
          title: 'subMenu.customized',
          subtitle: 'subMenu.customizedDes',
          src: '/static/research.png',
          to: '',
        }],
      }, {
        key: 4,
        title: 'menu.media',
        value: [{
          title: 'subMenu.background',
          subtitle: 'subMenu.backgroundDes',
          src: '/static/knowledge.png',
          to: 'news',
          param: {
            index: '1',
          },
        }, {
          title: 'subMenu.change',
          subtitle: 'subMenu.changeDes',
          src: '/static/magazine.png',
          to: 'news',
          param: {
            index: '2',
          },
        }, {
          title: 'subMenu.opportunity',
          subtitle: 'subMenu.opportunityDes',
          src: '/static/oppotunity.png',
          to: 'news',
          param: {
            index: '3',
          },
        }, {
          title: 'subMenu.events',
          subtitle: 'subMenu.eventsDes',
          src: '/static/news.png',
          to: 'news',
          param: {
            index: '4',
          },
        }],
      }],
    }
  },
  computed: {
  },
  created: function () {
    if (Vue.config.lang === 'en') {
      this.items[0].style.width = '18%'
      this.items[1].style.width = '18%'
    } else {
      this.items[0].style.width = '12%'
      this.items[1].style.width = '12%'
      this.items[2].style.width = '12%'
    }
  },
  methods: {
    handleIconClick: function () {
      console.log('search')
    },
    changeLang() {
      if (Vue.config.lang === 'en') {
        Vue.config.lang = 'cn'
        this.items[0].style.width = '12%'
        this.items[1].style.width = '12%'
        this.items[2].style.width = '12%'
      } else {
        Vue.config.lang = 'en'
        this.items[0].style.width = '18%'
        this.items[1].style.width = '18%'
      }
    },
  },
  filters: {},
}
</script>
<style lang="scss" scoped>
.bar {
  padding-left: 3%;
  display: inline-block;
  z-index: 999;
  width: 72%;
  height: 100%;
  .menu-home {
    text-align: center;
    width: 10%;
  }
  .menu {
    width: 10%;
    text-align: center;
    display: inline-block;
    position: static;
    .submenu {
      position: absolute;
      width: 100%;
      left: 0;
      background: white;
      text-align: center;
      .menu-item {
        display: inline-block;
        margin: 1rem 0;
      }
    }
  }
}

.lang {
  float: right;
  margin-top: 1.8%;
  margin-right: 3%;
  font-size: 12px;
}

.search {
  float: right;
  width: 18%;
  margin-top: 12px;
}
</style>
<style>
.el-menu-item,
.el-submenu__title {
  font-size: 14px;
  color: white;
  padding-bottom: 20px;
}

.el-menu {
  background-color: transparent;
  padding-bottom: 20px;
}

.el-menu--horizontal .el-menu-item:hover,
.el-menu--horizontal .el-submenu__title:hover {
  background-color: #eef1f6;
  color: black
}











/* 
.el-menu-item.is-active {
  color:
} */
</style>
