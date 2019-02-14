<template>
  <div class="list-area">
    <div class="public-list-carousel">
      <Carousel radius-dot arrow="never" v-model="carouselCurrent" >
        <CarouselItem
          v-for="(item,index) in carouselList"
          :key="'carousel-'+index"
        >
          <router-link
            class="carousel-box"
            :to="item.path"
          >
            <img :src="item.img">
            <span>{{item.title}}</span>
          </router-link>
        </CarouselItem>
      </Carousel>
    </div>

    <ul class="list">
      <li
        v-for="(item,index) in list"
        :key="item.title + '-'+index"
        class="list-box"
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
  props: ['list', 'path', 'carousel-list'],
  data(){
    return {
      carouselCurrent:0
    }
  }
}
</script>
<style lang="scss" scoped>

.list-area {
  width: 100%;
  .public-list-carousel {
    width: 300px;
    padding: 5px;
    background-color: #ededed;
    display: inline-block;
    vertical-align: top;
    .carousel-box {
      width: 100%;
      img,span{
        display: block;
      }
      img{
        width: 300px;
        height: 228px;
        margin-bottom: 10px;
      }
      span{
        height: auto;
        line-height: 18px;
        font-size: 15px;
        font-weight: "宋体";
        color: #333333;
      }
    }
  }
  .list {
    width: 600px;
    margin-left: 8px;
    display: inline-block;
    vertical-align: top;
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
        width: 480px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      span {
        width: 120px;
        text-align: right;
      }
    }
  }
}
</style>
