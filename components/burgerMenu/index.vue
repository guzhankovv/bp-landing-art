<template>
  <div
    class="burgerMenu"
    :class="{
      burgerMenu_active : isVisible
    }"
  >
    <div class="burgerMenu__inner">
      <ul class="burgerMenu__list">
        <li class="burgerMenu__listItem">
          <a
            class="burgerMenu__listLink"
            :class="{burgerMenu__listLink_active : activeLink === 'main'}"
            href="#main"
            @click.prevent="scrollTo(10, $event)"
          >
            <span class="burgerMenu__listTx">
              Main
            </span>
          </a>
        </li>

        <li class="burgerMenu__listItem">
          <a
            class="burgerMenu__listLink"
            :class="{burgerMenu__listLink_active : activeLink === 'about'}"
            href="#about"
            @click.prevent="scrollTo(10, $event)"
          >
            <span class="burgerMenu__listTx">
              About Games
            </span>
          </a>
        </li>

        <li class="burgerMenu__listItem">
          <a
            class="burgerMenu__listLink"
            :class="{burgerMenu__listLink_active : activeLink === 'mechanics'}"
            href="#mechanics"
            @click.prevent="scrollTo(100, $event)"
          >
            <span class="burgerMenu__listTx">
              Mechanics
            </span>
          </a>
        </li>

        <li class="burgerMenu__listItem">
          <a
            class="burgerMenu__listLink"
            :class="{burgerMenu__listLink_active : activeLink === 'artists'}"
            href="#artists"
            @click.prevent="scrollTo(100, $event)"
          >
            <span class="burgerMenu__listTx">
              Artist’s
            </span>
          </a>
        </li>

        <li class="burgerMenu__listItem">
          <a
            class="burgerMenu__listLink"
            :class="{burgerMenu__listLink_active : activeLink === 'timeline'}"
            href="#timeline"
            @click.prevent="scrollTo(10, $event)"
          >
            <span class="burgerMenu__listTx">
              Timeline
            </span>
          </a>
        </li>

        <li class="burgerMenu__listItem">
          <a
            class="burgerMenu__listLink"
            :class="{burgerMenu__listLink_active : activeLink === 'faq'}"
            href="#faq"
            @click.prevent="scrollTo(100, $event)"
          >
            <span class="burgerMenu__listTx">
              F.A.Q.
            </span>
          </a>
        </li>
      </ul>

      <div class="burgerMenu__bottom">
        <div class="burgerMenu__soclist">
          <a
            class="burgerMenu__link"
            href="https://t.me/bold_point"
          >telegram</a>

          <a
            class="burgerMenu__link"
            href="https://twitter.com/bold_point"
          >Twitter</a>

          <a
            class="burgerMenu__link"
            href="https://yay-games.medium.com/"
          >medium</a>

          <a
            class="burgerMenu__link"
            href="https://discord.com/invite/dNUdTDQr8r"
          >Discord</a>
        </div>

        <div class="burgerMenu__apps">
          <p class="burgerMenu__txBottom">
            coming soon
          </p>

          <div class="burgerMenu__appsList">
            <img
              class="burgerMenu__appImg"
              src="/images/social/downloadApp.png"
              alt="app store"
            >

            <img
              class="burgerMenu__appImg"
              src="/images/social/downloadGoogle.png"
              alt="google play"
            >
          </div>
        </div>

        <p class="burgerMenu__copyright">
          © 2022. Bold Point, all rights reserved
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',

  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    activeLink: {
      type: String,
      default: 'main'
    }
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
      this.$emit('setBurgerState')
    }
  }
}
</script>

<style lang="scss" scoped>
.burgerMenu {
  position: fixed;
  z-index: 9;
  top: 0;
  right: -100%;
  bottom: 0;

  background: url("/images/bgBurger.webp");
  background-size: contain;

  opacity: 0;
  visibility: hidden;

  transition: 0.5s;

  &_active {
    right: 0;

    opacity: 1;
    visibility: visible;
  }

  &__inner {
    display: flex;
    flex-direction: column;

    padding: 100px 0 20px;

    max-width: 100vw;
    height: 100%;

    overflow: auto;

    box-shadow: -23px 0px 20px 0px rgb(0 0 0 / 66%);
    background: linear-gradient(0deg, rgba(0,0,0,0.8561799719887955) 0%, rgba(255,255,255,0) 34%, rgba(179,179,179,0) 64%, rgba(0,0,0,0.8253676470588236) 100%);

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__list {
    margin-bottom: auto;
    padding: 0 20px 32px;
  }

  &__listItem {
  }

  &__listLink {
    display: block;

    padding: 24px 0;

    text-align: left;

    &_active {
      & .burgerMenu__listTx {
        color: var(--bd_secondary);

        &::before{
          display: block;
        }
      }
    }

  }

  &__listTx {
    position: relative;

    font-family: 'Cinzel';
    font-weight: 400;
    font-size: 24px;
    letter-spacing: -0.02em;
    color: var(--title_secondary);

    &::before {
      content: "";

      position: absolute;
      right: -40px;
      bottom: 7px;

      display: none;

      width: 20px;
      height: 20px;

      background: url('/icons/ornamentSmall.png') no-repeat center;
      background-size: contain;

      transform: rotate(90deg);
    }
  }

  &__bottom {
    padding: 16px 20px;

    border-top: 2px solid rgb(76 76 76 / 53%);
  }

  &__soclist {
    margin-bottom: 32px;
  }

  &__link {
    padding: 5px 0;

    font-weight: 500;
    font-size: 14px;
    line-height: 22px;

    text-transform: uppercase;

    color: #BFBFBF;

    &:not(:last-child) {
      margin-right: 12px;
      padding-right: 12px;

      border-right: 1px solid #4e4e4e;
    }
  }

  &__apps {
  }

  &__txBottom {
    margin-bottom: 8px;

    font-weight: 700;
    font-size: 12px;

    text-transform: uppercase;

    color: #BFBFBF;
  }

  &__appsList {
    display: flex;
    gap: 12px;

    margin-bottom: 24px;
  }

  &__appImg {
  }

  &__copyright {
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    color: #BFBFBF;
  }
}
</style>
