<template>
  <div class="workflow-buildsystem">
    <ContentHeader
        title="Command-line interface (CLI) Workflow"
        introduction="The CLI workflow targets users that does not usa a CI/CD pipeline, or a CI/CD pipeline that is not supported by Apimap. The CLI supports all major operating systems." />
    <Content>
      <VerticalStackLayout class="content workflow-intro" >
        <StepNavigationContainer>
          <StepNavigationElement
              title="Metadata and Taxonomy"
              description="Create metadata and taxonomy files using the wizards"
              :target="scrollToComponent"
              reference="step1" />
          <StepNavigationElement
              title="CLI"
              description="Our command line interface to the solution"
              :target="scrollToComponent"
              reference="step2" />
          <StepNavigationElement
              title="Backup your files"
              description="Keep your files safe and secure"
              :target="scrollToComponent"
              reference="step3" />
          <StepNavigationElement
              title="Catalog"
              description="Your information is indexed and ready"
              :target="scrollToComponent"
              reference="step4" />
          <StepNavigationElement
              title="Backup your token"
              description="A unique token for each API, keep it secure and safe"
              :target="scrollToComponent"
              reference="step5" />
        </StepNavigationContainer>
      <img :src="cliWorkflow" alt="Cli Workflow" />
      </VerticalStackLayout>
    </Content>
    <Content>
      <Guide>
        <GuideStep number="1" title="Metadata And Taxonomy"  ref="step1">
          Create your metadata and taxonomy files using the
          <router-link to="/metadata/wizard">Metadata Wizard</router-link>
          and <router-link to="/taxonomy/wizard">Taxonomy Wizard</router-link>.
        </GuideStep>
        <GuideStep number="2" title="CLI"  ref="step2">
          <router-link to="/tools/cli">Download the CLI</router-link> and run the publish command to create or update your API information.
        </GuideStep>
        <GuideStep number="3" title="Backup Your Files"  ref="step3">
          Keep your metadata and taxonomy files somewhere safe and secure. Future updates may require them in the same location.
        </GuideStep>
        <GuideStep number="4" title="Catalog" ref="step4">
         Your information is now available in the catalog. Updating the data is as simple as changing the file content and running the CLI command "publish".
        </GuideStep>
        <GuideStep number="5" title="Backup Your Token" ref="step5">
          Upon creating a new API a unique token is assigned and returned. It is not possible to recreate this token and it is required in all future updates of your API.
          <GuideRecommandation recommendation="Keep the token safe and secure. It is used to deny accidental destruction of data." />
        </GuideStep>
      </Guide>
    </Content>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Elements/Footer";
import WorkflowStep from "@/components/Elements/WorkflowStep";
import GuideStep from "@/components/Elements/GuideStep";
import Guide from "@/components/Elements/Guide";
import GuideRecommandation from "@/components/Elements/GuideRecommendation";
import { Content, ContentHeader, VerticalStackLayout } from "@apimap/layout-core";
import cliWorkflow from "@/assets/illustrations/cli-workflow-illustration.svg";
import { scrollToComponentWithoutHistory } from "@/utils/window-management.js";
import StepNavigationContainer from "@/components/Navigation/StepNavigationContainer";
import StepNavigationElement from "@/components/Navigation/StepNavigationElement";

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
    GuideRecommandation
  },
  methods: {
    scrollToComponent: function(refName) {
      scrollToComponentWithoutHistory(this, refName);
    },
  },
  computed: {},
  data: function() {
    return {
      cliWorkflow,
      scrollToComponentWithoutHistory
    };
  },
};
</script>

<style scoped>

</style>
