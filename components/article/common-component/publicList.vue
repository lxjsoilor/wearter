<template>
  <div class="list-area">
    <ul>
      <li
        v-for="(item,index) in list"
        :key="item.title + '-'+index"
        class="list-box clearfloat"
      >
        <router-link
          class="title"
          :to="path+'/content/'+item.id"
        >·{{item.title}}</router-link>
        <span>{{item.time}}</span>
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
.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}

.list-area {
  width: 100%;
  li {
    .title,
    span {
      height: 30px;
      line-height: 30px;
      font-size: 13px;
      font-family: "宋体";
      display: block;
      float: left;
    }
    .title {
      width: 798px;
    }
    span {
      width: 120px;
      text-align: right;
    }
  }
}
</style>
