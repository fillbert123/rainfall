<template>
  <div class="option">
    <div class="option__opt" @click="$emit('amemiya')">Metode estimasi Amemiya</div>
    <div class="option__opt" @click="$emit('nerlove')">Metode estimasi Nerlove</div>
    <div class="option__opt" @click="$emit('swar')">Metode estimasi Swamy-Arora</div>
    <div class="option__opt" @click="$emit('walhus')">Metode estimasi Wallace-Hussain</div>
  </div>
</template>

<script>
export default {
  name: 'estimationOption'
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