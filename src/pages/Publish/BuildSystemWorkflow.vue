<template>
  <div class="workflow-build-system">
    <ContentHeader
      title="Continuous Build System (CI/CD) Workflow"
      introduction="The build system workflow targets users that uses a CI/CD pipeline alongside a code repository. It becomes a integrated
part of any git-ops environment since it automatically uploads and manages the API information." />
    <Content>
      <VerticalStackLayout class="content workflow-intro">
        <StepNavigationContainer>
          <StepNavigationElement
              title="Metadata and Taxonomy"
              description="Create metadata and taxonomy files using the wizards"
              :target="scrollToComponent"
              reference="step1" />
          <StepNavigationElement
              title="Version-Control"
              description="Commit your files and push your changes to the server"
              :target="scrollToComponent"
              reference="step2" />
          <StepNavigationElement
              title="Build System"
              description="Detects required files and publishes the API"
              :target="scrollToComponent"
              reference="step3" />
          <StepNavigationElement
              title="Catalog"
              description="The information is indexed and ready"
              :target="scrollToComponent"
              reference="step4" />
        </StepNavigationContainer>
        <img :src="buildSystemWorkflow" alt="Build System Workflow" />
      </VerticalStackLayout>
    </Content>
    <Content>
      <Guide>
        <GuideStep number="1" title="Metadata And Taxonomy"  ref="step1">
          Create metadata and taxonomy files using the <router-link to="/metadata/wizard">Metadata Wizard</router-link>
          and <router-link to="/taxonomy/wizard">Taxonomy Wizard</router-link>. By default, the files should be stored in your source code root
          directory under a folder named "apimap". Alongside this information the Apimap integrations also uploads the README.md file and the CHANGELOG.md file.
        </GuideStep>
        <GuideStep number="2" title="Version Control"  ref="step2">
          Add your Metadata and Taxonomy files to your source code repository
          and push the changes to trigger your build system
        </GuideStep>
        <GuideStep number="3" title="Build System"  ref="step3">
          If your build system is integrated with "Apimap" the publish step should be visible after the build
          has been completed. Read more about using <router-link to="/tools/jenkins">Jenkins
          Pipeline</router-link>
        </GuideStep>
        <GuideStep number="4" title="Catalog"  ref="step4">
          Your all done and your information is now available in the catalog. Updating the data is as simple as changing
          the file content and triggering a new build.
        </GuideStep>
      </Guide>
    </Content>
    <Footer />
  </div>
</template>

<script>

import Footer from "@/components/Elements/Footer";
import WorkflowStep from "@/components/Elements/WorkflowStep";
import GuideStep from "@/components/Elements/GuideStep";
import Guide from "@/components/Elements/Guide";
import GuideRecommandation from "@/components/Elements/GuideRecommendation";
import { Content, ContentHeader, VerticalStackLayout, CenterLayout } from "@apimap/layout-core";
import StepNavigationContainer from "@/components/Navigation/StepNavigationContainer";
import StepNavigationElement from "@/components/Navigation/StepNavigationElement";
import buildSystemWorkflow from "@/assets/illustrations/buildsystem-workflow-illustration.svg";
import { scrollToComponentWithoutHistory } from "@/utils/window-management.js";

export default {
  name: "WorkflowBuildsystem",
  components: {
    WorkflowStep,
    Content,
    ContentHeader,
    Guide,
    GuideStep,
    GuideRecommandation,
    CenterLayout,
    StepNavigationContainer,
    StepNavigationElement,
    Footer,
    VerticalStackLayout
  },
  methods: {
    scrollToComponent: function(refName) {
      scrollToComponentWithoutHistory(this, refName);
    },
  },
  computed: {},
  data: function() {
    return {
      buildSystemWorkflow,
      scrollToComponentWithoutHistory
    };
  },
};
</script>

<style scoped>

</style>
