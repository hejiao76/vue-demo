import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由懒加载，r => resolve，require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const layouter = r => require.ensure([], () => r(require('../components/layout/layouter.vue')), 'layouter')
const overview = r => require.ensure([], () => r(require('../page/secureMonitor/overview')), 'overview')
const attack = r => require.ensure([], () => r(require('../page/secureMonitor/attack')), 'attack')
const business = r => require.ensure([], () => r(require('../page/secureMonitor/business')), 'business')
const custom = r => require.ensure([], () => r(require('../page/secureMonitor/custom')), 'custom')
const eventQuery = r => require.ensure([], () => r(require('../page/eventManage/eventQuery')), 'eventQuery')
const eventList = r => require.ensure([], () => r(require('../page/eventManage/eventList')), 'eventList')
const globalConfig = r => require.ensure([], () => r(require('../page/configManage/globalConfig')), 'globalConfig')
const site = r => require.ensure([], () => r(require('../page/configManage/site')), 'site')
const virtualGroup = r => require.ensure([], () => r(require('../page/configManage/virtualGroup')), 'virtualGroup')
const nodeManage = r => require.ensure([], () => r(require('../page/configManage/nodeManage')), 'nodeManage')
const ruleBase = r => require.ensure([], () => r(require('../page/ruleManage/ruleBase')), 'ruleBase')
const whiteList = r => require.ensure([], () => r(require('../page/ruleManage/whiteList')), 'whiteList')

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    // 安全监控
    {
      path: '/secureMonitor',
      component: layouter,
      children: [
        {
          path: 'overview', // 概览
          component: overview
        },
        {
          path: 'attack', // 攻击视图
          component: attack
        },
        {
          path: 'business', // 业务视图
          component: business
        },
        {
          path: 'custom', // 自定义视图
          component: custom
        }
      ]
    },
    // 事件管理
    {
      path: '/eventManage',
      component: layouter,
      children: [
        {
          path: 'eventQuery', // 事件查询
          component: eventQuery
        },
        {
          path: 'eventList', // 事件列表
          component: eventList
        }
      ]
    },
    // 配置管理
    {
      path: '/configManage',
      component: layouter,
      children: [
        {
          path: 'globalConfig', // 全局配置
          component: globalConfig
        },
        {
          path: 'site', // 站点
          component: site
        },
        {
          path: 'virtualGroup', // 虚拟组
          component: virtualGroup
        },
        {
          path: 'nodeManage', // 节点管理
          component: nodeManage
        }
      ]
    },
    // 规则管理
    {
      path: '/ruleManage',
      component: layouter,
      children: [
        {
          path: 'ruleBase', // 规则库
          component: ruleBase
        },
        {
          path: 'whiteList', // 白名单
          component: whiteList
        }
      ]
    },
    {
      path: '/login',
      component: login
    }
  ]
})

