]<template>
  <div class="login">
    <el-form autoComplete="on" :model="loginForm" :rules="rules" ref="loginForm" label-position="left" class="form">
      <div class="logo-container">
        <img class="img" src="../../images/logo.png">
        <div class="title-container">
          <h1 class="title">WAF</h1>
          <h2 class="title-sub">WEB应用防护系统</h2>
        </div>
      </div>
      <el-form-item prop="username">
        <i class="el-icon-edit icon"></i>
        <el-input name="username" type="text" @keyup.enter.native="handleLogin" v-model="loginForm.username" autoComplete="on" placeholder="用户名">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <i class="el-icon-edit icon"></i>
        <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="密   码">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" :loading="loading" @click.prevent="handleLogin">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      const validateUsername = (rule, value, callback) => {
        // callback不传参表示验证通过，传error验证不通过
        if (value.length === 0) {
          callback(new Error('请输入用户名'))
          // callback(new Error(' '))
        // } else if (value.length < 6) {
        //   callback(new Error('用户名长度不小于6'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length === 0) {
          callback(new Error('请输入密码'))
        // } else if (value.length < 6) {
        //   callback(new Error('用户名长度不小于6'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
              {required: true, trigger: 'change', validator: validateUsername}
          ],
          password: [
              {required: true, trigger: 'change', validator: validatePassword}
          ]
        },
        loading: false,
        showDialog: false
      }
    },
    methods: {
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$router.push({ path: '/secureMonitor/overview' })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    },
    created() {
    },
    destroyed() {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  .login
    height: 100%
    background-color: #333333
    .form
      position: absolute
      left: 50%
      top: 40%
      width: 355px
      margin-left: -178px
      margin-top: -180px
      .logo-container
        width: 200px
        height: 100px
        margin: 0 auto
        .img
          width: 60px
          height: 70px
          float: left
        .title-container
          float: left
          margin-left: 7px
          text-align: left
          .title
            margin: 10px 0 10px 0
            font-family: 'Arial Narrow Bold', 'Arial Narrow', 'Arial'
            font-size: 36px
            font-weight: 700
            color: #fff
          .title-sub
            color: #9A9DA0
            font-size: 14px
      // 输入框下划线
      .el-form-item
        border-bottom: 2px solid rgba(255, 255, 255, 0.1)
        color: #454545
        .icon
          position: absolute
          top: 20px
          left: 20px
          z-index: 1
        // autocomplete填充样式bug修复
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          // 自动填充文本框背景颜色
          -webkit-box-shadow: 0 0 0px 1000px #333333 inset !important
          // 自动填充文本框文字颜色
          -webkit-text-fill-color: #fff !important
        }
        input
          height: 47px
          padding: 12px 5px 12px 45px
          background: transparent
          border: 0px
          -webkit-appearance: none
          border-radius: 0px
          color: #999999
          font-size: 16px
          font-weight: 400
        .el-button
          width: 100%
          height: 60px
          margin-top: 30px
          font-size: 16px
          border-radius: 0
</style>
