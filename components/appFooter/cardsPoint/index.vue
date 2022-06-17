<template>
  <div class="card">
    <ul class="card__list">
      <li
        v-for="(item, index) in cardPointList"
        :key="index"
        class="card__listItem"
      >
        <a
          class="card__link"
          :href="item.link"
        >
          <div class="card__bg">
            <img
              class="card__bgInner"
              :src="item.bg"
              :alt="item.title"
            >
          </div>
        </a>

        <h2 class="card__title">
          {{ item.title }}
        </h2>

        <p class="card__text">
          {{ item.text }}
        </p>

        <p class="card__time">
          {{ item.time }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CardsPoint',

  data () {
    return {
      cardPointList: [
        // {
        //   link: 'https://yay-games.medium.com/yay-games-pool-on-dexsport-is-live-64946626b82d',
        //   bg: '/images/cardPoint/pool.jpg',
        //   title: 'YAY Games Pool on Dexsport is LIVE',
        //   text: 'One of the core missions of the YAY team is a consistent increase of token demand. And it’s a true pleasure to see our partners’ contribution to $YAY growth. Today we’re...',
        //   time: '1 day ago'
        // },

        {
          link: 'https://yay-games.medium.com/bold-point-token-utilization-gaming-mechanics-and-gamecore-protocol-dc32e85f8ba3',
          bg: '/images/cardPoint/token.jpg',
          title: 'Bold Point — Token Utilization, Gaming Mechanics, and GameCore Protocol',
          text: 'Ancient lands filled with magic and dangerous creatures are...',
          time: '3 days ago'
        },

        {
          link: 'https://yay-games.medium.com/bold-point-trader-joe-strategic-partnership-for-the-bpt-listing-6cea5fde3d18',
          bg: '/images/cardPoint/trader.jpg',
          title: 'Bold Point & Trader Joe: Strategic Partnership for the $BPT Listing',
          text: 'With the current announcement of Bold Points IDO on Avalaunch scheduled for April 11th, and with the fast-paced growth...',
          time: '6 days ago'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";
.card {
  max-width: 1240px;
   margin: 0 auto;
  &__list {
    display: flex;
    justify-content: space-between;
    gap: 32px;

    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__listItem {
    cursor: pointer;
    max-width: 600px;

    @media (max-width: $media_md) {
      min-width: 280px;
    }

    &:hover {
      .card__bg::before {
        opacity: 0;
      }

      .card__title {
        color: rgb(255, 201, 119);
      }
    }
  }

  &__bg {
    position: relative;

    margin: 0 auto;

    &::before {
      content: '';

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background: linear-gradient(180deg, rgba(191, 102, 255, 0) 0%, rgba(163, 72, 229, 0.45) 67.19%, rgba(140, 47, 207, 0.7) 100%);

      transition: 0.3s;
    }
  }

  &__bgInner {
    margin-bottom: 20px;

    width: 100%;
  }

  &__title {
    font-family: "Cinzel";
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;

    letter-spacing: 0.04em;
    text-transform: uppercase;

    margin-bottom: 8px;

    @media (max-width: $media_md) {
      font-size: 14px;
      line-height: 22px;

      overflow-x: scroll
    }
  }

  &__text {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    opacity: 0.7;

    margin-bottom: 8px;

    @media (max-width: $media_md) {
      font-size: 13px;
      line-height: 20px;
    }

    @media (max-width: $media_sm) {
      font-size: 10px;
      line-height: 18px;
    }
  }

  &__time {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    opacity: 0.3;

    @media (max-width: $media_md) {
      font-size: 13px;
    }

    @media (max-width: $media_sm) {
      font-size: 10px;
      line-height: 20px;
    }
  }
}
</style>
