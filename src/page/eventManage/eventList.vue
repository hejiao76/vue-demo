<template>
  <div class="eventList container">
    <h1 class="title">事件列表</h1>
    <div class="list">
      <table cellspacing="0" cellpadding="0" border="0" class="table">
        <thead>
          <tr class="thead">
            <th>级别</th>
            <th>ID</th>
            <th>类型</th>
            <th>规则</th>
            <th>源IP</th>
            <th>目的IP</th>
            <th>URL</th>
            <th>时间</th>
            <th>详情</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in eventList">
            <tr>
              <td><span class="level" :class="levelMap[item.level-1].class"></span>{{levelMap[item.level-1].name}}</td>
              <td>{{item.eventId}}</td>
              <td>{{item.eventType}}</td>
              <td>{{item.ruleMsg}}</td>
              <td>{{item.sIp}}</td>
              <td>{{item.dIp}}</td>
              <td>{{item.url}}</td>
              <td>{{item.time}}</td>
              <td><img src="../../images/detail.png" alt="查看详情" class="detail" @click="showDetail(item.eventId)"></td>
            </tr>
            <transition name="detail">
              <div class="detail-container" v-if="showDetailId === item.eventId">
                <p>aaaaaaaaaaa</p>
                <p>aaaaaaaaaaa</p>
                <p>aaaaaaaaaaa</p>
                <p>aaaaaaaaaaa</p>
                <p>aaaaaaaaaaa</p>
                <p>aaaaaaaaaaa</p>
              </div>
            </transition>
          </template>
        </tbody>
      </table>
    </div>
    <div class="page block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 15, 20]"
        :page-size="15"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 等级名及样式Map
        levelMap: [{
          name: '高',
          class: 'level1'
        },
        {
          name: '中',
          class: 'level2'
        },
        {
          name: '低',
          class: 'level3'
        }],
        // 显示详情的事件id
        showDetailId: 0,
        // 事件列表
        eventList: [{
          eventId: '562342340',
          level: '1',
          eventType: 'SQL注入',
          ruleMsg: 'iis_range_overflow',
          sIp: '192.168.1.1',
          dIp: '192.168.2.2',
          url: 'shouji.jd.com',
          time: '2017-5-4 17:31:21'
        },
        {
          eventId: '562342341',
          level: '2',
          eventType: 'SQL注入',
          ruleMsg: 'iis_range_overflow',
          sIp: '192.168.1.1',
          dIp: '192.168.2.2',
          url: 'shouji.jd.com',
          time: '2017-5-4 17:31:21'
        },
        {
          eventId: '562342342',
          level: '3',
          eventType: 'SQL注入',
          ruleMsg: 'iis_range_overflow',
          sIp: '192.168.1.1',
          dIp: '192.168.2.2',
          url: 'shouji.jd.com',
          time: '2017-5-4 17:31:21'
        },
        {
          eventId: '562342343',
          level: '1',
          eventType: 'SQL注入',
          ruleMsg: 'iis_range_overflow',
          sIp: '192.168.1.1',
          dIp: '192.168.2.2',
          url: 'shouji.jd.com',
          time: '2017-5-4 17:31:21'
        },
        {
          eventId: '562342344',
          level: '1',
          eventType: 'SQL注入',
          ruleMsg: 'iis_range_overflow',
          sIp: '192.168.1.1',
          dIp: '192.168.2.2',
          url: 'shouji.jd.com',
          time: '2017-5-4 17:31:21'
        },
        {
          eventId: '562342345',
          level: '1',
          eventType: 'SQL注入',
          ruleMsg: 'iis_range_overflow',
          sIp: '192.168.1.1',
          dIp: '192.168.2.2',
          url: 'shouji.jd.com',
          time: '2017-5-4 17:31:21'
        },
        {
          eventId: '562342346',
          level: '1',
          eventType: 'SQL注入',
          ruleMsg: 'iis_range_overflow',
          sIp: '192.168.1.1',
          dIp: '192.168.2.2',
          url: 'shouji.jd.com',
          time: '2017-5-4 17:31:21'
        },
        {
          eventId: '562342347',
          level: '1',
          eventType: 'SQL注入',
          ruleMsg: 'iis_range_overflow',
          sIp: '192.168.1.1',
          dIp: '192.168.2.2',
          url: 'shouji.jd.com',
          time: '2017-5-4 17:31:21'
        },
        {
          eventId: '562342348',
          level: '1',
          eventType: 'SQL注入',
          ruleMsg: 'iis_range_overflow',
          sIp: '192.168.1.1',
          dIp: '192.168.2.2',
          url: 'shouji.jd.com',
          time: '2017-5-4 17:31:21'
        },
        {
          eventId: '562342349',
          level: '1',
          eventType: 'SQL注入',
          ruleMsg: 'iis_range_overflow',
          sIp: '192.168.1.1',
          dIp: '192.168.2.2',
          url: 'shouji.jd.com',
          time: '2017-5-4 17:31:21'
        }],
        // 详情信息
        detailInfo: {
          eventId: '562342342',
          level: '1',
          eventType: 'SQL注入',
          ruleMsg: 'iis_range_overflow',
          sIp: '192.168.1.1',
          dIp: '192.168.2.2',
          url: 'shouji.jd.com',
          time: '2017-5-4 17:31:21'
        },
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
      showDetail(eventId) {
        this.showDetailId = eventId
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  .eventList
    width: 1120px
    background: #fff
    padding: 30px 25px
    .title
      font-size: 14px
      font-weight: 400
      color: #333
    .list
      margin-top: 25px
      .table
        width: 100%
        font-size: 12px
        overflow: hidden
        thead
          tr
            height: 40px
            line-height: 40px
            border-top: 1px solid #e4e4e4
            border-bottom: 2px solid #e4e4e4
            th
              text-align: left
              padding: 0 18px
              font-weight: 700
        tbody
          tr
            height: 40px
            line-height: 40px
            border-bottom: 1px solid #e4e4e4
            td
              text-align: left
              padding: 0 18px
              .level
                width: 10px
                height: 10px
                display: inline-block
                border-radius: 50%
                margin-right: 4px
                &.level1
                  background: #DA251D
                &.level2
                  background: #E77817
                &.level3
                  background: #F8C300
              .detail
                cursor: pointer
          .detail-container
            height: 100px
            opacity: 1
            &.detail-enter-active, &.detail-leave-active
              transition: all .1s
            &.detail-enter, &.detail-leave-active
              height: 0
              opacity: 0
    .page
      margin-top: 25px
</style>
