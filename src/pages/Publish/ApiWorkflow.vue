<template>
  <div class="api-workflow">
    <ContentHeader
        title="API (REST) Workflow"
        introduction="The API workflow targets advanced system-to-system integrations that is not already supported by a Apimap component. This is most commonly used to add support to automation tools."/>
    <Content>
      <VerticalStackLayout class="content workflow-intro">
        <StepNavigationContainer>
          <StepNavigationElement
              title="Metadata and Taxonomy"
              description="Create metadata and taxonomy files using the wizards"
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
      <Guide>
        <GuideStep number="1" title="Metadata And Taxonomy"  ref="step1">
          Create your metadata and taxonomy files using our,
          <router-link to="/metadata/wizard">Metadata Wizard</router-link>
          and <router-link to="/taxonomy/wizard">Taxonomy Wizard</router-link>.
        </GuideStep>
        <GuideStep number="2" title="API"  ref="step2">
          The Apimap API documentation is a part of the java-api project and available at <a href="https://github.com/apimap/java-api/blob/master/DEVELOPER.md">DEVELOPER.md</a>
          <CommandLine
              title="CURL (Create API)"
              :command="createApi()" />
          <GuideRecommandation recommendation="The JSON returned contains a API_TOKEN that must be used in every request." />
          <CommandLine
            title="CURL (Create API Version)"
            :command="createVersion()" />
          <CommandLine
            title="CURL (Upload Metadata)"
            :command="createMetadata()" />
          <CommandLine
            title="CURL (Upload Taxonomy)"
            :command="createTaxonomy()" />
          <GuideRecommandation recommendation="The URLs to be used must be fetched from the server and not written in the code." />
        </GuideStep>
        <GuideStep number="3" title="Backup Your Files"  ref="step3">
          Keep your metadata and taxonomy files somewhere safe and secure. Future updates may require them in the same location.
        </GuideStep>
        <GuideStep number="4" title="Catalog" ref="step4">
          Your information is now available in the catalog. To update the information use a API PUT request to the desired collection / resource and include the token returned from the initial API POST request.
        </GuideStep>
        <GuideStep number="5" title="Backup Your Token" ref="step5">
          Upon creating a new API a unique token is assigned and returned. It is not possible to recreate this token and it is required in all future updates of your API.
          <GuideRecommandation recommendation="Keep the token safe and secure. It is used to deny accidental destruction of data." />
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
    createApi: function() {
      return 'curl -d \n' +
          '\'{ \n' +
          '  "data": { \n' +
          '    "type": "api:element",\n' +
          '    "attributes": { \n' +
          '      "name":"Apimap Example API",\n' +
          '      "codeRepository":"https://github.com/apimap/java-api"\n' +
          '    }\n' +
          '  }\n' +
          '}\'\n' +
          '-H "Content-Type: application/json" \n' +
          '-X POST\n' +
          'http://localhost:8080/api';
    },
    createVersion: function() {
      return 'curl -d \n' +
          '\'{ \n' +
          '  "data":{\n' +
          '    "type":"version:element",\n' +
          '    "attributes": {\n' +
          '      "version":"1.0.0"\n' +
          '    }\n' +
          '  }\n' +
          '}\'\n' +
          '-H "Content-Type: application/json" \n' +
          '-H "Authorization: Bearer <API_TOKEN>" \n' +
          '-X POST \n' +
          'http://localhost:8080/api/Apimap+Example+API/version';
    },
    createMetadata: function() {
      return 'curl -d \n' +
          '\'{\n' +
          '  "data":{\n' +
          '    "type":"metadata:element",\n' +
          '    "attributes": {\n' +
          '      "name":"Apimap Example API",\n' +
          '      "visibility":"Public",\n' +
          '      "description":"Apimap Example API",\n' +
          '      "api version":"1.0.0",\n' +
          '      "release status":"Design",\n' +
          '      "system identifier":"Apimap.io",\n' +
          '      "documentation":["https://github.com/apimap/java-api"],\n' +
          '      "interface specification":"JSON:API v1.1",\n' +
          '      "interface description language":"OpenAPI Specification",\n' +
          '      "architecture layer":"Backend",\n' +
          '      "business unit":"Apimap.io"\n' +
          '    }\n' +
          '  }\n' +
          '}\' \n' +
          '-H "Content-Type: application/json" \n' +
          '-H "Authorization: Bearer <API_TOKEN>" \n' +
          '-X POST \n' +
          'http://localhost:8080/api/Apimap+Example+API/version/1.0.0/metadata';
    },
    createTaxonomy: function() {
      return 'curl -d \n' +
          '\'{\n' +
          '  "data":[\n' +
          '    {\n' +
          '      "type":"classification:element",\n' +
          '      "attributes":{\n' +
          '        "urn":"urn:apimap:1",\n' +
          '        "taxonomyVersion":"1"\n' +
          '      }\n' +
          '    }\n' +
          '  ]\n' +
          '}\' \n' +
          '-H "Content-Type: application/json" \n' +
          '-H "Authorization: Bearer <API_TOKEN>" \n' +
          '-X POST \n' +
          'http://localhost:8080/api/Apimap+Example+API/version/1.0.0/classification';
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
