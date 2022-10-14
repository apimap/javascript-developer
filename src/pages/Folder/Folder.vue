<template>
  <div className="create-folder">
    <CenterLayout/>
    <ContentHeader
        title="Create a Folder"
        introduction="Keep your metadata and taxonomy files organized and alongside each other. The tools provided by Apimap uses information from both."/>
    <Content>
      <p>Keeping the information organized and easily available when developing is important. The current development status should always be reflected by the metadata,
      and the implemented functionality should be reflected by the taxonomy.</p>
      <Recommendation recommendation="Keep the corresponding metadata and taxonomy files together. This is a prerequisite for all tools provided."/>
    </Content>
    <ContentHeader
        title="Multi-repo"
        introduction="Multi-repo is a software development strategy where code for projects are store independent of all other components. Create a folder on the root of your repository named 'apimap' and add your metadata and taxonomy files."/>
    <Content>
      <img :src="fileLocationIllustration" alt="File locations" class="step-by-step-image">
    </Content>
    <ContentHeader
        title="Monorepo"
        introduction="Monorepo is a software development strategy where code for many projects is stored in the same repository. Create a folder on the root of your repository named 'apimap' and add sub-folders named after the APIs their metadata and taxonomy files represent. Create metadata and taxonomy files for each API interdependently."/>
    <Content>
      <img :src="multifileLocationIllustration" alt="File locations" class="step-by-step-image">
    </Content>
    <Footer/>
  </div>
</template>

<script>

import Footer from "@/components/Elements/Footer";
import Recommendation from "@/components/Elements/Recommendation";
import fileLocationIllustration from "@/assets/illustrations/file-location-illustration.svg";
import multifileLocationIllustration from "@/assets/illustrations/multifile-location-illustration.svg";
import {Content, CenterLayout, ContentHeader} from "@apimap/layout-core"

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
      multifileLocationIllustration
    }
  }
};
</script>

<style scoped>

</style>
