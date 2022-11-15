<template>
  <div class="workflow-build-system">
    <ContentHeader
        introduction="The build system workflow targets users that uses a CI/CD pipeline alongside a code repository. It becomes a integrated
part of any git-ops environment since it automatically uploads and manages the API information."
        title="Continuous Build System (CI/CD) Workflow"/>
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
              description="Commit your files and push your changes to the server"
              reference="step2"
              title="Version-Control"/>
          <StepNavigationElement
              :target="scrollToComponent"
              description="Detects required files and publishes the API"
              reference="step3"
              title="Build System"/>
          <StepNavigationElement
              :target="scrollToComponent"
              description="The information is indexed and ready"
              reference="step4"
              title="Catalog"/>
        </StepNavigationContainer>
        <img :src="buildSystemWorkflow" alt="Build System Workflow"/>
      </VerticalStackLayout>
    </Content>
    <Content>
      <Guide>
        <GuideStep ref="step1" number="1" title="Metadata And Taxonomy">
          Create metadata and taxonomy files using the
          <router-link to="/metadata/wizard">Metadata Wizard</router-link>
          and
          <router-link to="/taxonomy/wizard">Taxonomy Wizard</router-link>
          . By default, the files should be stored in your source code root
          directory under a folder named "apimap". Alongside this information the Apimap integrations also uploads the
          README.md file and the CHANGELOG.md file.
        </GuideStep>
        <GuideStep ref="step2" number="2" title="Version Control">
          Add your Metadata and Taxonomy files to your source code repository
          and push the changes to trigger your build system
        </GuideStep>
        <GuideStep ref="step3" number="3" title="Build System">
          If your build system is integrated with "Apimap" the publish step should be visible after the build
          has been completed. Read more about using
          <router-link to="/tools/jenkins">Jenkins
            Pipeline
          </router-link>
        </GuideStep>
        <GuideStep ref="step4" number="4" title="Catalog">
          Your all done and your information is now available in the catalog. Updating the data is as simple as changing
          the file content and triggering a new build.
        </GuideStep>
      </Guide>
    </Content>
    <Footer/>
  </div>
</template>

<script>
// Assets
import buildSystemWorkflow from "@/assets/illustrations/buildsystem-workflow-illustration.svg";

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
  name: "WorkflowBuildsystem",
  components: {
    WorkflowStep,
    Content,
    ContentHeader,
    Guide,
    GuideStep,
    GuideRecommendation,
    StepNavigationContainer,
    StepNavigationElement,
    Footer,
    VerticalStackLayout
  },
  methods: {
    scrollToComponent: function (refName) {
      scrollToComponentWithoutHistory(this, refName);
    },
  },
  computed: {},
  data: function () {
    return {
      buildSystemWorkflow,
      scrollToComponentWithoutHistory
    };
  },
};
</script>

<style scoped>

</style>
