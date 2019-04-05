<template>
  <div class="news">
    <div class="block" v-for="e in news" :key="e.link">
      <img :src="e.img" alt>
      <div>
        <h2 class="bold">{{ e.title }}</h2>
        <p class="bold">{{ e.intro }}</p>
        <a :href="e.link">
          <span class="bold">
            了解更多
            <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["news"])
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.news {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: calc(67.5 * 100vh / 1080) 0;

  .block {
    position: relative;
    background-color: $white;
    width: 28%;
    height: 66vh;
    border: #707070 1px solid;
    border-radius: 30px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    margin: calc(67.5 * 100vh / 1080) calc(16% / 6);
    img {
      width: 100%;
      border-bottom: #707070 1px solid;
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
</style>
