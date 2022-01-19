<template>
  <div class="api-producer-metadata-wizard">
    <ContentHeader
        title="Metadata Wizard"
        introduction="Your API has some technical preferences and architectural decisions that needs to be convaied in order to enable other developer to reuse the functionality." />
    <Content>
      <VerticalStackLayout class="content">
        <StepNavigationContainer isSticky>
          <StepNavigationElement
              title="API"
              description="Generic API information"
              :target="scrollToComponent"
              reference="api" />
          <StepNavigationElement
              title="Version"
              description="Information regarding a specific version"
              :target="scrollToComponent"
              reference="version" />
          <StepNavigationElement
              title="Implementation"
              description="Technical implementation details"
              :target="scrollToComponent"
              reference="implementation"/>
          <StepNavigationElement
              title="Organization"
              description="Organizational placement"
              :target="scrollToComponent"
              reference="organization"/>
          <StepNavigationElement
              title="Download file"
              description="Download a new metadata.apimap with your current selections"
              :target="scrollToComponent"
              reference="completed"/>
        </StepNavigationContainer>
        <div>
          <div class="forms-container">
            <div ref="api">
              <Api :form="form" />
            </div>
            <Separator size="normal" />
            <MediumButton title="Continue to Version" :target="scrollToVersion" />
            <Separator size="normal" />
            <div ref="version">
              <ApiVersion :form="form" />
            </div>
            <Separator size="normal" />
            <MediumButton title="Continue to Implementation Details" :target="scrollToImplementation" />
            <Separator size="normal" />
            <div ref="implementation">
              <Implementation :form="form" />
            </div>
            <Separator size="normal" />
            <MediumButton title="Continue to Organization Details" :target="scrollToOrganization" />
            <Separator size="normal" />
            <div ref="organization">
              <Organization :form="form" />
            </div>
          </div>
          <Separator size="normal" />
          <div class="footer" ref="completed">
            <div class="footer-container">
              <div class="all-done-container">
                <img :src="allDoneIllustration" alt="Metadata Wizard Completed"/>
                <h2>Metadata.apimap</h2>
              </div>
              <LargeButton title="Download and save a new metadata.apimap file to your folder" :target="saveFile" />
            </div>
          </div>
        </div>
      </VerticalStackLayout>
    </Content>
    <Footer />
  </div>
</template>

<script>
import allDoneIllustration from "@/assets/illustrations/all-done-illustration.svg";
import Footer from "@/components/Elements/Footer";
import Api from "@/pages/Metadata/WizardComponents/Api";
import ApiVersion from "@/pages/Metadata/WizardComponents/ApiVersion";
import Implementation from "@/pages/Metadata/WizardComponents/Implementation";
import Organization from "@/pages/Metadata/WizardComponents/Organization";
import LargeButton from "@/components/Navigation/LargeButton";
import MediumButton from "@/components/Navigation/MediumButton";
import StepNavigationContainer from "@/components/Navigation/StepNavigationContainer"
import StepNavigationElement from "@/components/Navigation/StepNavigationElement"
import { Content, ContentHeader, Separator, VerticalStackLayout } from "@apimap/layout-core"
import { mapActions, mapGetters } from "vuex";
import { saveToFile } from "@/utils/file-management.js";
import { scrollToComponentWithoutHistory } from "@/utils/window-management.js";
import {SET_METADATA_FORM_SELECTIONS} from "@/store/forms/store";
import {LOAD_METADATA_OPTIONS} from "@/store/content/store";

export default {
  name: "MetadataWizard",
  components: {
    StepNavigationElement,
    Content,
    ContentHeader,
    VerticalStackLayout,
    StepNavigationContainer,
    LargeButton,
    Footer,
    Api,
    ApiVersion,
    Implementation,
    Organization,
    Separator,
    MediumButton
  },
  data: function() {
    return { allDoneIllustration };
  },
  methods: {
    scrollToVersion: function(){
      this.scrollToComponent('version');
    },
    scrollToImplementation: function(){
      this.scrollToComponent('implementation');
    },
    scrollToOrganization: function(){
      this.scrollToComponent('organization');
    },
    scrollToComponent: function(refName) {
      scrollToComponentWithoutHistory(this, refName);
    },
    saveFile: function() {
      const dataobj = { data: { ...this.form } };
      saveToFile(dataobj, "metadata.apimap");
    },
  },
  mounted() {
    this.$store.dispatch(LOAD_METADATA_OPTIONS);
  },
  computed: {
    form() {
      return this.$store.getters.metadata;
    },
  },
  watch: {
    form: {
      handler(value) {
        this.$store.dispatch(SET_METADATA_FORM_SELECTIONS, value);
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
</style>
