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
              <li><a v-bind:href="paths.windows['1.0.0']">Download version 1.0.0</a></li>
            </ul>
          </Tab>
          </template>
        <template v-slot:Mac>
          <Tab>
            <ul>
              <li><a v-bind:href="paths.macos['1.0.0']">Download version 1.0.0</a></li>
            </ul>
          </Tab>
        </template>
        <template v-slot:Linux>
          <Tab>
            <ul>
              <li><a v-bind:href="paths.linux['1.0.0']">Download version 1.0.0</a></li>
            </ul>
          </Tab>
         </template>
       </TabContainer>
    </Content>
    <ContentHeader
        title="Quickstart Guide" />
    <Content>
      <CommandLine
        title="Publish Your API"
        :available="['1.*.*']"
        command='apimap publish --metadata="metadata filename" --taxonomy="taxonomy filename" --endpoint-url=https://api.apimap.io --code-repository-url=&lt;git repo url&gt;"'>
        <p>Publish your metadata and taxonomy to the designated Apimap instance. This command creates your API if it is missing and manages your access tokens automatically.</p>
      </CommandLine>
      <CommandLine
        title="Manage Your Tokens"
        :available="['1.*.*']"
        command='apimap token list'>
        <p>The API is open for all to use, although only the one creating an API gets the token to update or delete it afterwards. This token is automatically returned from the API upon creation and <strong>must be retained (Take backup)</strong>. Without this token you will never be able to update or delete any related information.</p>
      </CommandLine>
      <CommandLine
        title="Validate Your Content"
        :available="['1.*.*']"
        command='apimap validate --metadata="metadata filename" --taxonomy="taxonomy filename"'>
        <p>Validate the file format and content requirements in your files locally.</p>
      </CommandLine>
      <CommandLine
        title="Rename API"
        :available="['1.*.*']"
        command='apimap rename --from "old api name" --to "new api name" --endpoint-url=https://api.apimap.io'>
        <p>If your API changes name the change itself is not part of the automatic metadata upload since the change could have changes outside of the catalog</p>
      </CommandLine>
      <CommandLine
        title="Change API description"
        :available="['1.*.*']"
        command='apimap description --metadata="metadata filename" --endpoint-url=https://api.apimap.io'>
        <p>Change only the API description to match the specified metadata file</p>
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

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

.latest{
  font-size: 1.2em;
}

.deprecated{
  font-size: 1em;
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
