<template>
  <div class="navbar">
    <div class="navbar__menu">
      <img class="navbar__menu__icon" src="@/assets/icons/home.svg" alt="">
      <div class="navbar__menu__label">Utama</div>
    </div>
    <div class="navbar__menu">
      <img class="navbar__menu__icon" src="@/assets/icons/rain2.svg" alt="">
      <div class="navbar__menu__label">Variabel</div>
    </div>
    <div class="navbar__menu">
      <img class="navbar__menu__icon" src="@/assets/icons/data.svg" alt="">
      <div class="navbar__menu__label">Data</div>
    </div>
    <div class="navbar__menu">
      <img class="navbar__menu__icon" src="@/assets/icons/analysis.svg" alt="">
      <div class="navbar__menu__label">Analisis</div>
    </div>
    <div class="navbar__menu">
      <img class="navbar__menu__icon" src="@/assets/icons/simulation.svg" alt="">
      <div class="navbar__menu__label">Simulasi</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigationBar'
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  background-color: var(--light_tr);
  border-radius: 50px;
  padding: 4px;
  width: fit-content;
  &__menu:not(:last-child) {
    margin-inline-end: 20px;
  }
  &__menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-inline: 20px;
    padding-block: 12px;
    border-radius: 25px;
    &__icon {
      margin-inline-end: 10px;
    }
    &__label {
      font-family: SFRoundedR;
      font-size: 16px;
      color: var(--white);
    }
  }
}
</style>