<template>
  <div class="home">
    <div class="spotlight-shop">
      <img class="background-img" src="../assets/images/spotlight-img/shop/img1.jpg" alt>
      <img class="background-img" src="../assets/images/spotlight-img/shop/img2.jpg" alt>
      <img class="background-img" src="../assets/images/spotlight-img/shop/img3.jpg" alt>
      <div class="border-intro">
        <img src="../assets/images/borderIntro.png" alt>
        <div class="shop-info">
          <div class="shop-name">
            <h1 class="bold">清水332</h1>
          </div>
          <div class="shop-go">
            <div>
              <h2>地址：</h2>
              <p>新北市三峽區清水街332號</p>
            </div>
            <div>
              <h2>電話：</h2>
              <p>0935-609-008</p>
            </div>
          </div>
          <div class="shop-status">
            <p>
              狀態：
              <span>準備中</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="title">
        <h1>最新消息</h1>
      </div>
      <div class="block">
        <div class="left-button">
          <button>
            <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
          </button>
        </div>
        <div class="blocks">
            <Carousel>

            </Carousel>
        </div>
        <div class="right-button">
          <button>
            <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
          </button>
        </div>
      </div>
      <div class="circle"></div>
    </div>
    <div class="services"></div>
    <div class="spotlight-other-stores"></div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel"
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>
