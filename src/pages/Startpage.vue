<template>
  <div class="startpage">
    <ContentHeader
        introduction="APIs are much more than just code, they deliver reusable functionality to the organization."
        title="Discovery functionality"/>
    <Content>
      <div class="columns">
        <div>
          <router-link to="steps">
            <div class="center"><img :src="workflowOverview" alt="Workflow Overview" class="workflowOverview"/></div>
          </router-link>
        </div>
        <div class="buttons">
          <router-link class="button large-button" to="/folder">Add a New API</router-link>
          <a :href="portalUrl" class="inverted-button small-button">Discover available APIs</a>
        </div>
      </div>
    </Content>
    <ContentHeader
        introduction="Share and Discover APIs across the organisation.

Application programming interface (API): Point of functional integration between two or more systems connected through commonly known standards. APIs are everything connecting functionality across computers, not just REST."
        title="Share and Discover"/>
    <Content/>
    <ContentHeader
        introduction="Share and make functionality available to the organization with the following 4 steps."
        title="Publishing your API"/>
    <Content>
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
    </Content>
    <ContentHeader
        introduction="The abbreviation API is broken up into three parts: Application, Programming and Interface.

Application means a computer system, Programming means it is used when creating a system and Interface means it hides the implementation details.

We can make a sketch of this: Computer systems program → API Now we have a program running on a computer, which invokes an API. It invokes the API since we have programmed it to do so. We do not know the implementation details of the API. All we know is the interface it exposes and how we can communicate with it.

Organizations often have several hundred (maybe thousands) APIs that can be used by computer systems. This is why we have made the catalog: to categorize them and make it easier for programmers to find and make use of them.

In our case an API is usually is implemented by another computer system, but we also have cases where the implementation of the API is done inside a library. In that case, there will not be a network between them. We usually have these two cases:

- A computer systems program → API implemented on a different computer systems program
- A computer systems program → API implemented in a library provided by someone else

We hope that this will make it easier to understand what we mean by an API."
        title="Application programming interface (API)"/>
    <Footer/>
  </div>
</template>

<script>

// Assets
import AddToFolderElement from "@/assets/elements/add-to-folder-element.svg";
import FolderToCloudElement from "@/assets/elements/folder-to-cloud-element.svg";
import CreateFolderElement from "@/assets/elements/folder-element.svg";
import workflowOverview from "@/assets/illustrations/workflow-illustration.svg";
import ArrowElement from "@/assets/elements/step-element.svg";

// Components
import StepIllustration from "@/components/Elements/StepIllustration";
import Steps from "@/components/Elements/Steps";
import Step from "@/components/Elements/Step";
import Footer from "@/components/Elements/Footer";
import CallForActionButton from "@/components/Elements/CallForActionButton";

// Libs
import CodeDisplay from "@apimap/code-display";
// noinspection ES6CheckImport
import {Content, ContentHeader} from "@apimap/layout-core";

// Data
import {MetadataExamples} from "@/data/MetadataExamples";
import {TaxonomyExamples} from "@/data/TaxonomyExamples";

export default {
  name: "Startpage",
  components: {
    CallForActionButton,
    Step,
    StepIllustration,
    Steps,
    Content,
    Footer,
    CodeDisplay,
    ContentHeader
  },
  data: function () {
    return {
      workflowOverview,
      AddToFolderElement,
      FolderToCloudElement,
      CreateFolderElement,
      ArrowElement,
      taxonomyExample: TaxonomyExamples.one,
      metadataExample: MetadataExamples.one,
    };
  },
  computed: {
    portalUrl() {
      return APIMAP_PORTAL_URL;
    }
  },
};
</script>

<style scoped>

.workflowOverview {
  padding-top: 2em;
  padding-bottom: 2em;
}

.center {
  text-align: center;
  width: 100%;
}

.columns {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.large-button {
  font-size: 2em;
}

.small-button {
  font-size: 1.2em;
}

</style>
