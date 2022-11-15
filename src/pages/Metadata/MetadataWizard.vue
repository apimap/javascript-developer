<template>
  <div class="api-producer-metadata-wizard">
    <ContentHeader
        introduction="Your API has some technical preferences and architectural decisions that needs to be communicated in order to enable other developer to reuse the functionality."
        title="Metadata Wizard"/>
    <Content>
      <VerticalStackLayout class="content">
        <StepNavigationContainer isSticky>
          <ImportField hover-text="Drop to import"
                       text="Drag your existing metadata.apimap to this drop zone"
                       @file="fileDropped"/>
          <StepNavigationElement
              :target="scrollToComponent"
              description="Generic API information"
              reference="api"
              title="API"/>
          <StepNavigationElement
              :target="scrollToComponent"
              description="Information regarding a specific version"
              reference="version"
              title="Version"/>
          <StepNavigationElement
              :target="scrollToComponent"
              description="Technical implementation details"
              reference="implementation"
              title="Implementation"/>
          <StepNavigationElement
              :target="scrollToComponent"
              description="Organizational placement"
              reference="organization"
              title="Organization"/>
          <StepNavigationElement
              :target="scrollToComponent"
              description="Create new content file"
              reference="completed"
              title="Generate file"/>
        </StepNavigationContainer>
        <div>
          <div class="forms-container">
            <div ref="api">
              <Api :form="form"/>
            </div>
            <Separator size="normal"/>
            <MediumButton :target="scrollToVersion" title="Continue to Version"/>
            <Separator size="normal"/>
            <div ref="version">
              <ApiVersion :form="form"/>
            </div>
            <Separator size="normal"/>
            <MediumButton :target="scrollToImplementation" title="Continue to Implementation Details"/>
            <Separator size="normal"/>
            <div ref="implementation">
              <Implementation :form="form"/>
            </div>
            <Separator size="normal"/>
            <MediumButton :target="scrollToOrganization" title="Continue to Organization Details"/>
            <Separator size="normal"/>
            <div ref="organization">
              <Organization :form="form"/>
            </div>
          </div>
          <Separator size="normal"/>
          <div ref="completed" class="footer">
            <div class="footer-container">
              <div class="all-done-container">
                <img :src="allDoneIllustration" alt="Metadata Wizard Completed"/>
                <h2>metadata.apimap</h2>
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
          <router-link to="/folder"><img :src="navigationPreviousElement" alt="Create folder" height="40px"/>
          </router-link>
          <router-link to="/folder">Create folder</router-link>
        </div>
        <div class="next-content">
          <router-link to="/taxonomy/wizard"><img :src="navigationNextElement" alt="Add taxonomy" height="40px"/>
          </router-link>
          <router-link to="/taxonomy/wizard">Add Taxonomy</router-link>
        </div>
      </div>
    </Content>
    <Footer/>
  </div>
</template>

<script>
// Assets
import navigationNextElement from "@/assets/elements/navigation-next-element.svg";
import navigationPreviousElement from "@/assets/elements/navigation-previous-element.svg";
import allDoneIllustration from "@/assets/illustrations/all-done-illustration.svg";

// Components
import Footer from "@/components/Elements/Footer";
import LargeButton from "@/components/Navigation/LargeButton";
import MediumButton from "@/components/Navigation/MediumButton";
import StepNavigationContainer from "@/components/Navigation/StepNavigationContainer";
import StepNavigationElement from "@/components/Navigation/StepNavigationElement";
import ImportField from "@/components/Elements/ImportField";

// Pages
import Api from "@/pages/Metadata/WizardComponents/Api";
import ApiVersion from "@/pages/Metadata/WizardComponents/ApiVersion";
import Implementation from "@/pages/Metadata/WizardComponents/Implementation";
import Organization from "@/pages/Metadata/WizardComponents/Organization";

// Libs
import {saveToFile} from "@/utils/file-management.js";
import {scrollToComponentWithoutHistory} from "@/utils/window-management.js";
// noinspection ES6CheckImport
import {Content, ContentHeader, Separator, VerticalStackLayout} from "@apimap/layout-core";

// Data
import {RESET_METADATA_FORM, SET_METADATA_FORM_SELECTIONS} from "@/store/forms/store";
import {LOAD_METADATA_OPTIONS} from "@/store/content/store";

export default {
  name: "MetadataWizard",
  components: {
    StepNavigationElement,
    Content,
    ImportField,
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
  data: function () {
    return {
      allDoneIllustration,
      navigationPreviousElement,
      navigationNextElement
    };
  },
  methods: {
    fileDropped: function (value) {
      if (value === undefined || value['data'] === undefined) return;

      const data = {
        'api version': value['data']['api version'],
        'architecture layer': value['data']['architecture layer'],
        'business unit': value['data']['business unit'],
        'description': value['data']['description'],
        'documentation': value['data']['documentation'],
        'interface description language': value['data']['interface description language'],
        'interface specification': value['data']['interface specification'],
        'name': value['data']['name'],
        'release status': value['data']['release status'],
        'system identifier': value['data']['system identifier'],
        'visibility': value['data']['visibility']
      }

      this.$store.dispatch(SET_METADATA_FORM_SELECTIONS, data);
    },
    clearAll: function () {
      this.$store.dispatch(RESET_METADATA_FORM);
    },
    scrollToVersion: function () {
      this.scrollToComponent('version');
    },
    scrollToImplementation: function () {
      this.scrollToComponent('implementation');
    },
    scrollToOrganization: function () {
      this.scrollToComponent('organization');
    },
    scrollToComponent: function (refName) {
      scrollToComponentWithoutHistory(this, refName);
    },
    saveFile: function () {
      const dataobj = {data: {...this.form}};
      saveToFile(dataobj, "metadata.apimap");
    },
    copyToClipboard: function () {
      const dataobj = {data: {...this.form}};
      dataobj["api catalog version"] = "1";
      navigator.clipboard.writeText(JSON.stringify(dataobj, null, 2));
    }
  },
  mounted() {
    this.$store.dispatch(RESET_METADATA_FORM);
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

.next-content {
  width: 10em;
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 1.2em;
}

.next {
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

.download-options {
  margin: 2em 4em;
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
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
  margin: 0;
}
</style>
