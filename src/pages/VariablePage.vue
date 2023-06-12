<template>
  <div class="page">
    <div class="page__variable">
      <VariableCard 
        v-for="variable in variables" 
        :variable="variable"
        :key="variable"
        class="page__variable__card"></VariableCard>
    </div>
  </div>
</template>

<script>
import VariableCard from '@/components/VariableCard.vue';

export default {
  name: 'variablePage',
  data () {
    return {
      variables: {
        rainfall: 'rainfall',
        temperature: 'temperature',
        humidity: 'humidity',
        sunshine: 'sunshine',
        windspeed: 'windspeed'
      }
    }
  },
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
  &__variable {
    width: 1046.4px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    &__card {
      zoom: 80%;
      margin: 18px;
    }
  }
}
</style>