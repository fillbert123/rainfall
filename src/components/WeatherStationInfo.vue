<template>
  <div class="data">
    <div class="data__info">
      <div class="data__info__label">{{ $t('variable.additional.weather_station') | uppercase }}</div>
      <div class="data__info__desc">
        <img class="data__info__desc__icon" src="@/assets/icons/binoculars.svg" alt="">
        <div class="data__info__desc__value">{{ $t('variable.additional.station.' + staName + '.name') }}</div>
      </div>
    </div>
    <div class="data__info">
      <div class="data__info__label">{{ $t('variable.additional.latitude') | uppercase }}</div>
      <div class="data__info__desc">
        <img class="data__info__desc__icon" src="@/assets/icons/globe.svg" alt="">
        <div class="data__info__desc__value">{{ this.areaData[area].latitude }}°</div>
      </div>
    </div>
    <div class="data__info">
      <div class="data__info__label">{{ $t('variable.additional.longitude') | uppercase }}</div>
      <div class="data__info__desc">
        <img class="data__info__desc__icon" src="@/assets/icons/globe.svg" alt="">
        <div class="data__info__desc__value">{{ this.areaData[area].longitude }}°</div>
      </div>
    </div>
    <div class="data__info">
      <div class="data__info__label">{{ $t('variable.additional.elevation') | uppercase }}</div>
      <div class="data__info__desc">
        <img class="data__info__desc__icon" src="@/assets/icons/elevation.svg" alt="">
        <div class="data__info__desc__value">{{ this.areaData[area].elevation }}m</div>
      </div>
    </div>
  </div>
</template>

<script>
import areaData from '@/data/areaData.json'

export default {
  name: 'weatherStationInfo',
  props: {
    staName: String,
    area: String
  },
  data () {
    return {
      areaData
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
  width: 208px;
  height: 297px;
  background-color: var(--dark_tr);
  padding: 16px;
  border-radius: 20px;
  &__info:not(:last-child) {
    padding-block-end: 16px;
    border-block-end-style: solid;
    border-block-end-color: var(--white);
    border-block-end-width: 1px;
  }
  &__info:not(:first-child) {
    padding-block-start: 16px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &__label {
      color: var(--white);
      font-family: SFRoundedM;
      font-size: 14px;
      margin-block-end: 10px;
    }
    &__desc {
      display: flex;
      flex-direction: row;
      align-items: center;
      &__icon {
        width: 20px;
        height: 20px;
        margin-inline-end: 16px;
      }
      &__value {
        color: var(--white);
        font-family: SFRoundedB;
        font-size: 20px;
      }
    }
  }
}
</style>