<template>
  <div
    class="cookies"
    :class="{
      'cookies_hiden' : hideCookies
    }"
  >
    <div class="cookies__inner">
      <img
        class="cookies__icon"
        src="/icons/cookies.svg"
        alt="iconCookies"
      >
      <div class="cookies__textRow">
        <p class="cookies__text">
          We use cookies to improve your experience.
        </p>

        <p class="cookies__text cookies__text--gray">
          By continuing, you agree to our Cookie Policy.
        </p>
      </div>

      <div class="cookies__btnRow">
        <button
          class="cookies__btn cookies__btn--gray"
          @click="setCookiesAlert"
        >
          <p class="cookies__textBtn">
            Decline
          </p>
        </button>

        <button
          class="cookies__btn cookies__btn--lilac"
          @click="setCookiesAlert"
        >
          <p class="cookies__textBtn">
            Allow
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookiesAlert',

  data () {
    return {
      hideCookies: false
    }
  },
  mounted () {
    this.setAlertState()
  },
  methods: {
    setAlertState () {
      function getCookie (name) {
        const matches = document.cookie.match(new RegExp(
          '(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'
        ))
        return matches ? decodeURIComponent(matches[1]) : undefined
      }

      if (getCookie('cookieAlert')) {
        this.hideCookies = true
      } else if (!getCookie('cookieAlert')) {
        this.hideCookies = false
      }
    },

    setCookiesAlert () {
      document.cookie = 'cookieAlert=hide'

      this.setAlertState()
    }

  }
}
</script>

<style lang="scss" scoped>
.cookies {
  position: fixed;
  z-index: 3;
  right: 0;
  left: 0;
  bottom: 60px;

  max-width: 1418px;

  margin: 0 auto;
  padding: 0 15px;

  transition: 0.3s;

  &_hiden {
    transform: translateY(20px);
    opacity: 0;
    visibility: hidden;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 90px;
    padding: 25px;

    opacity: 1;
    background: rgb(20, 16, 22);
    border-radius: 8px;

    @media (max-width: $media_lg) {
      padding: 15px;
    }

    @media (max-width: $media_md) {
      flex-direction: r;
      gap: 5px;

      width: 100%;
      height: 100%;
    }
  }

  &__icon {
    border-radius: 10px;
    background: rgb(49, 49, 49);
    padding: 10px;

    margin-right: 15px;

    @media (max-width: $media_md) {
      display: none;
    }
  }

  &__textRow {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-right: 15px;
    white-space: nowrap;

    @media (max-width: 1200px) {
      flex-direction: column;
    }

    @media (max-width: $media_md) {
      margin-right: 0;
    }
  }

  &__text {
    color: $white;
    font-weight: 700;
    font-size: 20px;
    &--gray {
      color: rgb(204, 203, 207);
      font-weight: 500;
    }

    @media (max-width: $media_md) {
      font-weight: 500;
      font-size: 16px;
    }

    @media (max-width: $media_sm) {
      font-weight: 500;
      font-size: 16px;
    }
  }

  &__btnRow {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  &__btn {
    border-radius: 8px;

    transition: 0.2s;
    &--gray {
      background-color: rgb(49, 49, 49);

      &:hover {
        background-color: rgb(62, 62, 62);
      }
    }

    &--lilac {
      background-color: rgb(99, 29, 149);

      &:hover {
        background-color: rgb(113, 33, 170);
      }
    }
  }

  &__textBtn {
    font-size: 20px;
    color: $white;

    padding: 10px;

    @media (max-width: $media_md) {
      font-size: 16px;
    }
  }
}
</style>
