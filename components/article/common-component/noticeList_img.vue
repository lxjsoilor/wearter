<template>
  <div class="list-area">
    <ul>
      <li
        v-for="(item,index) in list"
        :key="item.title + '-'+index"
        class="list-box"
      >
        <div class="top">
          <router-link
            class="title"
            :to="path+'/content/'+item.id"
          >{{item.title}}</router-link>
        </div>
        <div class="middle">发布日期：{{item.time}} | 阅读：{{item.views}} 次</div>
        <div class="content">
          <router-link class="content-img" :to="path+'/content/'+item.id">
            <img :src="item.img" />
          </router-link>
          <router-link
            class="content-text"
            :to="path+'/content/'+item.id"
          >{{item.desc}}...[详情]</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  props: ['list', 'path']
}
</script>
<style lang="scss" scoped>
.list-area {
  width: 100%;
  padding: 2px 32px;
  .head-title {
    height: 33px;
    line-height: 33px;
    font-size: 30px;
    font-weight: bold;
    font-family: "宋体";
    text-align: center;
  }
  .list-box {
    width: 100%;
    padding: 20px 0 12px;
    border-block-end: 1px dashed #c8c8c8;
    a:hover {
      color: #000000;
      text-decoration: underline;
    }
    .top {
      height: 16px;
      line-height: 16px;
      .title {
        font-size: 14px;
        font-weight: bold;
        font-family: "宋体";
      }
    }
    .middle {
      height: 25px;
      line-height: 25px;
      font-size: 12px;
      font-family: "宋体";
    }
    .content {
      .content-img {
        width: 114px;
        height: 72px;
        margin-right: 20px;
        display: inline-block;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .content-text {
        width: 758px;
        line-height: 24px;
        display: inline-block;
        font-size: 12px;
        font-family: "宋体";
        text-indent: 24px;
        word-break: break-all;
      }
    }
  }
}
</style>
