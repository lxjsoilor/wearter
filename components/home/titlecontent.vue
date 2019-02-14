<template>
  <div class="title-contentstr">
    <ul>
      <li class="hover" style="width: auto;">
        <a href="#">{{titlearray}}</a>
      </li>
      <a class="moreright" href="#">{{moretitle}}</a>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    titlearray: {
      type: String,
      default: ''
    },
    moretitle: {
      tyepe: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.title-contentstr {
  width: 100%;
  height: 44px;
  border-bottom: #0055c2 solid 3px;
  background: #ededed;
  float: left;
  margin-top: 10px;
  > ul {
    float: left;
    line-height: 24px;
    width: 100%;
    > li {
      float: left;
      font-size: 16px;
      font-family: "Microsoft Yahei";
      padding: 0 20px;
      overflow: hidden;
      text-align: center;
      line-height: 40px;
      > a {
        float: right;
        line-height: 43px;
        margin: 0 6px;
        color: #fff;
      }
    }
    > .moreright {
      float: right;
      color: #858585;
      line-height: 43px;
      margin: 0 6px;
    }
    .hover {
      background: #0055c2;
      color: #fff;
    }
  }
}
</style>
