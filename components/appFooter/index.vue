<template>
  <footer class="footer">
    <h1 class="footer__title">
      Follow us on socials<br>to stay up-to-date
    </h1>

    <div class="footer__cards">
      <CardsPoint />
    </div>

    <div class="footer__bottom">
      <div class="footer__social">
        <a
          class="footer__socialLink footer__socialImg"
          href="https://twitter.com/bold_point"
        >
          <span>
            <img
              src="/images/social/socialTwitter.svg"
              alt="twitter"
            >
          </span>
        </a>

        <a class="footer__socialLink footer__socialImg footer__socialImg-tg " href="https://t.me/bold_point">
          <span>
            <img
              src="/images/social/socialTelegramm.svg"
              alt="telegramm"
            >
          </span>
        </a>

        <a class="footer__socialLink footer__socialImg" href="https://yay-games.medium.com/">
          <span>
            <img
              src="/images/social/socialM.svg"
              alt="medium"
            >
          </span>
        </a>

        <a class="footer__socialLink footer__socialImg" href="https://discord.com/invite/dNUdTDQr8r">
          <span>
            <img
              src="/images/social/socialDiscord.svg"
              alt="discord"
            >
          </span>
        </a>
      </div>

      <div class="footer__info">
        <p class="footer__leftText">
          © 2022. Bold Point, all rights reserved
        </p>

        <div class="footer__right">
          <p class="footer__text">
            coming soon
          </p>

          <div class="footer__links">
            <img
              class="footer__img"
              src="/images/social/downloadApp.png"
              alt="item.title"
            >
            <img
              class="footer__img"
              src="/images/social/downloadGoogle.png"
              alt="item.title"
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CardsPoint from '@/components/appFooter/cardsPoint/index.vue'

export default {
  name: 'AppFooter',

  components: {
    CardsPoint
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";
.footer {
  margin: 0 auto;
  padding-top: 127px;

  max-width: 1728px;

  background-image: url(/images/footerBg.png);
  background-repeat: no-repeat;
  background-position-x: center;

  box-shadow: inset 1px 20px 20px 20px #000, inset -51px -49px 20px 0 rgb(0 0 0 / 54%);

    @media (max-width: $media_md) {
      padding-top: 80px;
    }

    @media (max-width: $media_sm) {
      padding-top: 50px;
    }

  &__title {
    font-family: "Cinzel";
    font-weight: 400;
    font-size: 32px;
    line-height: 36px;

    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    margin-bottom: 42px;

    @media (max-width: $media_md) {
      font-size: 24px;
      line-height: 24px;

      margin-bottom: 51px;
    }
  }

  &__cards {
    margin-bottom: 40px;
  }

  &__bottom {
    position: relative;

    padding-bottom: 70px;
    }

    &__social {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;

      align-items: center;

      width: 166px;

      margin: 0 auto;
      height: 0;

      &::before {
        content: "";

        position: absolute;
        top: 30px;
        left: 0px;

        width: 100%;
        height: 1px;
        background: rgba(88, 88, 88, 0.5);
      }
    }

    &__socialImg {
      position: relative;
      top: 10px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url('/images/bg-decor.png') repeat-x 50% 50%/cover;
      border-radius: 50%;
      z-index: 1;

      &-tg{
        & span{
          transform: translateX(-10%);
        }
      }
      & span{
        transition: .3s;
        filter: grayscale(1);
          }
      &:hover {
        & span{
        filter: grayscale(0);
        }
      }
      &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: -1;
          left: 1px;
          right: 1px;
          top: 1px;
          bottom: 1px;
          background: #000;
          border-radius: inherit;
      }
    }

    &__info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: 81px;
    }

  &__leftText {
    font-family: "Inter";
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    text-transform: uppercase;

    opacity: 0.7;
  }

  &__right {
    display: grid;
    grid-template-columns: 0.9fr 2fr;
    gap: 24px;

    align-items: center;
  }

  &__links {
    display: grid;
    grid-template-columns: 116px 135px;
    gap: 16px;
  }

  &__text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    text-transform: uppercase;

    opacity: 0.7;
  }
}
</style>
