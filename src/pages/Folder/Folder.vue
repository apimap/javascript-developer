<template>
  <div className="create-folder">
    <CenterLayout/>
    <ContentHeader
        title="Create Folder"
        introduction="Keep your metadata and taxonomy files organized and alongside each other. Each tool provided by this solution uses information from both."/>
    <Content>
      <p>Keeping the information organized and easily available when developing is important. The current development status should always be reflected by the metadata,
      and the implemented functionality should be reflected by the taxonomy.</p>
      <p>We have created the following two recommended approaches depending on how your code / bought software components.</p>
      <Recommendation recommendation="Keep the corresponding metadata and taxonomy files together. This is a prerequisite for all tools provided."/>
    </Content>
    <ContentHeader
        title="Multi-repo"
        introduction="Multi-repo is a software development strategy where code for projects are store independent of all other compontents."/>
    <Content>
      <Recommendation recommendation="Create a folder on the root of your repository named 'apimap' and keep your metadata and taxonomy files together." />
      <img :src="fileLocationIllustration" alt="File locations" class="step-by-step-image">
    </Content>
    <ContentHeader
        title="Monorepo"
        introduction="Monorepo is a software development strategy where code for many projects is stored in the same repository."/>
    <Content>
      <Recommendation recommendation="Create a folder on the root of your repository named 'apimap' that contains sub-folders named after the APIs their metadata and taxonomy files represent." />
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
