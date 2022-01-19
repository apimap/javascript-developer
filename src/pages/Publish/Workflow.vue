<template>
  <div class="workflow">
    <ContentHeader
        title="Publish Changes"
        introduction="After creating the metadat"/>
    <Content>
      <p>Apimap consists of different components (API, Portal, Developer Portal, SDKs, Plugins) and any of these components can be customized and changes with other components that better fits your organizations needs.</p>
      <p>We currently offer 3 different types of workflows to publish information.</p>
    </Content>
    <ContentHeader
        title="Continuous Build System (CI/CD) Workflow"
        introduction="The build system workflow targets users that uses a CI/CD pipeline alongside a code repository. It becomes a integrated
part of any git-ops environment since it automatically uploads and manages the API information." />
    <Content>
      <MediumButton title="Go to workflow" route="/workflow/build-system"/>
    </Content>
    <ContentHeader
        title="Command-line interface (CLI) Workflow"
        introduction="The CLI workflow targets users that does not usa a CI/CD pipeline, or a CI/CD pipeline that is not supported by Apimap. The CLI supports all major operating systems." />
    <Content>
      <MediumButton title="Go to workflow" route="/workflow/cli"/>
    </Content>
    <ContentHeader
        title="API Workflow"
        introduction="The API workflow targets advanced system-to-system integrations that is not already supported by a Apimap component. This is most commonly used to add support to automation tools."/>
    <Content>
      <MediumButton title="Go to workflow" route="/workflow/api"/>
    </Content>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Elements/Footer";
import MediumButton from "@/components/Navigation/MediumButton";
import { Content, ContentHeader } from "@apimap/layout-core"

export default {
  name: "Workflow",
  components: {
    Content,
    ContentHeader,
    Footer,
    MediumButton
  }
};
</script>

<style scoped>
</style>
