<template>
  <div class="page">
    <div class="page__upper">
      <RegionalMap class="page__upper__map"></RegionalMap>
      <div class="page__upper__chip page__upper__chip__group1">
        <ResultChip 
          v-for="area in group1"
          :adm=area.adm
          :admName=area.admName
          :key="area.admName"
          :style="{ 'left' : area.left + 'px', 'top' : area.top + 'px' }">
        </ResultChip>
      </div>
      <div class="page__upper__chip page__upper__chip__group2">
        <ResultChip 
          v-for="area in group2"
          :adm=area.adm
          :admName=area.admName
          :key="area.admName"
          :style="{ 'left' : area.left + 'px', 'top' : area.top + 'px' }">
        </ResultChip>
      </div>
    </div>
    <div class="page__lower">
      <SimulationControlVue class="page__lower__controller"></SimulationControlVue>
    </div>
  </div>
</template>

<script>
import RegionalMap from '@/map/RegionalMap.vue';
import SimulationControlVue from '@/components/SimulationControl.vue';
import ResultChip from '@/components/ResultChip.vue';

export default {
  name: 'simulationPage',
  data () {
    return {
      group1: {
        mgb: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.mgb'), left: 100, top: 100
        },
        mgr: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.mgr'), left: 252, top: 100
        },
        mgt: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.mgt'), left: 389, top: 100
        },
        nga: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.nga'), left: 537, top: 100
        },
        nag: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.nag'), left: 674, top: 100
        },
        end: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.end'), left: 811, top: 100
        },
        sik: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sik'), left: 948, top: 100
        }
      },
      group2: {
        flo: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.flo'), left: 200, top: 400
        },
        lem: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.lem'), left: 400, top: 1200
        },
        alo: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.alo'), left: 0, top: 1400
        }
      },
      group3: {
        sbd: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sbd'), left: 400, top: 400
        },
        sbb: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sbb'), left: 0, top: 600
        },
        sbg: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sbg'), left: 200, top: 600
        },
        sbt: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sbt'), left: 400, top: 600
        }
      },
      considerations: {
        sab: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sab'), left: 0, top: 800
        },
        rot: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.rot'), left: 200, top: 800
        },
        kot: {
          adm: this.$t('administrative.admArea.city'), admName: this.$t('administrative.admName.kup'), left: 400, top: 800
        },
        kup: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.kup'), left: 0, top: 1000
        },
        ttu: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.ttu'), left: 200, top: 1000
        },
        tts: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.tts'), left: 400, top: 1000
        },
        mal: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.mal'), left: 0, top: 1200
        },
        bel: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.bel'), left: 200, top: 1200
        }
      }
    }
  },
  components: {
    RegionalMap,
    SimulationControlVue,
    ResultChip
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
    padding-block-start: 100px;
    position: relative;
    &__map {
      zoom: 90%;
      position: absolute;
    }
    &__chip {
      zoom: 80%;
      position: absolute;
      &>* {
        margin: 4px;
      }
      &__group1 {
        display: flex;
        flex-direction: row;
        top: 90px;
        left: 30px;
      }
      &__group2 {
        display: flex;
        flex-direction: row;
        top: 230px;
        left: 1000px;
      }
    }
  }
  &__lower {
    display: flex;
    justify-content: center;
    &__controller {
      margin-block-start: 8px;
      zoom: 80%;
    }
  }
}
</style>