<template>
  <div class="selector">
    <div class="selector__field" @click="showOption = !showOption">
      <div class="selector__field__value">{{ estimationMethod }}</div>
      <img v-if="!showOption" class="selector__field__dropup" src="@/assets/icons/chevron.svg" alt="">
      <img v-if="showOption" class="selector__field__dropdown" src="@/assets/icons/chevron.svg" alt="">
    </div>
    <EstimationOption 
      v-if="showOption"
      @amemiya="amemiyaSelected"
      @nerlove="nerloveSelected"
      @swar="swarSelected"
      @walhus="walhusSelected">
    </EstimationOption>
  </div>
</template>

<script>
import EstimationOption from './EstimationOption.vue'

export default {
  name: 'estimationSelector',
  components: {
    EstimationOption
  },
  data() {
    return {
      showOption: false,
      estimationMethod: 'Pilih metode estimasi'
    }
  },
  methods: {
    amemiyaSelected() {
      this.estimationMethod = 'Metode estimasi Amemiya'
      this.showOption = false
    },
    nerloveSelected() {
      this.estimationMethod = 'Metode estimasi Nerlove'
      this.showOption = false
    },
    swarSelected() {
      this.estimationMethod = 'Metode estimasi Swamy-Arora'
      this.showOption = false
    },
    walhusSelected() {
      this.estimationMethod = 'Metode estimasi Wallace-Hussain'
      this.showOption = false
    }
  }
}
</script>

<style lang="scss" scoped>
.selector {
  height: 256px;
  position: relative;
  width: fit-content;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  &__field {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: var(--light_tr);
    width: 276px;
    height: 24px;
    padding: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    &__value {
      font-family: SFRoundedM;
      font-size: 16px;
    }
    &__dropup {
      width: 16px;
    }
    &__dropdown {
      width: 16px;
      transform: rotate(180deg);
    }
  }
}
</style>