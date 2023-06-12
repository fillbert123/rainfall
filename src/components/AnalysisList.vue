<template>
  <div class="data" @click="emitTopic(area)">
    <img :src="require(`@/assets/icons/${type}.svg`)" alt="" class="data__icon">
    <div class="data__text">
      <div class="data__text__tag">{{ this.$t('analysis.' + this.area + '.type') }}</div>
      <div class="data__text__label">{{ this.$t('analysis.' + this.area + '.title') }}</div>
      <div v-if="!isDescEmpty" class="data__text__desc">{{ this.$t('analysis.' + this.area + '.desc') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'analysisList',
  props: {
    area: String,
    type: String
  },
  computed: {
    isDescEmpty () {
      return this.$t('analysis.' + this.area + '.desc').startsWith('analysis')
    }
  },
  methods: {
    emitTopic (area) {
      this.$emit('selected', area)
    }
  },
  filters: {
    uppercase (text) {
      return text.toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.data {
  margin: 0;
  padding: 12px;
  color: var(--white);
  width: 100px;
  height: 100px;
  background-color: var(--light_tr);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  &:hover {
    background-color: var(--dark_tr);
  }
  &__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &__tag {
      font-family: SFRoundedR;
      font-size: 12px;
    }
    &__label {
      font-family: SFRoundedSB;
      font-size: 16px;
      text-align: left;
    }
    &__desc {
      font-family: SFRoundedSB;
      font-size: 12px;
    }
  }
}
</style>