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
              :disabled="!this.chosenLevels.taxonomy"/>
          <StepNavigationElement
              title="Level 2"
              description="Select required level 2 categories"
              :target="scrollToComponent"
              reference="level2"
              :disabled="!this.chosenLevels.level1"/>
          <StepNavigationElement
              title="Level 3"
              description="Select optional level 3 categories"
              :target="scrollToComponent"
              reference="level3"
              :disabled="!this.chosenLevels.level2"/>
          <StepNavigationElement
              title="Download file"
              description="Download a new taxonomy.apimap with your current selections"
              :target="scrollToComponent"
              reference="completed"
              :disabled="!this.chosenLevels.taxonomy"/>
        </StepNavigationContainer>
        <div>
          <div class="forms-container">
            <div ref="taxonomy">
              <Taxonomy v-if="allTaxonomies" :taxonomy="allTaxonomies" :form="form" />
            </div>
            <Separator size="normal" />
            <MediumButton title="Download and Start Categorizing" :target="chooseTaxonomy" v-if="shouldDisplayLevel1" />
            <Separator size="normal" />
            <div ref="level1">
              <div v-if="chosenLevels.taxonomy">
                <Level1 :taxonomyItems="level1Elements" :form="form" />
                <Separator size="normal" />
                <MediumButton title="Download and Start Categorizing" :target="chooseLevel1" v-if="shouldDisplayLevel2" />
                <Separator size="normal" />
              </div>
            </div>
            <div ref="level2">
              <div v-if="chosenLevels.level1">
                <Level2 :taxonomyItems="level2Elements" :form="form" />
                <Separator size="normal" />
                <MediumButton title="Continue to Taxonomy Sub-Levels" :target="chooseLevel2" v-if="shouldDisplayLevel3" />
              </div>
            </div>
            <div ref="level3">
              <div v-if="chosenLevels.level2">
                <Separator size="normal" />
                <Level3 :taxonomyItems="level3Elements" :form="form" />
              </div>
            </div>
          </div>
          <Separator size="large" />
          <div ref="completed" class="footer" v-if="this.chosenLevels.taxonomy">
            <div class="footer-container">
              <div class="all-done-container">
                <img :src="allDoneIllustration" alt="Taxonomy Wizard Completed" />
                <h2>Taxonomy.apimap</h2>
              </div>
              <LargeButton title="Download a new taxonomy.apimap with your current selections" :target="saveFile" />
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
import { mapActions, mapGetters } from "vuex";
import { RESET_TAXONOMY_FORM_SELECTIONS, SET_TAXONOMY_FORM_SELECTIONS } from "@/store/forms/store";

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
    this.$store.dispatch(RESET_TAXONOMY_FORM_SELECTIONS);
    this.loadTaxonomyList({ rel: "taxonomy:collection" });
  },
  data: function() {
    return {
      chosenLevels: {
        taxonomy: false,
        level1: false,
        level2: false,
      },
      availableLevels: {
        taxonomy: false,
        level1: false,
        level2: false,
      },
      taxonomyTree: {},
      level1Elements: [],
      level2Elements: [],
      level3Elements: [],
      allDoneIllustration,
    };
  },
  methods: {
    ...mapActions({
      loadTaxonomyList: "taxonomies/loadByRel",
      loadTaxonomy: "taxonomy/loadByRelationship"
    }),
    chooseTaxonomy: async function(refName) {
      if (!this.chosenLevels.taxonomy) {

        let selectedTaxonomyObject = this.allTaxonomies.find(e => e.id === this.form.taxonomy)
        console.log("Selected " + selectedTaxonomyObject)

        await this.loadTaxonomy({ resource: selectedTaxonomyObject, relationship:"urn:collection" })
        this.chosenLevels.taxonomy = true;

        this.level1Elements = this.taxonomy;
        scrollToComponentWithoutHistory(this, refName);
      }
    },
    chooseLevel1: function(refName) {
      this.level2Elements = this.level1Elements.filter((tax) => {
        return this.form.classifications.includes(tax.attributes.urn);
      });
      if (this.level2Elements.some((el) => el.attributes.entities.length > 0)) {
        this.chosenLevels.level1 = true;
        scrollToComponentWithoutHistory(this, refName);
      } else {
        scrollToComponentWithoutHistory(this, "footer");
      }
    },
    chooseLevel2: function(refName) {
      this.level3Elements = this.level2Elements.map((tax) => {
        return {
          ...tax,
          attributes: {
            ...tax.attributes,
            entities: tax.attributes.entities.filter((el) =>
              this.form.classifications.includes(el.attributes.urn)
            ),
          },
        };
      });

      if (
        this.level3Elements.filter((tax) => {
          return tax.attributes.entities.some(
            (el) => el.attributes.entities.length > 0
          );
        }).length > 0
      ) {
        this.chosenLevels.level2 = true;
        scrollToComponentWithoutHistory(this, refName);
      } else {
        scrollToComponentWithoutHistory(this, "footer");
      }
    },
    removeParentUrns() {
      for (let i = 0; i < this.level1Elements.length; i++) {
        if (
          this.form.classifications.includes(
            this.level1Elements[i].attributes.urn
          )
        ) {
          for (
            let j = 0;
            j < this.level1Elements[i].attributes.entities.length;
            j++
          ) {
            if (
              this.form.classifications.includes(
                this.level1Elements[i].attributes.entities[j].attributes.urn
              )
            ) {
              this.form.classifications.splice(
                this.form.classifications.indexOf(
                  this.level1Elements[i].attributes.urn
                ),
                1
              );
              for (
                let k = 0;
                k <
                this.level1Elements[i].attributes.entities[j].attributes
                  .entities.length;
                k++
              ) {
                if (
                  this.form.classifications.includes(
                    this.level1Elements[i].attributes.entities[j].attributes
                      .entities[k].attributes.urn
                  )
                ) {
                  this.form.classifications.splice(
                    this.form.classifications.indexOf(
                      this.level1Elements[i].attributes.entities[j].attributes
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
    },
  },
  computed: {
    shouldDisplayLevel1(){
      return this.availableLevels.taxonomy
    },
    shouldDisplayLevel2(){
      return this.availableLevels.level1
    },
    shouldDisplayLevel3(){
      return this.availableLevels.level2
    },
    form() {
      return this.$store.state.forms.taxonomy;
    },
    ...mapGetters({
      allTaxonomies: "taxonomies/all",
      taxonomy: "taxonomy/all"
    })
  },
  watch: {
    form: {
      handler(value) {
        this.availableLevels.taxonomy = value.taxonomy !== undefined;
        this.availableLevels.level1 = this.level1Elements.some(lv => value.classifications.includes(lv.attributes.urn) && lv.attributes.entities.length > 0);
        this.availableLevels.level2 = this.level2Elements.some(lv => lv.attributes.entities.some(lv2 => value.classifications.includes(lv2.attributes.urn) && lv2.attributes.entities.length > 0));
        this.$store.dispatch(SET_TAXONOMY_FORM_SELECTIONS, value);
      },
      deep: true,
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
