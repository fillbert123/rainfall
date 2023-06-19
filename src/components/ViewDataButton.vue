<template>
  <div @click="emitShowData" class="button">
    <div class="button__text">{{ $t('data.view_button') }}</div>
    <img class="button__icon" src="@/assets/icons/forward.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'viewDataButton',
  methods: {
    emitShowData () {
      this.$emit('emitShowData')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: fit-content;
  padding-inline: 16px;
  border-radius: 20px;
  &:hover {
    background-color: var(--white_tr);
  }
  &__text {
    font-family: SFRoundedM;
    font-size: 20px;
    margin-inline-end: 10px;
    color: var(--darker);
  }
  &__icon {
    width: 20px;
    height: 20px;
  }
}
</style>