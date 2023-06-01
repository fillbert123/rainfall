<template>
  <div class="simulation">
    <div class="simulation__upper">
      <div class="simulation__upper__label">BULAN</div>
      <TimeSlider 
        @timeUpdate="timeUpdate"
        @timeIncrease="timeUpdate"
        @timeDecrease="timeUpdate">
      </TimeSlider>
    </div>
    <div class="simulation__lower">
      <div class="simulation__lower__left">
        <div class="simulation__lower__left__model">
          <div class="simulation__lower__left__model__label">MODEL</div>
          <img class="simulation__lower__left__model__info" src="@/assets/icons/info.svg" alt="">
          <ModelSelector 
            @unlockEstimation="unlockEstimation = true"
            @lockEstimation="unlockEstimation = false">
          </ModelSelector>
        </div>
        <div class="simulation__lower__left__method">
          <div class="simulation__lower__left__method__label">METODE</div>
          <img class="simulation__lower__left__method__info" src="@/assets/icons/info.svg" alt="">
          <EstimationSelector :unlockEstimation="unlockEstimation"></EstimationSelector>
        </div>
      </div>
      <div class="simulation__lower__right">
        <div class="simulation__lower__right__label">PARAMETER</div>
        <div class="simulation__lower__right__parameter">
          <div class="simulation__lower__right__parameter__row1">
            <ComponentSlider 
              variable="temperature"
              val="27"
              minval="10"
              maxval="40"
              class="simulation__lower__right__parameter__row1__col1">
            </ComponentSlider>
            <ComponentSlider 
              variable="humidity"
              val="80"
              minval="50"
              maxval="100"
              class="simulation__lower__right__parameter__row1__col2">
            </ComponentSlider>
          </div>
          <div class="simulation__lower__right__parameter__row2">
            <ComponentSlider 
              variable="sunshine"
              val="10"
              minval="0"
              maxval="14"
              class="simulation__lower__right__parameter__row2__col1">
            </ComponentSlider>
            <ComponentSlider 
              variable="windspeed"
              val="2"
              minval="0"
              maxval="8"
              class="simulation__lower__right__parameter__row2__col2">
            </ComponentSlider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeSlider from './TimeSlider.vue'
import ModelSelector from './ModelSelector.vue'
import EstimationSelector from './EstimationSelector.vue'
import ComponentSlider from './ComponentSlider.vue'

export default {
  name: 'simulationControl',
  data () {
    return {
      time: 5,
      unlockEstimation: false
    }
  },
  components: {
    TimeSlider,
    ModelSelector,
    EstimationSelector,
    ComponentSlider
  },
  methods: {
    timeUpdate (time) {
      this.time = time
    }
  }
}
</script>

<style lang="scss" scoped>
.simulation {
  width: fit-content;
  background-color: var(--light_tr);
  padding: 20px;
  border-radius: 20px;
  color: var(--white);
  &__upper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-block-end: 20px;
    &__label {
      font-family: SFRoundedM;
      font-size: 14px;
      margin-inline-end: 16px;
    }
  }
  &__lower {
    display: flex;
    flex-direction: row;
    &__left {
      margin-inline-end: 60px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      &__model, &__method {
        display: flex;
        flex-direction: row;
        align-items: center;
        &__label {
          margin-inline-end: 8px;
          font-family: SFRoundedM;
          font-size: 14px;
        }
        &__info {
          margin-inline-end: 16px;
        }
      }
      &__model {
        margin-block-end: 20px;
      }
    }
    &__right {
      display: flex;
      flex-direction: row;
      &__label {
        padding-block: 16px;
        margin-inline-end: 16px;
        font-family: SFRoundedM;
        font-size: 14px;
      }
      &__parameter {
        width: 816px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        &__row1 {
          margin-block-end: 20px;
        }
        &__row1, &__row2 {
          display: flex;
          flex-direction: row;
          &__col1 {
            margin-inline-end: 16px;
          }
        }
      }
    }
  }
}
</style>