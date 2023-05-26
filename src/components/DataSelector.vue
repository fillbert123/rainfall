<template>
  <div class="data">
    <div class="data__option">Data mentah</div>
    <div class="data__option">Imputasi PMM</div>
    <div class="data__option">Imputasi regresi</div>
    <div class="data__option">Imputasi stokastik</div>
  </div>
</template>

<script>
export default {
  name: 'dataSelector'
}
</script>

<style lang="scss" scoped>
.data {
  display: flex;
  flex-direction: row;
  background-color: var(--dark_tr);
  width: fit-content;
  border-radius: 25px;
  &__option {
    margin: 5px;
    width: 180px;
    font-family: SFRoundedM;
    font-size: 20px;
    color: var(--white);
    border-radius: 20px;
    padding-block: 8px;
  }
}
</style>