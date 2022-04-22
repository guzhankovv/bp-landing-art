<template>
  <div class="aboutSlide">
    <div class="aboutSlide__imgWrap">
      <div class="aboutSlide__wrapInner">
        <img
          class="aboutSlide__img"
          :src="slideData.img"
          :alt="slideData.title"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSlide',

  props: {
    slideData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.aboutSlide {
  &__imgWrap {
    position: relative;
    padding: 3px;

    max-width: 852px;

    border-radius: 12px;

    &::before{
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      border-radius: 12px;

      background: url('/images/bg.jpg');
    }
  }

  &__wrapInner {
    position: relative;

    overflow: hidden;

    &::before,
    &::after {
      content: '';

      position: absolute;
      z-index: 1;
      bottom: 100%;

      display: block;
      width: 100%;
      height: 120px;

      background: url("/images/borderPurple.png") no-repeat bottom/contain;

      opacity: 1;

      transition: opacity 0.3s;
    }

    &::after {
      top: 100%;

      transform: rotate(180deg);
    }
  }

  &__img {
    width: 100%;
    height: 100%;

    border-radius: 12px;

    transition: 2s;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
