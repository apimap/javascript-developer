<template>
  <div class="api-workflow">
    <ContentHeader
        introduction="The API workflow targets advanced system-to-system integrations that is not already supported by a Apimap component. This is most commonly used to add support to automation tools."
        title="API (REST) Workflow"/>
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
              description="Direct system-to-system integration"
              reference="step2"
              title="API"/>
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
        <img :src="apiWorkflow" alt="API Workflow"/>
      </VerticalStackLayout>
    </Content>
    <Content>
      <Guide>
        <GuideStep ref="step1" number="1" title="Metadata And Taxonomy">
          Create your metadata and taxonomy files using our,
          <router-link to="/metadata/wizard">Metadata Wizard</router-link>
          and
          <router-link to="/taxonomy/wizard">Taxonomy Wizard</router-link>
          .
        </GuideStep>
        <GuideStep ref="step2" number="2" title="API">
          The Apimap API documentation is a part of the java-api project and available at <a
            href="https://github.com/apimap/java-api/blob/master/DEVELOPER.md">DEVELOPER.md</a>
          <CommandLine
              :command="createApi()"
              title="CURL (Create API)"/>
          <GuideRecommendation
              recommendation="The JSON returned contains a API_TOKEN that must be used in every request."/>
          <CommandLine
              :command="createVersion()"
              title="CURL (Create API Version)"/>
          <CommandLine
              :command="createMetadata()"
              title="CURL (Upload Metadata)"/>
          <CommandLine
              :command="createTaxonomy()"
              title="CURL (Upload Taxonomy)"/>
          <GuideRecommendation
              recommendation="The URLs to be used must be fetched from the server and not written in the code."/>
        </GuideStep>
        <GuideStep ref="step3" number="3" title="Backup Your Files">
          Keep your metadata and taxonomy files somewhere safe and secure. Future updates may require them in the same
          location.
        </GuideStep>
        <GuideStep ref="step4" number="4" title="Catalog">
          Your information is now available in the catalog. To update the information use a API PUT request to the
          desired collection / resource and include the token returned from the initial API POST request.
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
import apiWorkflow from "@/assets/illustrations/api-workflow-illustration.svg";

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
import CommandLine from "@apimap/command-line";

// Data

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
    GuideRecommendation
  },
  methods: {
    scrollToComponent: function (refName) {
      scrollToComponentWithoutHistory(this, refName);
    },
    createApi: function () {
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
    createVersion: function () {
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
    createMetadata: function () {
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
    createTaxonomy: function () {
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
  data: function () {
    return {
      apiWorkflow,
      scrollToComponentWithoutHistory
    };
  },
};
</script>

<style scoped>
</style>
