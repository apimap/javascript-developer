<template>
  <div class="workflow">
    <ContentHeader
        introduction="Apimap is integrated with Jenkins through a plugin available when using Jenkins Pipeline as Code."
        title="Jenkins Integration"/>
    <Content>
      Apimap is available through the default Jenkins repository or from their website <a
        href="https://plugins.jenkins.io/apimap/" target="_blank">https://plugins.jenkins.io/apimap/</a>
    </Content>
    <Content>
      <CommandLine
          :command="validate()"
          title="Validate Apimap files"/>
      <p>Validate the metadata and taxonomy file structure before publishing.</p>
      <ParameterGroup
          heading="Required parameters">
        <Parameter
            default-value="apimap/metadata.apimap"
            description="Name of the API to be updated."
            name="metadataFile"/>
        <Parameter
            default-value="apimap/taxonomy.apimap"
            description="Name of the API version to be updated."
            name="taxonomyFile"/>
      </ParameterGroup>
    </Content>
    <Content>
      <CommandLine
          :command="publish()"
          title="Publish to Apimap"/>
      <p>Upload metadata, taxonomy, readme and changelog.</p>
      <ParameterGroup
          heading="Required parameters">
        <Parameter
            default-value="apimap/metadata.apimap"
            description="Name of the API to be updated."
            name="metadataFile"/>
        <Parameter
            default-value="apimap/taxonomy.apimap"
            description="Name of the API version to be updated."
            name="taxonomyFile"/>
        <Parameter
            default-value=""
            description="Name of the API version to be updated."
            name="repositoryURL"/>
      </ParameterGroup>
      <ParameterGroup
          heading="Optional parameters">
        <Parameter
            default-value="CHANGELOG.md"
            description="If a endpoint is pre-configured this is optional."
            name="changelogFile"/>
        <Parameter
            default-value="README.md"
            description="If a token is pre-configured this is optional."
            name="readmeFile"/>
      </ParameterGroup>
    </Content>
    <Footer/>
  </div>
</template>

<script>
// Assets

// Components
import Footer from "@/components/Elements/Footer";
import MediumButton from "@/components/Navigation/MediumButton";
import Parameter from "@/components/Elements/Parameter";
import ParameterGroup from "@/components/Elements/ParameterGroup";

// Libs
// noinspection ES6CheckImport
import {Content, ContentHeader} from "@apimap/layout-core"

import CommandLine from "@apimap/command-line";

// Data

export default {
  name: "Jenkins",
  components: {
    Content,
    ContentHeader,
    Footer,
    MediumButton,
    CommandLine,
    ParameterGroup,
    Parameter
  },
  methods: {
    validate: function () {
      return 'stage(\'Validate Apimap files\'){\n' +
          '  steps{\n' +
          '    script{\n' +
          '      def result = validateAPI metadataFile: \'apimap/metadata.apimap\', \n' +
          '        taxonomyFile: \'apimap/taxonomy.apimap\'\n' +
          '\n' +
          '      echo result.getDescription()\n' +
          '    }\n' +
          '  }\n' +
          '}';
    },
    publish: function () {
      return 'stage(\'Publish to Apimap\'){\n' +
          '  steps{\n' +
          '    script{\n' +
          '      def result = publishAPI metadataFile: \'apimap/metadata.apimap\',\n' +
          '        taxonomyFile: \'apimap/taxonomy.apimap\',\n' +
          '        readmeFile: \'README.md\',\n' +
          '        changelogFile: \'CHANGELOG.md\',\n' +
          '        repositoryURL: scm.getUserRemoteConfigs()[0].getUrl()\n' +
          '\n' +
          '      echo result.getStatus().toString()\n' +
          '      echo result.getDescription()\n' +
          '      echo result.getToken()\n' +
          '    }\n' +
          '  }\n' +
          '}';
    }
  }
};
</script>

<style scoped>
</style>
