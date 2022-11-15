<template>
  <div class="taxonomy-examples">
    <ContentHeader
        introduction="Taxonomy (general) is the practice and science of classification of things or concepts, including the principles that underlie such classification (wikipedia.org)"
        title="Taxonomy Examples"/>
    <Content>
      <CommandLine
          :command="exampleOne()"
          title="Default Apimap Taxonomy"/>
      <CommandLine
          :command="exampleTwo()"
          title="Custom MyCompany Taxonomy"/>
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
import {TaxonomyExamples} from "@/data/TaxonomyExamples";

export default {
  name: "TaxonomyUseCases",
  components: {
    Footer,
    Content,
    ContentHeader,
    CommandLine
  },
  methods: {
    exampleOne: function () {
      let returnValue = JSON.stringify(TaxonomyExamples.one, null, 2);
      returnValue = returnValue
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      return returnValue.toString();
    },
    exampleTwo: function () {
      let returnValue = JSON.stringify(TaxonomyExamples.two, null, 2);
      returnValue = returnValue
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      return returnValue.toString();
    }
  }
};
</script>
