<template>
  <div class="cxtqljyj_index clear">
    <div class="cxtqljyj_head">
      <h2>{{headetitle}}</h2>
      <a href="#">
        <p>
          {{headcontent}}
          <img src="./img/cxtq_right.png"/>
        </p>
      </a>
    </div>
    <div class="cxtqljyj_body">
      <a href="#">
        <img :src="imgurlcontent" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headetitle: {
      type: String,
      default: ''
    },
    headcontent: {
      type: String,
      default: ''
    },
    imgurlcontent: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.cxtqljyj_index {
  width: 355px;
  float: right;
  margin-top: 10px;
  > .cxtqljyj_head {
    width: 100%;
    height: 72px;
    background: #ededed;
    float: left;
    > h2 {
      color: #0055c2;
      font-size: 22px;
      margin: 5px 0 0 20px;
    }
    > a {
      > p {
        color: #575757;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        margin: 5px 0 0 20px;
        > img {
          margin: 4px 20px auto;
          float: right;
        }
      }
    }
  }
  > .cxtqljyj_body {
    width: 100%;
    > a {
      color: #fff;
      text-decoration: none;
      > img {
        border: 0;
        width: 100%;
        height: 167px;
      }
    }
  }
}
</style>
