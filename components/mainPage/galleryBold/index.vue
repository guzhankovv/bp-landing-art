<template>
  <div class="gallery">
    <div class="gallery__inner">
      <h1 class="gallery__title title_1 txLilac">
        Bold VR Gallery
      </h1>

      <div class="gallery__textRow">
        <img
          class="gallery__ornament gallery__ornament--left"
          src="/icons/ornamentSmall.png"
          alt="ornament"
        >

        <p class="gallery__text text_inter_20">
          Our exhibition in virtual reality is open for visits 24/7
        </p>

        <img
          class="gallery__ornament gallery__ornament--right"
          src="/icons/ornamentSmall.png"
          alt="ornament"
        >
      </div>

      <p class="gallery__textGold text_cin_24 txGold">
        Immerse into alternate universe on 360°
      </p>

      <a onClick="ym(88590499,'reachGoal','joinvrgallery'); return true;" class="gallery__link btn" href="https://spatial.io/s/Discover-a-new-dimension-Bold-Point-Gallery-6253f98e153bbf000171a699?share=2082928520569155812">
        <img
          class="gallery__btnIcon btn__icon btn__icon--left"
          src="/icons/ornament.svg"
          alt="ornament"
        >

        <p class="gallery__btnText btn__text txWhite">
          join VR-gallery
        </p>

        <img
          class="gallery__btnIcon btn__icon btn__icon--right"
          src="/icons/ornament.svg"
          alt="ornament"
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryBold'
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";
.gallery {
  background-image: url("/images/welcomBg.png");
  background-repeat: no-repeat;
  background-position-x: center;

  max-width: 1920px;
  margin: 0 auto;

  margin-bottom: 97px;

  padding: 0 20px;

  @media (max-width: $media_md) {
    margin-bottom: 80px;
  }

  @media (max-width: $media_sm) {
    margin-bottom: 70px;
  }

  &__inner {
    padding-top: 120px;
    padding-bottom: 230px;

    @media (max-width: $media_xl) {
      padding-bottom: 223px;
    }

    @media (max-width: $media_md) {
      padding-top: 100px;
      padding-bottom: 103px;
    }

    @media (max-width: $media_sm) {
      padding-top: 76px;
      padding-bottom: 72px;
    }
  }

  &__title {
    text-align: center;

    margin-bottom: 44px;

    @media (max-width: $media_sm) {
      margin-bottom: 13px;

      border-bottom-style: solid;
      border-width: 2px;
      border-image-slice: 1;

      border-image-source: radial-gradient(
        circle,
        rgba(201, 128, 254, 0.6) 30%,
        rgba(201, 128, 254, 0) 100%
      );

      padding-bottom: 8px;
    }
  }

  &__textRow {
    display: flex;
    justify-content: center;
    gap: 20px;

    margin-bottom: 40px;

    align-items: center;

    @media (max-width: $media_sm) {
      gap: 10px;

      margin-bottom: 33px;
    }
  }

  &__ornament {
    position: relative;
    width: 24px;
    height: 35px;
    top: -3px;

    object-fit: contain;

    &--left {
      transform: rotate(-90deg);
    }

    &--right {
      transform: rotate(90deg);
    }

    @media (max-width: $media_sm) {
      width: 15px;
      height: 11px;
    }
  }

  &__text {
    text-align: center;

    color: $white;

    @media (max-width: $media_sm) {
      opacity: 0.7;
    }
  }

  &__textGold {
    text-align: center;

    margin: 0 auto 48px;

    @media (max-width: $media_sm) {
      max-width: 272px;
    }
  }
}

.btn {
  max-width: 377px;

  @media (max-width: $media_sm) {
    max-width: 183px;
  }
}
</style>
