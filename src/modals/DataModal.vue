<template>
  <div class="modal">
    <img class="modal__close" src="@/assets/icons/close.svg" alt="" @click="hideDataModal">
    <RegencyCityName
      :area="area"
      :admArea="admArea"></RegencyCityName>
    <DataSelector 
      @emitSelectionRaw="setSelection('raw')"
      @emitSelectionPmm="setSelection('pmm')"
      @emitSelectionDet="setSelection('det')"
      @emitSelectionSto="setSelection('sto')"
      class="modal__selector"></DataSelector>
    <div class="modal__data">
      <div class="modal__data__header">
        <div class="modal__data__header__r1">{{ this.$t('data.header.date') }}</div>
        <div class="modal__data__header__r2">{{ this.$t('data.header.Tavg') }}</div>
        <div class="modal__data__header__r3">{{ this.$t('data.header.RH_avg') }}</div>
        <div class="modal__data__header__r4">{{ this.$t('data.header.RR') }}</div>
        <div class="modal__data__header__r5">{{ this.$t('data.header.ss') }}</div>
        <div class="modal__data__header__r6">{{ this.$t('data.header.ff_avg') }}</div>
      </div>
      <div class="modal__data__group">
        <div 
          v-for="i in dailyData[area][dataType]"
          :key="i.tanggal"
          class="modal__data__group__col">
          <div class="modal__data__group__col__r1">{{ i.tanggal }}</div>
          <div class="modal__data__group__col__r2">{{ i.Tavg }}</div>
          <div class="modal__data__group__col__r3">{{ i.RH_avg }}</div>
          <div class="modal__data__group__col__r4">{{ i.RR }}</div>
          <div class="modal__data__group__col__r5">{{ i.ss }}</div>
          <div class="modal__data__group__col__r6">{{ i.ff_avg }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegencyCityName from '@/components/RegencyCityName.vue';
import DataSelector from '@/components/DataSelector.vue';
import dailyData from '@/data/dailyData.json'

export default {
  name: 'dataModal',
  props: {
    area: String,
    admArea: String
  },
  data () {
    return {
      dataType: 'raw',
      dailyData
    }
  },
  components: {
    RegencyCityName,
    DataSelector
  },
  methods: {
    hideDataModal () {
      this.$emit('hideDataModal')
    },
    setSelection (value) {
      this.dataType = value
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  background-color: var(--light_tr);
  border-radius: 30px;
  padding: 20px;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: relative;
  &__close {
    position: absolute;
    zoom: 200%;
    top: -8px;
    right: -8px;
  }
  &__selector {
    margin-block: 12px;
  }
  &__data {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--white);
    font-size: 20px;
    height: 500px;
    &__header {
      font-style: SFRoundedB;
      display: flex;
      flex-direction: row;
      padding-right: 10px;
      &>* {
        background-color: var(--darker_tr);
        margin: 2px;
        padding-block: 4px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &__r1 {
        width: 200px;
      }
      &__r2 {
        width: 160px;
      }
      &__r3 {
        width: 120px;
      }
      &__r4 {
        width: 120px;
      }
      &__r5 {
        width: 120px;
      }
      &__r6 {
        width: 160px;
      }
    }
    &__group {
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-track {
        background: var(--dark_tr); 
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--darker_tr); 
        border-radius: 10px;
      }
      &__col {
        font-style: SFRoundedR;
        display: flex;
        flex-direction: row;
        &>* {
          background-color: var(--dark_tr);
          margin: 2px;
          padding-block: 4px;
          border-radius: 8px;
        }
        &__r1 {
          width: 200px;
        }
        &__r2 {
          width: 160px;
        }
        &__r3 {
          width: 120px;
        }
        &__r4 {
          width: 120px;
        }
        &__r5 {
          width: 120px;
        }
        &__r6 {
          width: 160px;
        }
      }
    }
  }
}
</style>