<template>
  <div class="api-producer-metadata-examples">
    <ContentHeader
        introduction="Your API has some technical preferences and architectural decisions that needs to be communicated in order to enable other developer to reuse the functionality."
        title="Metadata Examples"/>
    <Content>
      <CommandLine
          :command="exampleOne()"
          title="“Design and architecture” phase"/>
      <p>There is a need for new functionality and the team has just started developing the solution architecture. With
        external customers being the primary users there is a need to customize the response body.</p>
    </Content>
    <Content>
      <CommandLine
          :command="exampleTwo()"
          title="Off-the-shelf solution has been extended with new functionality"/>
      <p>A previously purchased software solution has been updated and got some new functionality that could be useful
        to the team and should not be used outside of the organization.</p>
    </Content>
    <Content>
      <CommandLine
          :command="exampleFour()"
          title="Deprecated API"/>
      <p>Our old API has been deprecated and should no longer be used by new clients. Since other services already uses
        it, the documentation data must be available.</p>
    </Content>
    <Footer/>
  </div>
</template>

<script>
// Assets

// Components
import Footer from "@/components/Elements/Footer";

// Libs
import CommandLine from "@apimap/command-line";
// noinspection ES6CheckImport
import {Content, ContentHeader} from "@apimap/layout-core";

// Data
import {MetadataExamples} from "@/data/MetadataExamples";

export default {
  name: "MetadataUseCases",
  components: {
    Footer,
    Content,
    ContentHeader,
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
      let returnValue = JSON.stringify(object, null, 2);
      returnValue = returnValue
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      return returnValue.toString();
    }
  }
};
</script>
