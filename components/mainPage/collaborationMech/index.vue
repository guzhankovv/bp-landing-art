<template>
  <div class="collab">
    <div class="collab__inner">
      <div class="collab__top">
        <h1 class="collab__title border border--line">
          mechanics of collaboration
        </h1>

        <div class="collab__topDescr">
          <div class="collab__descrBox">
            <div class="collab__decrtInner">
              <h2 class="collab__descrSubtitle txGold">
                11 Artist’s
              </h2>

              <p class="collab__descrText text_inter_16">
                11 artists with different views united <br>
                in one project
              </p>
            </div>
          </div>

          <div class="collab__descrBox collab__descrBox__bdrLilac">
            <div class="collab__decrtInner">
              <h2 class="collab__descrSubtitle txLilac">
                39 art works
              </h2>

              <p class="collab__descrText text_inter_16">
                39 works of art with different <br>
                circulation
              </p>
            </div>
          </div>

          <div class="collab__descrBox">
            <div class="collab__decrtInner">
              <h2 class="collab__descrSubtitle txGold">
                every 3 days
              </h2>

              <p class="collab__descrText text_inter_16">
                An artist will be presented once <br>
                every 3 days
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="collab__bottom">
        <div class="collab__main">
          <h2 class="collab__bottomTitle subtitle_cin_56">
            Collect digital art and earn <br>
            additional prizes
          </h2>

          <p class="collab__text text_inter_20">
            We invite you to take part in our cooperation as an art collector.
            <br>
            Anyone who acquires a piece of art crafted by an artist before the
            publication of the works of the next artist will receive <br>
            $BPT tokens as a gift and the opportunity to participate in the
            draws of additional prizes from Bold Point.
          </p>

          <div class="collab__step">
            <p class="collab__stepText mb13">
              Buy NFTs and favorite <br>
              artworks
            </p>

            <img
              class="collab__bottomOrnament"
              src="/icons/ornamentSmall.png"
              alt="ornament"
            >

            <p class="collab__stepText mb13 mt13">
              Wait BP TGE
            </p>

            <img
              class="collab__bottomOrnament"
              src="/icons/ornamentSmall.png"
              alt="ornament"
            >

            <p class="collab__stepText mt13">
              Get rewarded in BPT
            </p>
          </div>
        </div>

        <a
          class="collab__link btn"
          href="https://opensea.io/collection/boldpoint"
        >
          <img
            class="collab__btnIcon btn__icon btn__icon--left"
            src="/icons/ornament.png"
            alt="ornament"
          >

          <p class="collab__btnText btn__text txWhite">
            Buy art
          </p>

          <img
            class="collab__btnIcon btn__icon btn__icon--right"
            src="/icons/ornament.png"
            alt="ornament"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollaborationMech'
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";
.collab {
  max-width: 1920px;
  margin: 0 auto;

  &__inner {
    margin: 0 auto;
  }

  &__title {
    margin: 0 auto;

    max-width: 1260px;

    font-family: "Cinzel";
    font-size: 72px;
    line-height: 64px;
    color: $lilac;

    text-align: center;
    letter-spacing: 0.04em;

    @media (max-width: $media_xl) {
      font-size: 50px;
      line-height: 58px;
    }
  }

  &__topDescr {
    display: flex;
    justify-content: space-between;
    gap: 78px;

    margin: 88px auto 0;
    padding: 0 12px;

    max-width: 1620px;

    @media (max-width: $media_xl) {
      gap: 25px;

      margin-top: 55px;
    }
  }

  &__descrBox {
    padding: 28px 4px;

    width: 100%;
    height: 100%;
      border: 4px solid $gold;

    border-image-source: linear-gradient(360deg, url('/images/bg.jpg') 1.15%, rgba(255, 201, 119, 0) 88.83%);

        border-radius: 12px;

    &__bdrLilac {
      border: 4px solid $lilac;
    }

    @media (max-width: $media_xl) {
      padding: 15px 4px;
    }
  }

  &__decrtInner {
    text-align: center;
  }

  &__descrSubtitle {
    font-family: "Cinzel";
    font-weight: 400;
    font-size: 48px;
    line-height: 24px;

    text-align: center;

    margin-bottom: 13px;

    white-space: nowrap;

    @media (max-width: $media_xl) {
      font-size: 24px;

      margin-bottom: 8px;
    }
  }

  &__descrText {
    text-align: center;
  }

  &__bottom {
    background-image: linear-gradient(
        90deg,
        #000000 0%,
        rgba(0, 0, 0, 0.3) 16.19%,
        rgba(0, 0, 0, 0.3) 83.77%,
        #000000 100%
      ),
      url("/images/bgMechanics.jpg");
    background-repeat: no-repeat;
    background-position-x: center;

    margin-bottom: 70px;
  }

  &__main {
    margin-bottom: 60px;

    padding-top: 100px;
    padding-bottom: 88px;

    @media (max-width: $media_xl) {
      padding-top: 70px;
      padding-bottom: 40px;
    }
  }

  &__bottomTitle {
    color: $gold;

    text-align: center;

    margin-bottom: 44px;

    @media (max-width: $media_xl) {
      margin-bottom: 17px;
    }
  }

  &__text {
    text-align: center;

    margin-bottom: 40px;

    @media (max-width: $media_xl) {
      margin-bottom: 25px;
    }
  }

  &__stepText {
    font-family: "Cinzel";
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    color: $white;

    text-align: center;

    @media (max-width: $media_xl) {
      font-size: 18px;
    }
  }

  &__bottomOrnament {
    display: block;
    margin: 0 auto;
    width: 33px;
    height: 31px;

    object-fit: none;
  }

  &__link {
    position: relative;
  }

  &__Line {
    position: absolute;

    margin-bottom: 150px;
    width: 530px;
    height: 20px;

    &--left {
      top: 10px;
      left: 10px;

      transform: rotate(180deg);
    }

    &--right {
      top: 10px;
      left: 10px;
    }
  }
}

.border {
  width: 100%;
  padding-bottom: 20px;

  @media (max-width: $media_xl) {
    padding-bottom: 10px;
  }
}
</style>
