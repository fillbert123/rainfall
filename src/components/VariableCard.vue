<template>
  <div class="data">
    <div class="data__upper">
      <div class="data__upper__icon">
        <img class="data__upper__icon__image" :src="require(`@/assets/icons/${variable}.high.svg`)" alt="">
      </div>
      <div class="data__upper__button">
        <div class="data__upper__button__label">Lihat publikasi</div>
        <img class="data__upper__button__icon" src="@/assets/icons/publication.svg" alt="">
      </div>
    </div>
    <div class="data__lower">
      <div class="data__lower__title">{{ this.$t('variable.main.' + variable + '.name') }}</div>
      <div class="data__lower__content">{{ this.$t('variable.main.' + variable + '.desc') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'variableCard',
  props: {
    variable: String
  }
}
</script>

<style lang="scss" scoped>
.data {
  padding: 20px;
  width: 360px;
  height: 260px;
  background-color: var(--light_tr);
  border-radius: 20px;
  &__upper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-block-end: 16px;
    &__icon {
      width: 42px;
      height: 42px;
      background-color: var(--lighter_tr);
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__button {
      padding: 8px;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: var(--white);
      border-radius: 20px;
      &__label {
        margin-inline-end: 8px;
        color: var(--dark);
        font-family: SFRoundedM;
        font-size: 16px;
      }
    }
  }
  &__lower {
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &__title {
      font-family: SFRoundedB;
      font-size: 32px;
      margin-block-end: 12px;
    }
    &__content {
      font-family: SFRoundedR;
      font-size: 16px;
      text-align: start;
    }
  }
}
</style>