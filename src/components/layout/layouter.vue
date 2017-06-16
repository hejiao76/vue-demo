<template>
  <div class="layout">
    <div class="navbar-wrapper">
      <navbar/>
    </div>
    <div class="breadcrumb-wrapper">
      <breadcrumb/>
    </div>
    <div class="main-wrapper">
      <transition name="layout-fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import navbar from '../common/navbar.vue'
  import breadcrumb from '../common/breadcrumb.vue'
  export default {
    components: {
      navbar,
      breadcrumb
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  .layout
    .navbar-wrapper
      width: 100%
      height: 64px
      background: rgb(63, 63, 63)
    .breadcrumb-wrapper
      width: 100%
      margin-top: 40px
      height: 32px
      background: rgba(244, 244, 244, 1)
    .main-wrapper
      min-height: 600px
      background: rgba(244, 244, 244, 1)
      .layout-fade-enter-active, .layout-fade-leave-active
        transition: opacity .3s
      .layout-fade-enter, .layout-fade-leave-active
        opacity: 0
</style>
