<template>
  <div class="workflow">
    <ContentHeader
        introduction="Upload your changes using a supported CI/CD pipeline, our CLI tool or directly using the Apimap API."
        title="Publish Changes"/>
    <ContentHeader
        introduction="The build system workflow targets users that uses a CI/CD pipeline alongside a code repository. It becomes a integrated
part of any git-ops environment and automatically manages the API information."
        title="Continuous Build System (CI/CD) Workflow"/>
    <Content>
      <MediumButton route="/workflow/build-system" title="Read more about the CI/CD Workflow"/>
    </Content>
    <ContentHeader
        introduction="The CLI workflow targets users that does not use CI/CD pipelines, or a CI/CD pipeline that is not supported by Apimap."
        title="Command-line interface (CLI) Workflow"/>
    <Content>
      <MediumButton route="/workflow/cli" title="Read more about the CLI Workflow"/>
    </Content>
    <ContentHeader
        introduction="The API workflow targets advanced system-to-system integrations that is not already supported by a Apimap component."
        title="API Workflow"/>
    <Content>
      <MediumButton route="/workflow/api" title="Read more about the API Workflow"/>
    </Content>
    <Content>
      <div class="next">
        <div class="next-content">
          <router-link to="/taxonomy/wizard"><img :src="navigationPreviousElement" alt="Add Taxonomy" height="40px"/>
          </router-link>
          <router-link to="/taxonomy/wizard">Add Taxonomy</router-link>
        </div>
        <div class="next-content">
          <a :href="portalUrl"><img :src="navigationNextElement" alt="Add Taxonomy" height="40px"/></a>
          <a :href="portalUrl">Discover your API</a>
        </div>
      </div>
    </Content>
    <Footer/>
  </div>
</template>

<script>
// Assets
import navigationPreviousElement from "@/assets/elements/navigation-previous-element.svg";
import navigationNextElement from "@/assets/elements/navigation-next-element.svg";

// Components
import Footer from "@/components/Elements/Footer";
import MediumButton from "@/components/Navigation/MediumButton";

// Libs
// noinspection ES6CheckImport
import {Content, ContentHeader} from "@apimap/layout-core";

// Data

export default {
  name: "Workflow",
  components: {
    Content,
    ContentHeader,
    Footer,
    MediumButton
  },
  data: function () {
    return {
      navigationPreviousElement,
      navigationNextElement
    }
  },
  computed: {
    portalUrl() {
      return APIMAP_PORTAL_URL;
    }
  },
};
</script>

<style scoped>

.next-content {
  width: 10em;
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 1.2em;
}

.next {
  border-top: 1px dashed #dbd8e3;
  padding-top: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.2em;
  justify-content: center;
  gap: 1em;
  margin: 0;
}

</style>
