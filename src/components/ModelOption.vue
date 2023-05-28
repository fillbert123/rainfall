<template>
  <div class="option">
    <div class="option__opt" @click="emitCommon">Model efek umum</div>
    <div class="option__opt" @click="emitFixed">Model efek tetap</div>
    <div class="option__opt" @click="emitRandom">Model efek acak</div>
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
  }
}
</script>

<style lang="scss" scoped>
.option {
  position: absolute;
  left: 0;
  top: 0;
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
  }
}
</style>