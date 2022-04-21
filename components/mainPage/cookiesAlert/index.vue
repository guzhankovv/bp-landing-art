<template>
  <div class="cookies">
    <div class="cookies__inner">
      <img
        class="cookies__icon"
        src="/icons/cookies.svg"
        alt="iconCookies"
      >
      <div class="cookies__textRow">
        <p class="cookies__text">
          We use cookies to improve your experience.
        </p>

        <p class="cookies__text cookies__text--gray">
          By continuing, you agree to our Cookie Policy.
        </p>
      </div>

      <div class="cookies__btnRow">
        <button class="cookies__btn cookies__btn--gray">
          <p class="cookies__textBtn">
            Decline
          </p>
        </button>

        <button class="cookies__btn cookies__btn--lilac">
          <p class="cookies__textBtn">
            Allow
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookiesAlert'
}
</script>

<style lang="scss" scoped>
.cookies {
display: none;

  position: fixed;
  right: 0;
  left: 0;
  bottom: 50px;

  max-width: 1418px;
  height: 90px;
  padding: 25px;
  opacity: 1;
  background: rgb(20, 16, 22);
  border-radius: 8px;

  margin: 0 auto;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__icon {
      border-radius: 10px;
      background: rgb(49, 49, 49);
      padding: 10px;
  }

  &__textRow {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  &__text {
    color: $white;
    font-weight: 700;
    &--gray {
      color: rgb(204, 203, 207);
    }
  }

  &__btnRow {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  &__btn {
    border-radius: 8px;

    transition: 0.2s;
    &--gray {
      background-color: rgb(49, 49, 49);

      &:hover {
        background-color: rgb(62, 62, 62);
      }
    }

    &--lilac {
      background-color: rgb(99, 29, 149);

      &:hover {
        background-color: rgb(113, 33, 170);
      }
    }
  }

  &__textBtn {
    padding: 10px;
    color: $white;
  }
}
</style>
