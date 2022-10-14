<template>
  <div class="workflow">
    <ContentHeader
        title="Jenkins Integration"
        introduction="Apimap is integrated with Jenkins through a plugin available when using Jenkins Pipeline as Code."/>
    <Content>
      Apimap is available through the default Jenkins repository or from their website <a href="https://plugins.jenkins.io/apimap/" target="_blank">https://plugins.jenkins.io/apimap/</a>
    </Content>
    <Content>
      <CommandLine
          title="Validate Apimap files"
          :command="validate()" />
      <p>Validate the metadata and taxonomy file structure before publishing.</p>
      <ParameterGroup
          heading="Required parameters">
        <Parameter
            name="metadataFile"
            description="Name of the API to be updated."
            default-value="apimap/metadata.apimap"/>
        <Parameter
            name="taxonomyFile"
            description="Name of the API version to be updated."
            default-value="apimap/taxonomy.apimap"/>
      </ParameterGroup>
    </Content>
    <Content>
      <CommandLine
          title="Publish to Apimap"
          :command="publish()" />
      <p>Upload metadata, taxonomy, readme and changelog.</p>
      <ParameterGroup
          heading="Required parameters">
        <Parameter
            name="metadataFile"
            description="Name of the API to be updated."
            default-value="apimap/metadata.apimap"/>
        <Parameter
            name="taxonomyFile"
            description="Name of the API version to be updated."
            default-value="apimap/taxonomy.apimap"/>
        <Parameter
            name="repositoryURL"
            description="Name of the API version to be updated."
            default-value=""/>
      </ParameterGroup>
      <ParameterGroup
          heading="Optional parameters">
        <Parameter
            name="changelogFile"
            description="If a endpoint is pre-configured this is optional."
            default-value="CHANGELOG.md"/>
        <Parameter
            name="readmeFile"
            description="If a token is pre-configured this is optional."
            default-value="README.md"/>
      </ParameterGroup>
    </Content>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Elements/Footer";
import MediumButton from "@/components/Navigation/MediumButton";
import { Content, ContentHeader } from "@apimap/layout-core"
import CommandLine from "@apimap/command-line";
import Parameter from "@/components/Elements/Parameter";
import ParameterGroup from "@/components/Elements/ParameterGroup";

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
    validate: function(){
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
