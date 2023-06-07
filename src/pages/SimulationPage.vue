<template>
  <div class="page">
    <div class="page__upper">
      <RegionalMap class="page__upper__map"></RegionalMap>
      <div 
        class="page__upper__chip page__upper__chip__group1"
        :style="{ top: chipCluster.group1.top + 'px', left: chipCluster.group1.left + 'px' }">
        <ResultChip 
          v-for="area in chipCluster.group1"
          :adm=area.adm
          :admName=area.admName
          :value="area.value"
          :key="area.admName">
        </ResultChip>
      </div>
      <div 
        class="page__upper__chip page__upper__chip__group2"
        :style="{ top: chipCluster.group2.top + 'px', left: chipCluster.group2.left + 'px' }">
        <ResultChip 
          v-for="area in chipCluster.group2"
          :adm=area.adm
          :admName=area.admName
          :value="area.value"
          :key="area.admName">
        </ResultChip>
      </div>
      <div
        class="page__upper__chip page__upper__chip__group3"
        :style="{ top: chipCluster.group3.top + 'px', left: chipCluster.group3.left + 'px' }">
        <ResultChip 
          v-for="area in chipCluster.group3"
          :adm=area.adm
          :admName=area.admName
          :value="area.value"
          :key="area.admName">
        </ResultChip>
      </div>
      <div 
        class="page__upper__chip page__upper__chip__group4"
        :style="{ top: chipCluster.group4.top + 'px', left: chipCluster.group4.left + 'px' }">
        <ResultChip 
          v-for="area in chipCluster.group4"
          :adm=area.adm
          :admName=area.admName
          :value="area.value"
          :key="area.admName">
        </ResultChip>
      </div>
      <div 
        class="page__upper__chip page__upper__chip__group5"
        :style="{ top: chipCluster.group5.top + 'px', left: chipCluster.group5.left + 'px' }">
        <ResultChip 
          v-for="area in chipCluster.group5"
          :adm=area.adm
          :admName=area.admName
          :value="area.value"
          :key="area.admName">
        </ResultChip>
      </div>
      <div 
        class="page__upper__chip page__upper__chip__group6"
        :style="{ top: chipCluster.group6.top + 'px', left: chipCluster.group6.left + 'px' }">
        <ResultChip 
          v-for="area in chipCluster.group6"
          :adm=area.adm
          :admName=area.admName
          :value="area.value"
          :key="area.admName">
        </ResultChip>
        {{ selectedModel }}
        {{ test }}
      </div>
    </div>
    <div class="page__lower">
      <SimulationControlVue 
        class="page__lower__controller"
        @amemiyaSelected="amemiyaSelected"
        @nerloveSelected="nerloveSelected"
        @swarSelected="swarSelected"
        @walhusSelected="walhusSelected"
        @commonSelected="commonSelected"
        @fixedSelected="fixedSelected"
        @randomSelected="randomSelected"
        @temperatureUpdate="updateTemperature"
        @humidityUpdate="updateHumidity"
        @sunshineUpdate="updateSunshine"
        @windspeedUpdate="updateWindspeed">
      </SimulationControlVue>
    </div>
  </div>
</template>

<script>
import RegionalMap from '@/map/RegionalMap.vue';
import SimulationControlVue from '@/components/SimulationControl.vue';
import ResultChip from '@/components/ResultChip.vue';
import modelData from '@/data/modelData.json'

export default {
  name: 'simulationPage',
  data () {
    return {
      marginLeft: 0,
      model: modelData,
      chipCluster: {
        group1: {
          top: 90,
          left: 150,
          mgb: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.mgb'), value: 0
          },
          mgr: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.mgr'), value: 0
          },
          mgt: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.mgt'), value: 0
          }
        },
        group2: {
          top: 90,
          left: 1320,
          lem: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.lem'), value: 0
          },
          alo: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.alo'), value: 0
          }
        },
        group3: {
          top: 370,
          left: 150,
          sbd: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sbd'), value: 0
          },
          sbb: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sbb'), value: 0
          },
          sbg: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sbg'), value: 0
          },
          sbt: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sbt'), value: 0
          }
        },
        group4: {
          top: 370,
          left: 1290,
          dummy: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.ttu'), value: 0
          },
          bel: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.bel'), value: 0
          },
          ttu: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.ttu'), value: 0
          },
          mal: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.mal'), value: 0
          },
          tts: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.tts'), value: 0
          }
        },
        group5: {
          top: 386,
          left: 670,
          dummy2: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sab'), value: 0
          },
          dummy3: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.rot'), value: 0
          },
          kot: {
            adm: this.$t('administrative.admArea.city'), admName: this.$t('administrative.admName.kup'), value: 0
          },
          sab: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sab'), value: 0
          },
          rot: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.rot'), value: 0
          },
          kup: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.kup'), value: 0
          }
        },
        group6: {
          top: 290,
          left: 500,
          nga: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.nga'), value: 0
          },
          nag: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.nag'), value: 0
          },
          end: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.end'), value: 0
          },
          sik: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.sik'), value: 0
          },
          flo: {
            adm: this.$t('administrative.admArea.district'), admName: this.$t('administrative.admName.flo'), value: 0
          }
        }
      },
      selectedModel: 'common',
      selectedMethod: null,
      temperature: 27,
      humidity: 80,
      sunshine: 10,
      windspeed: 2,
      test: null
    }
  },
  components: {
    RegionalMap,
    SimulationControlVue,
    ResultChip
  },
  mounted () {
    this.countValue()
  },
  created () {
    this.marginLeft = (1440 - window.innerWidth)/2
    this.chipCluster.group1.left = this.chipCluster.group1.left - this.marginLeft - this.countWindowAdditionalMargin
    this.chipCluster.group2.left = this.chipCluster.group2.left - this.marginLeft - this.countWindowAdditionalMargin
    this.chipCluster.group3.left = this.chipCluster.group3.left - this.marginLeft - this.countWindowAdditionalMargin
    this.chipCluster.group4.left = this.chipCluster.group4.left - this.marginLeft - this.countWindowAdditionalMargin
    this.chipCluster.group5.left = this.chipCluster.group5.left - this.marginLeft - this.countWindowAdditionalMargin
    this.chipCluster.group6.left = this.chipCluster.group6.left - this.marginLeft - this.countWindowAdditionalMargin
  },
  computed: {
    countWindowAdditionalMargin () {
      return (30 / 240 * (1440 - window.innerWidth))
    }
  },
  methods: {
    amemiyaSelected () {
      this.selectedMethod = "amemiya"
      this.countValue()
    },
    nerloveSelected () {
      this.selectedMethod = 'nerlove'
      this.countValue()
    },
    swarSelected () {
      this.selectedMethod = 'swar'
      this.countValue()
    },
    walhusSelected () {
      this.selectedMethod = 'walhus'
      this.countValue()
    },
    commonSelected () {
      this.selectedModel = 'common'
      this.selectedMethod = null
      this.countValue()
    },
    fixedSelected () {
      this.selectedModel = 'fixed'
      this.selectedMethod = null
      this.countValue()
    },
    randomSelected () {
      this.selectedModel = 'random'
      this.selectedMethod = 'walhus'
      this.countValue()
    },
    updateTemperature (value) {
      this.temperature = value
      this.countValue()
    },
    updateHumidity (value) {
      this.humidity = value
      this.countValue()
    },
    updateSunshine (value) {
      this.sunshine = value
      this.countValue()
    },
    updateWindspeed (value) {
      this.windspeed = value
      this.countValue()
    },
    countValue () {
      var intercept = 0
      var slopeTavg = 0
      var slopeRh_avg = 0
      var slopeSs = 0
      var slopeFf_avg = 0
      var value = 0
      switch (this.selectedModel) {
        case 'common':
          intercept = this.model.common.intercept
          slopeTavg = this.model.common.tavg
          slopeRh_avg = this.model.common.rh_avg
          slopeSs = this.model.common.ss
          slopeFf_avg = this.model.common.ff_avg
          value = intercept + (slopeTavg * this.temperature) + (slopeRh_avg * this.humidity) + (slopeSs * this.sunshine) + (slopeFf_avg * this.windspeed)
          // this.test = this.chipCluster.group6[Object.keys(this.chipCluster.group6)[3]].value
          // this.test = Object.keys(this.chipCluster.group6)[3]
          this.setCommonValue(value)   
          break;
        case 'fixed':
          slopeTavg = this.model.fixed.tavg
          slopeRh_avg = this.model.fixed.rh_avg
          slopeSs = this.model.fixed.ss
          slopeFf_avg = this.model.fixed.ff_avg
          value = (slopeTavg * this.temperature) + (slopeRh_avg * this.humidity) + (slopeSs * this.sunshine) + (slopeFf_avg * this.windspeed)
          this.setFixedValue(value)   
          break;
        case 'random':
          intercept = this.model.random[this.selectedMethod].intercept
          slopeTavg = this.model.random[this.selectedMethod].tavg
          slopeRh_avg = this.model.random[this.selectedMethod].rh_avg
          slopeSs = this.model.random[this.selectedMethod].ss
          slopeFf_avg = this.model.random[this.selectedMethod].ff_avg
          value = intercept + (slopeTavg * this.temperature) + (slopeRh_avg * this.humidity) + (slopeSs * this.sunshine) + (slopeFf_avg * this.windspeed)
          this.setRandomValue(value)
          break;
      }
    },
    countPowerOfTwo (val) {
      return Math.ceil(val * val)
    },
    setCommonValue (val) {
      var finalValue = this.countPowerOfTwo(val)
      for (let i = 0; i < Object.keys(this.chipCluster.group1).length-2; i++) {
        this.chipCluster.group1[Object.keys(this.chipCluster.group1)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group2).length-2; i++) {
        this.chipCluster.group2[Object.keys(this.chipCluster.group2)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group3).length-2; i++) {
        this.chipCluster.group3[Object.keys(this.chipCluster.group3)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group4).length-2; i++) {
        this.chipCluster.group4[Object.keys(this.chipCluster.group4)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group5).length-2; i++) {
        this.chipCluster.group5[Object.keys(this.chipCluster.group5)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group6).length-2; i++) {
        this.chipCluster.group6[Object.keys(this.chipCluster.group6)[i + 2]].value = finalValue
      }    
    },
    setFixedValue (val) {
      var key = null
      var value = null
      var finalValue = null
      for (let i = 0; i < Object.keys(this.chipCluster.group1).length-2; i++) {
        key = Object.keys(this.chipCluster.group1)[i+2]
        value = val + this.model.fixed.intercept[key]
        finalValue = this.countPowerOfTwo(value)
        this.chipCluster.group1[Object.keys(this.chipCluster.group1)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group2).length-2; i++) {
        key = Object.keys(this.chipCluster.group2)[i+2]
        value = val + this.model.fixed.intercept[key]
        finalValue = this.countPowerOfTwo(value)
        this.chipCluster.group2[Object.keys(this.chipCluster.group2)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group3).length-2; i++) {
        key = Object.keys(this.chipCluster.group3)[i+2]
        value = val + this.model.fixed.intercept[key]
        finalValue = this.countPowerOfTwo(value)
        this.chipCluster.group3[Object.keys(this.chipCluster.group3)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group4).length-2; i++) {
        key = Object.keys(this.chipCluster.group4)[i+2]
        value = val + this.model.fixed.intercept[key]
        finalValue = this.countPowerOfTwo(value)
        this.chipCluster.group4[Object.keys(this.chipCluster.group4)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group5).length-2; i++) {
        key = Object.keys(this.chipCluster.group5)[i+2]
        value = val + this.model.fixed.intercept[key]
        finalValue = this.countPowerOfTwo(value)
        this.chipCluster.group5[Object.keys(this.chipCluster.group5)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group6).length-2; i++) {
        key = Object.keys(this.chipCluster.group6)[i+2]
        value = val + this.model.fixed.intercept[key]
        finalValue = this.countPowerOfTwo(value)
        this.chipCluster.group6[Object.keys(this.chipCluster.group6)[i + 2]].value = finalValue
      }
    },
    setRandomValue (val) {
      var key = null
      var value = null
      var finalValue = null
      for (let i = 0; i < Object.keys(this.chipCluster.group1).length-2; i++) {
        key = Object.keys(this.chipCluster.group1)[i+2]
        value = val + this.model.random[this.selectedMethod].error[key]
        finalValue = this.countPowerOfTwo(value)
        this.chipCluster.group1[Object.keys(this.chipCluster.group1)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group2).length-2; i++) {
        key = Object.keys(this.chipCluster.group2)[i+2]
        value = val + this.model.random[this.selectedMethod].error[key]
        finalValue = this.countPowerOfTwo(value)
        this.chipCluster.group2[Object.keys(this.chipCluster.group2)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group3).length-2; i++) {
        key = Object.keys(this.chipCluster.group3)[i+2]
        value = val + this.model.random[this.selectedMethod].error[key]
        finalValue = this.countPowerOfTwo(value)
        this.chipCluster.group3[Object.keys(this.chipCluster.group3)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group4).length-2; i++) {
        key = Object.keys(this.chipCluster.group4)[i+2]
        value = val + this.model.random[this.selectedMethod].error[key]
        finalValue = this.countPowerOfTwo(value)
        this.chipCluster.group4[Object.keys(this.chipCluster.group4)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group5).length-2; i++) {
        key = Object.keys(this.chipCluster.group5)[i+2]
        value = val + this.model.random[this.selectedMethod].error[key]
        finalValue = this.countPowerOfTwo(value)
        this.chipCluster.group5[Object.keys(this.chipCluster.group5)[i + 2]].value = finalValue
      }  
      for (let i = 0; i < Object.keys(this.chipCluster.group6).length-2; i++) {
        key = Object.keys(this.chipCluster.group6)[i+2]
        value = val + this.model.random[this.selectedMethod].error[key]
        finalValue = this.countPowerOfTwo(value)
        this.chipCluster.group6[Object.keys(this.chipCluster.group6)[i + 2]].value = finalValue
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
        width: 400px;
        &>*:nth-child(1) {
          margin-inline-end: 100px;
        }
        &>*:nth-child(4) {
          margin-inline-start: 320px;
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