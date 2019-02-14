<template>
  <div class="tqyj">
    <h3>天气预警</h3>
    <div class="more">
      <a href="#">更多 ></a>
    </div>
    <div class="warnInfo">
      <dl>
        <dd class="yj_area">
          <ul>
            <li class="first">&nbsp;</li>
            <li>禅城</li>
            <li>南海</li>
            <li>顺德</li>
            <li>高明</li>
            <li>三水</li>
            <div class="cleasr"></div>
          </ul>
        </dd>
        <dd class="yj_warning" v-for="(item, index) in warnArray" :key="item.index">
          <ul>
            <li class="first">{{item.warnname}}</li>
            <li>
              <img :src="item.imgurlage1" alt="">
            </li>
            <li>
              <img :src="item.imgurlage2" alt="">
            </li>
            <li>
              <img :src="item.imgurlage3" alt="">
            </li>
            <li>
              <img :src="item.imgurlage4" alt="">
            </li>
            <li>
              <img :src="item.imgurlage5" alt="">
            </li>
            <div class="cleasr"></div>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      warnArray: [
        {
          warnname: '灰霾',
          imgurlage1: require('./img/F3.png'),
          imgurlage2: require('./img/F3.png'),
          imgurlage3: require('./img/F3.png'),
          imgurlage4: require('./img/F3.png'),
          imgurlage5: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tqyj {
  width: 352px;
  min-height: 190px;
  height: auto;
  float: left;
  background: url(./img/yjbj.jpg) no-repeat repeat;
  margin-top: 10px;
  padding-bottom: 10px;
  > h3 {
    float: left;
    font-size: 24px;
    font-weight: 100;
    margin-top: 14px;
    text-indent: 15px;
    width: 150px;
    height: 30px;
    color: #fff;
  }
  > .more {
    text-align: right;
    padding-right: 10px;
    position: relative;
    top: 11px;
    float: right;
    width: 50px;
    > a {
      color: #fff;
      text-decoration: none;
    }
  }
  > .warnInfo {
    width: 330px;
    margin: 0 auto;
    padding-top: 50px;
    > dl {
      > .yj_area {
        > ul {
          width: 330px;
          list-style-type: none;
          > li {
            font-size: 12px;
            height: 40px;
            line-height: 40px;
            vertical-align: middle;
            list-style-type: inherit;
            text-align: center;
            float: left;
            color: #fff;
            width: 54px;
          }
          > .cleasr {
            clear: both;
            font-size: 0px;
            line-height: 0;
            height: 0;
          }
          > .first {
            width: 60px;
            border: none;
          }
        }
      }
      > .yj_warning {
        > ul {
          list-style-type: none;
          width: 330px;
          > li {
            font-size: 12px;
            height: 40px;
            line-height: 40px;
            vertical-align: middle;
            list-style-type: inherit;
            text-align: center;
            float: left;
            padding-left: 4px;
          }
          > .cleasr {
            clear: both;
            font-size: 0px;
            line-height: 0;
            height: 0;
          }
          > .first {
            width: 60px;
            border: none;
          }
        }
      }
    }
  }
}
</style>

