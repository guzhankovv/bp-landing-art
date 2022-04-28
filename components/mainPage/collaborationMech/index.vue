<template>
  <div class="collab">
    <div class="collab__inner">
      <div class="collab__top">
        <h1 class="collab__title title_1 border border--line">
          Bold Expectations
        </h1>

        <div class="collab__topDescr">
          <div class="collab__descrBox">
            <div class="collab__decrtInner">
              <h2 class="collab__descrSubtitle txGold">
                11 Artist’s
              </h2>

              <p class="collab__descrText text_inter_16">
                Talented creators with unique views united in one campaign
              </p>
            </div>
          </div>

          <div class="collab__descrBox collab__descrBox--bdrLilac">
            <div class="collab__decrtInner">
              <h2 class="collab__descrSubtitle txLilac">
                39 art works
              </h2>

              <p class="collab__descrText text_inter_16">
                VR gallery with artworks inspired by alternate reality
              </p>
            </div>
          </div>

          <div class="collab__descrBox">
            <div class="collab__decrtInner">
              <h2 class="collab__descrSubtitle txGold">
                every 3 days
              </h2>

              <p class="collab__descrText text_inter_16">
                Artists will be unveiled one by one every 3 days
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="collab__bottom">
        <div class="collab__main">
          <h2 class="collab__bottomTitle subtitle_cin_56">
            Bold Earnings
          </h2>

          <p class="collab__text text_inter_20">
            In this campaign you can enrich your digital art collection and earn additional prizes.
            <br>
            To be eligable for getting special rewards you need to buy NFT before next artist and his part of the collection unlocks.
          </p>

          <div class="collab__step">
            <p class="collab__stepText mb13">
              Buy favorite NFT
            </p>

            <img
              class="collab__bottomOrnament"
              src="/icons/ornamentSmall.svg"
              alt="ornament"
            >

            <p class="collab__stepText mb13 mt13 p77">
              Follow Bold Point on
              <a
                class="collab__stepText collab__socialLink"
                href="https://twitter.com/bold_point"
                target="_blank"
              >
                Twitter
              </a>
              and
              <a
                class="collab__stepText collab__socialLink"
                href="https://t.me/bold_point"
                target="_blank"
              >
                Telegram
              </a>
            </p>

            <img
              class="collab__bottomOrnament"
              src="/icons/ornamentSmall.svg"
              alt="ornament"
            >

            <p class="collab__stepText mt13">
              Participate in a special lottery
            </p>
          </div>
        </div>

        <a
          onClick="ym(88590499,'reachGoal','buy-nft'); return true;"
          class="collab__link btn"
          href="https://opensea.io/collection/boldpoint"
        >
          <img
            class="collab__btnIcon btn__icon btn__icon--left"
            src="/icons/ornament.svg"
            alt="ornament"
          >

          <p class="collab__btnText btn__text txWhite">
            Buy NFT
          </p>

          <img
            class="collab__btnIcon btn__icon btn__icon--right"
            src="/icons/ornament.svg"
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
    color: $lilac;

    text-align: center;
    letter-spacing: 0.04em;
  }

  &__topDescr {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 78px;

    margin: 88px auto 0;
    padding: 0 12px;

    max-width: 1620px;

    @media (max-width: $media_md) {
      grid-template-columns: 332px;
      margin-top: 30px;
      gap: 10px;
    }
  }

  &__descrBox {
    padding: 28px 4px;
    background: #000;
    position: relative;
    width: 100%;
    border-radius: 12px;

    // width: 100%;
    // border: 4px solid;

    // border-image: linear-gradient(
    //   180deg,
    //   #000000 17.86%,
    //   rgb(255, 201, 119) 99.67%
    // );
    // border-image-slice: 1;

    // border-radius: 12px;

    // &--bdrLilac {
    //   border-image: linear-gradient(
    //     180deg,
    //     #000000 17.86%,
    //     rgb(201, 128, 254) 99.67%
    //   );
    //   border-image-slice: 1;
    // }

    // @media (max-width: $media_xl) {
    //   padding: 13px 7px;
    // }

  &::before {
    display: block;
    position: absolute;
    content: '';
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    background: linear-gradient(
      180deg,
      #000000 17.86%,
      rgb(255, 201, 119) 99.67%
    );
    z-index: -2;
    border-radius: 12px;
  }
  &::after {
    display: block;
    position: absolute;
    content: '';
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    top: 12px;
    left: -1px;
    background: url('/images/bg-border.png');
    z-index: -1;
    border-radius: 12px;
    background-size: 150%;
  }
    &--bdrLilac {
      &:before{
        background: linear-gradient(
          180deg,
          #000000 17.86%,
          rgb(201, 128, 254) 99.67%
        );
      }
      &::after {
        top:-2px;
      }
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

    @media (max-width: $media_sm) {
      font-size: 18px;
      line-height: 28px;

      margin-bottom: 10px;
    }
  }

  &__descrText {
    text-align: center;

    @media (max-width: $media_sm) {
      font-size: 9px;
      line-height: 18px;
    }
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
    background-position-y: -120px;

    @media (max-width: $media_sm) {
      background-position-y: -259px;
    }
  }

  &__main {
    margin-bottom: 147px;

    padding-top: 120px;

    @media (max-width: $media_sm) {
      margin-bottom: 16px;
      padding: 46px 15px 0 15px;
    }

    // @media (max-width: $media_xl) {
    //   margin-bottom: 200px;
    //   padding-top: 70px;
    // }
  }

  &__bottomTitle {
    color: $gold;

    text-align: center;

    margin-bottom: 44px;

    @media (max-width: $media_xl) {
      margin-bottom: 0;
    }
  }

  &__text {
    text-align: center;

    margin-bottom: 40px;

    @media (max-width: $media_sm) {
      padding: 0 15px;
    }

    // @media (max-width: $media_xl) {
    //   margin-bottom: 25px;
    // }
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

    @media (max-width: $media_sm) {
      font-size: 14px;
    }
  }

  &__socialLink {
    color: $lilac;
    transition: 0.2s;

    &:hover {
      color: $white;
    }
  }

  &__bottomOrnament {
    display: block;
    margin: 0 auto;
    width: 33px;
    height: 31px;

    object-fit: none;

    @media (max-width: $media_sm) {
      width: 20px;
      height: 18px;

      object-fit: contain;
    }
  }

  &__link {
    position: relative;

    max-width: 278px;

    @media (max-width: $media_sm) {
      max-width: 140px;
    }

    // &::after {
    //   content: "";

    //   position: absolute;
    //   top: 150px;
    //   left: 150px;
    //   right: 0;
    //   bottom: 0;

    //   width: 100%;
    //   height: 2px;
    //   background: linear-gradient(266.51deg, #555555 0.15%, rgba(103, 103, 103, 0.7) 75.15%, rgba(75, 75, 75, 0) 100.15%);

    //   transform: rotate(180deg);
    // }
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

.p77 {
  padding: 0 77px;
}
</style>
