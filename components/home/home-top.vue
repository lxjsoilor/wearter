<template>
  <div class="home-top clear">
    <div class="left-log pull-left">
      <a href="#">
        <img src="./img/logo_index.png" alt="">
      </a>
    </div>
    <div class="index_r pull-left">
      <div class="putInfo">本网站预报预警信息由佛山市气象台发布</div>
      <div class="tsearch pull-right">
        <div class="forminput clear">
          <input
            class="searchkey pull-left"
            placeholder="站内搜索"
            type="text"
            id="all_web_key_text_id"
            defaultval="站内搜索" >
          <!-- <input type="image" class="searchBtn" src="./img/home_05.jpg"> -->
          <Button class="searchBtn pull-left" type="primary" icon="ios-search"></Button>
        </div>
      </div>
      <div class="tnav pull-right">
        <a href="/">网站首页</a>
        |
        <a href="http://www.fs121.com/en"></a>
        <img src="./img/wza.jpg" alt="">
        <a href="http://www.fs121.com/wza.html">无障碍版</a>
        <img src="./img/home_08.jpg" alt="">
        <a href="http://www.fs121.com/wap">手机版</a>
        <img src="./img/home_11.jpg" alt="">
        <a href="http://www.fs121.com/index_win8.aspx">导航版</a>
      </div>
      <div class="tdata pull-right">
        <img src="./img/home_001.jpg" alt="" class="tdatatimg pull-left">
        <em>{{titletime}}</em>
        {{titleoldtime}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titletime: '2018-12-07 星期五',
      titleoldtime: '戊戌年十一月初一'
    }
  }
}
</script>

<style lang="scss" scoped>
.home-top {
  > .left-log {
    margin: 15px 0 0 32px;
    display: inline;
    width: 428px;
    > a {
      color: #fff;
      text-decoration: none;
      > img {

      }
    }
  }
  > .index_r {
    position: relative;
    width: 740px;
    > .putInfo {
      position: absolute;
      top: 5px;
      right: 25px;
      color: #727272;
    }
    > .tsearch {
      width: 210px;
      margin-top: 28px;
      margin-right: 25px;
      display: inline;
      > .forminput {
        > .searchkey {
          border: #d1d1d1 solid 1px;
          width: 166px;
          height: 24px;
          color: #727272;
          line-height: 26px;
          text-indent: 5px;
        }
        > .searchBtn {

        }
      }
    }
    > .tnav {
      width: 350px;
      margin-top: 35px;
      height: 26px;
      color: #727272;
      > a {
        padding: 0 7px;
        color: #727272;
      }
    }
    > .tdata {
      text-align: right;
      text-indent: 10px;
      margin: 5px 25px 0 42px;
      color: #727272;
      font-family: "Microsoft Yahei";
      > em {
        color: #494949;
      }
    }
  }
}
.ivu-btn {
  padding: 2.2px 11px !important;
  border-radius: 1px;
  background-color: #0055c2;
}
</style>
