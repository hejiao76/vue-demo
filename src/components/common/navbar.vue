<template>
  <div class="navbar">
    <div class="first-container container">
      <div class="logo-container">
        <img class="img" src="../../images/logo.png">
        <span class="title">WAF</span>
      </div>
      <div class="nav-container">
        <ul>
          <li v-for="(item, index) in navs" :class="{active: firstIndex === index}" @click="chooseFirst(index)">{{item.first}}</li>
        </ul>
      </div>
      <div class="user-container">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <img class="user-logo" src="../../images/logo.png">
            <span class="username">{{username}}</span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="loginout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="secont-container">
      <div class="container">
        <ul>
          <li v-for="(item, index) in currentSecondNavs" :class="{active: secondIndex === index}" @click="chooseSecond(index)">
            <router-link :to="item.link">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import navs from '../../config/nav'
  import {RECORD_NAV} from '../../store/mutation-types.js'
  export default {
    data() {
      return {
        username: '匿名',
        navs
      }
    },
    computed: {
      firstIndex() {
        return this.$store.state.navInfo.firstIndex
      },
      secondIndex() {
        return this.$store.state.navInfo.secondIndex
      },
      // 当前二级导航数据
      currentSecondNavs() {
        return this.navs[this.firstIndex]['second']
      }
    },
    methods: {
      // 选择一级导航
      chooseFirst(index) {
        // store记录一二级导航索引
        this.$store.commit(RECORD_NAV, {firstIndex: index, secondIndex: 0})
        this.$router.push(this.currentSecondNavs[this.secondIndex]['link'])
      },
      // 选择二级导航
      chooseSecond(index) {
        // store记录一二级导航索引
        this.$store.commit(RECORD_NAV, {firstIndex: this.firstIndex, secondIndex: index})
      },
      handleCommand(command) {
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  .navbar
    height: 100%
    user-select: none
    .first-container
      height: 100%
      .logo-container
        width: 100px
        line-height: 64px
        float: left
        .img
          width: 24px
          height: 29px
          vertical-align: middle
        .title
          vertical-align: middle
          margin-left: 3px
          font-family: 'Arial Narrow Bold', 'Arial Narrow', 'Arial'
          font-size: 28px
          font-weight: 700
          color: #fff
      .nav-container
        margin-left: 150px
        color: rgba(255, 255, 255, 0.4)
        li
          float: left
          position: relative
          width: 107px
          line-height: 64px
          text-align: center
          font-size: 14px
          font-weight: 400
          cursor: pointer
          &:hover, &.active
            color: #fff
          &.active:before
            content:""
            position: absolute
            top: 51px
            left: 45px
            width: 0
            height: 0
            border: 8px solid transparent
            border-bottom-color: #fff
            color: #fff
      .user-container
        float: right
        line-height: 64px
        padding-right: 50px
        .user-logo
          width: 30px
          height: 30px
          vertical-align: middle
          border-radius: 50%
        .username
          margin-left: 3px
          vertical-align: middle
          font-size: 14px
          color: rgba(255, 255, 255, 0.4)
          font-weight: 400
        .el-dropdown-menu__item
          text-align: center
    .secont-container
      width: 100%
      height: 40px
      line-height: 40px
      ul
        margin-left: 150px
        li
          float: left
          width: 107px
          text-align: center
          font-size: 14px
          font-weight: 400
          color: #666666
          cursor: pointer
          &.active
            a
              color: #108EE9
          a
            display: inline-block
            width: 100%
</style>
