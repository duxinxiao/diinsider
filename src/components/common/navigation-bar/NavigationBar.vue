<template>
  <div class="bar">
    <el-menu default-active="1" class="menus" mode="horizontal" :router="true">
      <el-menu-item class="menu-home" index="1" route="/">首页</el-menu-item>
      <el-submenu class="menu" v-for="item in items" :index="item.key">
        <template slot="title">{{ item.title }}</template>
        <div class="submenu">
          <submenu-item v-for="subItem in item.value" class="menu-item" :title="subItem.title" :subtitle="subItem.subtitle" :src="subItem.src" :to="subItem.to" :param="subItem.param"></submenu-item>
        </div>
      </el-submenu>
      <el-menu-item class="menu-home" index="5" route="/">寻求合作</el-menu-item>
      <el-input class="search"
        placeholder="输入关键字搜索"
        icon="search"
        v-model="input2"
        :on-icon-click="handleIconClick">
      </el-input>
    </el-menu>
    
  </div>
</template>
<script lang="babel">
import SubmenuItem from './MenuItem'

export default {
  components: {
    SubmenuItem,
  },
  data: function () {
    return {
      items: [{
        key: 2,
        title: '我有项目',
        value: [{
          title: '寻求报道',
          subtitle: '有机会登上Diinsider首页',
          src: '/static/interview.png',
          to: '',
        }, {
          title: '投资对接',
          subtitle: '为你找到最匹配的投资人',
          src: '/static/investor.png',
          to: 'investor',
        }, {
          title: '战略咨询',
          subtitle: '完善商业模式、寻找人才、数据分析等',
          src: '/static/solution.png',
          to: '',
        }, {
          title: '申请认证',
          subtitle: '认证后更容易得到投资人青睐',
          src: '/static/authen.png',
          to: 'register',
        }],
      }, {
        key: 3,
        title: '我要投资',
        value: [{
          title: '项目投资',
          subtitle: '为你找到最合适的项目',
          src: '/static/interview.png',
          to: '',
        }, {
          title: '投资Diiinsider',
          subtitle: '我们帮您找到最合适的项目',
          src: '/static/interview.png',
          to: 'investor',
        }, {
          title: '定制研究',
          subtitle: '项目尽职调查，助力投资决策',
          src: '/static/solution.png',
          to: '',
        }],
      }, {
        key: 4,
        title: '只是看看',
        value: [{
          title: '背景知识',
          subtitle: '草根创新、国际发展与影响力投资',
          src: '/static/interview.png',
          to: 'news',
          param: {
            index: 1,
          },
        }, {
          title: '创变杂志',
          subtitle: '将草根将给世界听',
          src: '/static/interview.png',
          to: 'news',
          param: {
            index: 2,
          },
        }, {
          title: '机遇动态',
          subtitle: '社会创新与新兴市场机遇动态',
          src: '/static/solution.png',
          to: 'news',
          param: {
            index: 3,
          },
        }, {
          title: '活动速递',
          subtitle: '了解最新的活动信息',
          src: '/static/solution.png',
          to: 'news',
          param: {
            index: 4,
          },
        }],
      }],
    }
  },
  computed: {},
  methods: {},
  filters: {},
}
</script>
<style lang="scss" scoped>
.bar {
  display: inline-block;
  z-index: 999;
  width: 60%;
  .menus {
    .menu-home {
      text-align: center;
      width: 12%;
    }
    .menu {
      width: 17%;
      text-align: center;
      display: inline-block;
      position: static;
      .submenu {
        position: absolute;
        width: 100%;
        left: 0;
        background: rgba(255,255,255,0.8);
        text-align: center;
        .menu-item {
          display: inline-block;
          margin: 1rem 0;
        }
      }
    }
  }
  .search {
    float: right;
    width: 150px;
    margin-top: 12px;
  }
}
</style>
<style>
.el-menu-item,
.el-submenu__title {
    font-size: 16px;
    color: white;
}
.el-menu {
    background-color: transparent;
}
</style>
