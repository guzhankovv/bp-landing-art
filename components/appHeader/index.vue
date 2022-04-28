<template>
  <header class="header">
    <div class="header__wrap">
      <div class="header__inner container">
        <nuxt-link
          class="header__logoLink"
          to="/"
        >
          <img
            class="header__logo"
            src="/icons/logo.svg"
            alt="logo"
          >

          <img
            class="header__logoMob"
            src="/icons/logoMob.png"
            alt="logo"
          >
        </nuxt-link>

        <div class="header__center">
          <a
            class="header__link"
            :class="{
              'header__link_active' : activeLink === 'main'
            }"
            href="#main"
            @click.prevent="scrollTo(200, $event)"
          >
            <p class="header__linkText">
              Main
            </p>
          </a>

          <a
            class="header__link"
            :class="{
              'header__link_active' : activeLink === 'about'
            }"
            href="#about"
            @click.prevent="scrollTo(200, $event)"
          >
            <p class="header__linkText">
              ABOUT GAME
            </p>
          </a>

          <a
            class="header__link"
            :class="{
              'header__link_active' : activeLink === 'mechanics'
            }"
            href="#mechanics"
            @click.prevent="scrollTo(200, $event)"
          >
            <p class="header__linkText">
              Mechanics
            </p>
          </a>

          <a
            class="header__link"
            :class="{
              'header__link_active' : activeLink === 'artists'
            }"
            href="#artists"
            @click.prevent="scrollTo(200, $event)"
          >
            <p class="header__linkText">
              Artist’s
            </p>
          </a>

          <a
            class="header__link"
            :class="{
              'header__link_active' : activeLink === 'timeline'
            }"
            href="#timeline"
            @click.prevent="scrollTo(200, $event)"
          >
            <p class="header__linkText">
              Timeline
            </p>
          </a>

          <a
            class="header__link"
            :class="{
              'header__link_active' : activeLink === 'faq'
            }"
            href="#faq"
            @click.prevent="scrollTo(200, $event)"
          >
            <p class="header__linkText">
              FAQ
            </p>
          </a>
        </div>

        <a
          onClick="ym(88590499,'reachGoal','joinvrgallery'); return true;"
          class="header__btn"
          href="https://spatial.io/s/Discover-a-new-dimension-Bold-Point-Gallery-6253f98e153bbf000171a699?share=2082928520569155812"
        >
          <p class="header__btnText txWhite">
            Join Vr-Gallery
          </p>
        </a>

        <button class="header__menuBtn">
          <img
            class="header__menu"
            src="/icons/menu.png"
            alt="menu"
          >
        </button>
      </div>
    </div>

    <div
      class="header__fake"
      aria-hidden="true"
    />
  </header>
</template>

<script>
export default {
  name: 'AppHeader',

  data () {
    return {
      activeLink: 'main'
    }
  },

  mounted () {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.setIntersection()
      }, 1000)
    })
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
    },

    setIntersection () {
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeLink = entry.target.id
          }
        })
      }
      const observer = new IntersectionObserver(callback, {
        threshold: 0.6
      })
      const sectionsList = []

      this.$el.querySelectorAll('.header__link').forEach((element) => {
        sectionsList.push(element.hash)
      })

      sectionsList.forEach((element) => {
        const target = document.querySelector(`${element}`)
        observer.observe(target)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  &__wrap {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;

    background: rgba(48,48,48,.15);
    backdrop-filter: blur(48px);

    @supports not (backdrop-filter: blur(48px)) {
      background: rgba(37, 37, 37, 0.76);
    }
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    @media (max-width: $media_lg) {
      padding: 12px 20px;
    }
  }

  &__center {
    display: grid;
    grid-auto-flow: column;
    // grid-auto-columns: 1fr;

    max-width: fit-content;
    width: 100%;

    @media (max-width: $media_lg) {
      display: none;
    }
  }

  &__logoLink {
    flex-shrink: 0;

    display: block;

    width: 194px;
    height: 23px;

    @media (max-width: $media_lg) {
      width: 32px;
    }

    // @media (max-width: $media_xl) {
    //   width: 150px;
    //   height: 18px;
    // }
  }

  &__link {
    position: relative;
    z-index: 2;

    align-items: center;

    text-transform: uppercase;
    transition: 0.6s;

    white-space: nowrap;

    &:hover,
    &_active {
      & .header__linkText {
        color: var(--bd_secondary);

        &::after {
          opacity: 1;
        }
      }
    }

    &::before,
    &::after {
      content: "";

      position: absolute;
      z-index: -2;
      left: 50%;

      display: block;

      width: 120px;
      height: 100%;

      transform: translateX(-50%);
      opacity: 0;
      visibility: hidden;
      transition: 0.3s;
    }

    &::before{
      background: url("/icons/arrowGold.png") no-repeat 50% 50%/contain;

      filter: blur(4px);
    }

    &::after{
      bottom: -60px;

      background: url("/icons/arrowGoldBottom.png") no-repeat 50% 50%/contain;
    }

    &_active {
      &::after,
      &::before {
        opacity: 1;
        visibility: visible;
      }

      & .header__linkText {
        background: linear-gradient(180deg,rgba(255,255,255,0) 0,rgba(255,255,255,.24) 100%);
        backdrop-filter: blur(8px);
      }
    }
  }

  &__linkText {
    padding: 28px 35px;

    font-weight: 700;
    color: rgba(255, 255, 255, 0.4);

    transition: 0.3s;

    &:hover {
      color: var(--bd_secondary);
    }

    &::after {
      content: '';

      position: absolute;
      z-index: 0;
      left: 0;
      bottom: 0;

      display: block;

      width: 100%;
      height: 3px;

      background: linear-gradient(270deg,rgba(255,201,119,0) 0,#ffc977 18.75%,#ffc977 53.13%,#ffc977 80.21%,rgba(255,201,119,0) 100%);

      opacity: 0;
      transition: 0.3s;
    }
  }

  &__logo {
    object-fit: contain;
    width: 100%;

    @media (max-width: $media_lg) {
      display: none;
    }
  }

  &__logoMob {
    width: 32px;
    height: 18px;

    @media (min-width: $media_lg) {
      display: none;
    }
  }

  &__btn {
    flex-shrink: 0;

    padding: 8px;

    width: 193px;
    height: 38px;

    border: 1px solid $white;
    border-radius: 8px;

    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;

    text-transform: uppercase;

    white-space: nowrap;

    transition: 0.3s;

    &:hover {
      box-shadow: 2px 6px 20px 0px rgb(255 255 255 / 83%);
    }

    @media (max-width: $media_lg) {
      padding: 2px 8px;

      width: 40%;
      height: 30%;

      font-size: 10px;
    }
  }

  &__menuBtn {
    @media (min-width: $media_lg) {
      display: none;
    }
  }

  &__menu {
    width: 27px;
    height: 16px;
  }

  &__fake {
    height: 60px;
  }
}
</style>
