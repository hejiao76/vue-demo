]<template>
  <div class="global_box">
    <div class="global_box_top">
      <div class="nav_top" style="background: #57a126; color: #FFFFFF;">
        <div class="center_box">
          您好，欢迎来到家宁装修网
          <div class="where_box"><span class="iconfont icon-location"></span><span id="city">北京</span><span>【更换】</span></div>
          <ul class="nav_right">
            <a>
              <li>官方微信 </li>
            </a>
            <a>
              <li>工长入驻</li>
            </a>
            <a>
              <li>工长登录</li>
            </a>
            <a>
              <li>北京工装</li>
            </a>
            <a>
              <li>北京家装</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
    <!--公用顶部end-->
    <div class="center_bc">
      <img class="bc_img_login" src="../../img/login_banner.jpg"  />
      <div class="login_box">
        <div class="top_logo"><img src="../../img/logo.png" /> <span>工长登录</span></div>
        <form action="" method="post">
          <div class="input_box">
            <span class="iconfont icon-ordinarymobile"></span>
            <input v-model="phone" type="text" placeholder="请输入手机号" />
          </div>
          <div class="input_box" style="margin-top:20px ;">
            <span class="iconfont icon-mima"></span>
            <input v-model="password" type="password" placeholder="请输入密码" />
          </div>

          <a href="#" class="wangji_word">忘记密码?</a>
          <input  class="btn" v-on:click="handleLogin" type="button" value="登录"/>
        </form>
      </div>
    </div>
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
          phone: '',
          password: '',
        rules: {
          phone: [
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
        console.log(this.phone)
        console.log(this.password)
//        this.$refs.loginForm.validate(valid => {
//          if (valid) {
//            this.loading = true
//            this.$router.push({ path: '/secureMonitor/overview' })
//          } else {
//            console.log('error submit!!')
//            return false
//          }
//        })
      }
    },
    created() {
    },
    destroyed() {
    }
  }
</script>
<style>
  @import "../../css/global.css";
  @import "../../css/login.css";
  @import "https://at.alicdn.com/t/font_adkaonfr6xvquxr.css";
</style>

<!--<style lang="stylus" rel="stylesheet/stylus" scope>-->
  <!--.login-->
    <!--height: 100%-->
    <!--background-color: #333333-->
    <!--.form-->
      <!--position: absolute-->
      <!--left: 50%-->
      <!--top: 40%-->
      <!--width: 355px-->
      <!--margin-left: -178px-->
      <!--margin-top: -180px-->
      <!--.logo-container-->
        <!--width: 200px-->
        <!--height: 100px-->
        <!--margin: 0 auto-->
        <!--.img-->
          <!--width: 60px-->
          <!--height: 70px-->
          <!--float: left-->
        <!--.title-container-->
          <!--float: left-->
          <!--margin-left: 7px-->
          <!--text-align: left-->
          <!--.title-->
            <!--margin: 10px 0 10px 0-->
            <!--font-family: 'Arial Narrow Bold', 'Arial Narrow', 'Arial'-->
            <!--font-size: 36px-->
            <!--font-weight: 700-->
            <!--color: #fff-->
          <!--.title-sub-->
            <!--color: #9A9DA0-->
            <!--font-size: 14px-->
      <!--// 输入框下划线-->
      <!--.el-form-item-->
        <!--border-bottom: 2px solid rgba(255, 255, 255, 0.1)-->
        <!--color: #454545-->
        <!--.icon-->
          <!--position: absolute-->
          <!--top: 20px-->
          <!--left: 20px-->
          <!--z-index: 1-->
        <!--// autocomplete填充样式bug修复-->
        <!--input:-webkit-autofill,-->
        <!--input:-webkit-autofill:hover,-->
        <!--input:-webkit-autofill:focus {-->
          <!--// 自动填充文本框背景颜色-->
          <!-- -webkit-box-shadow: 0 0 0px 1000px #333333 inset !important-->
          <!--// 自动填充文本框文字颜色-->
          <!-- -webkit-text-fill-color: #fff !important-->
        <!--}-->
        <!--input-->
          <!--height: 47px-->
          <!--padding: 12px 5px 12px 45px-->
          <!--background: transparent-->
          <!--border: 0px-->
          <!-- -webkit-appearance: none-->
          <!--border-radius: 0px-->
          <!--color: #999999-->
          <!--font-size: 16px-->
          <!--font-weight: 400-->
        <!--.el-button-->
          <!--width: 100%-->
          <!--height: 60px-->
          <!--margin-top: 30px-->
          <!--font-size: 16px-->
          <!--border-radius: 0-->
<!--</style>-->
