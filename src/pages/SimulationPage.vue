<template>
  <div class="page">
    <div class="page__upper">
      <RegionalMap class="page__upper__map"></RegionalMap>
      <ResultChip 
        class="page__upper__fly__mgb"
        adm="KABUPATEN"
        admName="MANGGARAI BARAT">
      </ResultChip>
      <ResultChip 
        class="page__upper__fly__mgr"
        adm="KABUPATEN"
        admName="MANGGARAI">
      </ResultChip>
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
    &__fly {
      &__mgb {
        left: 80px;
        top: 100px;
        zoom: 80%;
        position: absolute;
      }
      &__mgr {
        left: 240px;
        top: 100px;
        zoom: 80%;
        position: absolute;
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