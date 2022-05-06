<template>
  <div class="achivement">
    <ul class="achivement__list">
      <li
        v-for="(item, index) in achivementList"
        :key="index"
        class="achivement__listItem"
      >
        <a
          class="achivement__link"
          :href="item.link"
          target="_blank"
        >
          <img
            class="achivement__logo"
            :src="item.logo"
            :alt="item.title"
          >
        </a>

        <div class="achivement__text">
          <h1 class="achivement__title text_cin_24">
            {{ item.title }}
          </h1>

          <p class="achivement__text text_inter_16">
            {{ item.text }}
          </p>
        </div>
      </li>

      <p class="achivement__bottomText">
        Single top management Indacoin & YAY Games & BOLD POINT
      </p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AchivementList',

  data () {
    return {
      achivementList: [
        {
          link: 'https://www.yay.games/',
          logo: '/images/token/yay.png',
          title: 'Partnership with YAY Games',
          text: 'The leading GameFi Ecosystem on Avalanche and BSC.'
        },

        {
          link: 'https://indacoin.io/',
          logo: '/images/token/indacoin.png',
          title: 'Partnership with Indacoin',
          text: '7 years of expertise within crypto industry leading fiat-on-ramp niche. The simplest way to buy dozens of cryptocurrencies with bank card in less than 60 minutes.'
        },

        {
          link: 'https://www.avax.network/',
          logo: '/images/token/avalanche.png',
          title: 'Partnership with Avalanche',
          text: 'The fastest smart contracts platform in the blockchain industry, as measured by time-to-finality. Avalanche is blazingly fast, low cost, and eco-friendly.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.achivement {
  &__list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    // gap: 20px;
    @media (max-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: $media_md) {
      grid-template-columns: auto;
    }
  }

  &__listItem {
    padding: 0 8px 92px 8px;
    // margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid rgba(88, 88, 88, 0.5);

    @media (max-width: $media_lg) {
      padding-bottom: 12px;
    }

    @media (max-width: $media_md) {
      border-bottom: 1px solid rgba(88, 88, 88, 0.5);
      border-right: none;
      padding: 0 9px 21px 20px;

      display: grid;
      grid-template-columns: 162px auto;
      gap: 17px;
    }
  }

  &__logo {
    object-fit: contain;

    max-width: 260px;
    width: 100%;
    min-height: 173px;

    padding: 52px 50px;

    margin-bottom: 24px;

    border: 2px solid $gold;
    border-radius: 12px;

    box-shadow: -24px 24px 64px rgba(191, 102, 255, 0.28);

    transition: 0.3s;

    &:hover {
      box-shadow: 20px -19px 64px rgb(191 102 255 / 28%);
    }

    @media (max-width: $media_md) {
      padding: 37px;

      width: 162px;
      min-height: 116px;

      margin-bottom: 0;
    }
  }

  &__title {
    margin-bottom: 8px;
    align-items: start;

    @media (max-width: $media_sm) {
      max-width: 166px;
    }
  }

  &__text {
    max-width: 260px;

    @media (max-width: $media_md) {
      max-width: 425px;
    }

    // @media (max-width: $media_sm) {
    //   max-width: 211px;
    // }
  }
   &__bottomText {
    font-family: "Cinzel";
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: $gold;

    letter-spacing: 0.04em;
    text-transform: uppercase;

    margin: 90px 0 0 30px;

    max-width: 282px;

    @media (max-width: 1280px) {
      grid-row: 3;
      grid-column: 1/4;

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
      grid-row: 4;
      grid-column: 1;
    }

    @media (max-width: $media_sm) {
      font-size: 16px;
      line-height: 22px;

      margin: 45px 0 139px 0;
    }
  }
}
</style>
