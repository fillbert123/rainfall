<template>
  <div class="option">
    <div class="option__opt" @click="emitCommon">{{ $t('simulation.model.common') }}</div>
    <div class="option__opt" @click="emitFixed">{{ $t('simulation.model.fixed') }}</div>
    <div class="option__opt" @click="emitRandom">{{ $t('simulation.model.random') }}</div>
  </div>
</template>

<script>
export default {
  name: 'modelOption',
  methods: {
    emitCommon () {
      this.$emit('commonSelected')
    },
    emitFixed () {
      this.$emit('fixedSelected')
    },
    emitRandom () {
      this.$emit('randomSelected')
    }
  },
  directive: {

  }
}
</script>

<style lang="scss" scoped>
.option {
  width: fit-content;
  background-color: var(--light_tr);
  border-radius: 20px;
  &__opt {
    width: 288px;
    height: 50px;
    font-family: SFRoundedM;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    padding-inline-start: 12px;
    &:hover {
      background-color: var(--dark_tr);
      border-radius: 20px;
    }
  }
}
</style>