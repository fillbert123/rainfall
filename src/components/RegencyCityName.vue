<template>
  <div class="data">
    <div class="data__icon">
      <img src="" alt="">
    </div>
    <div class="data__info">
      <div v-if="!isLanguageEnglish" class="data__info__type">{{ admArea }}</div>
      <div class="data__info__name">{{ $t('administrative.admName.' + area) }}</div>
      <div v-if="isLanguageEnglish" class="data__info__type">{{ admArea }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'regencyCityName',
  props: {
    area: String,
    admArea: String
  },
  computed: {
    isLanguageEnglish () {
      return this.$i18n.locale === 'en'
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
  width: 480px;
  height: 100px;
  display: flex;
  flex-direction: row;
  &__icon {
    width: 100px;
    height: 100px;
    background-color: var(--dark_tr);
    border-radius: 20px;
    margin-inline-end: 20px;
  }
  &__info {
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &__type {
      font-family: SFRoundedR;
      font-size: 36px;
      font-variant: all-small-caps;
    }
    &__name {
      font-family: SFRoundedB;
      font-size: 48px;
    }
  }
}
</style>