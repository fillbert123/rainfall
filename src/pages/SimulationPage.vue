<template>
  <div class="page">
    <div class="page__upper">
      <RegionalMap class="page__upper__map"></RegionalMap>
      <div 
        class="page__upper__chip page__upper__chip__group1"
        :style="{ top: group1.top + 'px', left: group1.left + 'px' }">
        <ResultChip 
          v-for="area in group1"
          :adm=area.adm
          :admName=area.admName
          :key="area.admName">
        </ResultChip>
      </div>
      <div 
        class="page__upper__chip page__upper__chip__group2"
        :style="{ top: group2.top + 'px', left: group2.left + 'px' }">
        <ResultChip 
          v-for="area in group2"
          :adm=area.adm
          :admName=area.admName
          :key="area.admName">
        </ResultChip>
      </div>
      <div
        class="page__upper__chip page__upper__chip__group3"
        :style="{ top: group3.top + 'px', left: group3.left + 'px' }">
        <ResultChip 
          v-for="area in group3"
          :adm=area.adm
          :admName=area.admName
          :key="area.admName">
        </ResultChip>
      </div>
      <div 
        class="page__upper__chip page__upper__chip__group4"
        :style="{ top: group4.top + 'px', left: group4.left + 'px' }">
        <ResultChip 
          v-for="area in group4"
          :adm=area.adm
          :admName=area.admName
          :key="area.admName">
        </ResultChip>
      </div>
      <div 
        class="page__upper__chip page__upper__chip__group5"
        :style="{ top: group5.top + 'px', left: group5.left + 'px' }">
        <ResultChip 
          v-for="area in group5"
          :adm=area.adm
          :admName=area.admName
          :key="area.admName">
        </ResultChip>
      </div>
      <div 
        class="page__upper__chip page__upper__chip__group6"
        :style="{ top: group6.top + 'px', left: group6.left + 'px' }">
        <ResultChip 
          v-for="area in group6"
          :adm=area.adm
          :admName=area.admName
          :key="area.admName">
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
      marginLeft: 0,
      group1: {
        top: 90,
        left: 150,
        mgb: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.mgb')
        },
        mgr: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.mgr')
        },
        mgt: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.mgt')
        }
      },
      group2: {
        top: 90,
        left: 1361,
        lem: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.lem')
        },
        alo: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.alo')
        }
      },
      group3: {
        top: 370,
        left: 150,
        sbd: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sbd')
        },
        sbb: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sbb')
        },
        sbg: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sbg')
        },
        sbt: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sbt')
        }
      },
      group4: {
        top: 370,
        left: 1310,
        dummy: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.ttu')
        },
        bel: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.bel')
        },
        ttu: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.ttu')
        },
        mal: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.mal')
        },
        tts: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.tts')
        }
      },
      group5: {
        top: 386,
        left: 690,
        dummy2: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sab')
        },
        dummy3: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.rot')
        },
        kot: {
          adm: this.$t('administrative.admArea.city'), admName: this.$t('administrative.admName.kup')
        },
        sab: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sab')
        },
        rot: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.rot')
        },
        kup: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.kup')
        }
      },
      group6: {
        top: 290,
        left: 500,
        nga: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.nga')
        },
        nag: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.nag')
        },
        end: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.end')
        },
        sik: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sik')
        },
        flo: {
          adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.flo')
        }
      }
    }
  },
  components: {
    RegionalMap,
    SimulationControlVue,
    ResultChip
  },
  created () {
    this.marginLeft = (1440 - window.innerWidth)/2
    this.group1.left = this.group1.left - this.marginLeft - (30 / 240 * (1440 - window.innerWidth))
    this.group2.left = this.group2.left - this.marginLeft - (30 / 240 * (1440 - window.innerWidth))
    this.group3.left = this.group3.left - this.marginLeft - (30 / 240 * (1440 - window.innerWidth))
    this.group4.left = this.group4.left - this.marginLeft - (30 / 240 * (1440 - window.innerWidth))
    this.group5.left = this.group5.left - this.marginLeft - (30 / 240 * (1440 - window.innerWidth))
    this.group6.left = this.group6.left - this.marginLeft - (30 / 240 * (1440 - window.innerWidth))
  },
  methods: {

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
      }
      &__group2 {
        display: flex;
        flex-direction: row;
      }
      &__group3 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 300px;
        &>*:nth-child(1) {
          margin-inline-end: 100px;
        }
        &>*:nth-child(4) {
          margin-inline-start: 290px;
        }
      }
      &__group4 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 350px;
        &>*:nth-child(1) {
          visibility: hidden;
        }
      }
      &__group5 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 500px;
        &>*:nth-child(1), &>*:nth-child(2) {
          visibility: hidden;
        }
      }
      &__group6 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
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