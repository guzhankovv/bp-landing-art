<template>
  <div class="token">
    <div class="token__inner">
      <h1 class="token__title subtitle_cin_56">
        Bold Point was built by experts
      </h1>

      <div class="token__bottom">
        <div class="token__bottomRow">
          <AchivementList />
        </div>
      </div>

      <a
        onClick="ym(83269435,'reachGoal','buy-nft-footer'); return true;"
        class="token__link btn"
        href="https://traderjoexyz.com/trade?outputCurrency=0x1111111111182587795ef1098ac7da81a108c97a#/"
      >
        <img
          class="token__btnIcon btn__icon btn__icon--left"
          src="/icons/ornament.png"
          alt="ornament"
        >

        <p class="token__btnText btn__text txWhite">
          buy token
        </p>

        <img
          class="token__btnIcon btn__icon btn__icon--right"
          src="/icons/ornament.png"
          alt="ornament"
        >
      </a>
    </div>
  </div>
</template>

<script>
import AchivementList from '@/components/mainPage/buyToken/achivementList/index.vue'

export default {
  name: 'BuyToken',

  components: {
    AchivementList
  }
}
</script>

<style lang="scss" scoped>
.token {
  margin: 0 auto;
  padding: 0 15px;

  max-width: 1728px;
  border-bottom-style: solid;
  border-image-slice: 1;
  border-width: 1px;
  border-image-source: radial-gradient(
    circle,
    rgba(88, 88, 88, 0.5) 100%,
    rgba(201, 128, 254, 0) 0%
  );

  @media (max-width: $media_md) {
    padding: 0;
  }

  &__title {
    max-width: 600px;

    margin-bottom: 48px;

    @media (max-width: $media_sm) {
      max-width: 193px;

      margin: 0 auto 38px;

      border-bottom-style: solid;
      border-width: 2px;
      border-image-slice: 1;

      border-image-source: radial-gradient(
        circle,
        rgba(201, 128, 254, 0.6) 30%,
        rgba(201, 128, 254, 0) 100%
      );

      padding-bottom: 10px;
    }
  }

  &__topText {
    max-width: 685px;
    min-width: 350px;
  }

  &__bottom {
    position: relative;
  }

  // &__bottomRow {
  //   display: grid;
  //   grid-template-columns: auto auto;
  //   gap: 20px;

  //   @media (max-width: $media_md) {
  //     gap: 10px;
  //   }

  //   @media (max-width: $media_sm) {
  //     gap: 0;
  //   }
  // }

  &__bottomText {
    font-family: "Cinzel";
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;

    color: $gold;

    letter-spacing: 0.04em;
    text-transform: uppercase;

    margin: 90px 0 0 30px;

    max-width: 282px;

    @media (max-width: 1280px) {
      grid-row: 2;
      grid-column: 1/2;

      margin-bottom: 80px;
      margin-left: 0;

      max-width: 100%;
      width: 100%;

      text-align: center;
    }

    @media (max-width: $media_md) {
      font-size: 26px;
      line-height: 32px;
      padding: 0 20px 0 20px;
    }

    @media (max-width: $media_sm) {
      font-size: 16px;
      line-height: 22px;

      margin: 45px 0 139px 0;
    }
  }

  &__link {
    max-width: 311px;

    position: relative;
    top: 30px;

    margin-top: -56px;

    @media (max-width: $media_sm) {
      top: -49px;

      max-width: 220px;
    }
  }
}
</style>
