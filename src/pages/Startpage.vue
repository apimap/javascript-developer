<template>
  <div class="startpage">
    <ContentHeader
        title="Discovery functionallity"
        introduction="APIs are much more than just code, they deliver reusable functionality to the organization." />
    <Content>
      <router-link to="steps"><div class="center"><img :src="workflowOverview" class="workflowOverview"/></div></router-link>
    </Content>
    <Content>
      <CallForActionButton target="steps" title="Click here to get started!" />
    </Content>
    <ContentHeader
        title="Share and Discover"
        introduction="Share and Discover APIs across the organisation.

Application programming interface (API): Point of functional integration between two or more systems connected through commonly known standards. APIs are everything connecting functionality across computers, not just REST." />
    <Content/>
    <ContentHeader
        title="Publishing your API"
        introduction="Share and make functionality available to the organization with the following 4 steps." />
    <Content>
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
    </Content>
    <ContentHeader
          title="Application programming interface (API)"
          introduction="The abbreviation API is broken up into three parts: Application, Programming and Interface.

Application means a computer system, Programming means it is used when creating a system and Interface means it hides the implementation details.

We can make a sketch of this: Computer systems program → API Now we have a program running on a computer, which invokes an API. It invokes the API since we have programmed it to do so. We do not know the implementation details of the API. All we know is the interface it exposes and how we can communicate with it.

Organizations often have several hundred (maybe thousands) APIs that can be used by computer systems. This is why we have made the catalog: to categorize them and make it easier for programmers to find and make use of them.

In our case an API is usually is implemented by another computer system, but we also have cases where the implementation of the API is done inside a library. In that case, there will not be a network between them. We usually have these two cases:

- A computer systems program → API implemented on a different computer systems program
- A computer systems program → API implemented in a library provided by someone else

We hope that this will make it easier to understand what we mean by an API." />
    <Footer />
  </div>
</template>

<script>
import StepIllustration from "@/components/Elements/StepIllustration";
import Steps from "@/components/Elements/Steps";
import Step from "@/components/Elements/Step";
import Footer from "@/components/Elements/Footer";

import AddToFolderElement from "@/assets/elements/add-to-folder-element.svg";
import FolderToCloudElement from "@/assets/elements/folder-to-cloud-element.svg";
import CreateFolderElement from "@/assets/elements/folder-element.svg";
import workflowOverview from "@/assets/illustrations/workflow-illustration.svg";
import ArrowElement from "@/assets/elements/step-element.svg";

import CodeDisplay from "@apimap/code-display";

import { Content, VerticalStackLayout, CenterLayout, ContentHeader } from "@apimap/layout-core";

import { MetadataExamples } from "@/data/MetadataExamples";
import { TaxonomyExamples } from "@/data/TaxonomyExamples";
import CallForActionButton from "@/components/Elements/CallForActionButton";

export default {
  name: "Startpage",
  components: {
    CallForActionButton,
    Step,
    StepIllustration,
    Steps,
    Content,
    Footer,
    VerticalStackLayout,
    CodeDisplay,
    ContentHeader,
    CenterLayout,
  },
  data: function() {
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
};
</script>

<style scoped>

.workflowOverview{
  padding-top: 2em;
  padding-bottom: 2em;
}

.center {
  text-align: center;
  width: 100%;
}

</style>
