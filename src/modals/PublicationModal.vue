<template>
  <div class="modal">
    <div class="modal__upper">
      <div class="modal__upper__icon">
        <img src="@/assets/icons/humidity.high.svg" alt="">
      </div>
      <div class="modal__upper__title">Curah hujan</div>
    </div>
    <div class="modal__lower">
      <div class="modal__lower__publication">
        <div class="modal__lower__publication__left">
          <div class="modal__lower__publication__left__number">
            <img src="@/assets/icons/1.svg" alt="">
          </div>
          <div class="modal__lower__publication__left__info">
            <div class="modal__lower__publication__left__info__title">Principled Missing Data Treatments</div>
            <div class="modal__lower__publication__left__info__author">Kyle M. Lang, Todd D. Little</div>
          </div>
        </div>
        <div class="modal__lower__publication__right">
          <div class="modal__lower__publication__right__label">Baca publikasi</div>
          <img src="@/assets/icons/link.svg" alt="" class="modal__lower__publication__right__icon">
        </div>
      </div>
      <div class="modal__lower__publication">
        <div class="modal__lower__publication__left">
          <div class="modal__lower__publication__left__number">
            <img src="@/assets/icons/2.svg" alt="">
          </div>
          <div class="modal__lower__publication__left__info">
            <div class="modal__lower__publication__left__info__title">Principled Missing Data Treatments</div>
            <div class="modal__lower__publication__left__info__author">Kyle M. Lang, Todd D. Little</div>
          </div>
        </div>
        <div class="modal__lower__publication__right">
          <div class="modal__lower__publication__right__label">Baca publikasi</div>
          <img src="@/assets/icons/link.svg" alt="" class="modal__lower__publication__right__icon">
        </div>
      </div>
      <div class="modal__lower__publication">
        <div class="modal__lower__publication__left">
          <div class="modal__lower__publication__left__number">
            <img src="@/assets/icons/3.svg" alt="">
          </div>
          <div class="modal__lower__publication__left__info">
            <div class="modal__lower__publication__left__info__title">Principled Missing Data Treatments</div>
            <div class="modal__lower__publication__left__info__author">Kyle M. Lang, Todd D. Little</div>
          </div>
        </div>
        <div class="modal__lower__publication__right">
          <div class="modal__lower__publication__right__label">Baca publikasi</div>
          <img src="@/assets/icons/link.svg" alt="" class="modal__lower__publication__right__icon">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'publicationModal'
}
</script>

<style lang="scss" scoped>
.modal {
  width: 750px;
  padding: 40px;
  background-color: var(--light_tr);
  border-radius: 30px;
  &__upper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-block-end: 16px;
    &__icon {
      width: 50px;
      height: 50px;
      border-radius: 20px;
      background-color: var(--lighter_tr);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__title {
      font-family: SFRoundedB;
      font-size: 48px;
      color: var(--white);
      margin-inline-start: 16px;
    }
  }
  &__lower {
    color: var(--white);
    &__publication {
      margin-block-start: 24px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      &__left {
        display: flex;
        flex-direction: row;
        &__number {
          margin-block-start: 4px;
        }
        &__info {
          margin-inline-start: 16px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          &__title {
            font-family: SFRoundedSB;
            font-size: 24px;
          }
          &__author {
            font-family: SFRoundedR;
            font-size: 16px;
          }
        }
      }
      &__right {
        padding: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: var(--white);
        border-radius: 30px;
        height: fit-content;
        &__label {
          margin-inline-end: 8px;
          color: var(--dark);
          font-family: SFRoundedM;
          font-size: 16px;
        }
      }
    }
  }
}
</style>