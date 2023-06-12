<template>
  <div class="hello">
    <MainPage></MainPage>
    <VariablePage></VariablePage>
    <DataPage></DataPage>
    <AnalysisPage></AnalysisPage>
    <SimulationPage></SimulationPage>
  </div>
</template>

<script>
import MainPage from '@/pages/MainPage.vue';
import VariablePage from '@/pages/VariablePage.vue';
import DataPage from '@/pages/DataPage.vue';
import AnalysisPage from '@/pages/AnalysisPage.vue';
import SimulationPage from '@/pages/SimulationPage.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    MainPage,
    VariablePage,
    DataPage,
    AnalysisPage,
    SimulationPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  &__language {
    margin-inline-start: 20px;
  }
}
</style>