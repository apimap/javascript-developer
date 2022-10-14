<template>
  <div class="api-producer-metadata-examples">
    <ContentHeader
        title="Metadata Examples"
        introduction="Your API has some technical preferences and architectural decisions that needs to be communicated in order to enable other developer to reuse the functionality." />
    <Content>
      <CommandLine
          title="“Design and architecture” phase"
          :command="exampleOne()" />
      <p>There is a need for new functionality and the team has just started developing the solution architecture. With external customers being the primary users there is a need to customize the response body.</p>
    </Content>
    <Content>
      <CommandLine
          title="Off-the-shelf solution has been extended with new functionality"
          :command="exampleTwo()" />
      <p>A previously purchased software solution has been updated and got some new functionality that could be useful to the team and should not be used outside of the organization.</p>
    </Content>
    <Content>
      <CommandLine
          title="Deprecated API"
          :command="exampleFour()" />
      <p>Our old API has been deprecated and should no longer be used by new clients. Since other services already uses it, the documentation data must be available.</p>
    </Content>
    <Footer />
  </div>
</template>

<script>

import Footer from "@/components/Elements/Footer";
import CommandLine from "@apimap/command-line";
import { Content, ContentHeader, CenterLayout } from "@apimap/layout-core"
import { MetadataExamples } from "@/data/MetadataExamples";

export default {
  name: "MetadataUseCases",
  components: {
    Footer,
    Content,
    ContentHeader,
    CenterLayout,
    CommandLine
  },
  methods: {
    exampleOne: function () {
      return this.example(MetadataExamples.one);
    },
    exampleTwo: function () {
      return this.example(MetadataExamples.two);
    },
    exampleFour: function () {
      return this.example(MetadataExamples.four);
    },
    example: function (object) {
      var returnValue = JSON.stringify(object, null, 2);
      returnValue = returnValue
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      return returnValue.toString();
    }
  }
};
</script>
