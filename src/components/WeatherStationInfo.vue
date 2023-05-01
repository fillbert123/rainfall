<template>
  <div class="data">
    <div class="data__info">
      <div class="data__info__label">STASIUN METEOROLOGI</div>
      <div class="data__info__desc">
        <img class="data__info__desc__icon" src="@/assets/icons/binoculars.svg" alt="">
        <div class="data__info__desc__value">Komodo</div>
      </div>
    </div>
    <div class="data__info">
      <div class="data__info__label">GARIS LINTANG</div>
      <div class="data__info__desc">
        <img class="data__info__desc__icon" src="@/assets/icons/globe.svg" alt="">
        <div class="data__info__desc__value">-10.76662°</div>
      </div>
    </div>
    <div class="data__info">
      <div class="data__info__label">GARIS BUJUR</div>
      <div class="data__info__desc">
        <img class="data__info__desc__icon" src="@/assets/icons/globe.svg" alt="">
        <div class="data__info__desc__value">123.07395°</div>
      </div>
    </div>
    <div class="data__info">
      <div class="data__info__label">ELEVASI</div>
      <div class="data__info__desc">
        <img class="data__info__desc__icon" src="@/assets/icons/elevation.svg" alt="">
        <div class="data__info__desc__value">222m</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weatherStationInfo'
}
</script>

<style lang="scss" scoped>
.data {
  width: 208px;
  height: 297px;
  background-color: var(--darker_tr);
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