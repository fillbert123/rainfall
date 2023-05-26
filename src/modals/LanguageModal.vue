<template>
  <div class="modal">
    <div class="modal__option">
      <div class="modal__option__icon">ID</div>
      <div class="modal__option__info">
        <div class="modal__option__info__en">Indonesian</div>
        <div class="modal__option__info__id">Bahasa Indonesia</div>
      </div>
    </div>
    <div class="modal__option">
      <div class="modal__option__icon">EN</div>
      <div class="modal__option__info">
        <div class="modal__option__info__en">English</div>
        <div class="modal__option__info__id">Bahasa Inggris</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'languageModal'
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  flex-direction: column;
  background-color: var(--light_tr);
  width: 175px;
  border-radius: 20px;
  &__option {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-inline: 20px;
    padding-block: 12px;
    color: var(--white);
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