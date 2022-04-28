<template>
  <div class="bold">
    <div class="bold__top">
      <h1 class="bold__title title_1 border border--line">
        Bold Inspiration
      </h1>

      <div class="bold__textRow">
        <p class="bold__text text text_inter_20">
          Bold Point is your portal to a parallel universe and a unique NFT-based RPG game based on Avalanche
        </p>
      </div>
    </div>

    <div class="bold__main main">
      <div class="main__leftText">
        <Swiper
          ref="textSwiper"
          :options="textSwiperOptions"
        >
          <SwiperSlide
            v-for="(item, index) in slideList"
            :key="index"
            class="aboutSlider__slide"
          >
            <h2 class="main__title subtitle_cin_42">
              {{ slideList[index].title }}
            </h2>

            <p class="main__text text_inter_18">
              {{ slideList[index].text }}
            </p>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="main__aboutSlider aboutSlider">
        <Swiper
          ref="aboutSwiper"
          class="aboutSlider__swiper"
          :options="swiperOptions"
          @slideChange="onSlideChange"
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

        <div class="aboutSlider__controls">
          <button
            slot="button-prev"
            class="aboutSlider__btn aboutSlider__prev"
          />

          <button
            slot="button-next"
            class="aboutSlider__btn aboutSlider__next"
          />
        </div>
      </div>
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
          delay: 3000,
          disableOnInteraction: false
        },
        speed: 700,
        loop: true,
        effect: 'flipEffect',
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
        },
        navigation: {
          nextEl: '.aboutSlider__next',
          prevEl: '.aboutSlider__prev'
        },
        breakpoints: {
          1300: {
            slidesPerView: 'auto',
            spaceBetween: 20
          }
        }
      },
      textSwiperOptions: {
        speed: 700,
        effect: 'flipEffect',
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: false
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
  },
  methods: {
    onSlideChange () {
      this.$refs.textSwiper.$swiper.slideTo(this.$refs.aboutSwiper.$swiper.realIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
.bold {
  margin: 0 auto;
  padding: 80px 16px 100px;

  max-width: 1826px;

  background: url("/images/mainAbout/bgAbout.jpg") no-repeat 50% 50%/contain;

  box-shadow: inset -20px -9px 20px 20px #000000, inset -51px -49px 20px 0px rgb(0 0 0 / 54%);

  @media (max-width: $media_md) {
    padding: 0px 16px 100px;
  }

  &__title {
    margin: 0 auto 32px;
    padding: 0 100px 20px;

    width: fit-content;

    text-align: center;

    @media (max-width: $media_md) {
      margin: 0 auto 16px;
      padding: 0 30px;

      font-size: 24px;
      line-height: 32px;
    }
  }

  &__textRow {
    position: relative;

    display: flex;
    justify-content: center;

    margin: 0 auto 16px;
    padding: 0 60px;

    width: fit-content;

    @media (max-width: $media_xl) {
      margin-bottom: 10px;
      padding: 0 19px;
    }

    &::before,
    &::after {
      content: "";

      position: absolute;
      top: -3px;

      display: block;

      width: 35px;
      height: 35px;

      background: url('/icons/ornamentSmall.svg') no-repeat center center/contain;

      @media (max-width: $media_md) {
        top: 4px;

        width: 15px;
        height: 11px;
      }
    }

    &::after {
      right: 0;
      transform: rotate(90deg);
    }

    &::before {
      left: 0;
      transform: rotate(-90deg);
    }
  }

  &__text {
    text-align: center;
  }

  &__main {
  }
}

.main {
  display: grid;
  grid-template-columns: 270px minmax(auto, 1340px);
  gap: 120px;
  justify-content: space-between;

  @media (max-width: 1300px) {
    grid-template-columns: auto;
    gap: 0;

    margin: 0 auto;

    max-width: 852px;
  }

  &__leftText {
    padding-top: 106px;

    @media (max-width: 1300px) {
      padding-top: 16px;

      max-width: 852px;

      text-align: center;
    }
  }

  &__title {
    margin-bottom: 20px;

    @media (max-width: $media_xl) {
      margin-bottom: 10px;
    }

    @media (max-width: $media_md) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  &__text {
    @media (max-width: $media_md) {
      font-size: 10px;
      line-height: 18px;
    }
  }

  &__aboutSlider {
    @media (max-width: 1300px) {
      grid-row: 1;
    }
  }
}
</style>

<style lang="scss">
.aboutSlider {
  &__swiper {
    margin: 0 !important;

    @media (max-width: 1300px) {
      margin: 0 auto !important;
    }
  }

  & .swiper-wrapper {
    padding: 70px 0 80px;

    width: 1252px;

    @media (max-width: 1300px) {
      padding: 20px 0 50px;

      width: calc(100vw - 40px);
    }
  }

  &__slide {
    width: 852px;

    @media (max-width: 1300px) {
      width: calc(100vw - 40px);
    }
  }

  & .swiper-slide-active {
    transform: translate3d(0, 0, 0) !important;
  }

  &__pagination {
    position: absolute;
    z-index: 2;
    bottom: 0 !important;
    left: 426px !important;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;

    max-width: 852px;
    width: 100% !important;
    height: 22px;

    @media (max-width: 1300px) {
      left: 0 !important;

      width: calc(100vw - 40px) !important;

      transform: translateX(0) !important;
    }

    @media (max-width: $media_md) {
      bottom: 13px !important;
    }
  }

  &__controls {
    position: relative;
    z-index: 1;
    top: -350px;
    left: -120px;

    width: 1100px;

    @media (max-width: 1400px) {
      display: none;
    }
  }

  &__btn {
    position: absolute;
    top: 50%;

    width: 90px;
    height: 64px;

    background: url('/icons/slider-arrow.png');
    background-size: contain;

    filter: grayscale(1);

    transition: 0.3s;

    &:hover {
      filter: grayscale(0);
    }
  }

  &__prev {
    left: 0;
    transform: rotate(180deg);
  }

  &__next {
    right: 0;
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

    @media (max-width: $media_md) {
      width: 7px;
      height: 7px;
    }

    &--active {
      filter: grayscale(0);
      transform: scale(1.6);
    }
  }
}
</style>
