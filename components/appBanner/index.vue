<template>
  <div
    id="main"
    class="banner"
  >
    <div class="banner__inner">
      <DeskopVersion class="banner__version" />

      <div class="banner__top txGreyMed">
        <a
          class="banner__link"
          href="https://t.me/bold_point"
        >
          telegram
        </a>

        <a
          class="banner__link"
          href="https://twitter.com/bold_point"
        >
          Twitter
        </a>

        <a
          class="banner__link"
          href="https://yay-games.medium.com/"
        >
          medium
        </a>

        <a
          href="https://discord.com/invite/dNUdTDQr8r"
          class="banner__link"
        >
          discord
        </a>
      </div>

      <div class="banner__center">
        <h1 class="banner__centerTitle title_1 txGold border border--line">
          Bold Point — Art Station
        </h1>

        <div class="banner__centerText">
          <p class="banner__txTop">
            Our game opened a new reality not only for gamers, but for artists as well.
          </p>

          <p class="banner__tx">
            11 digital creators were inspired by Bold Point and want to showcase their vision. Explore NFT collection of 39 artworks, enrich your collection and earn bold rewards
          </p>
        </div>

        <a onClick="ym(88590499,'reachGoal','get-inspired'); return true;" class="banner__centerLink btn" href="https://opensea.io/collection/boldpoint">
          <img
            class="banner__cenerBtnIcon btn__icon btn__icon--left"
            src="/icons/ornament.svg"
            alt="ornament"
          >

          <p class="banner__centerBtnText btn__text txWhite">
            Get inspired
          </p>

          <img
            class="banner__cenerBtnIcon btn__icon btn__icon--right"
            src="/icons/ornament.svg"
            alt="ornament"
          >
        </a>
      </div>

      <div class="banner__paralax paralax">
        <div class="paralax__clouds" />

        <div class="paralax__person" />
      </div>
    </div>

    <a
      href="#about"
      class="banner__scroll"
      @click.prevent="scrollTo(80, $event)"
    >
      <img
        class="banner__iconScroll"
        src="/icons/scrollDown.svg"
        alt="scroll"
      >

      <p class="banner__scrollText">
        Learn more
      </p>
    </a>
  </div>
</template>

<script>
import DeskopVersion from '@/components/mainPage/deskopVersion/index.vue'

export default {
  name: 'AppBanner',

  components: {
    DeskopVersion
  },

  methods: {
    scrollTo (indent, elem) {
      const targetElem = document.getElementById(elem.currentTarget.hash.replace('#', ''))
      const elementPosition = targetElem.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - indent

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  top: -70px;

  margin: 0 auto;

  max-width: 1920px;
  height: 820px;

  background-image: url("/images/mainBanner/plot.jpg");
  background-repeat: no-repeat;
  background-position-x: right;

  @media (max-width: $media_md) {
    height: 567px;

    background-size: 150vw;
  }

  @media (max-width: $media_sm) {
    background-size: auto 576px;
  }

  &__inner {
    position: relative;

    padding: 62px 100px 1px 100px;

    height: 100%;

    @media (max-width: $media_xl) {
      padding: 31px 15px;
    }

    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background-image: linear-gradient(
          90.39deg,
          #000000 17.86%,
          rgba(0, 0, 0, 0.58) 52.83%,
          rgba(30, 30, 30, 0.26) 99.67%
      );

      @media (max-width: $media_md) {
        background: rgba(0, 0, 0, 0.55);
      }
    }

    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      right: 0;
      bottom: -45px;
      left: 0;

      display: block;

      width: 100%;
      height: 60px;

      background: url("/images/bgBorder.png");

      @media (max-width: $media_md) {
        bottom: -9px;

        height: 30px;
        background: url("/images/bgBorderMob.png");
      }
    }
  }

  &__version {
    position: fixed;
    z-index: 11;
    top: 100px;
    right: 10px;
  }

  &__top {
    position: relative;
    z-index: 1;

    display: flex;
    gap: 24px;

    text-transform: uppercase;

    margin: 115px 0 100px 0;

    @media (max-width: $media_md) {
      display: none;
    }
  }

  &__link {
    position: relative;

    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #BFBFBF;

    transition: 0.2s;

    &:not(:last-child) {
      &::after {
        content: "";

        position: absolute;
        top: -4px;
        right: -12px;

        background: #262626;

        width: 1px;
        height: 28px;
      }
    }

    &:hover {
        color: #ffc977;
    }
  }

  &__center {
    position: relative;
    z-index: 2;

    margin: 0 auto;

    @media (max-width: $media_md) {
      margin-top: 112px;
    }
  }

  &__centerTitle {
    max-width: 1050px;
    margin: 0 auto 46px;

    text-align: center;
    color: $gold;

    white-space: nowrap;

    @media (max-width: $media_md) {
      margin-bottom: 30px;

      width: fit-content;
    }
  }

  &__centerText {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

    color: $white;
    opacity: 0.7;

    text-align: center;

    margin: 0 auto 40px;

    max-width: 958px;

    @media (max-width: $media_lg) {
      font-size: 20px;
      line-height: 34px;
    }

    @media (max-width: $media_sm) {
      font-size: 11px;
      line-height: 18px;

      opacity: 0.9;

      padding: 0 15px 0 15px;

      margin-bottom: 107px;
    }

  }

  &__txTop {
    margin: 0 auto;

    @media (max-width: $media_sm) {
      margin: 0 auto 20px;

      max-width: 288px;
    }
  }

  &__centerLink {
    max-width: 365px;

  // @media (max-width: $media_lg) {
    //   width: 182px;
    // }

    @media (max-width: $media_sm) {
      width: 182px;
    }
  }

  &__scroll {
    position: relative;
    z-index: 1;
    top: -88px;

    display: grid;
    justify-items: center;
    gap: 12px;

    margin: 0 auto;

    width: 80px;

    animation: moving-y 3s linear infinite;

    @media (max-width: $media_md) {
      top: -87px;
      gap: 4px;
    }
  }

  &__iconScroll {
    height: 156px;

    @media (max-width: $media_md) {
      width: 13px;
      height: 112px;
    }
  }

  &__scrollText {
    font-family: "Cinzel";
    font-size: 24px;
    line-height: 32px;

    color: rgb(217, 217, 217);

    text-align: center;

    @media (max-width: $media_md) {
      font-size: 12px;
      line-height: 20px;
    }
  }
}

.paralax {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;

  &__clouds {
    position: absolute;
    top: 70px;

    width: 100%;
    height: 100%;

    background: url('/images/mainBanner/clouds.png') no-repeat 50% bottom/cover;

    animation: clouds-move 30s linear infinite;

    @media (max-width: $media_md) {
      background: url('/images/mainBanner/clouds.png') no-repeat 65% bottom/cover;

      animation: clouds-move-mob 30s linear infinite;
    }
  }

  &__person {
    position: absolute;
    bottom: -70px;
    right: 0px;

    max-width: 1540px;
    width: 100%;
    height: 100%;

    background: url('/images/mainBanner/character.png') no-repeat 50% bottom/contain;

    @media (max-width: $media-sm) {
      background-size: 870px;
      background-position-x: -110px;
    }
  }

}

@keyframes clouds-move-mob {
  0%, 100% {
    background-position-x: 65%;
  }
  50% {
    background-position-x: 75%;
  }
}

@keyframes clouds-move {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(100px, 20px);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes moving-y {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(16px);
  }
}
</style>
