<template>
  <div class="data">
    <div class="data__label">PERIODE</div>
    <div class="data__info">
      <img class="data__info__icon" src="@/assets/icons/calendar.svg" alt="">
      <div class="data__info__value">2021-2022</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'halfSizeInformation'
}
</script>

<style lang="scss" scoped>
.data {
  width: 336px;
  height: 52px;
  background-color: var(--darker_tr);
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  &__label {
    display: flex;
    justify-items: flex-start;
    color: var(--white);
    font-family: SFRoundedM;
    font-size: 14px;
    margin-block-end: 8px;
  }
  &__info {
    display: flex;
    flex-direction: row;
    align-items: center;
    &__icon {
      height: 18px;
      margin-inline-end: 16px;
    }
    &__value {
      color: var(--white);
      font-family: SFRoundedB;
      font-size: 24px;
    }
  }
}
</style>