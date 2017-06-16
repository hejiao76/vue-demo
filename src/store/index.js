import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  // 当前导航信息
  navInfo: {
    firstIndex: 0, // 当前一级导航索引
    secondIndex: 0 // 当前二级导航索引
  }
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
