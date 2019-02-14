<template>
	<div class="home">
    <div class="home-body">
      <!--头部轮播图  -->
      <div class="index-banner">
        <homeswiper />
      </div>
      <!-- 佛山气象局logo 搜索框 -->
      <div class="hTop">
        <hometop />
      </div>
      <!-- 导航栏 -->
      <div class="hNav">
        <homenav />
      </div>
      <!-- 内容 -->
      <div class="hNav-content">
        <!-- 向上滚动通告栏 -->
        <div class="homebar">
          <ul class="_container" id="demo">
            <li>我是第一个出现的</li>
            <li>我是第二个出现的</li>
            <li>我是第三个出现的</li>
            <li>我是第四个出现的</li>
            <li>我要开始循环了(第五个)</li>
          </ul>
          <ul class="_container" id="demo2">
            <li>例2我是第一个出现的</li>
            <li>例2我是第二个出现的</li>
            <li>例2我是第三个出现的</li>
            <li>例2我是第四个出现的</li>
            <li>例2我要开始循环了(第五个)</li>
          </ul>
        </div>
        <!-- 综合 -->
        <div class="home-merge">
          <!-- 左边 -->
          <div class="main_left">
            <div class="w775">
              <div class="nav_1">
                <ul>
                  <li class="hover"><a href="http://www.fs121.com/folo10d.aspx">综合</a></li>
                  <li><a href="http://www.fs121.com/fofine.aspx">精细化预报</a></li>
                  <li><a href="http://www.fs121.com/Typhoon.aspx">台风</a></li>
                </ul>
              </div>
              <div class="ybpic yahei" style="display:block;">
                <div class="xg"></div>
                <div class="yubao_day1" id="yubao_day1">

                  <div class="shik_p1">
                    <div class="sName">
                      <p class="pName">现在 · 禅城</p>
                      <p class="skNext">
                        <img src="./img/skNext.png" alt="">
                      </p>
                    </div>
                    <div class="clear"></div>
                    <div class="p2">11.6℃</div>
                    <div class="p3">较昨日：上升1.5℃</div>
                    <div class="p3">风向：西北</div>
                    <div class="p3">风速：3 m/s </div>
                    <div class="p3">能见度：无数据</div>
                  </div>

                  <div class="shik_p1 stationInfo">
                    <div class="p3">本站气压：1023.9hPa</div>
                    <div class="p3">相对湿度：78%</div>
                    <div class="p3">09日10时至今0.5(mm)</div>
                    <div class="p3">2018年12月10日10时30分</div>
                  </div>

                  <div class="shik_p1">
                    <div class="sun">
                      <img src="./img/cloudy.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <!-- 天气趋势 -->
              <div class="ds" style="border:none;background:none;">
                <div class="d1" style="background:#f9f9f9;">
                  <p class="p6">逐三小时预测</p>
                  <div class="sxsfont mb sxsyc">
                    <ul class="sxs_59828" style="display:block;">
                      <li v-for="(item, index) in ssdatadivArray" :key="item.index">
                        <div class="ssdatadiv">
                          {{item.date}}
                          <font color="#0055c2">{{item.datetime}}</font>
                        </div>
                        <div class="yb_h">
                          <div class="wea" :title="item.wsrain">
                            <img :src="item.imgurl" alt="">
                            <p class="ws">{{item.wsrain}}</p>
                            <p class="ws">{{item.hot}}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="d2">
                  <p class="p6">天气趋势</p>
                  <div class="dsfont1 mb" id="duanshi_o_cc">
                    <p>
                      预计今天白天阴天，有小雨，天气依旧寒冷；11日到12日受新一股冷空气补充影响，气温重新有所下降
                      <em>12月10日08时00分发布</em>
                    </p>
                  </div>
                </div>
                <div class="d3" style="background-color:#a4d3ff" id="ds">
                  <p class="p5 pwhx">短时预报</p>
                  <!-- 占位 -->
                   <Tabs value="name1">
                      <TabPane label="禅城" name="name1">
                        <div class="shtime_0">
                          <p>预计19日08时至19日20时：多云到阴天，有轻雾或轻微灰霾，东北风1级，气温：15－22℃，相对湿度：50%-80%；</p>
                        </div>
                        <br>
                        <div class="shtime_1">
                          <p>预计19日08时至19日20时：多云到阴天，有轻雾或轻微灰霾，东北风1级，气温：15－22℃，相对湿度：50%-80%；</p>
                        </div>
                      </TabPane>
                      <TabPane label="南海" name="name2">标签二的内容</TabPane>
                      <TabPane label="顺德" name="name3">标签三的内容</TabPane>
                      <TabPane label="高明" name="name4">标签四的内容</TabPane>
                      <TabPane label="三水" name="name5">标签五的内容</TabPane>
                  </Tabs>
                </div>

                <!-- 十五天天气预报 -->
                <div class="nav_6 clear">
                  <ul>
                    <li :class="[flag==1?'active':'']" style="cursor:pointer;" @click="change(1)">十天预报</li>
                    <li :class="[flag==2?'active':'']" style="cursor:pointer;" @click="change(2)">十五天预报</li>
                  </ul>
                  <div class="zdqw">
                    <div class="zdwd">
                        <img src="./img/home_004.jpg">最低温度
                    </div>
                    <div class="zdwd">
                        <img src="./img/home_005.jpg">最高温度（单位：℃）
                    </div>
                    <p>发布日期：{{navtime}}<span id="date_fb"></span></p>
                    <p style="margin-right: 10px">
                      <a href="#">打印我的预报</a>
                    </p>
                  </div>
                </div>
                <!-- 趋势图 -->
                <div class="daytq0" v-if="flag == 1">
                  <div class="littit_10">
                    <span class="s_ws" v-for="(item, index) in swsArray" :key="item.index">
                      {{item.datetime}}
                      <br>
                      {{item.day}}
                      <br>
                      <br>
                      <img :src="item.imgurl" :alt="item.altholder">
                    </span>
                  </div>
                  <canvas-one />
                </div>
                <div class="daytq1" v-if="flag == 2">
                  <div class="littit_10">
                    <span class="s_ws" v-for="(item, index) in swsArraytoo" :key="item.index">
                      {{item.datetime}}
                      <br>
                      {{item.day}}
                      <br>
                      <br>
                      <img :src="item.imgurl" :alt="item.altholder">
                    </span>
                  </div>
                  <canvas-list />
                </div>

                <!-- 本地交通预报 -->
                <div class="left_menudiv">
                  <title-content :titlearray="titlearrays"/>
                  <div class="bdyb_index">
                    <a href="#">
                      <img src="./img/jtmap_index.jpg" alt="">
                    </a>
                  </div>
                </div>
                <!-- 佛山景点预报 -->
                <slider-img />
                <!-- 出行天气预报 -->
                <home-centerimg
                  :headetitle="headetitleleft"
                  :headcontent="headcontentleft"
                  :imgurlcontent="imgurlcontentleft"/>
                <!-- 龙卷研究 -->
                <home-imgright
                  :headetitle="headetitleright"
                  :headcontent="headcontentright"
                  :imgurlcontent="imgurlcontentright"/>
                <!-- 虚拟观测场 -->
                <div class="left_menudiv">
                  <title-content :titlearray="titlearraybottom" :moretitle="moreleft"/>
                  <div class="bdyb_index">
                    <a href="#">
                      <img src="./img/jtmap_index.jpg" alt="">
                    </a>
                  </div>
                </div>
                <!-- 气象媒体 -->
                <home-video />
                <!-- 气象科普 -->
                <home-science />
              </div>
            </div>
          </div>
          <!-- 右边 -->
          <div class="main_right">
            <!-- 天气预警 -->
            <div class="toprain">
              <homeRightrain />
            </div>
            <!-- tab栏图片 -->
            <!-- 空气质量 -->
            <div class="tablewarn">
              <homeTablewarn />
            </div>
            <!-- 工作动态 -->
            <div class="homeworkd">
              <home-work />
            </div>
            <!-- 通知公告 -->
            <div class="Notice">
              <home-notice />
            </div>
            <!-- 微博互动 -->
            <!-- 互动交流 -->
            <!-- 在线办事 -->
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="hNav-footer"></div>
    </div>
	</div>
</template>

<script>
import homeswiper from './home-swiper'
import hometop from './home-top'
import homenav from './home-nav'
import myScroll from 'common/js/scroll'
import $ from "jquery"
import canvasList from './canvaslist'
import canvasOne from './canvasone'
import titleContent from './titlecontent'
import sliderImg from './sliderimg'
import homeCenterimg from './home-centerimg'
import homeImgright from './home-imgright'
import homeVideo from './home-video'
import homeScience from './home-science'
import homeRightrain from './home-rightrain'
import homeTablewarn from './home-tablewarn'
import homeWork from './home-work'
import homeNotice from './home-notice'

export default {
  components: {
    homeswiper,
    hometop,
    homenav,
    canvasList,
    canvasOne,
    titleContent,
    sliderImg,
    homeCenterimg,
    homeImgright,
    homeVideo,
    homeScience,
    homeRightrain,
    homeTablewarn,
    homeWork,
    homeNotice
  },
  data () {
    return {
      flag: 1,
      headetitleleft: '出行天气预报',
      headcontentleft: '为出行全国各地提供天气预报的快捷通道',
      imgurlcontentleft: require('./img/cxtqyb_index.jpg'),
      headetitleright: '龙卷研究',
      headcontentright: '国内首家龙卷研究中心',
      imgurlcontentright: require('./img/201410302776.jpg'),
      navtime: '2018-12-19 10:31',
      ssdatadivArray: [
        {
          date: '2018/12/10',
          datetime: '11-14时',
          wsrain: '阴天',
          imgurl: require('./img/2.png'),
          hot: '12~14℃'
        }, {
          date: '2018/12/10',
          datetime: '11-14时',
          wsrain: '阴天',
          imgurl: require('./img/2.png'),
          hot: '12~14℃'
        }, {
          date: '2018/12/10',
          datetime: '11-14时',
          wsrain: '阴天',
          imgurl: require('./img/2.png'),
          hot: '12~14℃'
        }, {
          date: '2018/12/10',
          datetime: '11-14时',
          wsrain: '阴天',
          imgurl: require('./img/2.png'),
          hot: '12~14℃'
        }
      ],
      swsArray: [
        {
          datetime: '12/19',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/19',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/19',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/19',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/19',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/19',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/19',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/19',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/19',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/19',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }
      ],
      swsArraytoo: [
        {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }, {
          datetime: '12/20',
          day: '周三',
          imgurl: require('./img/1.png'),
          altholder: '多云间阴天，早晚有轻雾'
        }
      ],
      titlearrays: '本地交通预报',
      titlearraybottom: '虚拟观测场',
      moreleft: '更多 >'
    }
  },
  created () {
    // this._getcanvasList()
    // this._getlist()
  },
  methods: {
    change(flag){
      this.flag = flag
    }
  },
  mounted () {
    myScroll.upScroll("demo", "-36px", 3200)
    myScroll.upScroll("demo2", "-36px", 2000)
    this.$nextTick(() => {
      setTimeout(() => {

      }, 20)
    })
  }
}
</script>
<style scoped lang="scss">
@import '~common/scss/color';

.home {
  background: url('./img/homeBg.jpg') repeat-y top center #f1f1f1;
  width: 100%;
  position: relative;
  > .home-body {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    > .index-banner {
      height: 102px;
      width: 100%;
      overflow: hidden;
    }
    > .hTop {
      width: 100%;
      height: 90px;
    }
    > .hNav {
      width: 100%;
      height: 45px;
    }
    > .hNav-content {
      width: 100%;
      height: 2339px;
      > .homebar {
        width: 100%;
        > ul {
          height: 20px;
          width: 530px;
          overflow: hidden;
          text-align: center;
          display: inline-block;
          list-style: none;
          > li {
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            list-style: none;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          > li:first-child {
            margin-top: 0;
            transition: margin-top .8s;
          }
        }
      }
      > .home-merge {
        width: 100%;
        > .main_left {
          width: 775px;
          float: left;
          margin-left: 28px;
          border-right: #e5e5e5 solid 1px;
          margin-top: 10px;
          > .w775 {
            width: 775px;
            float: left;
            > .nav_1 {
              width: 752px;
              height: 40px;
              border-bottom: #0055c2 solid 2px;
              background:#ededed;
              float: left;
              > ul {
                > li {
                  float: left;
                  color: #666;
                  font-size: 16px;
                  font-family:"Microsoft Yahei";
                  width: 127px;
                  text-align: center;
                  line-height: 40px;
                  > a {
                    color: #666;
                  }
                  a:hover {
                    color: #fff;
                  }
                }
                li:hover {
                  background: #0055c2;
                  color: #fff;
                }
              }
            }
            > .ybpic {
              background: url('./img/home_003.jpg') no-repeat;
              width: 752px;
              height: auto;
              float: left;
              > .xg {
                margin: 17px 0 0 30px;
              }
              > #yubao_day1 {
                height: 304px;
              }
              > .yudao_day1 {
                width: 720px;
                margin: 0 0 0 30px;
              }
            }
            > .ds {
              float: left;
              background: #f9f9f9;
              width: 752px;
              line-height: 24px;
              border: #e7e7e7 solid 1px;
              border-top: none;
              > .d1 {
                width: 100%;
                float: left;
                border: 1px solid #e5e5e5;
                min-height: 25px;
                border-top: none;
                > .p6 {
                  color: #ff6000;
                  font-size: 18px;
                  width: 120px;
                  margin: 15px 0 0 20px;
                  float: left;
                  text-indent: inherit;
                }
                > .sxsfont {
                  width: 100%;
                  float: left;
                  margin: 15px 0 0 0px;
                  min-height: 25px;
                  margin-bottom: 14px;
                  > ul {
                    > li {
                      float: left;
                      width: 155px;
                      margin: 0 10px 0 20px;
                      text-align: center;
                      font-size: 14px;
                      > .ssdatadiv {
                        color: #3d2d2d;
                        background: #fff;
                        border-radius: 9px;
                        border: 1px solid #d4d4d4;
                        line-height: 30px;
                        height: 30px;
                        width: 150px;
                        float: left;
                        margin-bottom: 10px;
                      }
                      > .yb_h {
                        float: left;
                        > .wea {
                          height: 35px;
                          width: 160px;
                          display: block;
                          > img {
                            float: left;
                            padding-top: 5px;
                          }
                          > .ws {
                            font-size: 16px;
                            line-height: 18px;
                            text-align: left;
                            text-indent: 5px;
                          }
                        }
                      }
                    }
                  }
                }
              }
              > .d2 {
                width: 100%;
                float: left;
                border: 1px solid #e5e5e5;
                background: #fff;
                min-height: 25px;
                margin-top: 10px;
                > .p6 {
                  color: #ff6000;
                  font-size: 18px;
                  width: 120px;
                  margin: 15px 0 0 20px;
                  float: left;
                  text-indent: inherit;
                }
                > .dsfont1{
                  width: 700px;
                  float: left;
                  margin: 15px 0 15px 20px;
                  min-height: 25px;
                  margin-bottom: 14px;
                  > p {
                    font-size: 14px;
                    width: 655px;
                    text-indent: 30px;
                    > em {
                      float: right;
                      color: #727272;
                      margin-right: 20px;
                      line-height: 20px;
                    }
                  }
                }
              }
              > .d3 {
                width: 100%;
                float: left;
                border: 1px solid #e5e5e5;
                min-height: 25px;
                border-top: none;
                > p {
                  float: left;
                  color: #ff6000;
                  width: 150px;
                  font-size: 18px;
                  margin: 15px 0 0 21px;
                  text-indent: inherit;
                }
              }
            }
          }
        }
        > .main_right {
          float: right;
          width: 352px;
          margin-right: 24px;
          line-height: 20px;
        }
      }
    }
    > .hNav-footer {

    }
  }
}

.shik_p1 {
  float: left;
  width: 240px;
  padding-left: 30px;
  > .sName {
    width: 100%;
    > .pName {
      background: #6695ff;
      border-radius: 3px;
      border: #89adff solid 1px;
      width: 72px;
      height: 25px;
      line-height: 25px;
      padding: 0 5px;
      float: left;
    }
    > .skNext {
      float: left;
      padding: 5px 0 0 5px;
      cursor: pointer;
    }
  }
}
.p2 {
  font-size: 65px;
  padding-top: 20px;
  width: 100%;
  line-height: 55px;
  color: #fff;
}
.p3 {
  font-size: 14px;
  padding-top: 12px;
  line-height: 20px;
  color: #fff;
}
.sun {
  padding-top: 20px;
}
.stationInfo {
  padding-top: 102px;
  position: relative;
  left: -70px;
  width: 200px;
}

.nav_6 {
  width: 752px;
  height: 40px;
  line-height: 40px;
  border-bottom: #0055c2 solid 3px;
  background: #ededed;
  float: left;
  margin-top: 10px;
  > ul {
    float: left;
    line-height:24px;
    > li {
      float: left;
      // color: #666;
      font-size: 16px;
      font-family: "Microsoft Yahei";
      padding: 0 20px;
      width: auto;
      text-align: center;
      line-height: 40px;
    }
    > li:hover {
      background: #0055c2;
      color: #fff;
    }
  }
  .zdqw {
    color: #7b7b7b;
    font-size: 14px;
    .zdwd {
      width: auto;
      float: left;
      padding-left: 5px;
      > img {
        float: left;
        margin: 19px 8px 0 0;
      }
    }
    > p {
      font-size: 12px;
      float: left;
      padding-left: 4px;
      margin-right: 8px;
    }
  }
  a {
    color: #858585;
    float: right;
    line-height: 40px;
    margin-right: 15px;
  }
}
.active {
  background-color: #0055c2;
  color: #fff;
}

.daytq0 {
  width: 752px;
  height: 292px;
  overflow: auto;
  position: relative;
  border: 1px solid #e5e5e5;
  float: left;
  background-color: #eff7ff;
  > .littit_10 {
    width: 100%;
    height: 100px;
    overflow: hidden;
    > span {
      position: relative;
      top: 20px;
      width: 80px;
      text-align: center;
      color: #7b7b7b;
      font-weight: bold;
      font-size:14px;
      line-height:18px;
      background:url(./img/line10.jpg) top right no-repeat;
    }
    .s_ws {
      width: 10%;
      float: left;
      padding: 0 5px;
    }
  }
}
.daytq1 {
  width: 100%;
  height: 292px;
  position: relative;
  border: 1px solid #e5e5e5;
  float: left;
  background-color: #eff7ff;
  overflow-x: scroll;
  > .littit_10 {
    width: 154%;
    height: 100px;
    overflow: hidden;
    > span {
      position: relative;
      top: 20px;
      width: 80px;
      text-align: center;
      color: #7b7b7b;
      font-weight: bold;
      font-size:14px;
      line-height:18px;
      background:url(./img/line10.jpg) top right no-repeat;
    }
    .s_ws {
      width: 77px;
      float: left;
      padding: 0 5px;
    }
  }
}

.left_menudiv {
  width: 378px;
  float: left;
  > .bdyb_index {
    width: 100%;
    float: left;
    color: #000;
    border: 1px solid #e3e3e3;
    height: 188px;
    margin-top: 10px;
    overflow: hidden;
    > a {
      color: #fff;
      text-decoration: none;
      > img {
        margin: 0 auto;
        display: block;
      }
    }
  }
}

</style>
