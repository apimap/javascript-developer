<template>
  <div class="create-folder">
    <CenterLayout/>
    <ContentHeader
        introduction="Keep your metadata and taxonomy files organized and alongside each other. The tools provided by Apimap uses information from both."
        title="Create a Folder"/>
    <Content>
      <p>Keeping the information organized and easily available when developing is important. The current development
        status should always be reflected by the metadata,
        and the implemented functionality should be reflected by the taxonomy.</p>
      <Recommendation
          recommendation="Keep the corresponding metadata and taxonomy files together. This is a prerequisite for all tools provided."/>
    </Content>
    <ContentHeader
        introduction="Multi-repo is a software development strategy where code for projects are store independent of all other components. Create a folder on the root of your repository named 'apimap' and add your metadata and taxonomy files."
        title="Multi-repo"/>
    <Content>
      <img :src="fileLocationIllustration" alt="File locations" class="step-by-step-image">
    </Content>
    <ContentHeader
        introduction="Monorepo is a software development strategy where code for many projects is stored in the same repository. Create a folder on the root of your repository named 'apimap' and add sub-folders named after the APIs their metadata and taxonomy files represent. Create metadata and taxonomy files for each API interdependently."
        title="Monorepo"/>
    <Content>
      <img :src="multifileLocationIllustration" alt="File locations" class="step-by-step-image">
    </Content>
    <Content>
      <div class="next">
        <div class="next-content">
          <router-link to="/metadata/wizard"><img :src="navigationNextElement" alt="Add Metadata" height="40px"/>
          </router-link>
          <router-link to="/metadata/wizard">Add Metadata</router-link>
        </div>
      </div>
    </Content>
    <Footer/>
  </div>
</template>

<script>
// Assets
import navigationNextElement from "@/assets/elements/navigation-next-element.svg";
import fileLocationIllustration from "@/assets/illustrations/file-location-illustration.svg";
import multifileLocationIllustration from "@/assets/illustrations/multifile-location-illustration.svg";

// Components
import Footer from "@/components/Elements/Footer";
import Recommendation from "@/components/Elements/Recommendation";

// Libs
// noinspection ES6CheckImport
import {CenterLayout, Content, ContentHeader} from "@apimap/layout-core"

// Data

export default {
  name: "CreateFolder",
  components: {
    Recommendation,
    CenterLayout,
    Content,
    ContentHeader,
    Footer,
  },
  data: function () {
    return {
      fileLocationIllustration,
      multifileLocationIllustration,
      navigationNextElement
    }
  }
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
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;
}

</style>
