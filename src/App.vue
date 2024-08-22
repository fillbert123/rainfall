<template>
  <div class="app">
    <div class="app__navbar">
      <div class="app__navbar__navigation">
        <div class="app__navbar__navigation__bar">
          <NavigationBar @goToSelected="goToSelected" class="app__navbar__navigation__bar__control"></NavigationBar>
          <div @click="showHideLangOpt" class="app__navbar__navigation__bar__lang">
            <img class="app__navbar__navigation__bar__lang__icon" src="@/assets/icons/bubble.svg" alt="">
          </div>
        </div>
        <LanguageModal v-if="langOptShowed" @showHideLangOpt="showHideLangOpt" class="app__navbar__navigation__opt"></LanguageModal>
      </div>
    </div>
    <div v-if="dataModalShowed" class="app__secondoverlay">
      <DataModal
        class="app__overlay__modal"
        @hideDataModal="hideDataModal"
        :area="selectedArea"
        :admArea="selectedAdmArea"></DataModal>
    </div>
    <div v-if="areaModalShowed || publicationModalShowed" class="app__overlay">
      <AreaModal
        v-if="areaModalShowed"
        class="app__overlay__modal"
        @emitShowData="showDataModal"
        @hideAreaModal="hideAreaModal"
        :selectedArea="selectedArea"
        :selectedAdmArea="selectedAdmArea"></AreaModal>
      <PublicationModal
        v-if="publicationModalShowed"
        class="app__overlay__modal"
        @hidePublicationModal="hidePublicationModal"
        :selectedVariable="selectedVariable"></PublicationModal>
    </div>
    <MainPage id="main" @goToSelected="goToSelected"></MainPage>
    <VariablePage
      id="variable"
      @viewPublicationModal="viewPublicationModal"></VariablePage>
    <DataPage
      id="data"
      @setSelectedAdmArea="setSelectedAdmArea"
      @showAreaModal="showAreaModal"
      @hideAreaModal="hideAreaModal"
    ></DataPage>
    <AnalysisPage id="analysis"></AnalysisPage>
    <SimulationPage id="simulation"></SimulationPage>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import MainPage from '@/pages/MainPage.vue';
import VariablePage from '@/pages/VariablePage.vue';
import DataPage from '@/pages/DataPage.vue';
import AnalysisPage from '@/pages/AnalysisPage.vue';
import SimulationPage from '@/pages/SimulationPage.vue';
import AreaModal from '@/modals/AreaModal.vue';
import PublicationModal from '@/modals/PublicationModal.vue'
import LanguageModal from './modals/LanguageModal.vue';
import DataModal from './modals/DataModal.vue';

export default {
  name: 'App',
  data () {
    return {
      selectedArea: null,
      selectedAdmArea: null,
      areaModalShowed: false,
      selectedVariable: null,
      publicationModalShowed: false,
      langOptShowed: false,
      dataModalShowed: false
    }
  },
  components: {
    NavigationBar,
    MainPage,
    VariablePage,
    DataPage,
    AnalysisPage,
    SimulationPage,
    AreaModal,
    PublicationModal,
    LanguageModal,
    DataModal
  },
  methods: {
    setSelectedAdmArea (value) {
      this.selectedAdmArea = value
    },
    showAreaModal (value) {
      this.selectedArea = value
      this.areaModalShowed = true
    },
    hideAreaModal () {
      this.selectedAdmArea = null
      this.selectedArea = null
      this.areaModalShowed = false
    },
    viewPublicationModal (value) {
      this.selectedVariable = value
      this.publicationModalShowed = true
    },
    hidePublicationModal () {
      this.selectedVariable = null
      this.publicationModalShowed = false
    },
    showHideLangOpt () {
      this.langOptShowed = !this.langOptShowed
    },
    goToSelected (id) {
      this.$scrollTo('#' + id, 1000, { easing: 'ease-in-out' });
    },
    showDataModal () {
      this.dataModalShowed = true
    },
    hideDataModal () {
      this.dataModalShowed = false
    }
  }
}
</script>

<style lang="scss">
@font-face { font-family: SFRoundedB; font-weight: bold; src: url(@/fonts/SF-Pro-Rounded-Bold.otf)}
@font-face { font-family: SFRoundedSB; font-weight: bold; src: url(@/fonts/SF-Pro-Rounded-Semibold.otf)}
@font-face { font-family: SFRoundedM; font-weight: bold; src: url(@/fonts/SF-Pro-Rounded-Medium.otf)}
@font-face { font-family: SFRoundedR; font-weight: bold; src: url(@/fonts/SF-Pro-Rounded-Regular.otf)}
@font-face { font-family: SFMono; font-weight: bold; src: url(@/fonts/SF-Mono-Regular.otf)}

body {
  margin: 0;
}

:root {
  background-color: var(--dark);
  --darker: rgba(49, 60, 68, 1);
  --darker_tr: rgba(24, 31, 35, 0.5);
  --darker_tr2: rgba(24, 31, 35, 0.75);
  --dark: rgba(72, 89, 100, 1);
  --dark_tr: rgba(70, 88, 101, 0.5);
  --dark_tr2: rgba(70, 88, 101, 0.75);
  --light: rgba(97, 118, 131, 1);
  --light_tr: rgba(122, 147, 161, 0.5);
  --light_tr2: rgba(122, 147, 161, 0.75);
  --lighter: rgba(127, 144, 153, 1);
  --lighter_tr: rgba(181, 198, 207, 0.5);
  --lighter_tr2: rgba(181, 198, 207, 0.75);
  --white: rgba(255, 255, 255, 1);
  --white_tr: rgba(255, 255, 255, 0.5);
}

.app {
  font-family: SFRoundedR;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  &__navbar {
    margin-block-start: 16px;
    z-index: 5;
    width: 100vw;
    display: flex;
    justify-content: center;
    position: fixed;
    zoom: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    &__navigation {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      &__bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        &__lang {
          background-color: var(--light_tr);
          width: 54px;
          height: 54px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          margin-inline-start: 16px;
          &:hover {
            background-color: var(--light_tr2);
            cursor: pointer;
          }
        }
      }
      &__opt {
        margin-block-start: 16px;
      }
    }
  }
  &__overlay {
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: var(--darker_tr);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    &__modal {
      margin-block-start: 50px;
      zoom: 80%;
    }
  }
  &__secondoverlay {
    position: fixed;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    background-color: var(--darker_tr);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    &__modal {
      margin-block-start: 50px;
      zoom: 80%;
    }
  }
}
</style>
