<template>
  <div class="content-page">
    <div class="title">{{contentData.title}}</div>
    <div class="middle">
      <b>发布日期：</b>{{contentData.time}}
      <b style="margin-left:15px">阅读：</b>{{contentData.views}} 次
    </div>
    <div class="content">{{contentData.content}}</div>
    <div class="bottom">
      <span @click="routeBack">【返回】</span>
    </div>
  </div>
</template>
<script>

export default {
  props: ['path', 'content-name'],
  mounted() {
    let id = this.$route.params.id
    let contentData = this.contentData
    this.id = id
    contentData.title += id
    contentData.content = id + '的' + contentData.content
  },
  data() {
    return {
      id: '',
      contentData: {
        title: '文章标题',
        time: '2019/1/4 15:30:00',
        views: '976',
        content: '文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容'
      }
    }
  },
  methods: {
    getData() {

    },
    routeBack() {
      this.$router.back()
    }
  }

}
</script>
<style lang="scss" scoped>
.content-page {
  width: 100%;
  padding: 18px 23px;
  box-sizing: border-box;
  .title,
  .middle {
    height: 30px;
    line-height: 30px;
    font-family: "宋体";
    text-align: center;
  }
  .title {
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px dashed #666;
  }
  .middle {
    margin-bottom: 15px;
    font-size: 12px;
  }
  .content {
    line-height: 24px;
    font-size: 12px;
    font-family: "宋体";
  }
  .bottom {
    text-align: right;
    span {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      font-family: "宋体";
      font-weight: bold;
      cursor: pointer;
    }
    span:hover {
      text-decoration: underline;
    }
  }
}
</style>
