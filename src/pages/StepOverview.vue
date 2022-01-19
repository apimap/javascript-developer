<template>
  <div class="step-overview">
    <CenterLayout/>
    <ContentHeader
        title="Steps"
        introduction="Follow the 4 easy steps to add a new API to the catalog." />
    <Steps>
      <Step title="Create Folder"
            :image="CreateFolderElement"
            target="/folder"
            number="1"
      />
      <StepIllustration :image="ArrowElement"/>
      <Step title="Add Metadata"
            :image="AddToFolderElement"
            target="/metadata/wizard"
            number="2"
      />
      <StepIllustration :image="ArrowElement"/>
      <Step title="Add Taxonomy"
            :image="AddToFolderElement"
            target="/taxonomy/wizard"
            number="3"
      />
      <StepIllustration :image="ArrowElement"/>
      <Step title="Publish Changes"
            :image="FolderToCloudElement"
            target="/workflow"
            number="4"
      />
    </Steps>
    <Content>
      <Guide title="Step by Step">
        <GuideStep number="1" title="Create Folder"  ref="step1">
          Create your metadata and taxonomy files using our,
          <router-link to="/metadata/wizard">Metadata Wizard</router-link>
          and
          <router-link to="/taxonomy/wizard">Taxonomy Wizard</router-link>.
          By default, the files should be stored in your source code root
          directory under a folder named "apimap". If you are working with mono repositories, your build step
          must include the path to the component root folder. This should be
          done in your Jenkinsfile.
          <img :src="fileLocationIllustration" alt="File locations" class="step-by-step-image">
          <GuideRecommandation recommendation="Create a folder for each API and keep the metadata and taxonomy files together" />
        </GuideStep>
        <GuideStep number="2" title="Add Metadata"  ref="step2">
          Your API has some technical preferences and architectural decisions that needs to be convaied in order to enable other developer to reuse the functionality.
          This should be done in the metadata file using the <router-link to="/metadata/wizard">Metadata Wizard</router-link>.
        </GuideStep>
        <GuideStep number="3" title="Add Taxonomy"  ref="step3">
         Your API provides functionality to others, and this functionality needs to be described using a common taxonomy.
         This should be done in the taxonomy file using the <router-link to="/taxonomy/wizard">Taxonomy Wizard</router-link>.
        </GuideStep>
        <GuideStep number="4" title="Publish Changes"  ref="step4">
          Upload your changes using a CI/CD pipeline, CLI tool or directly using the Apimap API.
        </GuideStep>
      </Guide>
    </Content>
    <Footer />
  </div>
</template>

<script>
// Elements
import Footer from "@/components/Elements/Footer";

import Steps from "@/components/Elements/Steps";
import Step from "@/components/Elements/Step";

import StepIllustration from "@/components/Elements/StepIllustration";

import AddToFolderElement from "@/assets/elements/add-to-folder-element.svg";
import FolderToCloudElement from "@/assets/elements/folder-to-cloud-element.svg";
import CreateFolderElement from "@/assets/elements/folder-element.svg";
import ArrowElement from "@/assets/elements/step-element.svg";
import fileLocationIllustration from "@/assets/illustrations/file-location-illustration.svg";

// Layout
import { Content, CenterLayout, ContentHeader } from "@apimap/layout-core"
import GuideStep from "@/components/Elements/GuideStep";
import Guide from "@/components/Elements/Guide";
import GuideRecommandation from "@/components/Elements/GuideRecommendation";

export default {
  name: "StepOverview",
  components: {
    GuideRecommandation,
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
  data: function(){
    return {
      AddToFolderElement,
      FolderToCloudElement,
      CreateFolderElement,
      ArrowElement,
      fileLocationIllustration
    }
  }
};
</script>

<style scoped>

</style>
