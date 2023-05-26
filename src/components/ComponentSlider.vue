<template>
  <div class="data">
    <div class="data__left">
      <img class="data__left__icon" src="@/assets/icons/rain1.svg" alt="">
      <div class="data__left__value">{{ value }}</div>
      <div class="data__left__unit">mm/bln</div>
    </div>
    <div class="data__right">
      <img class="data__right__minicon" src="@/assets/icons/rain0.svg" alt="">
      <input class="data__right__slider" type="range" name="" min="0" max="500" v-model="value">
      <img class="data__right__maxicon" src="@/assets/icons/rain3.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'componentSlider',
  data() {
    return {
      value: 250
    }
  }
}
</script>

<style lang="scss" scoped>
.data {
  background-color: var(--light_tr);
  width: 400px;
  padding-inline: 16px;
  padding-block: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
  &__left {
    color: var(--white);
    display: flex;
    flex-direction: row;
    align-items: center;
    &__icon {
      margin-inline-end: 8px;
    }
    &__value {
      font-family: SFRoundedB;
      font-size: 16px;
    }
    &__unit {
      font-family: SFRoundedR;
      font-size: 12px;
    }
  }
  &__right {
    display: flex;
    flex-direction: row;
    align-items: center;
    &__slider {
      -webkit-appearance: none;
      width: 150px;
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
        background-color: var(--light);
      }
    }
  }
}
</style>