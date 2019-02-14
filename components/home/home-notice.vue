<template>
  <div class="home-notice">
    <title-content :titlearray="titlenotice"/>
    <div class="ygzw_index">
      <div class="news">
        <ul>
          <li v-for="(item, index) in noticeArray" :key="item.index">
            <a :href="item.urlage" :title="item.titlename">
              {{item.titlename}}
            </a>
            <span>{{item.datetime}}</span>
          </li>
        </ul>
      </div>
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
      titlenotice: '通知公告',
      noticeArray: [
        {
          urlage: '',
          titlename: '佛山市气象局双公示事项目录',
          datetime: '2018-12-10'
        }, {
          urlage: '',
          titlename: '佛山市气象局双公示事项目录',
          datetime: '2018-12-10'
        }, {
          urlage: '',
          titlename: '佛山市气象局双公示事项目录',
          datetime: '2018-12-10'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-notice {
  > .ygzw_index {
    width: 350px;
    float: left;
    color: #000;
    border: 1px solid #e3e3e3;
    height: 100px;
    overflow: hidden;
    > .news {
      width: 340px;
      padding: 5px;
      > ul {
        > li {
          width: 340px;
          float: left;
          height: 30px;
          line-height: 30px;
          color: #000;
          > a {
            float: left;
            width: 250px;
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          > span {
            float: right;
          }
        }
      }
    }
  }
}
</style>
