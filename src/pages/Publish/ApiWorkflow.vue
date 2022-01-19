<template>
  <div class="api-workflow">
    <ContentHeader
        title="API Workflow"
        introduction="The API workflow targets advanced system-to-system integrations that is not already supported by a Apimap component. This is most commonly used to add support to automation tools."/>
    <Content>
      <VerticalStackLayout class="content workflow-intro">
        <StepNavigationContainer>
          <StepNavigationElement
              title="Metadata and Taxonomy"
              description="Your .apimap files created using our wizards"
              :target="scrollToComponent"
              reference="step1" />
          <StepNavigationElement
              title="API"
              description="Direct system-to-system integration"
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
        <img :src="apiWorkflow" alt="API Workflow" />
      </VerticalStackLayout>
    </Content>
    <Content>
      <Guide title="Step by Step">
        <GuideStep number="1" title="Metadata And Taxonomy"  ref="step1">
          Create your metadata and taxonomy files using our,
          <router-link to="/metadata/wizard">Metadata Wizard</router-link>
          and <router-link to="/taxonomy/wizard">Taxonomy Wizard</router-link>.
        </GuideStep>
        <GuideStep number="2" title="API"  ref="step2">
          The Apimap API documentation is a part of the java-api project and available at <a href="https://github.com/apimap/java-api/blob/master/DEVELOPER.md">DEVELOPER.md</a>
          <CommandLine
              title="CURL (Create API)"
              command="curl -d '{&#34;data&#34;:{&#34;type&#34;:&#34;api:element&#34;,&#34;attributes&#34;:{&#34;name&#34;:&#34;Apimap Example API&#34;,&#34;codeRepository&#34;:&#34;https://github.com/apimap/java-api&#34;}}}' -H &#34;Content-Type: application/json&#34; -X POST http://localhost:8080/api" />
          <GuideRecommandation recommendation="The JSON returned contains a API_TOKEN that must be used in every request." />
          <CommandLine
            title="CURL (Create API Version)"
            command="curl -d '{&#34;data&#34;:{&#34;type&#34;:&#34;version:element&#34;,&#34;attributes&#34;:{&#34;version&#34;:&#34;1.0.0&#34;,&#34;created&#34;:null}}}' -H &#34;Content-Type: application/json&#34; -H &#34;Authorization: Bearer <API_TOKEN>&#34; -X POST http://localhost:8080/api/Apimap+Example+API/version" />
          <CommandLine
            title="CURL (Upload Metadata)"
            command="curl -d '{&#34;data&#34;:{&#34;type&#34;:&#34;metadata:element&#34;,&#34;attributes&#34;:{&#34;name&#34;:&#34;Apimap Example API&#34;,&#34;visibility&#34;:&#34;Public&#34;,&#34;description&#34;:&#34;Apimap Example API&#34;,&#34;api version&#34;:&#34;1.0.0&#34;,&#34;release status&#34;:&#34;Design&#34;,&#34;system identifier&#34;:&#34;Apimap.io&#34;,&#34;documentation&#34;:[&#34;https://github.com/apimap/java-api&#34;],&#34;interface specification&#34;:&#34;JSON:API v1.1&#34;,&#34;interface description language&#34;:&#34;OpenAPI Specification&#34;,&#34;architecture layer&#34;:&#34;Backend&#34;,&#34;business unit&#34;:&#34;Apimap.io&#34;},&#34;id&#34;:&#34;Apimap Example API#1.0.0&#34;}}' -H &#34;Content-Type: application/json&#34; -H &#34;Authorization: Bearer <API_TOKEN>&#34; -X POST http://localhost:8080/api/Apimap+Example+API/version/1.0.0/metadata" />
          <CommandLine
            title="CURL (Upload Taxonomy)"
            command="curl -d '{&#34;data&#34;:[{&#34;type&#34;:&#34;classification:element&#34;,&#34;attributes&#34;:{&#34;urn&#34;:&#34;urn:apimap:1&#34;,&#34;taxonomyVersion&#34;:&#34;1&#34;},&#34;id&#34;:&#34;urn:apimap:1#1&#34;}]}' -H &#34;Content-Type: application/json&#34; -H &#34;Authorization: Bearer <API_TOKEN>&#34; -X POST http://localhost:8080/api/Apimap+Example+API/version/1.0.0/classification" />
          <GuideRecommandation recommendation="The URLs to be used must be fetched from the server and not written in the code." />
        </GuideStep>
        <GuideStep number="3" title="Backup Your Files"  ref="step3">
          Keep your metadata and taxonomy files somewhere safe and secure. Future updates may require them in the same location.
        </GuideStep>
        <GuideStep number="4" title="Catalog" ref="step4">
          Your information is now available in the catalog. To update the information create a PUT to the desired collection / resource and include the token returned from the initial API POST request.
        </GuideStep>
        <GuideStep number="5" title="Backup Your Token" ref="step5">
          Upon creating a new API a unique token is assigned and returned. It is not possible to recreate this token and it is required in all future updates of your API.
          <GuideRecommandation recommendation="Keep the token safe and secure." />
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
import { Content, ContentHeader, VerticalStackLayout } from "@apimap/layout-core";
import { scrollToComponentWithoutHistory } from "@/utils/window-management.js";
import StepNavigationContainer from "@/components/Navigation/StepNavigationContainer";
import StepNavigationElement from "@/components/Navigation/StepNavigationElement";
import CommandLine from "@apimap/command-line";
import apiWorkflow from "@/assets/illustrations/api-workflow-illustration.svg";

export default {
  name: "ApiWorkflow",
  components: {
    WorkflowStep,
    CommandLine,
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
      apiWorkflow,
      scrollToComponentWithoutHistory
    };
  },
};
</script>

<style scoped>
</style>
