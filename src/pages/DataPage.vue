<template>
  <div class="page">
    <div class="page__upper">
      <RegionalMap class="page__upper__map"></RegionalMap>
      <LocationPopup
        v-for="area in areas"
        class="page__upper__pin"
        @popupHidden="hidePopup(area.key)"
        @popupShow="showPopup(area.key)"
        @showAreaModal="showAreaModal(area.key, area.admArea)"
        :staName="area.staName"
        :admArea="area.admArea"
        :admName="area.admName"
        :display="area.display"
        :style="{ top: area.top + 'px', left: area.left + 'px' }"
        :key="area.key">
      </LocationPopup>
      <div
        v-for="other in geographicalLocation"
        class="page__upper__other"
        :style="{ top: other.top + 'px', left: other.left + 'px' }"
        :key="other.key">
        <p v-html="other.value"></p>
      </div>
    </div>
    <div class="page__lower">
      <div 
        v-for="area in areas"
        :key="area.key"
        @click="showPopup(area.key)"
        class="page__lower__area">
        <div class="page__lower__area__icon">
          <img class="page__lower__area__icon__img" :src="require(`@/assets/emblem/${area.key}.png`)" alt="">
        </div>
        <div class="page__lower__area__label">{{ $t('administrative.admName.' + area.key) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import RegionalMap from '@/map/RegionalMap.vue';
import LocationPopup from '@/components/LocationPopup.vue';

export default {
  name: 'dataPage',
  data () {
    return {
      areas: {
        alo: {
          key: 'alo',
          top: 159,
          left: 1050,
          staName: this.$t(`variable.additional.station.sma.full`),
          admArea: this.$t(`administrative.admArea.district`),
          admName: this.$t(`administrative.admName.alo`),
          display: 'none'
        },
        flo: {
          key: 'flo',
          top: 184,
          left: 815,
          staName: this.$t(`variable.additional.station.sga.full`),
          admArea: this.$t(`administrative.admArea.district`),
          admName: this.$t(`administrative.admName.flo`),
          display: 'none'
        },
        rot: {
          key: 'rot',
          top: 529,
          left: 850,
          staName: this.$t(`variable.additional.station.sdc.full`),
          admArea: this.$t(`administrative.admArea.district`),
          admName: this.$t(`administrative.admName.rot`),
          display: 'none'
        },
        sab: {
          key: 'sab',
          top: 549,
          left: 665,
          staName: this.$t(`variable.additional.station.sta.full`),
          admArea: this.$t(`administrative.admArea.district`),
          admName: this.$t(`administrative.admName.sab`),
          display: 'none'
        },
        mgr: {
          key: 'mgr',
          top: 219,
          left: 470,
          staName: this.$t(`variable.additional.station.sfs.full`),
          admArea: this.$t(`administrative.admArea.district`),
          admName: this.$t(`administrative.admName.mgr`),
          display: 'none'
        },
        mgb: {
          key: 'mgb',
          top: 214,
          left: 390,
          staName: this.$t(`variable.additional.station.sko.full`),
          admArea: this.$t(`administrative.admArea.district`),
          admName: this.$t(`administrative.admName.mgb`),
          display: 'none'
        },
        sik: {
          key: 'sik',
          top: 239,
          left: 730,
          staName: this.$t(`variable.additional.station.sfx.full`),
          admArea: this.$t(`administrative.admArea.district`),
          admName: this.$t(`administrative.admName.sik`),
          display: 'none'
        },
        sbt: {
          key: 'sbt',
          top: 389,
          left: 440,
          staName: this.$t(`variable.additional.station.smk.full`),
          admArea: this.$t(`administrative.admArea.district`),
          admName: this.$t(`administrative.admName.sbt`),
          display: 'none'
        },
        kot: {
          key: 'kot',
          top: 449,
          left: 920,
          staName: this.$t(`variable.additional.station.sel.full`),
          admArea: this.$t(`administrative.admArea.city`),
          admName: this.$t(`administrative.admName.kup`),
          display: 'none'
        }
      },
      geographicalLocation: {
        ntb: {
          key: 'ntb',
          value: this.$t('administrative.other.ntb'),
          top: 150,
          left: 30
        },
        tim: {
          key: 'tim',
          value: this.$t('administrative.other.tim'),
          top: 185,
          left: 1200
        },
        fls: {
          key: 'fls',
          value: this.$t('administrative.other.fls'),
          top: 50,
          left: 250
        },
        bas: {
          key: 'bas',
          value: this.$t('administrative.other.bas'),
          top: 50,
          left: 1150
        },
        sas: {
          key: 'sas',
          value: this.$t('administrative.other.sas'),
          top: 320,
          left: 670
        },
        tis: {
          key: 'tis',
          value: this.$t('administrative.other.tis'),
          top: 410,
          left: 1150
        },
        ino: {
          key: 'ino',
          value: this.$t('administrative.other.ino'),
          top: 460,
          left: 100
        },
      },
      popupShowed: false,
      areaModalShowed: false,
      selectedArea: null,
      selectedAdmArea: null,
    }
  },
  components: {
    RegionalMap,
    LocationPopup,
  },
  created () {
    this.marginLeft = (1440 - window.innerWidth)/2
    for (let i in this.areas) {
      this.areas[i].left = this.areas[i].left - this.marginLeft - this.countWindowAdditionalMargin
    }
    for (let i in this.geographicalLocation) {
      this.geographicalLocation[i].left = this.geographicalLocation[i].left - this.marginLeft - this.countWindowAdditionalMargin
    }
  },
  computed: {
    countWindowAdditionalMargin () {
      return (15 / 240 * (1440 - window.innerWidth))
    }
  },
  methods: {
    hidePopup (location) {
      this.popupShowed = false
      this.areas[location].display = 'none'
    },
    showPopup (location) {
      this.hideAllPopup()
      this.popupShowed = true
      this.areas[location].display = 'block'
    },
    hideAllPopup () {
      for (let i in this.areas){
        this.areas[i].display = 'none'
      }
    },
    showAreaModal (location, admArea) {
      this.hideAllPopup()
      this.$emit('setSelectedAdmArea', admArea)
      this.$emit('showAreaModal', location)
    },
    hideAreaModal () {
      this.areaModalShowed = false
      this.$emit('hideAreaModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  background-color: var(--dark);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  &__upper {
    height: 460px;
    padding-block-start: 150px;
    position: relative;
    &__map {
      zoom: 90%;
      position: absolute;
    }
    &__pin {
      position: absolute;
      z-index: 1;
    }
    &__other {
      position: absolute;
      color: var(--lighter_tr2);
      font-family: SFRoundedSB;
      font-size: 32px;
      text-align: center;
      letter-spacing: 0.35em;
      font-variant: all-small-caps;
    }
  }
  &__lower {
    margin-block-start: 240x;
    padding-inline: 48px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    &__area {
      margin: 8px;
      width: 200px;
      border-radius: 12px;
      padding: 8px;
      background-color: var(--light_tr);
      display: flex;
      flex-direction: row;
      align-items: center;
      &:hover {
        background-color: var(--light_tr2);
      }
      &__icon {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        background-color: var(--dark_tr);
        margin-inline-end: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        &__img {
          width: 20px;
        }
      }
      &__label {
        color: var(--white);
        font-family: SFRoundedSB;
        font-size: 16px;
      }
    }
  }
}
</style>