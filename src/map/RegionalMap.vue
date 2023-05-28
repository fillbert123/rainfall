<template>
  <div class="map">
    <img class="map__ntb" src="@/assets/maps/Nusa Tenggara Barat.svg" alt="">
    <img class="map__mgb" src="@/assets/maps/Kab. Manggarai Barat.svg" alt="">
    <img class="map__mgr" src="@/assets/maps/Kab. Manggarai.svg" alt="">
    <img class="map__mgt" src="@/assets/maps/Kab. Manggarai Timur.svg" alt="">
    <img class="map__nga" src="@/assets/maps/Kab. Ngada.svg" alt="">
    <img class="map__nag" src="@/assets/maps/Kab. Nagekeo.svg" alt="">
    <img class="map__end" src="@/assets/maps/Kab. Ende.svg" alt="">
    <img class="map__sik" src="@/assets/maps/Kab. Sikka.svg" alt="">
    <img class="map__flo" src="@/assets/maps/Kab. Flores Timur.svg" alt="">
    <img class="map__sbd" src="@/assets/maps/Kab. Sumba Barat Daya.svg" alt="">
    <img class="map__sbb" src="@/assets/maps/Kab. Sumba Barat.svg" alt="">
    <img class="map__sbg" src="@/assets/maps/Kab. Sumba Tengah.svg" alt="">
    <img class="map__sbt" src="@/assets/maps/Kab. Sumba Timur.svg" alt="">
    <img class="map__sab" src="@/assets/maps/Kab. Sabu Raijua.svg" alt="">
    <img class="map__rot" src="@/assets/maps/Kab. Rote Ndao.svg" alt="">
    <img class="map__kot" src="@/assets/maps/Kota Kupang.svg" alt="">
    <img class="map__kup" src="@/assets/maps/Kab. Kupang.svg" alt="">
    <img class="map__ttu" src="@/assets/maps/Kab. Timor Tengah Utara.svg" alt="">
    <img class="map__tts" src="@/assets/maps/Kab. Timor Tengah Selatan.svg" alt="">
    <img class="map__mal" src="@/assets/maps/Kab. Malaka.svg" alt="">
    <img class="map__bel" src="@/assets/maps/Kab. Belu.svg" alt="">
    <img class="map__lem" src="@/assets/maps/Kab. Lembata.svg" alt="">
    <img class="map__alo" src="@/assets/maps/Kab. Alor.svg" alt="">
    <img class="map__tim" src="@/assets/maps/Timor Timur.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'regionalMap'
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  &>* {
    position: absolute;
  }
  &__ntb {
    left: -114px;
    top: 23.62px;
  }
  &__mgb {
    left: 300.33px;
    top: 51.57px;
  }
  &__mgr {
    left: 431.71px;
    top: 44.62px;
  }
  &__mgt {
    left: 470.38px;
    top: 47.32px;
  }
  &__nga {
    left: 524.42px;
    top: 64.7px;
  }
  &__nag {
    left: 566.63px;
    top: 74.42px;
  }
  &__end {
    left: 615.56px;
    top: 75.7px;
  }
  &__sik {
    left: 700.67px;
    top: 65.42px;
  }
  &__flo {
    left: 805.68px;
    top: 16px;
  }
  &__sbd {
    left: 233.21px;
    top: 223.93px;
  }
  &__sbb {
    left: 260.42px;
    top: 226px;
  }
  &__sbg {
    left: 306.42px;
    top: 220.8px;
  }
  &__sbt {
    left: 346.84px;
    top: 210.33px;
  }
  &__sab {
    left: 638.21px;
    top: 440.99px;
  }
  &__rot {
    left: 847.5px;
    top: 386.99px;
  }
  &__kot {
    left: 951.24px;
    top: 341.48px;
  }
  &__kup {
    left: 943px;
    top: 214.76px;
  }
  &__ttu {
    left: 1034.57px;
    top: 164.55px;
  }
  &__tts {
    left: 1031px;
    top: 236.88px;
  }
  &__mal {
    left: 1120.19px;
    top: 207.38px;
  }
  &__bel {
    left: 1143px;
    top: 156px;
  }
  &__lem {
    left: 899.5px;
    top: 29.62px;

  }
  &__alo {
    left: 1008.99px;
    top: 21.25px;
  }
  &__tim {
    left: 1027.7px;
    top: 53px;
    // filter: invert(72%) sepia(94%) saturate(4919%) hue-rotate(178deg) brightness(96%) contrast(82%);
  }
}
</style>