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
              src="/icons/ornamentSmall.png"
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
              src="/icons/ornamentSmall.png"
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
            src="/icons/ornament.png"
            alt="ornament"
          >

          <p class="collab__btnText btn__text txWhite">
            Buy NFT
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
.collab {
  margin: 0 auto;
  max-width: 1920px;

  &__inner {
    margin: 0 auto;
  }

  &__title {
    margin: 0 auto;

    max-width: 1260px;

    text-align: center;
    letter-spacing: 0.04em;
    color: $lilac;
  }

  &__topDescr {
    display: grid;
    grid-template-columns: repeat(3, minmax(160px, 490px));
    justify-content: space-between;
    gap: 16px;

    margin: 88px auto 0;
    padding: 0 12px;

    max-width: 1620px;

    @media (max-width: $media_lg) {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
  }

  &__descrBox {
    padding: 4px;

    border-radius: 12px;

    background: url('/images/bg-border.png'),
      linear-gradient(180deg,#000 17.86%,#ffc977 99.67%);

    @media (max-width: $media_lg) {
      width: calc(50% - 5px);
    }

    &--bdrLilac {
      background: url('/images/bg-border.png'),
      linear-gradient(0deg, #C980FE 0.96%, rgba(201, 128, 254, 0) 86.47%);

      @media (max-width: $media_lg) {
        order: 3;

        margin: 0 auto;

        min-width: 165px;
      }
    }
  }

  &__decrtInner {
    display: grid;
    grid-template-rows: 1fr auto;
    justify-items: center;
    gap: 12px;

    padding: 24px 12px;

    height: 100%;

    border-radius: 12px;

    background: var(--bg_main);

    @media (max-width: $media_md) {
      padding: 12px 8px;
    }
  }

  &__descrSubtitle {
    align-self: center;

    font-family: "Cinzel";
    font-size: 48px;
    line-height: 48px;

    text-align: center;

    @media (max-width: $media_lg) {
      font-size: 18px;
      line-height: 28px;
    }
  }

  &__descrText {
    align-self: end;

    max-width: 270px;

    text-align: center;

    @media (max-width: $media_lg) {
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
      background-position-y: 93%;
      background-size: auto 250px;
    }
  }

  &__main {
    margin-bottom: 147px;

    padding-top: 120px;

    @media (max-width: $media_sm) {
      margin-bottom: 16px;
      padding: 46px 15px 0 15px;
    }
  }

  &__bottomTitle {
    color: $gold;

    text-align: center;

    margin-bottom: 44px;

    @media (max-width: $media_xl) {
      margin-bottom: 16px;
    }
  }

  &__text {
    text-align: center;

    margin-bottom: 40px;

    @media (max-width: $media_sm) {
      padding: 0 15px;
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
    max-width: 278px;

    @media (max-width: $media_sm) {
      max-width: 140px;
    }
  }
}

.border {
  width: 100%;
  padding-bottom: 20px;

  @media (max-width: $media_xl) {
    padding-bottom: 10px;
  }

  @media (max-width: $media_md) {
    width: fit-content;
  }
}

.p77 {
  padding: 0 77px;
}
</style>
