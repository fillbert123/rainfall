<template>
  <div class="modal">
    <div @click="changeLangId" class="modal__option">
      <div class="modal__option__icon">{{ this.$t('lang.id.code') }}</div>
      <div class="modal__option__info">
        <div class="modal__option__info__en">{{ this.$t('lang.id.entrans') }}</div>
        <div class="modal__option__info__id">{{ this.$t('lang.id.idtrans') }}</div>
      </div>
    </div>
    <div @click="changeLangEn" class="modal__option">
      <div class="modal__option__icon">{{ this.$t('lang.en.code') }}</div>
      <div class="modal__option__info">
        <div class="modal__option__info__en">{{ this.$t('lang.en.entrans') }}</div>
        <div class="modal__option__info__id">{{ this.$t('lang.en.idtrans') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'languageModal',
  methods: {
    changeLangId () {
      this.$i18n.locale = 'id'
      this.$emit('showHideLangOpt')
      localStorage.setItem('lang', 'id')
      window.location.reload()
    },
    changeLangEn () {
      this.$i18n.locale = 'en'
      this.$emit('showHideLangOpt')
      localStorage.setItem('lang', 'en')
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  flex-direction: column;
  background-color: var(--light_tr);
  width: 175px;
  border-radius: 20px;
  backdrop-filter: blur(8px);
  &__option {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-inline: 20px;
    padding-block: 12px;
    color: var(--white);
    &:hover {
      background-color: var(--light_tr2);
      border-radius: 20px;
      cursor: pointer;
    }
    &__icon {
      width: 21px;
      font-family: SFRoundedB;
      font-size: 16px;
      margin-inline-end: 12px;
    }
    &__info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &__en {
        font-family: SFRoundedM;
        font-size: 16px;
      }
      &__id {
        font-family: SFRoundedR;
        font-size: 12px;
      }
    }
  }
}
</style>