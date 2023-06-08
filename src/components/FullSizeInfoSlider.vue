<template>
  <div class="data">
    <div class="data__left">
      <div class="data__left__label">{{ $t('variable.main.' + variable + '.full') | uppercase }}</div>
      <div class="data__left__desc">
        <div class="data__left__desc__info">
          <div class="data__left__desc__info__icon">
            <img :src="require(`@/assets/icons/${variable}.high.svg`)">
          </div>
          <div class="data__left__desc__info__value">{{ value }} {{ $t('variable.main.' + variable + '.unit') }}</div>
        </div>
        <div class="data__left__desc__slider">
          <div class="data__left__desc__slider__minicon">
            <img :src="require(`@/assets/icons/${variable}.low.svg`)">
          </div>
          <input class="data__left__desc__slider__range" type="range" min="0" max="500" v-model="value" disabled="true">
          <div class="data__left__desc__slider__maxicon">
            <img :src="require(`@/assets/icons/${variable}.high.svg`)">
          </div>
        </div>
      </div>
    </div>
    <div class="data__right">
      <div class="data__right__label">{{ $t('variable.additional.not_recorded') | uppercase }}</div>
      <div class="data__right__info">
        <img class="data__right__info__icon" src="@/assets/icons/rainMissing.svg" alt="">
        <div class="data__right__info__value">999</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fullSizeInfoSlider',
  props: {
    variable: String
  },
  data() {
    return {
      value: 250
    }
  },
  filters: {
    uppercase (text) {
      return text.toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.data {
  width: 660px;
  height: 52px;
  background-color: var(--dark_tr);
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
        align-items: center;
        &__icon {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
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
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
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
            background-color: var(--dark);
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