<template>
  <div class="chip">
    <div class="chip__info">
      <div class="chip__info__adm">{{ adm }}</div>
      <div class="chip__info__name">{{ admName }}</div>
    </div>
    <div class="chip__data">
      <div class="chip__data__icon">
        <img class="chip__data__icon__weather" src="@/assets/icons/rain2.svg" alt="">
      </div>
      <div class="chip__data__value">
        <div class="chip__data__value__rainfall">400</div>
        <div class="chip__data__value__unit">mm/bulan</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resultChip',
  props: {
    adm: String,
    admName: String
  }
}
</script>

<style lang="scss" scoped>
.chip {
  background-color: var(--light_tr);
  width: fit-content;
  color: var(--white);
  padding: 8px;
  border-radius: 10px;
  backdrop-filter: blur(8px);
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &__adm {
      font-family: SFRoundedR;
      font-size: 10px;
      letter-spacing: 0.1em;
    }
    &__name {
      font-family: SFRoundedSB;
      font-size: 12px;
      letter-spacing: 0.1em;
    }
  }
  &__data {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-block-start: 4px;
    &__icon {
      width: 40px;
      height: 40px;
      background-color: var(--lighter_tr);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      margin-inline-end: 8px;
    }
    &__value {
      display: flex;
      flex-direction: column;
      align-items: center;
      &__rainfall {
        font-family: SFRoundedB;
        font-size: 32px;
        line-height: 28px;
      }
      &__unit {
        font-family: SFRoundedM;
        font-size: 12px;
        line-height: 12px;
      }
    }
  }
}
</style>