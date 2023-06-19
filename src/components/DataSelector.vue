<template>
  <div class="data">
    <div @click="emitSelectionRaw" class="data__option">{{ this.$t('data.type.raw') }}</div>
    <div @click="emitSelectionPmm" class="data__option">{{ this.$t('data.type.pmm') }}</div>
    <div @click="emitSelectionDet" class="data__option">{{ this.$t('data.type.det') }}</div>
    <div @click="emitSelectionSto" class="data__option">{{ this.$t('data.type.sto') }}</div>
  </div>
</template>

<script>
export default {
  name: 'dataSelector',
  data () {
    return {
      selectedType: 'raw'
    }
  },
  methods: {
    emitSelectionRaw () {
      this.selectedType = 'raw'
      this.$emit('emitSelectionRaw')
    },
    emitSelectionPmm () {
      this.selectedType = 'pmm'
      this.$emit('emitSelectionPmm')
    },
    emitSelectionDet () {
      this.selectedType = 'det'
      this.$emit('emitSelectionDet')
    },
    emitSelectionSto () {
      this.selectedType = 'sto'
      this.$emit('emitSelectionSto')
    }
  }
}
</script>

<style lang="scss" scoped>
.data {
  display: flex;
  flex-direction: row;
  background-color: var(--dark_tr);
  width: fit-content;
  border-radius: 25px;
  &__option {
    margin: 5px;
    width: 220px;
    font-family: SFRoundedM;
    font-size: 20px;
    color: var(--white);
    border-radius: 20px;
    padding-block: 8px;
    &:hover {
      background-color: var(--dark_tr2);
      border-radius: 25px;
    }
  }
}
</style>