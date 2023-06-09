<template>
  <div class="data">
    <div class="data__label">{{ $t('variable.additional.' + label) | uppercase }}</div>
    <div class="data__info">
      <img class="data__info__icon" :src="require(`@/assets/icons/${label}.svg`)">
      <div class="data__info__value">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'halfSizeInfo',
  props: {
    label: String,
    value: String
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
  width: 304px;
  height: 52px;
  background-color: var(--dark_tr);
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