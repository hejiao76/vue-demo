<template>
  <div class="overview container">
    <div class="monitor">
      <h2 class="title">监控概览</h2>
      <div class="time">
        <el-select v-model="timeValue" placeholder="请选择">
          <el-option
            v-for="item in times"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="all-count">
        <ul>
          <li><span class="count">6,000</span><span class="name">OS Command注入攻击</span></li>
          <li><span class="count">6,000</span><span class="name">SQL注入攻击</span></li>
          <li><span class="count">6,000</span><span class="name">SQL注入攻击</span></li>
          <li><span class="count">6,000</span><span class="name">SQL注入攻击</span></li>
          <li><span class="count">6,000</span><span class="name">SQL注入攻击</span></li>
          <li><span class="count">6,000</span><span class="name">SQL注入攻击</span></li>
          <li><span class="count">6,000</span><span class="name">SQL注入攻击</span></li>
          <li><span class="count">6,000</span><span class="name">SQL注入攻击</span></li>
        </ul>
      </div>
      <div class="event-risk">
        <h2 class="title">事件风险分布</h2>
        <div class="event-risk-map" ref="eventRiskMap"></div>
      </div>
      <div class="all-station">
        <h2 class="title">全站被攻击统计</h2>
        <div class="all-station-map" ref="allStationMap"></div>
      </div>
      <div class="primary-sector">
        <h2 class="title">一级部门遭受攻击TOP10</h2>
        <div class="primary-sector-map" ref="primarySectorMap"></div>
      </div>
    </div>
    <div class="real-time"></div>
  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/pie')
  require('echarts/lib/chart/bar')
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')
  export default {
    data() {
      return {
        times: [{
          value: '1',
          label: '小时'
        }, {
          value: '2',
          label: '天'
        }, {
          value: '3',
          label: '周'
        }],
        timeValue: '小时'
      }
    },
    mounted() {
      // 事件风险分布
      let eventRiskMap = echarts.init(this.$refs.eventRiskMap)
      let eventRiskOption = {
        legend: { // 图例配置
          bottom: 0, // 图例距底部位置
          data: ['高危', '中危', '低危'], // 图例提示项
          itemWidth: 12, // 图例提示logo大小
          itemHeight: 12,
          selectedMode: false // 图例不可点击
        },
        series: [
          {
            name: '事件风险分布',
            type: 'pie',
            radius: ['50%', '70%'],
            itemStyle: {
              normal: {
                color: function (params) {
                  let colorList = ['#DA251D', '#E77817', '#F8C300']
                  return colorList[params.dataIndex]
                }
              }
            },
            data: [
              {value: 25, name: '高危'},
              {value: 25, name: '中危'},
              {value: 50, name: '低危'}
            ]
          }
        ]
      }
      eventRiskMap.setOption(eventRiskOption)

      // 全站被攻击统计
      let allStationMap = echarts.init(this.$refs.allStationMap)
      let allStationMapOption = {
        color: ['#E77817'], // 设置柱子颜色
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisTick: { // 不显示x坐标轴上的刻度线
              show: false
            },
            axisLabel: { // x轴label设置
              interval: 0, // 强制显示x轴所有label
              rotate: 45,
              textStyle: {
                color: '#CCC', // 设置x轴label颜色
                fontFamily: 'Microsoft YaHei'
              }
            },
            data: ['SQL注入', 'XSS', '非法协议', '命令行执行', '其它']
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: { // 不显示y坐标线
              show: false
            },
            axisTick: { // 不显示y坐标轴上的刻度线
              show: false
            },
            axisLabel: { // y轴label设置
              textStyle: {
                color: '#CCC', // 设置y轴label颜色,
                fontFamily: 'Microsoft YaHei'
              }
            },
            splitLine: {
              lineStyle: { // 设置水平分割线颜色
                color: ['#F2F2F2']
              }
            }
          }
        ],
        series: [
          {
            name: '全站被攻击统计',
            type: 'bar',
            barWidth: '35%', // 设置柱子宽度
            data: [240, 160, 230, 210, 160]
          }
        ]
      }
      allStationMap.setOption(allStationMapOption)

      // 一级部门遭受攻击TOP10
      let primarySectorMap = echarts.init(this.$refs.primarySectorMap)
      let primarySectorMapOption = {
        color: ['#E77817'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLine: { // 不显示y坐标线
            show: false
          },
          axisTick: { // 不显示y坐标轴上的刻度线
            show: false
          },
          axisLabel: { // y轴label设置
            textStyle: {
              color: '#CCC', // 设置y轴label颜色,
              fontFamily: 'Microsoft YaHei'
            }
          }
        },
        yAxis: {
          type: 'category',
          axisTick: { // 不显示y坐标轴上的刻度线
            show: false
          },
          axisLabel: { // y轴label设置
            textStyle: {
              color: '#CCC', // 设置y轴label颜色,
              fontFamily: 'Microsoft YaHei'
            }
          },
          data: ['部门10', '部门9', '部门8', '部门7', '部门6', '部门5', '部门4', '部门3', '部门2', '部门1']
        },
        series: [
          {
            type: 'bar',
            barWidth: '55%', // 设置柱子宽度
            data: [60, 80, 90, 120, 150, 160, 170, 180, 190, 230]
          }
        ]
      }
      primarySectorMap.setOption(primarySectorMapOption)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  .overview
    background: #fff
    .monitor
      height: 490px
      padding: 25px 30px
      overflow: hidden
      .title
        float: left
        font-size: 14px
      .time
        float: right
      .all-count
        width: 100%
        height: 64px
        margin-top: 50px
        ul
          li
            min-width: 96px
            height: 54px
            float: left
            padding: 5px 20px
            &:first-child
              padding-left: 0
            &:not(:last-child)
              border-right: 1px solid #ccc
            .count
              display: block
              margin-bottom: 10px
              font-size: 28px
              font-weight: 400
              color: #DA251D
            .name
              display: block
      .event-risk, .all-station, .primary-sector
        width: 33%
        height: 250px
        display: inline-block
        margin-top: 50px
        .title
            font-size: 14px
      .event-risk
        .event-risk-map
          width: 100%
          height: 100%
      .all-station
        .all-station-map
          width: 100%
          height: 100%
      .primary-sector
        .primary-sector-map
          width: 100%
          height: 100%
</style>
