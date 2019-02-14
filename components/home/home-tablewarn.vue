<template>
  <div class="home-tablewarn">
    <title-content :titlearray="warintitle" />
    <!-- table -->
    <div class="ygzw_index">
      <div class="airDiv">
        <table cellspacing="0" width="340" id="airtable" class="airtable">
          <tbody>
            <tr>
              <td style="width:72px"></td>
              <td>12/21</td>
              <td>12/22</td>
              <td>12/23</td>
            </tr>
            <tr>
              <td>空气质量状况</td>
              <td>轻度污染</td>
              <td>轻度污染至中度污染</td>
              <td>良</td>
            </tr>
            <tr>
              <td>主要污染物</td>
              <td>二氧化氮、PM2.5</td>
              <td>二氧化氮、PM2.5</td>
              <td>二氧化氮、PM2.5</td>
            </tr>
          </tbody>
        </table>
        佛山市环境保护局和佛山市气象局
        <br>
        <span>{{bottomcontent}}</span>
      </div>
    </div>
    <div class="warnshop" style="margin-top:10px;display:block">
      <a href="http://www.fs121.com/WeatherSupermarket.aspx">
        <img src="./img/banner.jpg" alt="气象超市" style="width: 350px; height:90px;">
      </a>
    </div>
    <div style="margin-top:10px;">
      <img src="./img/weixinnew.png" alt="气象二维码" style="width:350px;">
      <img src="./img/zhihuiqixiangnew.png" alt="智慧期气象" style="width:350px;">
    </div>
    <div style="margin-top:10px;">
      <a href="http://xy.fspc.gov.cn/" title="信用信息 双公示">
        <img src="./img/SGG.jpg" alt="信用信息 双公示" style="width:350px;height:70px;">
      </a>
    </div>
  </div>
</template>

<script>
import titleContent from './titlecontent'

export default {
  components: {
    titleContent
  },
  data () {
    return {
      warintitle: '空气质量预 报',
      bottomcontent: '2018年12月20日17时联合发布'
    }
  }
}
</script>

<style lang="scss" scoped>
.home-tablewarn {
  width: 100%;
  > .ygzw_index {
    width: 350px;
    float: left;
    border: 1px solid #e3e3e3;
    overflow: hidden;
    color: #000;
    > .airDiv {
      padding: 5px;
      text-align: center;
      > .airtable {
        border-collapse: collapse;
        border-spacing: 0;
        word-break: break-all;
        > tr {

        }
        tr:first-child {
          background-color: #e1e3e2;
          font-weight: bold;
        }
      }
    }
  }
}
td {
  border: 1px solid #aebebc;
  font-size: 12px;
  line-height: 16px;
  padding: 5px;
  text-align: center;
}
</style>
