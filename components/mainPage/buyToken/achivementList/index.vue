<template>
  <div class="achivement">
    <ul class="achivement__list">
<<<<<<< HEAD
=======
      <a href="" />
>>>>>>> origin/master
      <li
        v-for="(item, index) in achivementList"
        :key="index"
        class="achivement__listItem"
      >
<<<<<<< HEAD
        <a
          class="achivement__link"
          :href="item.link"
          target="_blank"
        >
          <div class="achivement__logoInner">
            <img
              class="achivement__logo"
              :src="item.logo"
              :alt="item.title"
            >
          </div>
        </a>

        <h1 class="achivement__title text_cin_24">
          {{ item.title }}
        </h1>

        <p class="achivement__text text_inter_16">
=======
        <div class="achivement__logoInner">
          <img
            class="achivement__logo"
            :src="item.logo"
            :alt="item.title"
          >
        </div>

        <h1 class="achivement__title">
          {{ item.title }}
        </h1>

        <p class="achivement__text">
>>>>>>> origin/master
          {{ item.text }}
        </p>
      </li>
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
<<<<<<< HEAD
          link: 'https://www.yay.games/',
=======
>>>>>>> origin/master
          logo: '/images/token/yay.png',
          title: 'Partnership with YAY Games',
          text: 'leading GameFi marketplace, whose token launched with over 10x performance'
        },

        {
<<<<<<< HEAD
          link: 'https://indacoin.io/',
=======
>>>>>>> origin/master
          logo: '/images/token/indacoin.png',
          title: 'Partnership with Indacoin',
          text: '7+years of expertise in the crypto industry, bridging the gap with traditional finance market'
        },

        {
<<<<<<< HEAD
          link: 'https://www.avax.network/',
=======
>>>>>>> origin/master
          logo: '/images/token/avalanche.png',
          title: 'Partnership with Avalanche',
          text: 'leading crypto ecosystem and fastest smart contracts platform in the blockchain industry'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
.achivement {
    &__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    &__listItem {
      max-width: 350px;
      padding: 0 8px 92px 8px;

      border-right: 1px solid rgba(88, 88, 88, 0.5);
    }

    &__logoInner {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-bottom: 24px;

      width: 260px;
      height: 173px;

      border: 2px solid $gold;
      border-radius: 12px;

      box-shadow: -24px 24px 64px rgba(191, 102, 255, 0.28);

      @media (max-width: $media_xl) {
        width: 222px;
        height: 128px;
      }
    }

    &__logo {
      margin: 50px auto;
    }

    &__title {
      margin-bottom: 8px;
    }

    &__text {
      max-width: 260px;
=======
@import "~/assets/scss/styles/variables.scss";
.achivement {
    &__list {
        display: flex;
        justify-content: space-between;
    }

    &__listItem:not(:first-child) {
        max-width: 350px;
        padding: 0 10px 92px 10px;
        margin: 0 auto;

        border-right: 1px solid rgba(88, 88, 88, 0.5);
    }

    &__logoInner {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-bottom: 24px;

        width: 260px;
        height: 173px;

        border: 2px solid $gold;
        border-radius: 12px;

        box-shadow: -24px 24px 64px rgba(191, 102, 255, 0.28);
    }

    &__logo {
        margin: 50px auto;
    }

    &__title {
        font-family: "Cinzel";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;

        letter-spacing: 0.04em;
        text-transform: uppercase;

        margin-bottom: 8px;
    }

    &__text {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        opacity: 0.6;

        max-width: 260px;
>>>>>>> origin/master
    }
}
</style>
