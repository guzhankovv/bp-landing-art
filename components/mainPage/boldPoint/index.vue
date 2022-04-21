<template>
  <div class="bold">
    <div class="bold__top">
      <h1 class="bold__title title_1 border border--line">
        Bold Point is
      </h1>

      <div class="bold__textRow">
        <p class="bold__text text text_inter_20">
          Bold Point is your portal to a parallel universe
        </p>
      </div>
    </div>

    <div class="bold__aboutSlider aboutSlider">
      <Swiper
        :options="swiperOptions"
        class="aboutSlider__swiper"
      >
        <SwiperSlide
          v-for="(item, index) in slideList"
          :key="index"
          class="aboutSlider__slide"
        >
          <AboutSlide :slide-data="item" />
        </SwiperSlide>

        <div
          slot="pagination"
          class="aboutSlider__pagination"
        />
      </Swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import AboutSlide from './aboutSlide/index.vue'

export default {
  name: 'BoldPoint',
  components: {
    Swiper,
    SwiperSlide,
    AboutSlide
  },

  data () {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000
        },
        speed: 700,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: '.aboutSlider__pagination',
          bulletClass: 'aboutSlider__bullet',
          bulletActiveClass: 'aboutSlider__bullet--active',
          clickable: true,
          dynamicBullets: true,
          renderBullet (index, className) {
            return `<button class="${className} swiper-pagination-bullet-custom"></button>`
          }
        }
      },

      slideList: [
        {
          title: 'The Plot and Setting',
          text: 'Bold Point — is an alternative reality, stuck in between dimensions, a mosaic of our world’s different pieces torn out of order and crashed by an ancient civilization',
          img: '/images/mainAbout/slides/img_1.jpg'
        },
        {
          title: 'DAO and DeFi mechanics',
          text: 'The community has power to decide on the changing the exact characteristics of certain character types, skills, item sets and other in-game assets in a completely transparent and decentralized manner.',
          img: '/images/mainAbout/slides/img_2.jpg'
        },
        {
          title: 'Play to Earn',
          text: 'In Bold Point, your gaming skills have real value and can bring you uncountable rewards. With few steps you can extract game resources, craft new items and sell them to players on the market or NPC shops',
          img: '/images/mainAbout/slides/img_3.jpg'
        },
        {
          title: 'BP Arena',
          text: 'The Bold Point Champions Team will battle against other contenders. The winner will be the last player standing',
          img: '/images/mainAbout/slides/img_4.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bold {
  margin: 0 auto;
  padding: 80px 16px 100px;

  max-width: 1920px;

  overflow: hidden;

  background: url("/images/mainAbout/bgAbout.jpg") no-repeat 50% 50%/cover;

  box-shadow: inset -20px -9px 20px 20px #000000, inset -51px -49px 20px 0px rgb(0 0 0 / 54%);

  &__title {
    margin: 0 auto 32px;
    padding: 0 100px 20px;

    width: fit-content;

    text-align: center;

    @media (max-width: $media_xl) {
      margin: 0 auto 16px;
      padding: 0 50px 10px;
    }
  }

  &__textRow {
    position: relative;

    display: flex;
    justify-content: center;

    margin: 0 auto 85px;

    width: fit-content;

    &::before,
    &::after {
      content: "";

      position: absolute;
      top: 0;

      display: block;

      width: 35px;
      height: 35px;

      background: url('/icons/ornamentSmall.png') no-repeat center center/contain;

      @media (max-width: $media_xl) {
      width: 26px;
      height: 26px;

      top: -4px;
    }
    }

    &::after {
      right: -55px;

      transform: rotate(90deg);

      @media (max-width: $media_xl) {
      right: -38px;
    }
    }

    &::before {
      left: -55px;

      transform: rotate(-90deg);

      @media (max-width: $media_xl) {
      left: -38px;
    }
    }

    @media (max-width: $media_xl) {
      margin-bottom: 45px;
    }
  }

  &__text {
    text-align: center;
  }
}
</style>

<style lang="scss">
.aboutSlider {
  &__swiper {
    overflow: visible !important;
  }

  &__pagination {
    position: absolute;
    z-index: 2;
    bottom: -100px !important;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;

    width: 100% !important;
    height: 22px;
  }

  &__bullet {
    flex-shrink: 0;

    width: 14px;
    height: 14px;

    background: url('~/static/icons/circle.png');
    background-size: contain;
    background-repeat: no-repeat;

    filter: grayscale(1);

    transition: 0.3s;

    &--active {
      filter: grayscale(0);
      transform: scale(1.6);
    }
  }
}
</style>
