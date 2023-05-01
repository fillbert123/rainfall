<template>
  <div class="data">
    <div class="data__left">
      <div class="data__left__label">RATA-RATA CURAH HUJAN HARIAN</div>
      <div class="data__left__desc">
        <div class="data__left__desc__info">
          <img class="data__left__desc__info__icon" src="@/assets/icons/rain1.svg" alt="">
          <div class="data__left__desc__info__value">{{ value }} mm/bln</div>
        </div>
        <div class="data__left__desc__slider">
          <img class="data__left__desc__slider__minicon" src="@/assets/icons/rain0.svg" alt="">
          <input class="data__left__desc__slider__range" type="range" name="" min="0" max="500" v-model="value" disabled="true">
          <img class="data__left__desc__slider__maxicon" src="@/assets/icons/rain3.svg" alt="">
        </div>
      </div>
    </div>
    <div class="data__right">
      <div class="data__right__label">TIDAK TERCATAT</div>
      <div class="data__right__info">
        <img class="data__right__info__icon" src="@/assets/icons/rainMissing.svg" alt="">
        <div class="data__right__info__value">999</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fullSizeInformationSlider',
  data() {
    return {
      value: 250
    }
  }
}
</script>

<style lang="scss" scoped>
.data {
  width: 660px;
  height: 52px;
  background-color: var(--darker_tr);
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  &__left, &__right {
    &__label {
      color: var(--white);
      font-family: SFRoundedM;
      font-size: 14px;
      margin-block-end: 8px;
      display: flex;
      justify-content: flex-start;
    }
  }
  &__left {
    padding-inline-end: 16px;
    &__desc {
      width: 500px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &__info {
        display: flex;
        flex-direction: row;
        &__icon {
          width: 22px;
          margin-inline-end: 16px;
        }
        &__value {
          color: var(--white);
          font-family: SFRoundedB;
          font-size: 24px;
        }
      }
      &__slider {
        display: flex;
        flex-direction: row;
        align-items: center;
        &__minicon, &__maxicon {
          width: 22px;
        }
        &__range {
          -webkit-appearance: none;
          width: 200px;
          height: 5px;
          border-radius: 3px;
          margin-inline: 16px;
          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 20px;
            border-style: solid;
            border-width: 2px;
            border-color: var(--white);
            background-color: var(--darker);
          }
        }
      }
    }
  }
  &__right {
    padding-inline-start: 16px;
    border-inline-start-style: solid;
    border-inline-start-color: var(--white);
    border-inline-start-width: 1px;
    &__info {
      display: flex;
      flex-direction: row;
      &__icon {
        width: 22px;
        margin-inline-end: 16px;
      }
      &__value {
        color: var(--white);
        font-family: SFRoundedB;
        font-size: 24px;
      }
    }
  }
}
</style>