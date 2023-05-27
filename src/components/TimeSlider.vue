<template>
  <div class="data">
    <div class="data__slider">
      <div class="data__slider__minval">0</div>
      <img class="data__slider__decrease" @click="decreaseValue" src="@/assets/icons/minus.svg" alt="">
      <input class="data__slider__range" type="range" min="0" max="60" v-model="value">
      <img class="data__slider__increase" @click="increaseValue" src="@/assets/icons/plus.svg" alt="">
      <div class="data__slider__maxval">60</div>
    </div>
    <div class="data__value">
      <img class="data__value__icon" src="@/assets/icons/calendar.svg" alt="">
      <div class="data__value__month">{{ calculateMonth }}</div>
      <div class="data__value__year">{{ calculateYear }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'timeSlider',
  data() {
    return {
      value: 5
    }
  },
  methods: {
    decreaseValue () {
      if (this.value != 0) {
        this.value = this.value - 1
      }
    },
    increaseValue () {
      if (this.value != 60) {
        this.value = this.value + 1
      }
    }
  },
  computed: {
    calculateMonth () {
      const month = this.value % 12
      return month === 0 ? 12 : month
    },
    calculateYear () {
      return Math.ceil(this.value / 12) + 2022
    }
  }
}
</script>

<style lang="scss" scoped>
.data {
  display: flex;
  flex-direction: row;
  width: fit-content;
  &__slider {
    background-color: var(--light_tr);
    border-radius: 20px;
    height: 48px;
    width: 971px;
    padding-inline: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-inline-end: 16px;
    &__minval, &__maxval {
      font-family: SFRoundedB;
      font-size: 20px;
      color: var(--white);
    }
    &__decrease, &__increase {
      width: 20px;
      height: 20px;
    }
    &__range {
      -webkit-appearance: none;
      width: 822px;
      height: 5px;
      border-radius: 3px;
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
  &__value {
    background-color: var(--light_tr);
    border-radius: 20px;
    height: 48px;
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &__icon {
      height: 20px;
      margin-inline-end: 16px;
    }
    &__month, &__year {
      font-family: SFRoundedM;
      font-size: 20px;
      color: var(--white);
    }
    &__month {
      margin-inline-end: 8px;
    }
  }
}
</style>