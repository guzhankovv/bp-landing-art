<template>
  <div class="mainPage">
    <section
      id="about"
      class="mainPage__about"
    >
      <BoldPoint />
    </section>

    <section class="mainPage__colab">
      <CollaborationMech id="mechanics" />
    </section>

    <section
      id="artists"
      class="mainPage__artistTeam"
    >
      <div class="container">
        <ArtistTeam />
      </div>
    </section>

    <section
      id="timeline"
      class="mainPage__timeline"
    >
      <div class="container">
        <MainTimeline />
      </div>
    </section>

    <GalleryBold />

    <QuestionAnswer id="faq" />

    <!-- <BuyToken /> -->
  </div>
</template>

<script>
import CollaborationMech from '@/components/mainPage/collaborationMech/index.vue'
import BoldPoint from '@/components/mainPage/boldPoint/index.vue'
import ArtistTeam from '@/components/mainPage/artistTeam/index.vue'
import GalleryBold from '@/components/mainPage/galleryBold/index.vue'
import QuestionAnswer from '@/components/mainPage/questionAnswer/index.vue'
// import BuyToken from '@/components/mainPage/buyToken/index.vue'
import MainTimeline from '@/components/mainPage/mainTimeline/index.vue'

export default {
  name: 'MainPage',

  components: {
    CollaborationMech,
    BoldPoint,
    ArtistTeam,
    GalleryBold,
    QuestionAnswer,
    // BuyToken,
    MainTimeline
  }
}
</script>

<style lang="scss" scoped>
.mainPage {
  &__artistTeam {
    margin: 0 auto 80px;

    max-width: 1920px;

    box-shadow: inset 0px 0px 20px 11px var(--bg_main);

    background: url('/images/artists/artistsBg.png');

    @media (max-width: $media_md) {
      margin-bottom: 24px;

      background-position: center 60px;
      background-size: auto 740px;
      background-repeat: no-repeat;
    }
  }

  &__about {
    margin-bottom: 100px;

    position: relative;
    overflow: hidden;

    @media (max-width: $media_md) {
      margin-bottom: 0;
    }

    &::before {
      content: "";

      position: absolute;
      top: 403px;
      left: -254px;
      bottom: 0;
      right: 0;

      width: 283px;
      height: 181px;

      border-radius: 50%;

      filter: blur(275px);
      background: #A63DFF;

      @media (max-width: $media_md) {
        display: none;
      }
    }

    &::after {
      content: "";

      position: absolute;
      top: 577px;
      right: -72px;
      bottom: 0;

      width: 93px;
      height: 164px;

      border-radius: 50%;

      filter: blur(218px);
      background: #A63DFF;

      @media (max-width: $media_md) {
        display: none;
      }
    }
  }

  &__colab {
    margin-bottom: 160px;

    @media (max-width: $media_md) {
      margin-bottom: 88px;
    }
  }

  &__timeline {
    overflow: hidden;
  }
}
</style>
