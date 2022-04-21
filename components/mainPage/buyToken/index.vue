<template>
  <div class="token">
    <div class="token__inner">
      <div class="token__top">
        <h1 class="token__title subtitle_cin_56">
          Bold Point was built by experts
        </h1>

        <p class="token__topText text_inter_18">
          Join a reliable partner in a long-lasting journey towards supremacy on the play-to-earn market. Bold Point is a solid player in the DeFi industry that has reachednotable achievements:
        </p>
      </div>

      <div class="token__bottom">
        <div class="token__bottomRow">
          <AchivementList />

          <p class="token__bottomText">
            Single top management Indacoin & YAY Games & BOLD POINT
          </p>
        </div>
      </div>

      <a
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

    &__top {
      display: flex;
      justify-content: space-between;
      gap: 30px;

      margin-bottom: 50px;
    }

    &__title {
      max-width: 600px;
      min-width: 350px;
    }

    &__topText {
      max-width: 685px;
      min-width: 350px;
    }

    &__bottom {
        position: relative;
    }

    &__bottomRow {
      display: grid;
      grid-template-columns: auto auto;
      gap: 20px;

      @media (max-width: $media_xl) {
        gap: 10px;
      }
    }

    &__bottomText {
      font-family: "Cinzel";
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 42px;

      color: $gold;

      letter-spacing: 0.04em;
      text-transform: uppercase;

      margin: 90px 0 0 30px;

      max-width: 282px;

      @media (max-width: $media_xl) {
        font-size: 32px;
        line-height: 38px;

        max-width: 282px;
      }

        @media (max-width: 1280px) {
          grid-row: 2;
          grid-column: 1/2;

          margin-bottom: 80px;
          margin-left: 0;

          max-width: 100%;
          width: 100%;

          text-align: center;
        }
    }

    &__link {
      position: relative;
      top: 30px;

      margin-top: -56px;
    }
}
</style>
