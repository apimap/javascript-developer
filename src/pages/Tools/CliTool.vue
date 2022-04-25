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
              <li><a v-bind:href="paths.windows['1.1.0']" class="latest">Download version 1.1.0</a></li>
              <li><a v-bind:href="paths.windows['1.0.0']" class="deprecated">Download version 1.0.0</a></li>
            </ul>
          </Tab>
          </template>
        <template v-slot:Mac>
          <Tab>
            <ul>
              <li><a v-bind:href="paths.macos['1.1.0']" class="latest">Download version 1.1.0</a></li>
              <li><a v-bind:href="paths.macos['1.0.0']" class="deprecated">Download version 1.0.0</a></li>
            </ul>
          </Tab>
        </template>
        <template v-slot:Linux>
          <Tab>
            <ul>
              <li><a v-bind:href="paths.linux['1.1.0']" class="latest">Download version 1.1.0</a></li>
              <li><a v-bind:href="paths.linux['1.0.0']" class="deprecated">Download version 1.0.0</a></li>
            </ul>
          </Tab>
         </template>
       </TabContainer>
    </Content>
    <ContentHeader
        title="Quickstart Guide" />
    <Content>
      <h2>Configuration</h2>
      <CommandLine
          title="Token Management"
          :available="['1.*.*']"
          command='apimap token'>
        <p>The API is open for all to use, although only the one creating an API gets the token to update or delete it afterwards. This token is automatically returned from the API upon creation and <strong>must be retained (Take backup)</strong>. Without this token you will never be able to update or delete any related information.</p>
      </CommandLine>
      <CommandLine
          title="Endpoint Management"
          :available="['1.1.*']"
          command='apimap config endpoint --url=<>'>
        <p>While working towards a single Apimap instance the endpoint URL specified here is used across all commands.</p>
        <h3>Required parameters</h3>
        <ul class="parameters">
          <li class="parameter">--url: Define the Apimap instance url. E.g. http://localhost:8080</li>
        </ul>
      </CommandLine>
    </Content>
    <Content>
      <h2>Usage</h2>
      <CommandLine
        title="Publish Your API"
        :available="['1.*.*']"
        command='apimap publish --metadata=<> --taxonomy=<> --endpoint-url=<> --token=<> --code-repository-url=<>'>
        <p>Publish your metadata and taxonomy to the designated Apimap instance. This command creates your API if it is missing and manages your access tokens automatically. </p>
        <h3>Required parameters</h3>
        <ul class="parameters">
          <li class="parameter">--metadata: File path to the metadata file to be published. E.g my-api/metadata.apimap</li>
          <li class="parameter">--taxonomy: File path to the taxonomy file to be published. E.g my-api/taxonomy.apimap</li>
          <li class="parameter">--code-repository-url: URL to the source code repository of this API. If the source code is not available this argument should be skipped</li>
        </ul>
        <h3>Optional parameters</h3>
        <ul class="parameters">
          <li class="parameter">--endpoint-url: If a endpoint is pre-configured this is optional.</li>
          <li class="parameter">--token:  If a token is pre-configured this is optional.</li>
        </ul>
      </CommandLine>
      <CommandLine
        title="Validate Your Content"
        :available="['1.*.*']"
        command='apimap validate --metadata=<> --taxonomy=<>'>
        <p>Validate the file format and content requirements in your files locally.</p>
        <h3>Required parameters</h3>
        <ul class="parameters">
          <li class="parameter">--metadata: File path to the metadata file to be published. E.g my-api/metadata.apimap</li>
          <li class="parameter">--taxonomy: File path to the taxonomy file to be published. E.g my-api/taxonomy.apimap</li>
        </ul>
      </CommandLine>
      <CommandLine
        title="Rename API"
        :available="['1.*.*']"
        command='apimap rename --from=<> --to=<> --endpoint-url=<>'>
        <p>If your API changes name the change itself is not part of the automatic metadata upload since the change could have changes outside of the catalog</p>
        <h3>Required parameters</h3>
        <ul class="parameters">
          <li class="parameter">--from: The current API name</li>
          <li class="parameter">--to: The new API name</li>
        </ul>
        <h3>Optional parameters</h3>
        <ul class="parameters">
          <li class="parameter">--endpoint-url: If a endpoint is pre-configured this is optional.</li>
          <li class="parameter">--token:  If a token is pre-configured this is optional.</li>
        </ul>
      </CommandLine>
      <CommandLine
          title="Delete API"
          :available="['1.*.*']"
          command='apimap delete --metadata=<> --recursive=<> --endpoint-url=<> --token=<>'>
        <p>If your API changes name the change itself is not part of the automatic metadata upload since the change could have changes outside of the catalog</p>
        <h3>Required parameters</h3>
        <ul class="parameters">
          <li class="parameter">--metadata: File path to the metadata file to be published. E.g my-api/metadata.apimap</li>
          <li class="parameter">--recursive: Delete single version or all versions</li>
        </ul>
        <h3>Optional parameters</h3>
        <ul class="parameters">
          <li class="parameter">--endpoint-url: If a endpoint is pre-configured this is optional.</li>
          <li class="parameter">--token:  If a token is pre-configured this is optional.</li>
        </ul>
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

export default {
  name: "CliTool",
  components: {
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

.parameter {
  display: inherit;
  width: auto;
}

.parameters {
  list-style-type: circle;
  padding: 0;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding-top: 1em;
  padding-bottom: 1em;
}

.latest{
  font-size: 1.2em;
}

.deprecated{
  font-size: 1em;
  background-color: white;
  color: #5c5470;
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
