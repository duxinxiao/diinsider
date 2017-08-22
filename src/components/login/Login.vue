<template>
  <div class="background">
    <div class="login">
      <el-card class="login-card">
        <div class="registry">{{ $t('register') }}</div>
        <div class="title">{{ $t('login') }}</div>
        <div class="inputForm">
          <el-form ref="form" :model="form" label-width="0">
            <el-form-item prop="email">
              <el-input class="input" v-model="form.email" :placeholder="$t('loginForm.email')" @blur="validate"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input class="input" v-model="form.password" type="password" :placeholder="$t('loginForm.password')" @blur="validate"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="message">{{ $t(message) }}</div>
              <div class="forget">{{ $t('loginForm.forget') }}</div>
            </el-form-item>
            <el-form-item>
              <el-button class="submit" type="primary" @click="submit">{{ $t('login') }}</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="babel">
import Vue from 'vue'

export default {
  data() {
    return {
      loginShow: false,
      message: '',
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    validate() {
      let result = false
      if (this.form.email === '') {
        this.message = 'loginForm.emailValid'
      } else if (this.form.password === '') {
        this.message = 'loginForm.passwordValid'
      } else {
        result = true
      }
      return result
    },
    submit: async function () {
      if (!this.validate()) {
        return
      }
      const response = await this.$ajax('/test/admin/login', { headers: { 'Accept-Language': Vue.config.lang === 'en' ? 'en-us' : 'zh-CN' }, params: { email: this.form.email, password: this.form.password } })
      const result = response.data
      if (result.errCode === 'success') {
        this.$emit('admin', result.data)
        sessionStorage.setItem('admin', result.data)
        sessionStorage.setItem('loginStatus', 1)
        sessionStorage.setItem('type', result.data.type)
        this.$router.push({ path: '/' })
      } else {
        this.message = result.message
      }
    },
  },
  computed: {
  },
  filters: {
  },
}
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  height: 100%;
  .login {
    padding-top: 12%;
  }
  .login-card {
    background: #282B2F;
    margin: 0 auto;
    width: 400px;
    height: 280px;
    color: white;
    .title {
      height: 50px;
      padding-top: 20px;
      font-size: 25px;
      font-weight: bold;
      padding-left: 50px;
    }
    .inputForm {
      padding: 0 50px;
      .input {
        width: 300px;
      }
    }
    .message {
      float: left;
      margin-top: -15px;
      height: 15px;
    }
    .forget {
      text-decoration: underline;
      color: rgba(255, 255, 255, 0.5);
      margin-top: -15px;
      float: right;
      height: 15px;
    }
    .submit {
      margin: 0 auto;
      display: block;
      width: 100px;
    }
    .registry {
      float: right;
      padding-right: 50px;
      padding-top: 30px;
      color: rgba(#63AEFB, 0.8);
    }
  }
}
</style>
<style>

</style>
