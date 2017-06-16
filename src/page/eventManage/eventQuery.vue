<template>
  <div class="eventList container">
    <h1 class="title">事件列表</h1>
    <div class="list">
      <el-table :data="tableData5" stripe>
        <!-- <el-table-column type="expand">
          <template scope="props">
            <el-form label-position="right" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.detail.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.detail.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.detail.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.detail.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.detail.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.detail.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.detail.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column> -->
        <el-table-column label="商品 ID" prop="id">
        </el-table-column>
        <el-table-column label="商品名称" prop="name">
        </el-table-column>
        <el-table-column label="描述" prop="desc">
        </el-table-column>
        <el-table-column label="详情" prop="detail">
          <template scope="scope">
            <img src="../../images/detail.png" alt="查看详情" :data-id="scope.row.id" class="detail">
          </template>
        </el-table-column>
        <el-table-column type="expand">
          <template scope="props">
            <el-form label-position="right" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.detail.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.detail.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.detail.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.detail.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.detail.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.detail.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.detail.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
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
        tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          detail: {
            id: '12987122',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          detail: {
            id: '12987123',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          detail: {
            id: '12987125',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          detail: {
            id: '12987122',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
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
      .el-table
        width: 100%
        border: 0
        font-size: 12px
        .el-table__header-wrapper
          thead
            tr
              border-top: 1px solid #E4E4E4
              border-bottom: 2px solid #E4E4E4
              th, th > div
                background: #fff
                font-weight: 700
        .el-table__body-wrapper
          .el-table__body tr:nth-child(2n) td
            background: #F2F2F2
          .detail
            width: 16px
            height: 16px
            cursor: pointer
    .page
      margin-top: 25px
</style>
