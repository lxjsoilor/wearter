<template>
  <div class="empty">
    <div class="bigradar">
      <!-- 头部标签 -->
      <div class="top-tab">
        <ul>
          <li v-for="(item, index) in toptabArray" :key="item.index">{{item.name}}</li>
        </ul>
      </div>
      <!-- 雷达图内容 -->
      <div class="conteng-radar">
        <foshan-radar />
      </div>
    </div>
  </div>
</template>

<script>
import FoshanRadar from './radar/foshanradar'

export default {
  components: {
    FoshanRadar
  },
  data () {
    return {
      toptabArray: [
        {
          name: '佛山镇街雷达图'
        }, {
          name: '广州雷达'
        }, {
          name: '肇庆雷达'
        }, {
          name: '全国雷达图'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.empty {
  width: 100%;
  height: 700px;
  > .bigradar {
    width: 100%;
    height: 100%;
    // background-color: red;
    > .top-tab {
      > ul {
        display: flex;
        padding-top: 8px;
        padding-left: 8px;
        > li {
          width: 19.91%;
          background-color: #eee;
          text-align: center;
          height: 30px;
          line-height: 30px;
          border-right: 1px solid #123A7B;
          font-size: 13px;
          cursor: pointer;
        }
        li:hover {
          background-color: #123A7B;
          color: #fff;
        }
      }
    }
    > .conteng-radar {
      width: 100%;
      height: 550px;
      padding-top: 5px;
    }
  }
}
</style>
