<template>
  <div class="option">
    <div class="option__opt" @click="emitAmemiya">{{ $t('simulation.method.amemiya') }}</div>
    <div class="option__opt" @click="emitNerlove">{{ $t('simulation.method.nerlove') }}</div>
    <div class="option__opt" @click="emitSwar">{{ $t('simulation.method.swar') }}</div>
    <div class="option__opt" @click="emitWalhus">{{ $t('simulation.method.walhus') }}</div>
  </div>
</template>

<script>
export default {
  name: 'estimationOption',
  methods: {
    emitAmemiya () {
      this.$emit('amemiyaSelected')
    },
    emitNerlove () {
      this.$emit('nerloveSelected')
    },
    emitSwar () {
      this.$emit('swarSelected')
    },
    emitWalhus () {
      this.$emit('walhusSelected')
    }
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