<template>
  <div class="modal">
    <img class="modal__close" src="@/assets/icons/close.svg" alt="" @click="hideAreaModal">
    <div class="modal__left">
      <div class="modal__left__row1">
        <ImagePlaceholder
          :staName="translator[this.selectedArea]"
          :area="selectedArea"></ImagePlaceholder>
      </div>
      <div class="modal__left__row2">
        <WeatherStationInfo 
          class="modal__left__row2__weather"
          :staName="translator[this.selectedArea]"
          :area="selectedArea"></WeatherStationInfo>
        <WindDirectionInfo 
          class="modal__left__row2__wind"
          :area="selectedArea"></WindDirectionInfo>
      </div>
    </div>
    <div class="modal__right">
      <div class="modal__right__row1">
        <RegencyCityName 
          class="modal__right__row1__name"
          :area="selectedArea"
          :admArea="selectedAdmArea"></RegencyCityName>
        <ViewDataButton class="modal__right__row1__button"></ViewDataButton>
      </div>
      <div class="modal__right__row2">
        <HalfSizeInfo 
          class="modal__right__row2__info1"
          label="period"
          value="2021-2022"></HalfSizeInfo>
        <HalfSizeInfo 
          class="modal__right__row2__info2"
          label="complete_case"
          :value="areaData[selectedArea].complete"></HalfSizeInfo>
      </div>
      <div class="modal__right__row3">
        <FullSizeInfoSlider
          variable="rainfall"
          :result="areaData[selectedArea].rainfall.value"
          :missing="areaData[selectedArea].rainfall.missing"
          :maxval="areaData.universal.rainfall.high"
          :minval="areaData.universal.rainfall.low"></FullSizeInfoSlider>
        <FullSizeInfoSlider
          variable="temperature"
          :result="areaData[selectedArea].temperature.value"
          :missing="areaData[selectedArea].temperature.missing"
          :maxval="areaData.universal.temperature.high"
          :minval="areaData.universal.temperature.low"></FullSizeInfoSlider>
        <FullSizeInfoSlider
          variable="humidity"
          :result="areaData[selectedArea].humidity.value"
          :missing="areaData[selectedArea].humidity.missing"
          :maxval="areaData.universal.humidity.high"
          :minval="areaData.universal.humidity.low"></FullSizeInfoSlider>
        <FullSizeInfoSlider
          variable="sunshine"
          :result="areaData[selectedArea].sunshine.value"
          :missing="areaData[selectedArea].sunshine.missing"
          :maxval="areaData.universal.sunshine.high"
          :minval="areaData.universal.sunshine.low"></FullSizeInfoSlider>
        <FullSizeInfoSlider
          variable="windspeed"
          :result="areaData[selectedArea].windspeed.value"
          :missing="areaData[selectedArea].windspeed.missing"
          :maxval="areaData.universal.windspeed.high"
          :minval="areaData.universal.windspeed.low"></FullSizeInfoSlider>
      </div>
    </div>
  </div>
</template>

<script>
import RegencyCityName from '@/components/RegencyCityName.vue';
import HalfSizeInfo from '@/components/HalfSizeInfo.vue';
import FullSizeInfoSlider from '@/components/FullSizeInfoSlider.vue';
import ImagePlaceholder from '@/components/ImagePlaceholder.vue';
import WeatherStationInfo from '@/components/WeatherStationInfo.vue';
import WindDirectionInfo from '@/components/WindDirectionInfo.vue';
import ViewDataButton from '@/components/ViewDataButton.vue';
import areaStationTranslator from '@/data/areaStationTranslator.json';
import areaData from '@/data/areaData.json';

export default{
  name: 'areaModal',
  props: {
    selectedArea: String,
    selectedAdmArea: String
  },
  data () {
    return {
      translator: areaStationTranslator,
      areaData
    }
  },
  components: {
    RegencyCityName,
    HalfSizeInfo,
    FullSizeInfoSlider,
    ImagePlaceholder,
    WeatherStationInfo,
    WindDirectionInfo,
    ViewDataButton
  },
  methods: {
    hideAreaModal () {
      this.$emit('hideAreaModal')
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
  flex-direction: row;
  position: relative;
  &__left, &__right {
    display: flex;
    flex-direction: column;
    &__row1, &__row2 {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }
  }
  &__close {
    position: absolute;
    zoom: 200%;
    top: -8px;
    right: -8px;
  }
  &__left {
    margin-inline-end: 48px;
    &__row2 {
      margin-block-start: 20px;
      &__weather {
        margin-inline-end: 20px;
      }
    }
  }
  &__right {
    &__row1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    &__row2 {
      margin-block-start: 20px;
      &__info1 {
        margin-inline-end: 20px;
      }
    }
    &__row3 > * {
      margin-block-start: 20px;
    }
  }
}
</style>