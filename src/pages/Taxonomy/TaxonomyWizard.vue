<template>
  <div class="api-producer-taxonomy-wizard">
    <ContentHeader
        title="Taxonomy Wizard"
        introduction="Your API provides functionality to others, and this functionality needs to be described using a common taxonomy." />
    <Content>
      <VerticalStackLayout class="content">
        <StepNavigationContainer isSticky>
          <ImportField @file="fileDropped"
                       text="Drag your existing taxonomy.apimap to this drop zone"
                       hover-text="Drop to import" />
          <StepNavigationElement
              title="Taxonomy"
              description="Select the preferred taxonomy"
              :target="scrollToComponent"
              reference="taxonomy" />
          <StepNavigationElement
              title="Level 1 categories"
              description="Select required level 1 categories"
              :target="scrollToComponent"
              reference="level1"
              :disabled="!displayLevel1"/>
          <StepNavigationElement
              title="Level 2 categories"
              description="Select required level 2 categories"
              :target="scrollToComponent"
              reference="level2"
              :disabled="!displayLevel2"/>
          <StepNavigationElement
              title="Level 3 categories"
              description="Select optional level 3 categories"
              :target="scrollToComponent"
              reference="level3"
              :disabled="!displayLevel3"/>
          <StepNavigationElement
              title="Generate file"
              description="Create new content file"
              :target="scrollToComponent"
              reference="completed"
              :disabled="!displayDownloadOptions"/>
        </StepNavigationContainer>
        <div>
          <div class="forms-container">
            <div ref="taxonomy">
              <Taxonomy v-if="displayTaxonomies" :taxonomy="availableTaxonomies" :form="form" />
              <Separator size="normal" />
              <MediumButton title="Download taxonomy" :target="setTaxonomy" v-if="displayDownload"/>
            </div>
            <div ref="level1" v-show="displayLevel1">
              <Level1 :items="availableLevel1" :form="form" />
              <Separator size="normal" />
              <MediumButton title="Continue to Level 2" :target="setLevel1" v-if="displayLevel2" />
            </div>
            <div ref="level2" v-if="displayLevel2">
              <Level2 :items="availableLevel2" :form="form" />
              <Separator size="normal" />
              <MediumButton title="Continue to Level 3" :target="setLevel2" v-if="displayLevel3" />
            </div>
            <div ref="level3" v-if="displayLevel3">
              <Level3 :items="availableLevel3" :form="form" />
            </div>
          </div>
          <div ref="completed" class="footer" v-if="displayDownloadOptions">
            <div class="footer-container">
              <div class="all-done-container">
                <img :src="allDoneIllustration" alt="Taxonomy Wizard Completed" />
                <h2>taxonomy.apimap</h2>
              </div>
              <div class="download-options">
                <div class="inverted-button" @click.stop="saveFile">Download</div>
                <div class="inverted-button" @click.stop="copyToClipboard">Copy to clipboard</div>
                <div class="dangerous-button" @click.stop="clearAll">Clear all</div>
              </div>
            </div>
          </div>
        </div>
      </VerticalStackLayout>
    </Content>
    <Content>
      <div class="next">
        <div class="next-content">
          <router-link to="/metadata/wizard"><img :src="navigationPreviousElement" height="40px" alt="Add Metadata"/></router-link>
          <router-link to="/metadata/wizard">Add Metadata</router-link>
        </div>
        <div class="next-content">
          <router-link to="/workflow"><img :src="navigationNextElement" height="40px" alt="Publish Changes"/></router-link>
          <router-link to="/workflow">Publish Changes</router-link>
        </div>
      </div>
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
import navigationNextElement from "@/assets/elements/navigation-next-element.svg";
import navigationPreviousElement from "@/assets/elements/navigation-previous-element.svg";

import { Content, ContentHeader, Separator, VerticalStackLayout } from "@apimap/layout-core";

import { saveToFile } from "@/utils/file-management.js";
import { scrollToComponentWithoutHistory } from "@/utils/window-management.js";
import { RESET_TAXONOMY_FORM, SET_TAXONOMY_FORM_SELECTIONS } from "@/store/forms/store";
import ImportField from "@/components/Elements/ImportField";

export default {
  name: "TaxonomyWizard",
  components: {
    ImportField,
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
    this.$store.dispatch('jv/get', "taxonomy").then(() => {
      this.clearFlowControl();
    });
  },
  data: function() {
    return {
      flowControl:{
        displayTaxonomies: true,
        displayDownload: false,
        displayLevel1: false,
        displayLevel2: false,
        displayLevel3: false
      },
      content:{
        taxonomy: undefined,
        level1: [],
        level2: [],
        level3: []
      },
      allDoneIllustration,
      navigationPreviousElement,
      navigationNextElement
    };
  },
  methods: {
    clearFlowControl: function(){
      this.flowControl.displayTaxonomies = true;
      this.flowControl.displayDownload = false;
      this.flowControl.displayLevel1 = false;
      this.flowControl.displayLevel2 = false;
      this.flowControl.displayLevel3 = false;

      this.content.taxonomy = undefined;
      this.content.level1 = [];
      this.content.level2 = [];
      this.content.level3 = [];
    },
    fileDropped: async function(value){
      if(value === undefined
          || value['data'] === undefined
          || value['data']['taxonomy'] === undefined
          || value['data']['classifications'] === undefined
      ) return;

      const fileTaxonomy = value['data']['taxonomy'];
      const fileClassifications = value['data']['classifications'];

      await this.$store.commit('jv/clearRecords', { _jv: { type: 'urn:element' } });
      await this.$store.dispatch(RESET_TAXONOMY_FORM);

      // TODO: Make this dynamic from returned urls
      await this.$store.dispatch('jv/get', "taxonomy/" +  fileTaxonomy + '/version/latest/urn').then((data) => {
        const classifications = Object.keys(data).map((key) => { return data[key] });
        this.content.level1 = classifications;
        this.content.taxonomy = fileTaxonomy;
        this.form.taxonomy = fileTaxonomy;
        this.flowControl.displayTaxonomies = true;
        this.flowControl.displayDownload = true;
        return classifications;
      }).then((classifications) => {
        const matches = classifications.flatMap(l1 => {
          const urns = [];

          if (fileClassifications.findIndex(e => e === l1.urn) > -1) {
            urns.push(l1.urn);
            this.flowControl.displayLevel1 = true;
          }

          l1.entities.forEach(l2 => {
            if (fileClassifications.findIndex(e => e === l2.attributes.urn) > -1) {
              urns.push(l1.urn, l2.attributes.urn);
              this.flowControl.displayLevel1 = true;
              this.flowControl.displayLevel2 = true;
            }

            l2.attributes.entities.forEach(l3 => {
              if (fileClassifications.findIndex(e => e === l3.urn) > -1) {
                urns.push(l1.urn, l2.attributes.urn, l3.urn);
                this.flowControl.displayLevel1 = true;
                this.flowControl.displayLevel2 = true;
                this.flowControl.displayLevel3 = true;
              }
            })
          })

          return urns;
        });

        const data = {
          'taxonomy': fileTaxonomy,
          'classifications': matches,
        }

        this.$store.dispatch(SET_TAXONOMY_FORM_SELECTIONS, data);
      });
    },
    setTaxonomy: async function() {
      await this.$store.commit('jv/clearRecords', { _jv: { type: 'urn:element' } });

      const taxonomy = this.form.taxonomy;
      // TODO: Make this dynamic from returned urls
      this.$store.dispatch('jv/get', "taxonomy/" + taxonomy + '/version/latest/urn').then((data) => {
        this.$store.dispatch(RESET_TAXONOMY_FORM)
        .then(() => {
          this.content.level1 = Object.keys(data).map((key) => { return data[key] });
          this.content.taxonomy = taxonomy;
          this.form.taxonomy = taxonomy;
          this.flowControl.displayTaxonomies = true;
          this.flowControl.displayLevel1 = true;
        }).then(
          scrollToComponentWithoutHistory(this, "level1")
        );
      });
    },
    setLevel1: function() {
      if (this.content.level2.some((el) => el.entities.length > 0)) {
        this.flowControl.displayLevel2 = true;
        scrollToComponentWithoutHistory(this, "level2");
      } else {
        this.flowControl.displayLevel2 = false;
        scrollToComponentWithoutHistory(this, "completed");
      }
    },
    setLevel2: function() {
      if (this.content.level3.filter((object) => object.attributes.entities.some( (el) => el.attributes )).length > 0) {
        this.flowControl.displayLevel3 = true;
        scrollToComponentWithoutHistory(this, "level3");
      } else {
        this.flowControl.displayLevel3 = false;
        scrollToComponentWithoutHistory(this, "completed");
      }
    },
    scrollToComponent: function(refName) {
      scrollToComponentWithoutHistory(this, refName);
    },
    clearAll: function(){
      this.clearFlowControl();
      this.$store.dispatch(RESET_TAXONOMY_FORM);
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    },
    saveFile: function() {
      const dataobj = {
        data: {
          classifications: this.compressURNs(this.form.classifications),
          taxonomy: this.content.taxonomy
        }
      };
      saveToFile(dataobj, "taxonomy.apimap");
    },
    copyToClipboard: function() {
      const dataobj = {
        data: {
          classifications: this.compressURNs(this.form.classifications),
          taxonomy: this.content.taxonomy
        },
        "api catalog version": "1"
      };
      navigator.clipboard.writeText(JSON.stringify(dataobj,null,2));
    },
    compressURNs(classifications){
      return this.content.level1.flatMap(l1 => {
        const matches1 = l1.entities.flatMap(l2 => {
          const matches = l2.attributes.entities.flatMap(l3 => {
            if (classifications.findIndex(e => e === l3.urn) > -1) return l3.urn;
          })
          .filter(e => e !== undefined);
          if (matches.length > 0) return matches;
          if (classifications.findIndex(e => e === l2.attributes.urn) > -1) return l2.attributes.urn;
        })
        .filter(e => e !== undefined);
        if (matches1.length > 0) return matches1;
        if (classifications.findIndex(e => e === l1.urn) > -1) return l1.urn;
      })
      .filter(e => e !== undefined);
    }
  },
  computed: {
    displayTaxonomies: function(){
      return this.flowControl.displayTaxonomies;
    },
    displayDownload: function(){
      return this.flowControl.displayDownload;
    },
    displayLevel1: function(){
      return this.flowControl.displayLevel1;
    },
    displayLevel2: function(){
      return this.flowControl.displayLevel2;
    },
    displayLevel3: function(){
      return this.flowControl.displayLevel3;
    },
    availableTaxonomies: function(){
      return this.$store.getters['jv/get']('taxonomy:element');
    },
    availableLevel1: function(){
      return this.content.level1;
    },
    availableLevel2: function(){
      return this.content.level2;
    },
    availableLevel3: function(){
      return this.content.level3;
    },
    displayDownloadOptions(){
      if(this.form === undefined || this.form.classifications === undefined) return false;
      return this.form.classifications.length > 0;
    },
    form() {
      return this.$store.state.forms.taxonomy;
    }
  },
  watch: {
    'form.taxonomy': {
      handler(newValue){
        this.content.taxonomy = newValue;
        this.flowControl.displayDownload = true;
      }
    },
    'form.classifications': {
      handler(newValue){
        this.content.level2 = this.content.level1.filter(option => newValue.includes(option.urn));
        this.content.level3 = this.content.level2
            .filter(option => newValue.includes(option.urn))
            .flatMap((object) => object.entities.filter((el) => newValue.includes(el.attributes.urn)))
            .filter(object => object.attributes.entities.length > 0);

        this.flowControl.displayLevel2 = this.content.level2.length > 0;
        this.flowControl.displayLevel3 = this.content.level3.length > 0;
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

.next-content{
  width: 10em;
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 1.2em;
}

.next{
  border-top: 1px dashed #dbd8e3;
  padding-top: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.2em;
  justify-content: center;
  gap: 1em;
  margin: 0;
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
  margin: 0;
}

.download-options{
  margin-left: 4em;
  margin-right: 4em;
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
}

</style>
