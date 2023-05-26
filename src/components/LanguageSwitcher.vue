<template>
  <div class="button">
    <img src="@/assets/icons/language.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'languageSwitcher'
}
</script>

<style lang="scss" scoped>
.button {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: var(--light_tr);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>