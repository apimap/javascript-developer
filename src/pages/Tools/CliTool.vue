<template>
  <div class="cli">
    <ContentHeader
        introduction="Apimap's official command line tool"
        title="Command Line Tool"/>
    <Content>
      <TabContainer :titles="['Windows', 'Linux', 'Mac']">
        <template v-slot:Windows>
          <Tab>
            <ul>
              <li><a v-bind:href="paths.windows['1.2.1']">Download Version 1.2.1 (Windows amd64)</a></li>
              <li><a v-bind:href="paths.windows['1.2.0']">Download Version 1.2.0 (Windows amd64)</a></li>
            </ul>
          </Tab>
        </template>
        <template v-slot:Mac>
          <Tab>
            <ul>
              <li><a v-bind:href="paths.macos['1.2.1']">Download Version 1.2.1 (MacOS amd64)</a></li>
              <li><a v-bind:href="paths.macos['1.2.0']">Download Version 1.2.0 (MacOS amd64)</a></li>
            </ul>
          </Tab>
        </template>
        <template v-slot:Linux>
          <Tab>
            <ul>
              <li><a v-bind:href="paths.linux['1.2.1']">Download Version 1.2.1 (Linux amd64)</a></li>
              <li><a v-bind:href="paths.linux['1.2.0']">Download Version 1.2.0 (Linux amd64)</a></li>
            </ul>
          </Tab>
        </template>
      </TabContainer>
    </Content>
    <Content>
      <h2>Configuration</h2>
      <CommandLine
          :available="['1.*.*']"
          command='apimap token'
          title="Token Management">
        <p>The API is open for all to use, although only the one creating an API gets the token to update or delete it
          afterwards. This token is automatically returned from the API upon creation and <strong>must be retained (Take
            backup)</strong>. Without this token you will never be able to update or delete any related information.</p>
      </CommandLine>
      <CommandLine
          :available="['1.2.*']"
          command='apimap config'
          title="Configuration Management">
        <p>View CLI configuration</p>
      </CommandLine>
      <CommandLine
          :available="['1.2.*']"
          command='apimap config endpoint --url=<>'
          title="Endpoint Management">
        <p>While working towards a single Apimap instance the endpoint URL specified here is used across all
          commands.</p>
        <ParameterGroup
            heading="Required parameters">
          <Parameter
              default-value=""
              description="Define the Apimap instance url. E.g. http://localhost:8080."
              name="--url"/>
        </ParameterGroup>
      </CommandLine>
    </Content>
    <Content>
      <h2>Usage</h2>
      <CommandLine
          :available="['1.*.*']"
          command='apimap publish --metadata=<> --taxonomy=<> --endpoint=<> --token=<> --code-repository-url=<>'
          title="Publish Your API">
        <p>Publish your metadata and taxonomy to the designated Apimap instance. This command creates your API if it is
          missing and manages your access tokens automatically. </p>
        <ParameterGroup
            heading="Required parameters">
          <Parameter
              default-value=""
              description="File path to the metadata file to be published. E.g my-api/metadata.apimap."
              name="--metadata"/>
          <Parameter
              default-value=""
              description="File path to the taxonomy file to be published. E.g my-api/taxonomy.apimap."
              name="--taxonomy"/>
          <Parameter
              default-value=""
              description="URL to the source code repository of this API. If the source code is not available this argument should be skipped."
              name="--code-repository-url"/>
        </ParameterGroup>
        <ParameterGroup
            heading="Optional parameters">
          <Parameter
              default-value=""
              description="If a endpoint is pre-configured this is optional."
              name="--endpoint"/>
          <Parameter
              default-value=""
              description="If a token is pre-configured this is optional."
              name="--token"/>
        </ParameterGroup>
      </CommandLine>
      <CommandLine
          :available="['1.*.*']"
          command='apimap validate --metadata=<> --taxonomy=<>'
          title="Validate Your Content">
        <p>Validate the file format and content requirements in your files locally.</p>
        <ParameterGroup
            heading="Required parameters">
          <Parameter
              default-value=""
              description="File path to the metadata file to be published. E.g my-api/metadata.apimap."
              name="--metadata"/>
          <Parameter
              default-value=""
              description="File path to the taxonomy file to be published. E.g my-api/taxonomy.apimap."
              name="--taxonomy"/>
        </ParameterGroup>
      </CommandLine>
      <CommandLine
          :available="['1.2.*']"
          command='apimap rename --from=<> --to=<> --endpoint=<>'
          title="Rename API">
        <p>Please note that this changes the name in associated with the API and not the name specified in the metadata
          file. It is important to also update and upload a new metadata file.</p>
        <ParameterGroup
            heading="Required parameters">
          <Parameter
              default-value=""
              description="The current API name."
              name="--from"/>
          <Parameter
              default-value=""
              description="The new API name."
              name="--to"/>
        </ParameterGroup>
        <ParameterGroup
            heading="Optional parameters">
          <Parameter
              default-value=""
              description="If a endpoint is pre-configured this is optional."
              name="--endpoint"/>
          <Parameter
              default-value=""
              description="If a token is pre-configured this is optional."
              name="--token"/>
        </ParameterGroup>
      </CommandLine>
      <CommandLine
          :available="['1.2.*']"
          command='apimap delete --api=<> --version=<> --recursive=<> --endpoint=<> --token=<> --confirmation=<>'
          title="Delete API">
        <p>Delete a API version or complete API from the catalog.</p>
        <ParameterGroup
            heading="Required parameters">
          <Parameter
              default-value=""
              description="Name of the API to be deleted."
              name="--api"/>
          <Parameter
              default-value=""
              description="Name of the API version to be deleted."
              name="--version"/>
          <Parameter
              default-value=""
              description="Delete single version or all versions."
              name="--recursive"/>
          <Parameter
              default-value=""
              description="Yes/No to confirm that the command is intentionally."
              name="--confirmation"/>
        </ParameterGroup>
        <ParameterGroup
            heading="Optional parameters">
          <Parameter
              default-value=""
              description="If a endpoint is pre-configured this is optional."
              name="--endpoint"/>
          <Parameter
              default-value=""
              description="If a token is pre-configured this is optional."
              name="--token"/>
        </ParameterGroup>
      </CommandLine>
      <CommandLine
          :available="['1.2.*']"
          command='apimap document --api=<> --changelog=<> --readme=<> --token=<> --version=<> --endpoint=<>'
          title="API Documentation Management">
        <p>Manage the README.md and CHANGELOG.md files associated with the API.</p>
        <ParameterGroup
            heading="Required parameters">
          <Parameter
              default-value=""
              description="Name of the API to be updated"
              name="--api"/>
          <Parameter
              default-value=""
              description="Name of the API version to be updated"
              name="--version"/>
          <Parameter
              default-value=""
              description="File path to the CHANGELOG.md file to be published. E.g my-api/CHANGELOG.md"
              name="--changelog"/>
          <Parameter
              default-value=""
              description="File path to the README.md file to be published. E.g my-api/README.md"
              name="--readme"/>
        </ParameterGroup>
        <ParameterGroup
            heading="Optional parameters">
          <Parameter
              default-value=""
              description="If a endpoint is pre-configured this is optional."
              name="--endpoint"/>
          <Parameter
              default-value=""
              description="If a token is pre-configured this is optional."
              name="--token"/>
        </ParameterGroup>
      </CommandLine>
      <CommandLine
          :available="['1.*.*']"
          command="apimap --help"
          title="More Commands">
        <p>Use the --help command to explore more possibilities</p>
      </CommandLine>
    </Content>
    <Footer/>
  </div>
</template>

<script>
// Assets

// Components
import Footer from "@/components/Elements/Footer";
import TabContainer from "@/components/Elements/TabContainer";
import Tab from "@/components/Elements/Tab";
import Parameter from "@/components/Elements/Parameter";
import ParameterGroup from "@/components/Elements/ParameterGroup";
import MediumButton from "@/components/Navigation/MediumButton";

// Libs
import CommandLine from "@apimap/command-line";

// noinspection ES6CheckImport
import {Content, ContentHeader} from "@apimap/layout-core";

// Data
import {Downloads} from "@/router/paths";

export default {
  name: "CliTool",
  components: {
    ParameterGroup,
    MediumButton,
    Parameter,
    Content,
    ContentHeader,
    Tab,
    Footer,
    TabContainer,
    CommandLine,
  },
  data: function () {
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
  padding: 0.6em 1em;
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
