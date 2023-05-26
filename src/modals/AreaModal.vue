<template>
  <div class="modal">
    <div class="modal__left">
      <div class="modal__left__row1">
        <ImagePlaceholder></ImagePlaceholder>
      </div>
      <div class="modal__left__row2">
        <WeatherStationInfo class="modal__left__row2__weather"></WeatherStationInfo>
        <WindDirectionInfo class="modal__left__row2__wind"></WindDirectionInfo>
      </div>
    </div>
    <div class="modal__right">
      <div class="modal__right__row1">
        <RegencyCityName class="modal__right__row1__name"></RegencyCityName>
        <ViewDataButton class="modal__right__row1__button"></ViewDataButton>
      </div>
      <div class="modal__right__row2">
        <HalfSizeInfo class="modal__right__row2__info1"></HalfSizeInfo>
        <HalfSizeInfo class="modal__right__row2__info2"></HalfSizeInfo>
      </div>
      <div class="modal__right__row3">
        <FullSizeInfoSlider></FullSizeInfoSlider>
        <FullSizeInfoSlider></FullSizeInfoSlider>
        <FullSizeInfoSlider></FullSizeInfoSlider>
        <FullSizeInfoSlider></FullSizeInfoSlider>
        <FullSizeInfoSlider></FullSizeInfoSlider>
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

export default{
  name: 'areaModal',
  components: {
    RegencyCityName,
    HalfSizeInfo,
    FullSizeInfoSlider,
    ImagePlaceholder,
    WeatherStationInfo,
    WindDirectionInfo,
    ViewDataButton
  }
}
</script>

<style lang="scss" scoped>
.modal {
  background-color: var(--dark_tr);
  border-radius: 30px;
  padding: 20px;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  &__left, &__right {
    display: flex;
    flex-direction: column;
    &__row1, &__row2 {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }
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