<template>
  <div class="page">
    <div class="page__icon">
      <img class="page__icon__image" src="@/assets/icons/rain0.svg" alt="">
      <img class="page__icon__image" src="@/assets/icons/rain1.svg" alt="">
      <img class="page__icon__image" src="@/assets/icons/rain2.svg" alt="">
      <img class="page__icon__image" src="@/assets/icons/rain3.svg" alt="">
    </div>
    <div class="page__title">{{ this.$t('main.welcome') }}</div>
    <div class="page__control">
      <div class="page__control__learn" @click="goToSelected('variable')">
        <div class="page__control__learn__label">{{ this.$t('main.learn') }}</div>
        <img class="page__control__learn__chevron" src="@/assets/icons/chevron.svg" alt="">
      </div>
      <div class="page__control__simulation" @click="goToSelected('simulation')">
        <div class="page__control__simulation__label">{{ this.$t('main.simulation') }}</div>
        <img class="page__control__simulation__chevron" src="@/assets/icons/chevron.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainPage',
  methods: {
    goToSelected (id) {
      this.$emit('goToSelected', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  background-image: url(@/assets/graphics/rain.png);
  background-size: contain;
  background-color: var(--dark);
  width: 100%;
  height: 100vh;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__icon {
    width: 200px;
    display: flex;
    justify-content: space-between;
    &__image {
      width: 36px;
    }
  }
  &__title {
    font-family: SFRoundedB;
    font-size: 60px;
    margin-block-end: 12px;
  }
  &__control {
    display: flex;
    flex-direction: row;
    &__learn, &__simulation {
      display: flex;
      flex-direction: row;
      align-items: center;
      &__label {
        font-family: SFRoundedR;
        font-size: 16px;
      }
      &__chevron {
        height: 6px;
        margin-inline-start: 8px;
        transform: rotate(90deg);
      }
      &:hover>&__label {
        color: var(--white_tr);
        cursor: pointer;
      }
    }
    &__learn {
      margin-inline-end: 32px;
    }
  }
}
</style>