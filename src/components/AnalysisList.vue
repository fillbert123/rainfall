<template>
  <div class="data">
    <div class="data__list">
      <img src="@/assets/icons/imputation.svg" alt="" class="data__list__icon">
      <div class="data__list__text">
        <div class="data__list__text__tag">Imputation</div>
        <div class="data__list__text__label">Deterministic Regression Imputation</div>
      </div>
    </div>
    <div class="data__list">
      <img src="@/assets/icons/model.svg" alt="" class="data__list__icon">
      <div class="data__list__text">
        <div class="data__list__text__tag">Model</div>
        <div class="data__list__text__label">Random Effect Model</div>
        <div class="data__list__text__desc">Wallace-Hussain</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'analysisList'
}
</script>

<style lang="scss" scoped>
.data {
  padding-inline-end: 12px;
  padding-block-end: 12px;
  width: fit-content;
  border-radius: 24px;
  background-color: var(--light_tr);
  display: flex;
  flex-direction: row;
  &__list {
    margin-inline-start: 12px;
    margin-block-start: 12px;
    padding: 12px;
    color: var(--white);
    width: 100px;
    height: 100px;
    background-color: var(--light_tr);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &__tag {
        font-family: SFRoundedR;
        font-size: 12px;
      }
      &__label {
        font-family: SFRoundedSB;
        font-size: 16px;
        text-align: left;
      }
      &__desc {
        font-family: SFRoundedSB;
        font-size: 12px;
      }
    }
  }
}
</style>