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
              description="Your .apimap files created using our wizards"
              :target="scrollToComponent"
              reference="step1" />
          <StepNavigationElement
              title="Version-Control"
              description="Commit your files and push your changes to the server"
              :target="scrollToComponent"
              reference="step2" />
          <StepNavigationElement
              title="Build System"
              description="Detects your files and publishes your API"
              :target="scrollToComponent"
              reference="step3" />
          <StepNavigationElement
              title="Searchable"
              description="Your information is indexed and ready"
              :target="scrollToComponent"
              reference="step4" />
        </StepNavigationContainer>
        <img :src="buildSystemWorkflow" alt="Build System Workflow" />
      </VerticalStackLayout>
    </Content>
    <Content>
      <Guide title="Step by Step">
        <GuideStep number="1" title="Metadata And Taxonomy"  ref="step1">
          Create your metadata and taxonomy files using our,
          <router-link to="/metadata/wizard">Metadata Wizard</router-link>
          and <router-link to="/taxonomy/wizard">Taxonomy Wizard</router-link>. By default, the files should be stored in your source code root
          directory under a folder named "apimap". If you are working with mono repositories, your build step
          must include the path to the component root folder. This should be
          done in your Jenkinsfile
          <img :src="fileLocationIllustration" alt="File locations" class="step-by-step-image">
        </GuideStep>
        <GuideStep number="2" title="Version Control"  ref="step2">
          Add your Metadata and Taxonomy files to your source code repository
          and push the changes to trigger your build system
        </GuideStep>
        <GuideStep number="3" title="Build System"  ref="step3">
          If your build system is set up with our integration the "Apimap" step should be visible after the build
          has been completed. Read more about using the <router-link to="/workflow/build-system/jenkins-pipeline">Jenkins
          Pipeline</router-link>
        </GuideStep>
        <GuideStep number="4" title="Apimap"  ref="step4">
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
import fileLocationIllustration from "@/assets/illustrations/file-location-illustration.svg";
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
      fileLocationIllustration,
      scrollToComponentWithoutHistory
    };
  },
};
</script>

<style scoped>

.step-by-step-image{
  padding-top: 2em;
  padding-bottom: 1em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--image-background-color);
  width: 100%;
}

</style>
