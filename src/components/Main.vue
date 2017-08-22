<template>
  <div class="main">
    <Header :status='this.status' :admin='this.admin'></Header>
    <div class="container">
      <router-view v-on:admin="changeState"></router-view>
    </div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  
  </div>
</template>

<script lang="babel">
import Introduction from '@/components/intro/Introduction'
import Header from '@/components/common/navigation-bar/Header'

export default {
  components: {
    Header,
    Introduction,
  },
  props: [
    'dialogFormVisible',
  ],
  data: function () {
    return {
      admin: null,
      status: 0,
      loginShow: false,
      fromParent: '——来自父组件',
      formLabelWidth: '100px',
      form: {
        name: '',
        region: '',
      },
    }
  },
  computed: {},
  methods: {
    changeState: function (data) {
      console.log('heiheiehi')
      console.log(data)
      this.status = sessionStorage.getItem('loginStatus')
      this.admin = data

      // if(data[0] === false){
      //   console.log('执行')
      //   this.webShow = true;//显示web应用内容
      //   this.loginShow = false;//隐藏login组件
      //   this.headerUserName = data[1];//赋值headerUserName
      // }
    },
  },
  filters: {},
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  .container {
    background: rgba(255, 255, 255, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>
