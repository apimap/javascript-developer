<template>
  <div class="workflow-buildsystem">
    <ContentHeader
        introduction="The CLI workflow targets users that does not usa a CI/CD pipeline, or a CI/CD pipeline that is not supported by Apimap. The CLI supports all major operating systems."
        title="Command-line interface (CLI) Workflow"/>
    <Content>
      <VerticalStackLayout class="content workflow-intro">
        <StepNavigationContainer>
          <StepNavigationElement
              :target="scrollToComponent"
              description="Create metadata and taxonomy files using the wizards"
              reference="step1"
              title="Metadata and Taxonomy"/>
          <StepNavigationElement
              :target="scrollToComponent"
              description="Our command line interface to the solution"
              reference="step2"
              title="CLI"/>
          <StepNavigationElement
              :target="scrollToComponent"
              description="Keep your files safe and secure"
              reference="step3"
              title="Backup your files"/>
          <StepNavigationElement
              :target="scrollToComponent"
              description="Your information is indexed and ready"
              reference="step4"
              title="Catalog"/>
          <StepNavigationElement
              :target="scrollToComponent"
              description="A unique token for each API, keep it secure and safe"
              reference="step5"
              title="Backup your token"/>
        </StepNavigationContainer>
        <img :src="cliWorkflow" alt="Cli Workflow"/>
      </VerticalStackLayout>
    </Content>
    <Content>
      <Guide>
        <GuideStep ref="step1" number="1" title="Metadata And Taxonomy">
          Create your metadata and taxonomy files using the
          <router-link to="/metadata/wizard">Metadata Wizard</router-link>
          and
          <router-link to="/taxonomy/wizard">Taxonomy Wizard</router-link>
          .
        </GuideStep>
        <GuideStep ref="step2" number="2" title="CLI">
          <router-link to="/tools/cli">Download the CLI</router-link>
          and run the publish command to create or update your API information.
        </GuideStep>
        <GuideStep ref="step3" number="3" title="Backup Your Files">
          Keep your metadata and taxonomy files somewhere safe and secure. Future updates may require them in the same
          location.
        </GuideStep>
        <GuideStep ref="step4" number="4" title="Catalog">
          Your information is now available in the catalog. Updating the data is as simple as changing the file content
          and running the CLI command "publish".
        </GuideStep>
        <GuideStep ref="step5" number="5" title="Backup Your Token">
          Upon creating a new API a unique token is assigned and returned. It is not possible to recreate this token and
          it is required in all future updates of your API.
          <GuideRecommendation
              recommendation="Keep the token safe and secure. It is used to deny accidental destruction of data."/>
        </GuideStep>
      </Guide>
    </Content>
    <Footer/>
  </div>
</template>

<script>
// Assets
import cliWorkflow from "@/assets/illustrations/cli-workflow-illustration.svg";

// Components
import Footer from "@/components/Elements/Footer";
import WorkflowStep from "@/components/Elements/WorkflowStep";
import GuideStep from "@/components/Elements/GuideStep";
import Guide from "@/components/Elements/Guide";
import GuideRecommendation from "@/components/Elements/GuideRecommendation";
import StepNavigationContainer from "@/components/Navigation/StepNavigationContainer";
import StepNavigationElement from "@/components/Navigation/StepNavigationElement";

// Libs
// noinspection ES6CheckImport
import {Content, ContentHeader, VerticalStackLayout} from "@apimap/layout-core";

import {scrollToComponentWithoutHistory} from "@/utils/window-management.js";

// Data

export default {
  name: "WorkflowCli",
  components: {
    WorkflowStep,
    StepNavigationContainer,
    StepNavigationElement,
    Footer,
    Content,
    ContentHeader,
    VerticalStackLayout,
    Guide,
    GuideStep,
    GuideRecommendation
  },
  methods: {
    scrollToComponent: function (refName) {
      scrollToComponentWithoutHistory(this, refName);
    },
  },
  computed: {},
  data: function () {
    return {
      cliWorkflow,
      scrollToComponentWithoutHistory
    };
  },
};
</script>

<style scoped>

</style>
