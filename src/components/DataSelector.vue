<template>
  <div class="data">
    <div v-if="this.rawSelected" @click="emitSelectionRaw" class="data__option selected">{{ this.$t('data.type.raw') }}</div>
    <div v-if="!this.rawSelected" @click="emitSelectionRaw" class="data__option">{{ this.$t('data.type.raw') }}</div>
    <div v-if="this.pmmSelected" @click="emitSelectionPmm" class="data__option selected">{{ this.$t('data.type.pmm') }}</div>
    <div v-if="!this.pmmSelected" @click="emitSelectionPmm" class="data__option">{{ this.$t('data.type.pmm') }}</div>
    <div v-if="this.detSelected" @click="emitSelectionDet" class="data__option selected">{{ this.$t('data.type.det') }}</div>
    <div v-if="!this.detSelected" @click="emitSelectionDet" class="data__option">{{ this.$t('data.type.det') }}</div>
    <div v-if="this.stoSelected" @click="emitSelectionSto" class="data__option selected">{{ this.$t('data.type.sto') }}</div>
    <div v-if="!this.stoSelected" @click="emitSelectionSto" class="data__option">{{ this.$t('data.type.sto') }}</div>
  </div>
</template>

<script>
export default {
  name: 'dataSelector',
  data () {
    return {
      selectedType: 'raw',
      rawSelected: true,
      pmmSelected: false,
      detSelected: false,
      stoSelected: false
    }
  },
  methods: {
    unsetAll () {
      this.rawSelected = false
      this.pmmSelected = false
      this.detSelected = false
      this.stoSelected = false
    },
    emitSelectionRaw () {
      this.unsetAll()
      this.rawSelected = true
      this.$emit('emitSelectionRaw')
    },
    emitSelectionPmm () {
      this.unsetAll()
      this.pmmSelected = true
      this.$emit('emitSelectionPmm')
    },
    emitSelectionDet () {
      this.unsetAll()
      this.detSelected = true
      this.$emit('emitSelectionDet')
    },
    emitSelectionSto () {
      this.unsetAll()
      this.stoSelected = true
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
</style>