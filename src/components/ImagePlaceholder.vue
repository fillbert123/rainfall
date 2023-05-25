<template>
  <div class="data">
    <img class="data__image" src="@/images/Manggarai Barat.png" alt="">
    <div class="data__info">
      <div class="data__info__name">Taman Nasional Komodo, Kabupaten Manggarai Barat</div>
      <div class="data__info__credit">Gambar oleh Ebed de Rosary dari Mongabay</div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'imagePlaceholder'
}
</script>

<style lang="scss" scoped>
.data {
  position: relative;
  width: 500px;
  height: 375px;
  &__image {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 500px;
    height: 375px;
    border-radius: 20px;
  }
  &__info {
    position: absolute;
    margin-inline: 16px;
    margin-block-end: 16px;
    bottom: 0px;
    left: 0px;
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    &__name {
      font-family: SFRoundedB;
      font-size: 16px;
    }
    &__credit {
      font-family: SFRoundedR;
      font-size: 12px;
    }
  }
}
</style>