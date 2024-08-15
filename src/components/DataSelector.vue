<template>
  <div class="data">
    <div @click="emitSelectionRaw" class="data__option" :class="{'active': isRawActive}">{{ this.$t('data.type.raw') }}</div>
    <div @click="emitSelectionPmm" class="data__option" :class="{'active': isPmmActive}">{{ this.$t('data.type.pmm') }}</div>
    <div @click="emitSelectionDet" class="data__option" :class="{'active': isDetActive}">{{ this.$t('data.type.det') }}</div>
    <div @click="emitSelectionSto" class="data__option" :class="{'active': isstoActive}">{{ this.$t('data.type.sto') }}</div>
  </div>
</template>

<script>
export default {
  name: 'dataSelector',
  data () {
    return {
      selectedType: 'raw',
      isRawActive: true,
      isPmmActive: false,
      isDetActive: false,
      isstoActive: false
    }
  },
  methods: {
    emitSelectionRaw () {
      this.selectedType = 'raw'
      this.isRawActive = true
      this.isPmmActive = false
      this.isDetActive = false
      this.isstoActive = false
      this.$emit('emitSelectionRaw')
    },
    emitSelectionPmm () {
      this.selectedType = 'pmm'
      this.isRawActive = false
      this.isPmmActive = true
      this.isDetActive = false
      this.isstoActive = false
      this.$emit('emitSelectionPmm')
    },
    emitSelectionDet () {
      this.selectedType = 'det'
      this.isRawActive = false
      this.isPmmActive = false
      this.isDetActive = true
      this.isstoActive = false
      this.$emit('emitSelectionDet')
    },
    emitSelectionSto () {
      this.selectedType = 'sto'
      this.isRawActive = false
      this.isPmmActive = false
      this.isDetActive = false
      this.isstoActive = true
      this.$emit('emitSelectionSto')
    },
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
      background-color: var(--darker_tr);
      border-radius: 25px;
      cursor: pointer;
    }
  }
}

.active {
  background-color: var(--darker_tr);
}
</style>