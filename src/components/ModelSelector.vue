<template>
  <div class="selector">
    <div class="selector__field" @click="showOption">
      <div class="selector__field__value">{{ selectedModel }}</div>
      <img v-if="!isOptionShowed" class="selector__field__dropup" src="@/assets/icons/chevron.svg" alt="">
      <img v-if="isOptionShowed" class="selector__field__dropdown" src="@/assets/icons/chevron.svg" alt="">
    </div>
    <ModelOption 
      class="selector__option" 
      :style="{ display: optionDisplay }"
      @commonSelected="commonSelected"
      @fixedSelected="fixedSelected"
      @randomSelected="randomSelected">
    </ModelOption>
  </div>
</template>

<script>
import ModelOption from './ModelOption.vue';

export default {
  name: 'modelSelector',
  data () {
    return {
      selectedModel: this.$t('simulation.model.common'),
      optionDisplay: 'none'
    }
  },
  components: {
    ModelOption
  },
  computed: {
    isOptionShowed () {
      return this.optionDisplay === 'none' ? false : true
    }
  },
  methods: {
    showOption () {
      this.optionDisplay = 'block'
    },
    commonSelected () {
      this.selectedModel = this.$t('simulation.model.common'),
      this.optionDisplay = 'none'
      this.$emit('lockEstimation')
      this.$emit('commonSelected')
    },
    fixedSelected () {
      this.selectedModel = this.$t('simulation.model.fixed'),
      this.optionDisplay = 'none'
      this.$emit('lockEstimation')
      this.$emit('fixedSelected')
    },
    randomSelected () {
      this.selectedModel = this.$t('simulation.model.random'),
      this.optionDisplay = 'none',
      this.$emit('unlockEstimation')
      this.$emit('randomSelected')
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