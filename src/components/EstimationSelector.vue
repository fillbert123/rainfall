<template>
  <div class="selector">
    <div class="selector__field" @click="showOption" :style="{ backgroundColor: backgroundCol }">
      <div class="selector__field__value">{{ selectedMethod }}</div>
      <img v-if="!isOptionShowed" class="selector__field__dropup" src="@/assets/icons/chevron.svg" alt="">
      <img v-if="isOptionShowed" class="selector__field__dropdown" src="@/assets/icons/chevron.svg" alt="">
    </div>
    <EstimationOption
      class="selector__option"
      :style="{ display: optionDisplay }"
      @amemiyaSelected="amemiyaSelected"
      @nerloveSelected="nerloveSelected"
      @swarSelected="swarSelected"
      @walhusSelected="walhusSelected">
    </EstimationOption>
  </div>
</template>

<script>
import EstimationOption from './EstimationOption.vue';

export default {
  name: 'estimationSelector',
  props: {
    unlockEstimation: Boolean
  },
  data () {
    return {
      selectedMethod: this.$t('simulation.method.locked'),
      optionDisplay: 'none',
      backgroundCol: 'var(--dark_tr)'
    }
  },
  components: {
    EstimationOption
  },
  computed: {
    isOptionShowed () {
      return this.optionDisplay === 'none' ? false : true
    }
  },
  methods: {
    showOption () {
      if (this.unlockEstimation === true){
        this.optionDisplay = 'block'
      }
    },
    amemiyaSelected () {
      this.selectedMethod = this.$t('simulation.method.amemiya'),
      this.optionDisplay = 'none'
      this.$emit('amemiyaSelected')
    },
    nerloveSelected () {
      this.selectedMethod = this.$t('simulation.method.nerlove'),
      this.optionDisplay = 'none'
      this.$emit('nerloveSelected')
    },
    swarSelected () {
      this.selectedMethod = this.$t('simulation.method.swar'),
      this.optionDisplay = 'none'
      this.$emit('swarSelected')
    },
    walhusSelected () {
      this.selectedMethod = this.$t('simulation.method.walhus'),
      this.optionDisplay = 'none'
      this.$emit('walhusSelected')
    }
  },
  watch: {
    unlockEstimation (newStatus) {
      if (newStatus === false) {
        this.selectedMethod = this.$t('simulation.method.locked'),
        this.backgroundCol = 'var(--dark_tr)'
      }
      else {
        this.selectedMethod = this.$t('simulation.method.choose'),
        this.backgroundCol = 'var(--light_tr)'
        this.selectedMethod = this.$t('simulation.method.walhus')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.selector {
  width: fit-content;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &__field {
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
  &__option {
    position: absolute;
    bottom: 52px;
    backdrop-filter: blur(8px);
  }
}
</style>