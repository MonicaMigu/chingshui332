<template>
  <div class="home">
    <div class="spotlight-shop">
      <img class="background-img" src="../assets/images/spotlight-img/shop/img1.jpg" alt>
      <img class="background-img" src="../assets/images/spotlight-img/shop/img2.jpg" alt>
      <img class="background-img" src="../assets/images/spotlight-img/shop/img3.jpg" alt>
      <img class="background-img" src="../assets/images/spotlight-img/shop/chingshui332.jpg" alt>
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
        <h1 class="bold">最新消息 News</h1>
      </div>
      <div class="content">
        <Carousel
          class="slider-container"
          :loop="true"
          :autoplayTimeout="3000"
          :perPage="3"
          :autoplayHoverPause="true"
          :navigationEnabled="true"
          navigationNextLabel="<svg aria-hidden='true' data-fa-processed='' data-prefix='fas' data-icon='angle-right' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512' class='svg-inline--fa fa-angle-right fa-w-8'><path fill='currentColor' d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'></path></svg>"
          navigationPrevLabel="<svg aria-hidden='true' data-fa-processed='' data-prefix='fas' data-icon='angle-left' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512' class='svg-inline--fa fa-angle-left fa-w-8'><path fill='currentColor' d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z' class=''></path></svg>"
        >
          <Slide v-for="e in news" :key="e.link">
            <div class="block">
              <img :src="e.img" alt>
              <div>
                <h2 class="bold">{{ e.title }}</h2>
                <p class="bold">{{ e.intro }}</p>
                <a :href="e.link">
                  <span class="bold">
                    了解更多
                    <font-awesome-icon class="angle" :icon="['fas', 'angle-right']"></font-awesome-icon>
                  </span>
                </a>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
    <div class="services">
      <div class="service">
        <div class="title">
          <h1 class="bold">場地租借</h1>
        </div>
        <div class="content">
          <p>位於三峽河岸邊的一間小店，鄰近三峽祖師廟、三峽老街與李梅樹紀念管等文化景點，適合用於小型聚會、文化導覽點、社群活動、工作坊等用途，場地備有茶水、插座與網路。</p>
        </div>
        <div class="button">
          <a href="#">
            <span class="bold">
              了解更多
              <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
            </span>
          </a>
        </div>
      </div>
      <div class="bar"></div>
      <div class="service">
        <div class="title">
          <h1 class="bold">在地品牌</h1>
        </div>
        <div class="content">
          <p>三峽不是只有金牛角而已，還有許多在地微光，在地方上閃耀著，他們或許沒有什麼光鮮亮麗的包裝，但是卻存在著最踏實的內涵，我們嘗試去尋找這些商家，將他們的故事與精神傳達給您。</p>
        </div>
        <div class="button">
          <a href="#">
            <span class="bold">
              了解更多
              <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="spotlight-other-stores">
      <img class="background-img" src="../assets/images/spotlight-img/shop/img1.jpg" alt>
      <img class="background-img" src="../assets/images/spotlight-img/shop/img2.jpg" alt>
      <img class="background-img" src="../assets/images/spotlight-img/shop/img3.jpg" alt>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/main.scss";
.home {
  .spotlight-shop {
    width: 100%;
    height: calc(985 * 100vh / 1080);
    background-color: $white;
    display: flex;
    align-items: center;

    .border-intro {
      position: absolute;
      height: 46vmin;
      width: 46vmin;
      left: 50px;

      img {
        width: 100%;
        height: 100%;
      }

      .shop-info {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $white;

        div {
          width: 78%;
        }
        .shop-name {
          text-align: center;
          font-weight: 500;
          margin: calc(50 * 100vw / 1920) 0px;
          font-size: 3vmin;
        }

        .shop-go {
          div {
            margin-bottom: calc(50 * 100vw / 1920);
          }

          h2 {
            margin-bottom: calc(10 * 100vw / 1920);
            font-size: 2.5vmin;
          }

          p {
            font-size: 2.2vmin
          }
        }

        .shop-status {
          text-align: center;
          font-size: 3vmin;

          span {
            color: rgb(255, 205, 188);
          }
        }
      }
    }
  }

  .news {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #aaaaaa;

    .title {
      height: 20vh;
      color: $white;
      display: flex;
      align-items: center;

      h1 {
        font-size: 7.4vmin;
      }
    }

    .content {
      height: 80vh;
      display: flex;
      flex-direction: row;

      .VueCarousel.slider-container {
        outline: none;
        width: 91vw;

        .VueCarousel-inner {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .block {
            position: relative;
            background-color: $white;
            width: 28vw;
            height: 65vh;
            border-radius: 30px;
            margin: 0 calc(7vw / 6);

            img {
              width: 100%;
              border-radius: 30px 30px 0px 0px;
            }

            div {
              display: flex;
              flex-direction: column;
              padding: 20px;

              h2 {
                font-size: 25px;
                font-weight: 500;
                @media screen and (max-width: 1440px) {
                  font-size: 20px;
                }
              }

              p {
                font-size: 17px;
                line-height: 1.3;
                letter-spacing: 1.5px;
                margin: 12px 0px;
                @media screen and (max-width: 1440px) {
                  font-size: 15px;
                }
              }

              a {
                display: flex;
                position: absolute;
                right: 25px;
                bottom: 15px;
                color: #363660;
                font-size: 30px;
                @media screen and (max-width: 1440px) {
                  font-size: 25px;
                }
              }
            }
          }
        }

        .VueCarousel-navigation {
          &-button {
            color: #363660;
            font-size: 80px;
          }
        }
      }
    }
  }

  .services {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .service {
      width: calc(100vw / 2 - 8px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        height: 17vh;
        width: calc(100vw / 2 - 8px);
        text-align: center;

        h1 {
          font-size: 80px;
          @media screen and (max-width: 1440px) {
            font-size: 60px;
          }
        }
      }

      .content {
        height: 63vh;
        width: calc(100vw / 2 - 8px);
      }

      .button {
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: calc(430 * 100vw / 1920);
          height: calc(100 * 100vw / 1920);
          border-radius: 20px;
          background-color: #aaaaaa;
          color: #363660;

          span {
            margin: auto;
            font-size: 45px;
            @media screen and (max-width: 1440px) {
              font-size: 40px;
            }
          }
        }
      }
    }

    .bar {
      width: 8px;
      height: calc(850 * 100vh / 1080);
      background-color: #707070;
    }
  }

  .spotlight-other-stores {
    width: 100%;
    height: 100vh;
  }
}
</style>

<script>
import { Carousel, Slide } from "vue-carousel";
import { mapGetters } from "vuex";

export default {
  components: {
    Carousel,
    Slide
  },
  computed: {
    ...mapGetters(["news"])
  }
};
</script>
