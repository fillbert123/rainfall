<template>
  <div class="map">
    <img class="map__ntb" :style="position.ntb" src="@/assets/maps/Nusa Tenggara Barat.svg" alt="">
    <img class="map__mgb" :style="position.mgb" src="@/assets/maps/Kab. Manggarai Barat.svg" alt="">
    <img class="map__mgr" :style="position.mgr" src="@/assets/maps/Kab. Manggarai.svg" alt="">
    <img class="map__mgt" :style="position.mgt" src="@/assets/maps/Kab. Manggarai Timur.svg" alt="">
    <img class="map__nga" :style="position.nga" src="@/assets/maps/Kab. Ngada.svg" alt="">
    <img class="map__nag" :style="position.nag" src="@/assets/maps/Kab. Nagekeo.svg" alt="">
    <img class="map__end" :style="position.end" src="@/assets/maps/Kab. Ende.svg" alt="">
    <img class="map__sik" :style="position.sik" src="@/assets/maps/Kab. Sikka.svg" alt="">
    <img class="map__flo" :style="position.flo" src="@/assets/maps/Kab. Flores Timur.svg" alt="">
    <img class="map__sbd" :style="position.sbd" src="@/assets/maps/Kab. Sumba Barat Daya.svg" alt="">
    <img class="map__sbb" :style="position.sbb" src="@/assets/maps/Kab. Sumba Barat.svg" alt="">
    <img class="map__sbg" :style="position.sbg" src="@/assets/maps/Kab. Sumba Tengah.svg" alt="">
    <img class="map__sbt" :style="position.sbt" src="@/assets/maps/Kab. Sumba Timur.svg" alt="">
    <img class="map__sab" :style="position.sab" src="@/assets/maps/Kab. Sabu Raijua.svg" alt="">
    <img class="map__rot" :style="position.rot" src="@/assets/maps/Kab. Rote Ndao.svg" alt="">
    <img class="map__kot" :style="position.kot" src="@/assets/maps/Kota Kupang.svg" alt="">
    <img class="map__kup" :style="position.kup" src="@/assets/maps/Kab. Kupang.svg" alt="">
    <img class="map__ttu" :style="position.ttu" src="@/assets/maps/Kab. Timor Tengah Utara.svg" alt="">
    <img class="map__tts" :style="position.tts" src="@/assets/maps/Kab. Timor Tengah Selatan.svg" alt="">
    <img class="map__mal" :style="position.mal" src="@/assets/maps/Kab. Malaka.svg" alt="">
    <img class="map__bel" :style="position.bel" src="@/assets/maps/Kab. Belu.svg" alt="">
    <img class="map__lem" :style="position.lem" src="@/assets/maps/Kab. Lembata.svg" alt="">
    <img class="map__alo" :style="position.alo" src="@/assets/maps/Kab. Alor.svg" alt="">
    <img class="map__tim" :style="position.tim" src="@/assets/maps/Timor Timur.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'regionalMap',
  data () {
    return {
      position: {
        ntb: {left: '-50px', top: '23.62px'},
        mgb: {left: '367.83px', top: '51.57px'},
        mgr: {left: '497.71px', top: '44.62px'},
        mgt: {left: '536.38px', top: '47.32px'},
        nga: {left: '589.42px', top: '64.7px'},
        nag: {left: '630.63px', top: '74.42px'},
        end: {left: '679.56px', top: '75.7px'},
        sik: {left: '764.67px', top: '65.42px'},
        flo: {left: '869.68px', top: '16px'},
        sbd: {left: '297.21px', top: '223.93px'},
        sbb: {left: '324.92px', top: '225.5px'},
        sbg: {left: '370.42px', top: '220.8px'},
        sbt: {left: '410.84px', top: '210.33px'},
        sab: {left: '702.21px', top: '440.99px'},
        rot: {left: '911.5px', top: '386.99px'},
        kot: {left: '1017px', top: '341.08px'},
        kup: {left: '1009px', top: '214.76px'},
        ttu: {left: '1099.07px', top: '164.55px'},
        tts: {left: '1095px', top: '236.88px'},
        mal: {left: '1184.69px', top: '207.38px'},
        bel: {left: '1207.2px', top: '156px'},
        lem: {left: '953.5px', top: '29.62px'},
        alo: {left: '1072.99px', top: '21.25px'},
        tim: {left: '1091.7px', top: '53px'}
      }
    }
  }
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
  &__tim {
    left: 1141.7px;
    top: 53px;
    // filter: invert(72%) sepia(94%) saturate(4919%) hue-rotate(178deg) brightness(96%) contrast(82%);
  }
}
</style>