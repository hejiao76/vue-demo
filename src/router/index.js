import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// ·�������أ�r => resolve��require.ensure �� Webpack �������﷨���������� code-split point
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
    // ��ȫ���
    {
      path: '/secureMonitor',
      component: layouter,
      children: [
        {
          path: 'overview', // ����
          component: overview
        },
        {
          path: 'attack', // ������ͼ
          component: attack
        },
        {
          path: 'business', // ҵ����ͼ
          component: business
        },
        {
          path: 'custom', // �Զ�����ͼ
          component: custom
        }
      ]
    },
    // �¼�����
    {
      path: '/eventManage',
      component: layouter,
      children: [
        {
          path: 'eventQuery', // �¼���ѯ
          component: eventQuery
        },
        {
          path: 'eventList', // �¼��б�
          component: eventList
        }
      ]
    },
    // ���ù���
    {
      path: '/configManage',
      component: layouter,
      children: [
        {
          path: 'globalConfig', // ȫ������
          component: globalConfig
        },
        {
          path: 'site', // վ��
          component: site
        },
        {
          path: 'virtualGroup', // ������
          component: virtualGroup
        },
        {
          path: 'nodeManage', // �ڵ����
          component: nodeManage
        }
      ]
    },
    // �������
    {
      path: '/ruleManage',
      component: layouter,
      children: [
        {
          path: 'ruleBase', // �����
          component: ruleBase
        },
        {
          path: 'whiteList', // ������
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

