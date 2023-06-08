<template>
  <div class="page">
    <div class="page__upper">
      <RegionalMap class="page__upper__map"></RegionalMap>
      <LocationPopup
        v-for="area in areas"
        class="page__upper__pin"
        @popupHidden="hidePopup(area.key)"
        @popupShow="showPopup(area.key)"
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
      <div>{{ popupShowed }}</div>
      <div>{{ areas.alo.display }}</div>
      <div>{{ areas.mgr.display }}</div>
      <div>d</div>
      <div>e</div>
      <div>f</div>
      <div>g</div>
      <div>h</div>
      <div>i</div>
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
          left: 830,
          staName: this.$t(`variable.additional.station.sga.full`),
          admArea: this.$t(`administrative.admArea.district`),
          admName: this.$t(`administrative.admName.flo`),
          display: 'none'
        },
        rot: {
          key: 'rot',
          top: 539,
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
          top: 229,
          left: 480,
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
          top: 394,
          left: 450,
          staName: this.$t(`variable.additional.station.smk.full`),
          admArea: this.$t(`administrative.admArea.district`),
          admName: this.$t(`administrative.admName.sbt`),
          display: 'none'
        },
        kot: {
          key: 'kot',
          top: 464,
          left: 930,
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
      popupShowed: false
    }
  },
  components: {
    RegionalMap,
    LocationPopup
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
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  background-color: var(--dark);
  width: 100%;
  height: 100vh;
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
      z-index: 100;
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
}
</style>