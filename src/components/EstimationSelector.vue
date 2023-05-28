<template>
  <div class="selector">
    <div class="selector__field" @click="showOption = !showOption">
      <div class="selector__field__value">Pilih metode estimasi</div>
      <img class="selector__field__dropup" src="@/assets/icons/chevron.svg" alt="">
      <!-- <img class="selector__field__dropdown" src="@/assets/icons/chevron.svg" alt=""> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'estimationSelector',
}
</script>

<style lang="scss" scoped>
.selector {
  width: fit-content;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  &__field {
    background-color: var(--light_tr);
    width: 276px;
    height: 24px;
    padding: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    &__value {
      font-family: SFRoundedM;
      font-size: 16px;
    }
    &__dropup {
      width: 16px;
    }
    &__dropdown {
      width: 16px;
      transform: rotate(180deg);
    }
  }
}
</style>