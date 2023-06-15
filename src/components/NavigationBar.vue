<template>
  <div class="navbar">
    <div class="navbar__menu" @click="goToSelected('main')">
      <img class="navbar__menu__icon" src="@/assets/icons/home.svg" alt="">
      <div class="navbar__menu__label">{{ this.$t('navbar.main') }}</div>
    </div>
    <div class="navbar__menu" @click="goToSelected('variable')">
      <img class="navbar__menu__icon" src="@/assets/icons/rain2.svg" alt="">
      <div class="navbar__menu__label">{{ this.$t('navbar.variable') }}</div>
    </div>
    <div class="navbar__menu" @click="goToSelected('data')">
      <img class="navbar__menu__icon" src="@/assets/icons/data.svg" alt="">
      <div class="navbar__menu__label">{{ this.$t('navbar.data') }}</div>
    </div>
    <div class="navbar__menu" @click="goToSelected('analysis')">
      <img class="navbar__menu__icon" src="@/assets/icons/analysis.svg" alt="">
      <div class="navbar__menu__label">{{ this.$t('navbar.analysis') }}</div>
    </div>
    <div class="navbar__menu" @click="goToSelected('simulation')">
      <img class="navbar__menu__icon" src="@/assets/icons/simulation.svg" alt="">
      <div class="navbar__menu__label">{{ this.$t('navbar.simulation') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigationBar',
  methods: {
    goToSelected (id) {
      this.$emit('goToSelected', id)
    }
  }
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
  backdrop-filter: blur(8px);
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
    &:hover {
      background-color: var(--light_tr2);
      border-radius: 50px;
    }
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