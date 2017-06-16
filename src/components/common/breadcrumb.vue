<template>
  <div class="breadcrumb container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{path: firstLink}" ref="firstBread">{{firstName}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{secondName}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  import navs from '../../config/nav.js'
  import {RECORD_NAV} from '../../store/mutation-types.js'
  export default {
    data() {
      return {
        navs
      }
    },
    computed: {
      firstName() {
        return this.navs[this.$store.state.navInfo.firstIndex]['first']
      },
      secondName() {
        return this.navs[this.$store.state.navInfo.firstIndex]['second'][this.$store.state.navInfo.secondIndex]['name']
      },
      firstLink() {
        return this.navs[this.$store.state.navInfo.firstIndex]['second'][0]['link']
      }
    },
    methods: {
      // 选择面包屑第一层
      _chooseFirstBread() {
        this.$store.commit(RECORD_NAV, {firstIndex: this.$store.state.navInfo.firstIndex, secondIndex: 0})
      }
    },
    mounted() {
      this.$refs.firstBread.$el.addEventListener('click', () => {
        this._chooseFirstBread()
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  .breadcrumb, .el-breadcrumb
    height: 100%
    user-select: none
    .el-breadcrumb
      line-height: 32px
      font-size: 12px
</style>
