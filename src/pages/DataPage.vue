<template>
  <div class="page">
    <div class="page__upper">
      <RegionalMap class="page__upper__map"></RegionalMap>
      <div
        v-for="area in areas"
        class="page__upper__pin"
        :style="{ top: area.top + 'px', left: area.left + 'px' }"
        :key="area.key">
        <img src="@/assets/icons/mappin.svg" alt="">
      </div>
      <div
        v-for="other in geographicalLocation"
        class="page__upper__other"
        :style="{ top: other.top + 'px', left: other.left + 'px' }"
        :key="other.key">
        <p v-html="other.value"></p>
      </div>
    </div>
    <div class="page__lower">
      <div>a</div>
      <div>b</div>
      <div>c</div>
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
export default {
  name: 'dataPage',
  data () {
    return {
      areas: {
        alo: {
          key: 'alo',
          top: 190,
          left: 1050
        },
        flo: {
          key: 'flo',
          top: 210,
          left: 830,
        },
        sab: {
          key: 'sab',
          top: 575,
          left: 665,
        },
        mgr: {
          key: 'mgr',
          top: 255,
          left: 480,
        },
        mgb: {
          key: 'mgb',
          top: 240,
          left: 390,
        },
        rot: {
          key: 'rot',
          top: 565,
          left: 850,
        },
        sik: {
          key: 'sik',
          top: 265,
          left: 730,
        },
        sbt: {
          key: 'sbt',
          top: 420,
          left: 450,
        },
        kot: {
          key: 'kot',
          top: 490,
          left: 930,
        }
      },
      geographicalLocation: {
        ntb: {
          key: 'ntb',
          value: this.$t('administrative.other.ntb'),
          top: 180,
          left: 30
        },
        tim: {
          key: 'tim',
          value: this.$t('administrative.other.tim'),
          top: 215,
          left: 1200
        },
        fls: {
          key: 'fls',
          value: this.$t('administrative.other.fls'),
          top: 80,
          left: 250
        },
        bas: {
          key: 'bas',
          value: this.$t('administrative.other.bas'),
          top: 80,
          left: 1150
        },
        sas: {
          key: 'sas',
          value: this.$t('administrative.other.sas'),
          top: 350,
          left: 670
        },
        tis: {
          key: 'tis',
          value: this.$t('administrative.other.tis'),
          top: 440,
          left: 1150
        },
        ino: {
          key: 'ino',
          value: this.$t('administrative.other.ino'),
          top: 490,
          left: 100
        },
      }
    }
  },
  components: {
    RegionalMap
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
    padding-block-start: 180px;
    position: relative;
    &__map {
      zoom: 90%;
      position: absolute;
    }
    &__pin {
      position: absolute;
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