<template>
  <div class="mainTimeline">
    <div class="mainTimeline__top">
      <h1 class="mainTimeline__title title_1 border border--line">
        Bold Roadmap
      </h1>

      <div class="mainTimeline__topTx text_inter_20">
        <p class="mainTimeline__tx">
          Each creator makes from 2 to 5 artworks that’ll be presented along with artist’s profile.
        </p>

        <p class="mainTimeline__tx">
          <a
            class="mainTimeline__tx mainTimeline__socialLink text_inter_20"
            href="https://twitter.com/bold_point"
            target="_blank"
          >
            Follow us
          </a>
          not to miss a new drop
        </p>
      </div>
    </div>

    <div class="mainTimeline__timeline timeline">
      <div class="timeline__inner">
        <div
          v-for="(item, index) in getTimelineList(showAll)"
          :key="index"
          class="timeline__row"
        >
          <div class="timeline__artist">
            <div class="timeline__wrap">
              <p class="timeline__date">
                {{ item.date }}
              </p>

              <div class="timeline__avatar avatar">
                <div class="avatar__inner">
                  <img
                    class="avatar__img"
                    :src="item.avatar"
                    :alt="item.artist"
                  >
                </div>

                <p class="avatar__name">
                  {{ item.artist }}
                </p>
              </div>
            </div>
          </div>

          <div class="timeline__line">
            <img
              class="timeline__dot"
              src="/icons/dotStyled.svg"
              alt="dot"
            >
          </div>

          <div class="timeline__slider">
            <TimelineCards
              :cards-data="item.nftList"
              :artist-name="item.artist"
            />
          </div>
        </div>
      </div>

      <button
        class="timeline__btn btn"
        @click="showAll = !showAll"
      >
        <img
          class="btn__icon btn__icon--left"
          src="/icons/ornament.png"
          alt="ornament"
        >

        <p class="btn__text txWhite">
          <template v-if="!showAll">
            Show more
          </template>

          <template v-else>
            collapse
          </template>
        </p>

        <img
          class="btn__icon btn__icon--right"
          src="/icons/ornament.png"
          alt="ornament"
        >
      </button>
    </div>
  </div>
</template>

<script>
import TimelineCards from './timelineCards/index.vue'
import timeLineArr from '@/static/timeLineArr.js'

export default {
  name: 'MainTimeline',
  components: {
    TimelineCards
  },

  data () {
    return {
      timelineList: timeLineArr.timeLineArr,
      showAll: false
    }
  },
  methods: {
    getTimelineList (isAll) {
      const list = this.timelineList.slice().reverse()

      if (isAll) {
        return list
      } else {
        return list.slice(0, 2)
      }
    }

    // TODO
    // setShowAll(state) {

    // }
  }
}
</script>

<style lang="scss" scoped>
.mainTimeline {
  padding: 60px 0 150px;

  background: url("/images/mainTimeline/bgGame.jpg") no-repeat;
  background-position: bottom;

  box-shadow: inset 0px 0px 20px 11px var(--bg_main);

  @media (max-width: $media_md) {
    overflow: hidden;
  }

  &__title {
    margin: 0 auto 48px;
    padding: 0 100px 20px;

    width: fit-content;

    @media (max-width: $media_md) {
      margin-bottom: 12px;
      padding: 0 0 10px;
    }
  }

  &__topTx {
    position: relative;

    margin: 0 auto 85px;
    padding: 0 40px;

    width: fit-content;

    @media (max-width: $media_md) {
      margin-bottom: 60px;
      padding: 0 35px;
    }

    &::before,
    &::after {
      content: "";

      position: absolute;
      top: 0;
      top: -3px;

      display: block;

      width: 35px;
      height: 35px;

      background: url("/icons/ornamentSmall.png") no-repeat center center/contain;

      @media (max-width: $media_md) {
        top: -1px;

        height: 23px
      }
    }

    &::after {
      right: 0;

      transform: rotate(90deg);
    }

    &::before {
      left: 0;

      transform: rotate(-90deg);
    }
  }

  &__tx {
    text-align: center;
  }

  &__socialLink {
    color: $white;
    transition: 0.2s;
    &:hover {
      color: rgb(191, 191, 191);
    }
  }

  &__timeline {
    margin: 0 auto;

    max-width: 1030px;
  }
}

.timeline {
  @media (max-width: 1280px) {
    max-width: fit-content;
  }

  &__inner {
    position: relative;

    display: grid;
    gap: 80px;

    margin-bottom: 200px;

    @media (max-width: $media_md) {
      margin-bottom: 100px;
    }

    &::before {
      content: "";

      position: absolute;
      top: 100px;
      left: calc(50% - 2px);

      width: 2px;
      height: calc(100% + 180px);

      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 1) 73%,
        rgba(143, 176, 210, 0) 100%
      );

      @media (max-width: 1280px) {
        left: calc(40% - 30px);
      }

      @media (max-width: $media_lg) {
        top: 50px;
        left: calc(50% - 2px);

        height: calc(100% + 210px);
      }

      @media (max-width: $media_md) {
        height: calc(100% + 110px);
      }
    }
  }

  &__row {
    z-index: 1;

    display: flex;
    justify-content: center;

    @media (max-width: $media_lg) {
      flex-direction: column;
    }

    &:nth-child(odd) {
      flex-direction: row-reverse;

      @media (max-width: 1280px) {
        flex-direction: row;
      }

      @media (max-width: $media_lg) {
        flex-direction: column;
      }

      & .timeline__artist {
        justify-content: flex-start;
      }

      & .timeline__slider {
        &::before {
          background: rgb(166 61 255 / 25%);

          box-shadow: 20px -17px 90px 80px rgb(166 61 255 / 28%);

          animation: rotation 5s infinite linear;
        }
      }
    }
  }

  &__artist {
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;

    margin-top: 120px;

    width: 405px;

    @media (max-width: 1280px) {
      width: auto;
    }

    @media (max-width: $media_lg) {
      margin-top: 0;
      margin-bottom: 20px;
    }
  }

  &__wrap {
    @media (max-width: $media_lg) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      width: 100%;
    }

    @media (max-width: $media_md) {
      max-width: 280px;
    }
  }

  &__date {
    margin-bottom: 32px;

    font-family: "Cinzel";
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;

    text-align: center;
    letter-spacing: 0.04em;

    background: linear-gradient(221.97deg, #d2d2d2 23.68%, #6c15aa 76.32%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media (max-width: $media_lg) {
      order: 1;

      margin-bottom: 0;
      margin-left: auto;
    }

    @media (max-width: $media_md) {
      font-size: 20px;
    }
  }

  &__line {
    position: relative;

    display: flex;
    flex-shrink: 0;

    width: 190px;
  }

  &__dot {
    position: relative;

    margin: 0 auto;

    width: 160px;

    object-fit: contain;

    @media (max-width: $media_lg) {
      display: none;
    }
  }

  &__slider {
    position: relative;

    flex-shrink: 0;

    &::before {
      content: "";
      position: absolute;
      top: 30%;

      width: 100%;
      height: 50%;

      border-radius: 50%;

      background: rgb(154 161 56 / 28%);

      box-shadow: 50px -17px 90px 80px rgba(154, 161, 56, 0.28);

      animation: rotation 5s infinite linear reverse;
    }
  }

  &__btn {
    min-width: 292px;

    @media (max-width: 1280px) and (min-width: $media_lg) {
      margin-left: 140px;
    }

    @media (max-width: $media_md) {
      min-width: 182px;
    }
  }
}

.avatar {
  &__inner {
    position: relative;

    @media (max-width: $media_lg) {
      display: none;
    }

    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background: url("/images/hexagonBase.png");
    }
  }

  &__img {
    margin-bottom: 16px;

    width: 190px;
    height: 220px;
  }

  &__name {
    font-family: "Cinzel";
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--title_secondary);

    @media (max-width: $media_md) {
      word-break: break-word;
      font-size: 20px;
      text-align: left;
    }
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
