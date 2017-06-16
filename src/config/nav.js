/**
 * 导航配置
 *
 * first一级导航
 * second二级导航
 */
export default [
  {
    first: '安全监控',
    second: [
      {name: '概览', link: '/secureMonitor/overview'},
      {name: '攻击视图', link: '/secureMonitor/attack'},
      {name: '业务视图', link: '/secureMonitor/business'},
      {name: '自定义视图', link: '/secureMonitor/custom'}
    ]
  },
  {
    first: '事件管理',
    second: [
      {name: '事件查询', link: '/eventManage/eventQuery'},
      {name: '事件列表', link: '/eventManage/eventList'}
    ]
  },
  {
    first: '配置管理',
    second: [
      {name: '全局配置', link: '/configManage/globalConfig'},
      {name: '站点', link: '/configManage/site'},
      {name: '虚拟组', link: '/configManage/virtualGroup'},
      {name: '节点管理', link: '/configManage/nodeManage'}
    ]
  },
  {
    first: '规则管理',
    second: [
      {name: '白名单', link: '/ruleManage/ruleBase'},
      {name: '规则库', link: '/ruleManage/whiteList'}
    ]
  }
]
