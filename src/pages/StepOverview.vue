<template>
  <div class="step-overview">
    <CenterLayout/>
    <ContentHeader
        introduction="Follow the 4 easy steps to add a new API to the catalog."
        title="Four Easy Steps"/>
    <Steps>
      <Step :image="CreateFolderElement"
            number="1"
            target="/folder"
            title="Create Folder"
      />
      <StepIllustration :image="ArrowElement"/>
      <Step :image="AddToFolderElement"
            number="2"
            target="/metadata/wizard"
            title="Add Metadata"
      />
      <StepIllustration :image="ArrowElement"/>
      <Step :image="AddToFolderElement"
            number="3"
            target="/taxonomy/wizard"
            title="Add Taxonomy"
      />
      <StepIllustration :image="ArrowElement"/>
      <Step :image="FolderToCloudElement"
            number="4"
            target="/workflow"
            title="Publish Changes"
      />
    </Steps>
    <Content>
      <Guide>
        <GuideStep ref="step1" number="1" title="Create a Folder">
          By default the files should be stored alongside your source code
          directory in a folder named "apimap".
          <router-link to="/folder">Read more</router-link>
        </GuideStep>
        <GuideStep ref="step2" number="2" title="Add Metadata">
          Your API has some technical preferences and architectural decisions that needs to be communicated in order to
          enable other developer to reuse the functionality.
          This should be done in the metadata file using the
          <router-link to="/metadata/wizard">Metadata Wizard</router-link>
          .
        </GuideStep>
        <GuideStep ref="step3" number="3" title="Add Taxonomy">
          Your API provides functionality to others, and this functionality needs to be described using a common
          taxonomy.
          This should be done in the taxonomy file using the
          <router-link to="/taxonomy/wizard">Taxonomy Wizard</router-link>
          .
        </GuideStep>
        <GuideStep ref="step4" number="4" title="Publish Changes">
          Upload your changes using a supported CI/CD pipeline, our CLI tool or directly using the Apimap API.
          <router-link to="/workflow">Read more</router-link>
        </GuideStep>
      </Guide>
    </Content>
    <Footer/>
  </div>
</template>

<script>
// Assets
import AddToFolderElement from "@/assets/elements/add-to-folder-element.svg";
import FolderToCloudElement from "@/assets/elements/folder-to-cloud-element.svg";
import CreateFolderElement from "@/assets/elements/folder-element.svg";
import ArrowElement from "@/assets/elements/step-element.svg";

// Components
import Footer from "@/components/Elements/Footer";
import Steps from "@/components/Elements/Steps";
import Step from "@/components/Elements/Step";
import GuideStep from "@/components/Elements/GuideStep";
import Guide from "@/components/Elements/Guide";
import GuideRecommendation from "@/components/Elements/GuideRecommendation";
import StepIllustration from "@/components/Elements/StepIllustration";

// Libs
// noinspection ES6CheckImport
import {CenterLayout, Content, ContentHeader} from "@apimap/layout-core"

export default {
  name: "StepOverview",
  components: {
    GuideRecommendation,
    GuideStep,
    Guide,
    CenterLayout,
    Content,
    StepIllustration,
    Steps,
    Step,
    ContentHeader,
    Footer,
  },
  data: function () {
    return {
      AddToFolderElement,
      FolderToCloudElement,
      CreateFolderElement,
      ArrowElement
    }
  }
};
</script>

<style scoped>

</style>
