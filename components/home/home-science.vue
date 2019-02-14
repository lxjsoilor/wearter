<template>
  <div class="science">
    <!-- 头部 -->
    <title-content :titlearray="titlearraybottom" :moretitle="moretitlebottom"/>
    <div class="cont_kepu">
      <ul v-for="(item, index) in contentArray" :key="item.index">
        <li>
          <a href="#" :title="item.title">{{item.title}}</a>
        </li>
      </ul>
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
      titlearraybottom: '气象科普',
      moretitlebottom: '更多 >',
      contentArray: [
        {
          title: '雾和霾的小伙伴 静稳天气'
        }, {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        },  {
          title: '雾和霾的小伙伴 静稳天气'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.science {
  width: 750px;
  > .cont_kepu {
    width: 750px;
    float: left;
    border: 1px solid #e3e3e3;
    border-top: none;
    > ul {
      padding: 0 20px;
      > li {
        width: 320px;
        float: left;
        height: 28px;
        line-height: 28px;
        color: #333333;
        background: url(./img/liH.jpg) no-repeat left center;
        padding-left: 5px;
        padding-right: 30px;
        > a {
          color: #333333;
          width: 270px;
          overflow: hidden;
          float: left;
        }
      }
    }
  }
}
</style>
