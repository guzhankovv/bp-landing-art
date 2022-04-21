<template>
  <div class="banner">
    <div class="banner__inner">
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
        <h1
          id="main"
          class="banner__centerTitle title_1 txGold border border--line"
        >
          Bold Point — Art Project
        </h1>

        <p class="banner__centerText">
          11 digital artists were inspired by Bold Point and are showcasing
          their vision of the game’s universe. Join us as a collector or artist
          and participate in the competition. Breathe new life into the Bold
          Point metaverse!
        </p>

        <a class="banner__centerLink btn" href="https://opensea.io/collection/boldpoint">
          <img
            class="banner__cenerBtnIcon btn__icon btn__icon--left"
            src="/icons/ornament.png"
            alt="ornament"
          >

          <p class="banner__centerBtnText btn__text txWhite">
            Buy art
          </p>

          <img
            class="banner__cenerBtnIcon btn__icon btn__icon--right"
            src="/icons/ornament.png"
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
export default {
  name: 'AppBanner',

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
  margin: 0 auto;

  max-width: 1920px;
  height: 1050px;

  background-image: url("/images/mainBanner/plot.jpg");
  background-repeat: no-repeat;
  background-position-x: right;

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

      box-shadow: inset -20px -9px 20px 20px #000000, inset -51px -49px 20px 0px rgb(0 0 0 / 54%);
    }

    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      right: 0;
      bottom: 0;
      left: 0;

      display: block;

      width: 100%;
      height: 60px;

      background: url("/images/bgBorder.png");
    }
  }

  &__top {
    position: relative;
    z-index: 1;

    display: flex;
    gap: 24px;

    text-transform: uppercase;

    margin-top: 33px;
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

    margin-top: 200px;

    max-width: 932px;
  }

  &__centerTitle {
    margin-bottom: 20px;

    width: 100%;

    text-align: center;
    color: $gold;
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

    margin-bottom: 40px;
  }

  &__scroll {
    position: relative;
    z-index: 1;
    top: -129px;

    display: grid;
    justify-items: center;
    gap: 12px;

    margin: 0 auto;

    width: 80px;

    animation: moving-y 3s linear infinite;
  }

  &__iconScroll {
    height: 156px;
  }

  &__scrollText {
    font-family: "Cinzel";
    font-size: 24px;
    line-height: 32px;

    color: rgb(217, 217, 217);

    text-align: center;
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
  }

  &__person {
    position: absolute;
    bottom: -70px;
    right: 0px;

    max-width: 1540px;
    width: 100%;
    height: 100%;

    background: url('/images/mainBanner/character.png') no-repeat 50% bottom/contain;
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
