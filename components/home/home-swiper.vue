<template>
  <div class="home-swiper">
    <div class="header-slider">
      <div class="container" ref='mypp'>
        <div class="swiper-container" >
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in imgArray" :key="item.index">
              <img :src="item.imgurl" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  data () {
    return {
      mySwiper: "",
      imgArray: [
        {
          imgurl: require("./img/fengjing.png")
        },
        {
          imgurl: require("./img/fengjing2.png")
        },
        {
          imgurl: require("./img/fengjing3.png")
        },
        {
          imgurl: require("./img/rain.png")
        }
      ]
    }
  },
  methods: {
    init() {
      this.mySwiper = new Swiper(".swiper-container", {
        effect: "fade", //cube   fade   flip   slide(默认轮播效果-左右滑动)
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          //可选选项，自动滑动
          delay: 2000
          // stopOnLastSlide: false,  //如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
          // disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。默认为true：停止。
        },
        // autoplayDisableOnInteraction : false,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },

        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar"
        }
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init();
    });
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-wrapper {
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
.swiper-container .swiper-wrapper .swiper-slide > img {
  width: 100%;
  height: 102px;
  /* overflow: hidden; */
}
</style>
