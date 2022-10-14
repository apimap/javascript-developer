<template>
  <div class="workflow">
    <ContentHeader
        title="Publish Changes"
        introduction="Upload your changes using a supported CI/CD pipeline, our CLI tool or directly using the Apimap API."/>
    <ContentHeader
        title="Continuous Build System (CI/CD) Workflow"
        introduction="The build system workflow targets users that uses a CI/CD pipeline alongside a code repository. It becomes a integrated
part of any git-ops environment and automatically manages the API information." />
    <Content>
      <MediumButton title="Read more about the CI/CD Workflow" route="/workflow/build-system"/>
    </Content>
    <ContentHeader
        title="Command-line interface (CLI) Workflow"
        introduction="The CLI workflow targets users that does not use CI/CD pipelines, or a CI/CD pipeline that is not supported by Apimap." />
    <Content>
      <MediumButton title="Read more about the CLI Workflow" route="/workflow/cli"/>
    </Content>
    <ContentHeader
        title="API Workflow"
        introduction="The API workflow targets advanced system-to-system integrations that is not already supported by a Apimap component."/>
    <Content>
      <MediumButton title="Read more about the API Workflow" route="/workflow/api"/>
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
