<template>
  <div class="map">
    <img class="map__ntb" :style="{ left: position.ntb.left + 'px', top: position.ntb.top + 'px' }" src="@/assets/maps/Nusa Tenggara Barat.svg" alt="">
    <img class="map__mgb" :style="{ left: position.mgb.left + 'px', top: position.mgb.top + 'px' }" src="@/assets/maps/Kab. Manggarai Barat.svg" alt="">
    <img class="map__mgr" :style="{ left: position.mgr.left + 'px', top: position.mgr.top + 'px' }" src="@/assets/maps/Kab. Manggarai.svg" alt="">
    <img class="map__mgt" :style="{ left: position.mgt.left + 'px', top: position.mgt.top + 'px' }" src="@/assets/maps/Kab. Manggarai Timur.svg" alt="">
    <img class="map__nga" :style="{ left: position.nga.left + 'px', top: position.nga.top + 'px' }" src="@/assets/maps/Kab. Ngada.svg" alt="">
    <img class="map__nag" :style="{ left: position.nag.left + 'px', top: position.nag.top + 'px' }" src="@/assets/maps/Kab. Nagekeo.svg" alt="">
    <img class="map__end" :style="{ left: position.end.left + 'px', top: position.end.top + 'px' }" src="@/assets/maps/Kab. Ende.svg" alt="">
    <img class="map__sik" :style="{ left: position.sik.left + 'px', top: position.sik.top + 'px' }" src="@/assets/maps/Kab. Sikka.svg" alt="">
    <img class="map__flo" :style="{ left: position.flo.left + 'px', top: position.flo.top + 'px' }" src="@/assets/maps/Kab. Flores Timur.svg" alt="">
    <img class="map__sbd" :style="{ left: position.sbd.left + 'px', top: position.sbd.top + 'px' }" src="@/assets/maps/Kab. Sumba Barat Daya.svg" alt="">
    <img class="map__sbb" :style="{ left: position.sbb.left + 'px', top: position.sbb.top + 'px' }" src="@/assets/maps/Kab. Sumba Barat.svg" alt="">
    <img class="map__sbg" :style="{ left: position.sbg.left + 'px', top: position.sbg.top + 'px' }" src="@/assets/maps/Kab. Sumba Tengah.svg" alt="">
    <img class="map__sbt" :style="{ left: position.sbt.left + 'px', top: position.sbt.top + 'px' }" src="@/assets/maps/Kab. Sumba Timur.svg" alt="">
    <img class="map__sab" :style="{ left: position.sab.left + 'px', top: position.sab.top + 'px' }" src="@/assets/maps/Kab. Sabu Raijua.svg" alt="">
    <img class="map__rot" :style="{ left: position.rot.left + 'px', top: position.rot.top + 'px' }" src="@/assets/maps/Kab. Rote Ndao.svg" alt="">
    <img class="map__kot" :style="{ left: position.kot.left + 'px', top: position.kot.top + 'px' }" src="@/assets/maps/Kota Kupang.svg" alt="">
    <img class="map__kup" :style="{ left: position.kup.left + 'px', top: position.kup.top + 'px' }" src="@/assets/maps/Kab. Kupang.svg" alt="">
    <img class="map__ttu" :style="{ left: position.ttu.left + 'px', top: position.ttu.top + 'px' }" src="@/assets/maps/Kab. Timor Tengah Utara.svg" alt="">
    <img class="map__tts" :style="{ left: position.tts.left + 'px', top: position.tts.top + 'px' }" src="@/assets/maps/Kab. Timor Tengah Selatan.svg" alt="">
    <img class="map__mal" :style="{ left: position.mal.left + 'px', top: position.mal.top + 'px' }" src="@/assets/maps/Kab. Malaka.svg" alt="">
    <img class="map__bel" :style="{ left: position.bel.left + 'px', top: position.bel.top + 'px' }" src="@/assets/maps/Kab. Belu.svg" alt="">
    <img class="map__lem" :style="{ left: position.lem.left + 'px', top: position.lem.top + 'px' }" src="@/assets/maps/Kab. Lembata.svg" alt="">
    <img class="map__alo" :style="{ left: position.alo.left + 'px', top: position.alo.top + 'px' }" src="@/assets/maps/Kab. Alor.svg" alt="">
    <img class="map__tim" :style="{ left: position.tim.left + 'px', top: position.tim.top + 'px' }" src="@/assets/maps/Timor Timur.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'regionalMap',
  data () {
    return {
      position: {
        ntb: {left: -50, top: 23.62},
        mgb: {left: 367.83, top: 51.57},
        mgr: {left: 497.71, top: 44.62},
        mgt: {left: 536.38, top: 47.32},
        nga: {left: 589.42, top: 64.7},
        nag: {left: 630.63, top: 74.42},
        end: {left: 679.56, top: 75.7},
        sik: {left: 764.67, top: 65.42},
        flo: {left: 869.68, top: 16},
        sbd: {left: 297.21, top: 223.93},
        sbb: {left: 324.92, top: 225.5},
        sbg: {left: 370.42, top: 220.8},
        sbt: {left: 410.84, top: 210.33},
        sab: {left: 702.21, top: 440.99},
        rot: {left: 911.5, top: 386.99},
        kot: {left: 1017, top: 341.08},
        kup: {left: 1009, top: 214.76},
        ttu: {left: 1099.07, top: 164.55},
        tts: {left: 1095, top: 236.88},
        mal: {left: 1184.69, top: 207.38},
        bel: {left: 1207.2, top: 156},
        lem: {left: 953.5, top: 29.62},
        alo: {left: 1072.99, top: 21.25},
        tim: {left: 1091.7, top: 53}
      }
    }
  },
  created () {
    this.marginLeft = (1440 - window.innerWidth)/2
    this.position.ntb.left = this.position.ntb.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.mgb.left = this.position.mgb.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.mgr.left = this.position.mgr.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.mgt.left = this.position.mgt.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.nga.left = this.position.nga.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.nag.left = this.position.nag.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.end.left = this.position.end.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.sik.left = this.position.sik.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.flo.left = this.position.flo.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.sbd.left = this.position.sbd.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.sbb.left = this.position.sbb.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.sbg.left = this.position.sbg.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.sbt.left = this.position.sbt.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.sab.left = this.position.sab.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.rot.left = this.position.rot.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.kot.left = this.position.kot.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.kup.left = this.position.kup.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.ttu.left = this.position.ttu.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.tts.left = this.position.tts.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.mal.left = this.position.mal.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.bel.left = this.position.bel.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.lem.left = this.position.lem.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.alo.left = this.position.alo.left - this.marginLeft - this.countWindowAdditionalMargin
    this.position.tim.left = this.position.tim.left - this.marginLeft - this.countWindowAdditionalMargin
  },
  computed: {
    countWindowAdditionalMargin () {
      return (30 / 240 * (1440 - window.innerWidth))
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
    // filter: invert(72%) sepia(94%) saturate(4919%) hue-rotate(178deg) brightness(96%) contrast(82%);
  }
}
</style>