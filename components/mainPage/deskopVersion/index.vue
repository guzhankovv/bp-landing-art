<template>
  <div
    class="version"
    :class="{
      'version_hiden' : hideDeskVer
    }"
  >
    <div class="version__top">
      <p class="version__topTx">
        Only the <br> desktop version<br> is available
      </p>

      <img
        class="version__bgImg"
        src="/images/versionText.png"
        alt="background"
      >
    </div>

    <div class="version__bottom">
      <img
        class="version__bottomLeft"
        src="/images/alarm.png"
        alt="alarm"
      >

      <p class="version__text text_inter_16">
        Website is optimized for Desktop usage only
      </p>

      <button
        class="version__btn version__btn--lilac"
        @click="setCookiesDesk"
      >
        <p class="version__textBtn">
          Allow
        </p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeskopVersion',

  data () {
    return {
      hideDeskVer: false
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

      if (getCookie('deskVer')) {
        this.hideDeskVer = true
      } else if (!getCookie('deskVer')) {
        this.hideDeskVer = false
      }
    },

    setCookiesDesk () {
      document.cookie = 'deskVer=hide'

      this.setAlertState()
    }
  }
}
</script>

<style lang="scss" scoped>
.version {
  max-width: 414px;

  transition: 0.3s;

  &_hiden {
    transform: translateY(20px);
    opacity: 0;
    visibility: hidden;

  }

  &__top {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 40px;
    margin-left: auto;
    margin-bottom: 10px;

    width: 127px;
    height: 110px;
  }

  &__topTx {
    font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    text-transform: uppercase;
    color: var(--title_secondary);
  }

  &__bgImg {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &__bottom {
    display: flex;
    gap: 20px;

    padding: 16px;

    align-items: center;

    background: rgba(23, 19, 26, 0.85);
    box-shadow: 0px 14px 36px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(48px);

    border-radius: 16px;
  }

  &__bottomLeft {
    width: 20px;
    height: 20px;
  }

  &__text {
    color: $white;
  }

  &__btn {
    border-radius: 8px;

    &--lilac {
      background-color: rgb(99, 29, 149);

      transition: 0.3s;

      &:hover {
        background-color: rgb(113, 33, 170);
      }
    }
  }

  &__textBtn {
    padding: 10px;

    font-size: 20px;
    color: $white;

    @media (max-width: $media_md) {
      font-size: 16px;
    }
  }
}
</style>
