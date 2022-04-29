<template>
  <div class="artist">
    <h1 class="artist__title title_1 border border--line">
      Bold Artists
    </h1>

    <div class="artist__textRow">
      <p class="artist__text text_inter_20">
        Artists are integral part of any great society, and Bold Point community is no exception.We’re thrilled to inspire talented creators and hope that art will remain a key element of the reality we are building.
      </p>
    </div>

    <div class="artist__inner">
      <h2 class="artist__innerText">
        Click on artist’s avatar to check his profile and exclusive interview
      </h2>

      <div class="artist__list">
        <TeamList />
      </div>
    </div>
  </div>
</template>

<script>
import TeamList from '@/components/mainPage/artistTeam/teamList/index.vue'

export default {
  name: 'ArtistTeam',

  components: {
    TeamList
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";
.artist {
  &__title {
    margin: 0 auto 48px;
    padding-left: 100px;
    padding-right: 100px;

    width: fit-content;

    text-align: center;

    @media (max-width: $media_md) {
      padding-left: 70px;
      padding-right: 70px;
    }
  }

  &__textRow {
    position: relative;

    display: flex;
    justify-content: center;

    margin: 0 auto 80px;
    padding: 0 44px;

    max-width: 1336px;

    @media (max-width: $media_md) {
      padding: 0 30px;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: -3px;
      left: 0;

      display: block;

      width: 35px;
      height: 35px;

      background: url('/icons/ornamentSmall.png') no-repeat center;

      transform: rotate(-90deg);
    }

    &::after {
      left: auto;
      right: 0;

      transform: rotate(90deg);
    }
  }

  &__text {
    text-align: center;
  }

  &__innerText {
    margin-bottom: 115px;

    font-family: 'Cinzel';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;

    color: $gold;

    text-align: center;
    letter-spacing: 0.04em;

    @media (max-width: $media_md) {
      margin-bottom: 40px;

      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>
