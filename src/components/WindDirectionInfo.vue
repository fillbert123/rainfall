<template>
  <div class="data">
    <div class="data__label">RATA-RATA ARAH ANGIN</div>
    <div class="data__compass">
      <img class="data__compass__point" src="@/assets/graphics/compassPoint.svg" alt="">
      <div class="data__compass__center">345°</div>
    </div>
    <div class="data__value"><div class="data__value__degree">345°</div>Barat Laut</div>
  </div>
</template>

<script>
export default {
  name: 'windDirectionInfo'
}
</script>

<style lang="scss" scoped>
.data {
  width: 208px;
  height: 297px;
  background-color: var(--darker_tr);
  padding: 16px;
  border-radius: 20px;
  &__label {
    color: var(--white);
    font-family: SFRoundedM;
    font-size: 14px;
    margin-block-end: 10px;
    display: flex;
    justify-content: flex-start;
  }
  &__compass {
    width: 208px;
    height: 208px;
    margin-block: 24px;
    background-image: url(@/assets/graphics/compass.png);
    background-size: contain;
    position: relative;
    &__point {
      position: absolute;
      left:0;
      right:0;
      margin-inline:auto;
      top:0;
      bottom:0;
      margin-block:auto;
      transform: rotate(345deg);
    }
    &__center {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      background-color: var(--lighter);
      color: var(--white);
      font-family: SFRoundedSB;
      font-size: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left:0;
      right:0;
      margin-inline:auto;
      top:0;
      bottom:0;
      margin-block:auto;
    }
  }
  &__value {
    color: var(--white);
    font-family: SFRoundedR;
    font-size: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    &__degree {
      font-family: SFRoundedB;
      margin-inline-end: 4px;
    }
  }
}
</style>