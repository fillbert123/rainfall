<template>
  <div class="page">
    <div class="page__list">
      <div class="page__list__notes">
        <div class="page__list__notes__title">{{ this.$t('analysis.notes.title') }}</div>
        <div class="page__list__notes__content">{{ this.$t('analysis.notes.content') }}</div>
      </div>
      <AnalysisList 
        v-for="a in analysis"
        :area="a.key"
        :type="a.type"
        :key="a.key"
        @selected="setContent"
        class="page__list__button"></AnalysisList>
    </div>
    <div class="page__analysis">
      <div class="page__analysis__upper">
        <div class="page__analysis__upper__tag">
          <img src="@/assets/icons/m.svg" alt="" class="page__analysis__upper__tag__icon">
          <div class="page__analysis__upper__tag__name">{{ this.$t('analysis.' + this.selectedTopic + '.type') }}</div>
        </div>
        <div class="page__analysis__upper__title">{{ this.$t('analysis.' + this.selectedTopic + '.title') }}</div>
        <div v-if="!isDescEmpty" class="page__analysis__upper__desc">{{ this.$t('analysis.' + this.selectedTopic + '.desc') }}</div>
      </div>
      <div class="page__analysis__lower">
        <div class="page__analysis__lower__content">
          {{ this.$t('analysis.' + this.selectedTopic + '.content') }}
        </div>
        <div class="page__analysis__lower__figure">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnalysisList from '@/components/AnalysisList.vue'

export default {
  name: 'analysisPage',
  data () {
    return {
      selectedTopic: 'pmm',
      analysis: {
        pmm: {
          key: 'pmm',
          type: 'i'
        },
        det: {
          key: 'det',
          type: 'i'
        },
        sto: {
          key: 'sto',
          type: 'i'
        },
        pan: {
          key: 'pan',
          type: 'p'
        },
        com: {
          key: 'com',
          type: 'm'
        },
        fix: {
          key: 'fix',
          type: 'm'
        },
        ame: {
          key: 'ame',
          type: 'm'
        },
        ner: {
          key: 'ner',
          type: 'm'
        },
        swa: {
          key: 'swa',
          type: 'm'
        },
        wal: {
          key: 'wal',
          type: 'm'
        }
      }
    }
  },
  components: {
    AnalysisList
  },
  computed: {
    isDescEmpty () {
      return this.$t('analysis.' + this.selectedTopic + '.desc').startsWith('analysis')
    }
  },
  methods: {
    setContent (area) {
      this.selectedTopic = area
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  background-color: var(--dark);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  &__list {
    margin-inline-end: 20px;
    padding: 4px;
    width: 396px;
    height: fit-content;
    border-radius: 20px;
    background-color: var(--light_tr);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    &__notes {
      padding: 12px;
      color: var(--white);
      width: 232px;
      margin: 4px;
      display: flex;
      flex-direction: column;
      text-align: start;
      justify-content: center;
      &__title {
        font-family: SFRoundedSB;
        font-size: 20px;
        line-height: 20px;
        margin-block-end: 8px;
      }
    }
    &__button {
      margin: 4px;
    }
  }
  &__analysis {
    width: 400px;
    height: 504px;
    padding: 16px;
    border-radius: 20px;
    background-color: var(--light_tr);
    color: var(--white);
    &__upper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &__tag {
        margin-block-start: 16px;
        display: flex;
        flex-direction: row;
        &__name {
          margin-inline-start: 8px;
        }
      }
      &__title {
        margin-block-start: 12px;
        font-family: SFRoundedB;
        font-size: 30px;
      }
      &__desc {
        font-family: SFRoundedSB;
        font-size: 20px;
      }
    }
    &__lower {
      margin-block-start: 24px;
      text-align: start;
    }
  }
}
</style>