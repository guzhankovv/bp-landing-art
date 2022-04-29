<template>
  <div class="mainPage">
    <AppLoader v-show="!loaded" />

    <AppHeader />

    <section class="mainPage__banner">
      <AppBanner />
    </section>

    <MainPage class="mainPage__main" />

    <AppFooter />

    <CustomModal v-if="$store.getters['modal/MODAL_NAME']">
      <template slot="modalBody">
        <ArtistsModal :artist-data="$store.getters['artistsModal/ARTIST_DATA']" />
      </template>
    </CustomModal>

    <CookiesAlert />
  </div>
</template>

<script>
import AppHeader from '@/components/appHeader/index.vue'
import AppLoader from '@/components/appLoader/index.vue'
import AppBanner from '@/components/appBanner/index.vue'
import MainPage from '@/components/mainPage/index.vue'
import CustomModal from '@/components/ui/customModal/index.vue'
import ArtistsModal from '@/components/ui/customModal/modalBodies/artistsModal/index.vue'
import AppFooter from '~/components/appFooter/index.vue'
import CookiesAlert from '@/components/mainPage/cookiesAlert/index.vue'

export default {
  name: 'IndexPage',
  components: {
    AppBanner,
    AppHeader,
    MainPage,
    CustomModal,
    ArtistsModal,
    AppFooter,
    AppLoader,
    CookiesAlert
  },

  data () {
    return {
      loaded: false
    }
  },
  mounted () {
    document.body.style.overflow = 'hidden'

    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loaded = true
        document.body.style.overflow = 'auto'
      }, 1000)
    })
  }
}
</script>

<style lang="scss" scoped>
.mainPage {
  background: var(--bg_main);

  &__banner {
    margin-bottom: 126px;

    @media (max-width: $media_md) {
      margin-bottom: 90px;

      overflow: hidden;
    }
  }

  &__main {
    max-width: 100vw;
  }
}
</style>
