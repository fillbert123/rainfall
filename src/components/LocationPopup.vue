<template>
  <div class="data">
    <div class="data__icon">
      <img src="@/assets/icons/mappin.svg" alt="" @click="showHideInfo">
    </div>
    <div 
      class="data__right"
      :style="{ display: display }">
      <div class="data__right__info">
        <div class="data__right__info__adm">{{ staName | uppercase }}</div>
        <div v-if="!isLanguageEnglish" class="data__right__info__name">{{ admArea | uppercase }} {{ admName | uppercase }}</div>
        <div v-if="isLanguageEnglish" class="data__right__info__name">{{ admName | uppercase }} {{ admArea | uppercase }}</div>
      </div>
      <div class="data__right__button" @click="showAreaModal">
        <div class="data__right__button__label">{{ this.$t('data.see_detail') }}</div>
        <img class="data__right__button__icon" src="@/assets/icons/forward.svg" alt="">
      </div>
      <div class="data__right__close">
        <img src="@/assets/icons/close.svg" alt="" @click="showHideInfo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'locationPopup',
  props: {
    staName: String,
    admArea: String,
    admName: String,
    display: String
  },
  computed: {
    isLanguageEnglish () {
      return this.$i18n.locale === 'en'
    }
  },
  methods: {
    showHideInfo () {
      if (this.display === 'block') {
        this.$emit('popupHidden')
      }
      else {
        this.$emit('popupShow')
      }
    },
    showAreaModal () {
      this.$emit('showAreaModal')
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
  display: flex;
  flex-direction: row;
  &__icon {
    margin-block-start: 4px;
    margin-inline: 8px;
  }
  &__right {
    padding: 8px;
    width: 189px;
    background-color: var(--darker_tr);
    border-radius: 10px;
    position: relative;
    backdrop-filter: blur(8px);
    &__info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: var(--white);
      margin-block-end: 14px;
      &__adm {
        font-family: SFRoundedSB;
        font-size: 12px;
      }
      &__name {
        font-family: SFRoundedR;
        font-size: 10px;
      }
    }
    &__button {
      height: 28px;
      background-color: var(--white);
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: var(--white_tr);
      }
      &__label {
        font-family: SFRoundedSB;
        font-size: 12px;
        margin-inline-end: 4px;
      }
      &__icon {
        height: 14px;
      }
    }
    &__close {
      position: absolute;
      top: -8px;
      right: -8px;
    }
  }
}
</style>