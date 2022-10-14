<template>
  <div class="cli">
    <ContentHeader
        title="Command Line Tool"
        introduction="Apimap's official command line tool" />
    <Content>
      <TabContainer :titles="['Windows', 'Linux', 'Mac']">
        <template v-slot:Windows>
          <Tab>
            <ul>
              <li><a v-bind:href="paths.windows['1.2.0']">Download Version 1.2.0 (Windows amd64)</a></li>
            </ul>
          </Tab>
          </template>
        <template v-slot:Mac>
          <Tab>
            <ul>
              <li><a v-bind:href="paths.macos['1.2.0']">Download Version 1.2.0 (MacOS amd64)</a></li>
            </ul>
          </Tab>
        </template>
        <template v-slot:Linux>
          <Tab>
            <ul>
              <li><a v-bind:href="paths.linux['1.2.0']">Download Version 1.2.0 (Linux amd64)</a></li>
            </ul>
          </Tab>
         </template>
       </TabContainer>
    </Content>
    <Content>
      <h2>Configuration</h2>
      <CommandLine
          title="Token Management"
          :available="['1.*.*']"
          command='apimap token'>
        <p>The API is open for all to use, although only the one creating an API gets the token to update or delete it afterwards. This token is automatically returned from the API upon creation and <strong>must be retained (Take backup)</strong>. Without this token you will never be able to update or delete any related information.</p>
      </CommandLine>
      <CommandLine
          title="Configuration Management"
          :available="['1.2.*']"
          command='apimap config'>
        <p>View CLI configuration</p>
      </CommandLine>
      <CommandLine
          title="Endpoint Management"
          :available="['1.2.*']"
          command='apimap config endpoint --url=<>'>
        <p>While working towards a single Apimap instance the endpoint URL specified here is used across all commands.</p>
        <ParameterGroup
            heading="Required parameters">
          <Parameter
              name="--url"
              description="Define the Apimap instance url. E.g. http://localhost:8080."
              default-value=""/>
        </ParameterGroup>
      </CommandLine>
    </Content>
    <Content>
      <h2>Usage</h2>
      <CommandLine
        title="Publish Your API"
        :available="['1.*.*']"
        command='apimap publish --metadata=<> --taxonomy=<> --endpoint=<> --token=<> --code-repository-url=<>'>
        <p>Publish your metadata and taxonomy to the designated Apimap instance. This command creates your API if it is missing and manages your access tokens automatically. </p>
        <ParameterGroup
            heading="Required parameters">
          <Parameter
              name="--metadata"
              description="File path to the metadata file to be published. E.g my-api/metadata.apimap."
              default-value=""/>
          <Parameter
              name="--taxonomy"
              description="File path to the taxonomy file to be published. E.g my-api/taxonomy.apimap."
              default-value=""/>
          <Parameter
              name="--code-repository-url"
              description="URL to the source code repository of this API. If the source code is not available this argument should be skipped."
              default-value=""/>
        </ParameterGroup>
        <ParameterGroup
            heading="Optional parameters">
          <Parameter
              name="--endpoint"
              description="If a endpoint is pre-configured this is optional."
              default-value=""/>
          <Parameter
              name="--token"
              description="If a token is pre-configured this is optional."
              default-value=""/>
        </ParameterGroup>
      </CommandLine>
      <CommandLine
        title="Validate Your Content"
        :available="['1.*.*']"
        command='apimap validate --metadata=<> --taxonomy=<>'>
        <p>Validate the file format and content requirements in your files locally.</p>
        <ParameterGroup
            heading="Required parameters">
          <Parameter
              name="--metadata"
              description="File path to the metadata file to be published. E.g my-api/metadata.apimap."
              default-value=""/>
          <Parameter
              name="--taxonomy"
              description="File path to the taxonomy file to be published. E.g my-api/taxonomy.apimap."
              default-value=""/>
        </ParameterGroup>
      </CommandLine>
      <CommandLine
        title="Rename API"
        :available="['1.2.*']"
        command='apimap rename --from=<> --to=<> --endpoint=<>'>
        <p>Please note that this changes the name in associated with the API and not the name specified in the metadata file. It is important to also update and upload a new metadata file.</p>
        <ParameterGroup
            heading="Required parameters">
          <Parameter
              name="--from"
              description="The current API name."
              default-value=""/>
          <Parameter
              name="--to"
              description="The new API name."
              default-value=""/>
        </ParameterGroup>
        <ParameterGroup
            heading="Optional parameters">
          <Parameter
              name="--endpoint"
              description="If a endpoint is pre-configured this is optional."
              default-value=""/>
          <Parameter
              name="--token"
              description="If a token is pre-configured this is optional."
              default-value=""/>
        </ParameterGroup>
      </CommandLine>
      <CommandLine
          title="Delete API"
          :available="['1.2.*']"
          command='apimap delete --api=<> --version=<> --recursive=<> --endpoint=<> --token=<> --confirmation=<>'>
        <p>Delete a API version or complete API from the catalog.</p>
        <ParameterGroup
            heading="Required parameters">
          <Parameter
              name="--api"
              description="Name of the API to be deleted."
              default-value=""/>
          <Parameter
              name="--version"
              description="Name of the API version to be deleted."
              default-value=""/>
          <Parameter
              name="--recursive"
              description="Delete single version or all versions."
              default-value=""/>
          <Parameter
              name="--confirmation"
              description="Yes/No to confirm that the command is intentionally."
              default-value=""/>
        </ParameterGroup>
        <ParameterGroup
            heading="Optional parameters">
          <Parameter
              name="--endpoint"
              description="If a endpoint is pre-configured this is optional."
              default-value=""/>
          <Parameter
              name="--token"
              description="If a token is pre-configured this is optional."
              default-value=""/>
        </ParameterGroup>
      </CommandLine>
      <CommandLine
          title="API Documentation Management"
          :available="['1.2.*']"
          command='apimap document --api=<> --changelog=<> --readme=<> --token=<> --version=<> --endpoint=<>'>
        <p>Manage the README.md and CHANGELOG.md files associated with the API.</p>
        <ParameterGroup
            heading="Required parameters">
          <Parameter
              name="--api"
              description="Name of the API to be updated"
              default-value=""/>
          <Parameter
              name="--version"
              description="Name of the API version to be updated"
              default-value=""/>
          <Parameter
              name="--changelog"
              description="File path to the CHANGELOG.md file to be published. E.g my-api/CHANGELOG.md"
              default-value=""/>
          <Parameter
              name="--readme"
              description="File path to the README.md file to be published. E.g my-api/README.md"
              default-value=""/>
        </ParameterGroup>
        <ParameterGroup
            heading="Optional parameters">
          <Parameter
              name="--endpoint"
              description="If a endpoint is pre-configured this is optional."
              default-value=""/>
          <Parameter
              name="--token"
              description="If a token is pre-configured this is optional."
              default-value=""/>
        </ParameterGroup>
      </CommandLine>
      <CommandLine
        title="More Commands"
        :available="['1.*.*']"
        command="apimap --help">
        <p>Use the --help command to explore more possibilities</p>
      </CommandLine>
    </Content>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Elements/Footer";
import TabContainer from "@/components/Elements/TabContainer";
import Tab from "@/components/Elements/Tab";
import CommandLine from "@apimap/command-line";
import { Content, ContentHeader, CenterLayout } from "@apimap/layout-core";
import { Downloads } from "@/router/paths";
import Parameter from "@/components/Elements/Parameter";
import ParameterGroup from "@/components/Elements/ParameterGroup";
import MediumButton from "@/components/Navigation/MediumButton";

export default {
  name: "CliTool",
  components: {
    ParameterGroup,
    MediumButton,
    Parameter,
    CenterLayout,
    Content,
    ContentHeader,
    Tab,
    Footer,
    TabContainer,
    CommandLine,
  },
  data: function() {
    return {
      paths: Downloads.cli
    };
  },
};
</script>

<style scoped>

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding-top: 1em;
  padding-bottom: 1em;
}

a {
  background-color: #DBD8E3;
  border-radius: 0.2em;
  color: #5c5470;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  text-align: center;
  font-weight: bolder;
  font-size: 0.8em;
}

a:hover {
  color: #DBD8E3;
  background-color: #5c5470;
  text-decoration: none;
  cursor: pointer;
}

</style>
