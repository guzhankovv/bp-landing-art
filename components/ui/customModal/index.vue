<template>
  <div
    class="customModal"
    :class="{ customModal_active: modalState }"
  >
    <div
      class="customModal__container"
      :class="{ customModal__container_active: modalState }"
    >
      <button
        class="customModal__close"
        @click="closeModal"
      >
        <span class="customModal__closeTx">
          Close
        </span>

        <img
          class="customModal__closeIcon"
          src="/icons/closeIcon.png"
          alt="cross"
        >
      </button>
      <div class="customModal__inner">
        <div class="customModal__content">
          <slot name="modalBody" />
        </div>
      </div>
    </div>

    <div
      class="customModal__backdrop"
      aria-hidden="true"
      @click="closeModal"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomModal',

  props: {
    variant: {
      type: String,
      default: 'default'
    }
  },

  data () {
    return {
      showModal: false
    }
  },

  computed: {
    modalState () {
      return this.$store.getters['modal/MODAL_STATE']
    }
  },

  methods: {
    closeModal () {
      this.$store.dispatch('modal/modalClose')
    }
  }
}
</script>

<style lang="scss" scoped>
.customModal {
    position: fixed;
    z-index: 50;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    overflow: auto;
    overflow-x: hidden;

    text-align: center;
    white-space: nowrap;

    visibility: hidden;

    &_active {
        visibility: visible;
    }

    &::before {
        content: "";

        display: inline-block;
        vertical-align: middle;

        width: 0;
        height: 100%;
    }

    &__container {
        display: inline-block;
        vertical-align: middle;

        text-align: left;
        white-space: normal;

        transform: scale(0);
        transition: transform 0.3s;

        &_active {
            transform: scale(1);
        }
    }

    &__inner {
        margin: 0 20px;
        padding: 65px 0;

        @media (max-width: $media_md) {
          margin: 0;
          padding: 0;
        }
    }

    &__content {
        position: relative;

        border-radius: 5px;
        border: 2px solid var(--bd_primary);

        animation-name: fadeInUp;
        animation-duration: 0.3s;
        animation-fill-mode: both;
    }

    &__close {
        position: absolute;
        top: 0px;
        right: -160px;

        display: flex;
        align-items: center;
        gap: 20px;

        font-family: "Cinzel";
        font-size: 24px;
        line-height: 24px;
        color: $white;

        text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.9);

        @media (max-width: 1300px) {
          z-index: 1;
          top: 80px;
          right: 40px;
        }

        @media (max-width: $media_md) {
          top: 10px;
          right: 20px;
        }

        &:hover {
          .customModal__closeIcon {
              transform: rotate(90deg);
          }
        }
    }

    &__closeTx {
      @media (max-width: 1300px) {
        display: none;
      }
    }

    &__closeIcon {
      height: 70px;

      transition: 0.2s;

      @media (max-width: 1300px) {
        height: 40px;
      }
    }

    &__backdrop {
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background: rgba(0, 0, 0, 0.7);

        animation-name: fadeIn;
        animation-duration: 1s;
        animation-fill-mode: both;
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        100% {
            opacity: 1;
            transform: none;
        }
    }
}
</style>
