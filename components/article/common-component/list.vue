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
          <span class="time">发布时间：{{item.time}}</span>
        </div>
        <div class="content">
          <router-link
            class="content-text"
            :to="path+'/content/'+item.id"
          >{{item.desc}}</router-link>
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
  .list-box {
    width: 100%;
    height: 150px;
    padding: 10px 10px 3px;
    margin-bottom: 10px;
    box-sizing: border-box;
    background-color: #f2faff;
    .top {
      height: 26px;
      border-bottom: 1px #124e92 solid;
      .title {
        height: 26px;
        line-height: 26px;
        display: block;
        float: left;
        font-size: 14px;
        font-weight: bold;
      }
      .title:hover {
        text-decoration: underline;
        color: #000000;
      }
      .time {
        height: 26px;
        line-height: 26px;
        float: right;
        font-size: 12px;
        font-family: "宋体";
      }
    }
    .content {
      height: 110px;
      overflow-y: hidden;
      text-indent: 24px;
      .content-text {
        line-height: 22px;
        font-size: 12px;
        font-family: "宋体";
      }
      .content-text:hover {
        text-decoration: underline;
        color: #000000;
      }
    }
  }
}
</style>
