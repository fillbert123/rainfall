<template>
  <div class="page">
    <VariableCard class="page__card"></VariableCard>
    <VariableCard class="page__card"></VariableCard>
    <VariableCard class="page__card"></VariableCard>
  </div>
</template>

<script>
import VariableCard from '@/components/VariableCard.vue';

export default {
  name: 'variablePage',
  components: {
    VariableCard
  }
}
</script>

<style lang="scss" scoped>
.page {
  background-color: var(--dark);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &__card {
    zoom: 80%;
    margin: 18px;
  }
}
</style>