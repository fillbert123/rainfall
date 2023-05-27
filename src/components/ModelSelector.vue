<template>
  <div class="selector">
    <div class="selector__field" @click="showOption = !showOption">
      <div class="selector__field__value">{{ model }}</div>
      <img v-if="!showOption" class="selector__field__dropup" src="@/assets/icons/chevron.svg" alt="">
      <img v-if="showOption" class="selector__field__dropdown" src="@/assets/icons/chevron.svg" alt="">
    </div>
    <ModelOption 
      v-if="showOption"
      @com="comSelected"
      @fix="fixSelected"
      @ran="ranSelected">
    </ModelOption>
  </div>
</template>

<script>
import ModelOption from './ModelOption.vue';

export default {
  name: 'modelSelector',
  components: {
    ModelOption
  },
  data() {
    return {
      showOption: false,
      model: 'Pilih model'
    }
  },
  methods: {
    comSelected() {
      this.model = 'Model efek umum'
      this.showOption = false
    },
    fixSelected() {
      this.model = 'Model efek tetap'
      this.showOption = false
    },
    ranSelected() {
      this.model = 'Model efek acak'
      this.showOption = false
    }
  }
}
</script>

<style lang="scss" scoped>
.selector {
  height: 206px;
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