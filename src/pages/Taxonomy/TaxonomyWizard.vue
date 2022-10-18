<template>
  <div class="api-producer-taxonomy-wizard">
    <ContentHeader
        title="Taxonomy Wizard"
        introduction="Your API provides functionality to others, and this functionality needs to be described using a common taxonomy." />
    <Content>
      <VerticalStackLayout class="content">
        <StepNavigationContainer isSticky>
          <StepNavigationElement
              title="Taxonomy"
              description="Select the preferred taxonomy"
              :target="scrollToComponent"
              reference="taxonomy" />
          <StepNavigationElement
              title="Level 1"
              description="Select required level 1 categories"
              :target="scrollToComponent"
              reference="level1"
              :disabled="!this.selectedLevels.taxonomy"/>
          <StepNavigationElement
              title="Level 2"
              description="Select required level 2 categories"
              :target="scrollToComponent"
              reference="level2"
              :disabled="!this.selectedLevels.level1"/>
          <StepNavigationElement
              title="Level 3"
              description="Select optional level 3 categories"
              :target="scrollToComponent"
              reference="level3"
              :disabled="!this.selectedLevels.level2"/>
          <StepNavigationElement
              title="Download file"
              description="Download a new taxonomy.apimap with your current selections"
              :target="scrollToComponent"
              reference="completed"
              :disabled="!shouldDisplayDownloadButton"/>
        </StepNavigationContainer>
        <div>
          <div class="forms-container">
            <div ref="taxonomy">
              <Taxonomy v-if="getTaxonomies" :taxonomy="getTaxonomies" :form="form" />
              <Separator size="normal" />
              <MediumButton title="Continue to Level 1" :target="setTaxonomy" v-if="shouldDisplayLevel1" />
            </div>
            <div ref="level1" v-if="selectedLevels.taxonomy">
              <Level1 :items="level1" :form="form" />
              <Separator size="normal" />
              <MediumButton title="Continue to Level 2" :target="setLevel1" v-if="shouldDisplayLevel2" />
            </div>
            <div ref="level2" v-if="selectedLevels.level1">
              <Level2 :items="level2" :form="form" />
              <Separator size="normal" />
              <MediumButton title="Continue to Level 3" :target="setLevel2" v-if="shouldDisplayLevel3" />
            </div>
            <div ref="level3" v-if="selectedLevels.level2">
              <Level3 :items="level3" :form="form" />
            </div>
          </div>
          <Separator size="large" />
          <div ref="completed" class="footer" v-if="shouldDisplayDownloadButton">
            <div class="footer-container">
              <div class="all-done-container">
                <img :src="allDoneIllustration" alt="Taxonomy Wizard Completed" />
                <h2>Taxonomy.apimap</h2>
              </div>
              <LargeButton title="Download and save a new taxonomy.apimap file to your folder " :target="saveFile" />
            </div>
          </div>
        </div>
      </VerticalStackLayout>
    </Content>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Elements/Footer";

import Level1 from "@/pages/Taxonomy/WizardComponents/TaxonomyLevel1";
import Level2 from "@/pages/Taxonomy/WizardComponents/TaxonomyLevel2";
import Level3 from "@/pages/Taxonomy/WizardComponents/TaxonomyLevel3";
import Taxonomy from "@/pages/Taxonomy/WizardComponents/Taxonomy";

import LargeButton from "@/components/Navigation/LargeButton";
import MediumButton from "@/components/Navigation/MediumButton";

import StepNavigationContainer from "@/components/Navigation/StepNavigationContainer"
import StepNavigationElement from "@/components/Navigation/StepNavigationElement"

// Assets
import allDoneIllustration from "@/assets/illustrations/all-done-illustration.svg";

import { Content, ContentHeader, Separator, VerticalStackLayout } from "@apimap/layout-core";

import { saveToFile } from "@/utils/file-management.js";
import { scrollToComponentWithoutHistory, scrollToPageTop } from "@/utils/window-management.js";
import { RESET_TAXONOMY_FORM, RESET_TAXONOMY_FORM_SELECTIONS, SET_TAXONOMY_FORM_SELECTIONS } from "@/store/forms/store";

export default {
  name: "TaxonomyWizard",
  components: {
    StepNavigationElement,
    Content,
    LargeButton,
    MediumButton,
    ContentHeader,
    StepNavigationContainer,
    Footer,
    VerticalStackLayout,
    Level1,
    Level2,
    Level3,
    Taxonomy,
    Separator
  },
  mounted() {
    this.$store.dispatch(RESET_TAXONOMY_FORM);
    this.$store.commit('jv/clearRecords', { _jv: { type: 'urn:element' } })
    // TODO: Make this dynamic from returned urls
    this.$store.dispatch('jv/get', "taxonomy").then((data) => {})
  },
  data: function() {
    return {
      levels: {
        taxonomy: undefined,
        level1: new Array(),
        level2: new Array(),
      },
      selectedLevels: {
        taxonomy: false,
        level1: false,
        level2: false,
      },
      availableLevels: {
        taxonomy: false,
        level1: false,
        level2: false,
      },
      allDoneIllustration,
    };
  },
  methods: {
    setTaxonomy: async function() {
      this.$store.commit('jv/clearRecords', { _jv: { type: 'urn:element' } });

      // TODO: Make this dynamic from returned urls
      await this.$store.dispatch('jv/get', "taxonomy/" + this.form.taxonomy + '/version/latest/urn').then((data) => {
        this.levels.level1 = Object.keys(data).map((key) => { return data[key] });
        this.levels.taxonomy = this.form.taxonomy;
        this.selectedLevels.taxonomy = true;
      });

      scrollToComponentWithoutHistory(this, "level1");
    },
    setLevel1: function() {
      if (this.levels.level2.some((el) => el.entities.length > 0)) {
        this.selectedLevels.level1 = true;
        scrollToComponentWithoutHistory(this, "level2");
      } else {
        this.selectedLevels.level1 = false;
        scrollToComponentWithoutHistory(this, "completed");
      }
    },
    setLevel2: function() {
      if (this.levels.level3.filter((object) => object.attributes.entities.some( (el) => el.attributes )).length > 0) {
        this.selectedLevels.level2 = true;
        scrollToComponentWithoutHistory(this, "level3");
      } else {
        this.selectedLevels.level2 = false;
        scrollToComponentWithoutHistory(this, "completed");
      }
    },
    removeParentUrns() {
      for (let i = 0; i < this.levels.level1.length; i++) {
        if (
          this.form.classifications.includes(
            this.levels.level1[i].urn
          )
        ) {
          for (
            let j = 0;
            j < this.levels.level1[i].entities.length;
            j++
          ) {
            if (
              this.form.classifications.includes(
                this.levels.level1[i].entities[j].attributes.urn
              )
            ) {
              this.form.classifications.splice(
                this.form.classifications.indexOf(
                  this.levels.level1[i].urn
                ),
                1
              );
              for (
                let k = 0;
                k <
                this.levels.level1[i].entities[j].attributes
                  .entities.length;
                k++
              ) {
                if (
                  this.form.classifications.includes(
                    this.levels.level1[i].entities[j].attributes
                      .entities[k].attributes.urn
                  )
                ) {
                  this.form.classifications.splice(
                    this.form.classifications.indexOf(
                      this.levels.level1[i].entities[j].attributes
                        .urn
                    ),
                    1
                  );
                }
              }
            }
          }
        }
      }
    },
    scrollToComponent: function(refName) {
      scrollToComponentWithoutHistory(this, refName);
    },
    scrollToPageTop,
    saveFile: function() {
      this.removeParentUrns();
      const dataobj = {
        data: this.form,
      };
      saveToFile(dataobj, "taxonomy.apimap");
      this.$store.dispatch(RESET_TAXONOMY_FORM);
    },
  },
  computed: {
    level1: function() {
      if(!this.availableLevels.taxonomy) {
        this.levels.level1 = [];
      }
      return this.levels.level1;
    },
    level2: function() {
      if(!this.availableLevels.level1){
        this.levels.level2 = [];
      }
      return this.levels.level2;
    },
    level3: function() {
      if(!this.availableLevels.level2){
        this.levels.level3 = [];
      }
      return this.levels.level3;
    },
    getTaxonomies: function(){
      return this.$store.getters['jv/get']('taxonomy:element');
    },
    shouldDisplayLevel1(){
      return this.availableLevels.taxonomy;
    },
    shouldDisplayLevel2(){
      return this.availableLevels.level1;
    },
    shouldDisplayLevel3(){
      return this.availableLevels.level2;
    },
    shouldDisplayDownloadButton(){
      return this.form.classifications.length > 0;
    },
    form() {
      return this.$store.state.forms.taxonomy;
    }
  },
  watch: {
    'form.taxonomy': {
      handler(newValue, oldValue) {
        // Reset selections when taxonomy changes
        if(newValue !== oldValue){
          this.levels = {
            taxonomy: newValue,
            level1: new Array(),
            level2: new Array(),
          };

          this.selectedLevels = {
            taxonomy: false,
            level1: false,
            level2: false,
          };

          this.availableLevels = {
            taxonomy: newValue !== undefined,
            level1: false,
            level2: false,
          };

          this.$store.dispatch(RESET_TAXONOMY_FORM_SELECTIONS);
        }
      }
    },
    'form.classifications': {
      handler(newValue, oldValue){
        this.levels.level2 = this.levels.level1.filter(option => newValue.includes(option.urn));
        this.selectedLevels.level1 = this.levels.level2.length > 0;

        this.levels.level3 = this.levels.level2
            .filter(option => newValue.includes(option.urn))
            .flatMap((object) => object.entities.filter((el) => newValue.includes(el.attributes.urn)))
            .filter(object => object.attributes.entities.length > 0);

        this.selectedLevels.level2 = this.levels.level3.length > 0;

        this.availableLevels.level1 = this.levels.level1.some(lv => newValue.includes(lv.urn) && lv.entities.length > 0);
        this.availableLevels.level2 = this.levels.level2.some(lv => lv.entities.some(lv2 => newValue.includes(lv2.attributes.urn) && lv2.attributes.entities.length > 0));
      }
    },
    'form': {
      handler(value) {
        this.$store.dispatch(SET_TAXONOMY_FORM_SELECTIONS, value);
      }
    },
  },
};
</script>

<style scoped>

.content > div:first-child{
  margin-right: 4em;
}

.all-done-container {
  text-align: center;
}

.forms-container {
  width: 40em;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 6em;
}

.footer-container {
  width: 100%;
  text-align: center;
}

.all-done-container p {
  margin: 0px;
}

.level2 {
  overflow: scroll;
}

.level3 {
  overflow: scroll;
}

</style>
