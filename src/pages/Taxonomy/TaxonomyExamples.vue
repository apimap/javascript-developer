<template>
  <div class="taxonomy-examples">
    <ContentHeader
        title="Taxonomy Examples"
        introduction="Taxonomy (general) is the practice and science of classification of things or concepts, including the principles that underlie such classification (wikipedia.org)" />
    <Content>
      <CommandLine
          title="Default Apimap Taxonomy"
          :command="exampleOne()" />
      <CommandLine
          title="Custom MyCompany Taxonomy"
          :command="exampleTwo()" />
    </Content>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Elements/Footer";
import CommandLine from "@apimap/command-line";
import { Content, ContentHeader } from "@apimap/layout-core"
import { TaxonomyExamples } from "@/data/TaxonomyExamples";

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
      var returnValue = JSON.stringify(TaxonomyExamples.one, null, 2);
      returnValue = returnValue
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      return returnValue.toString();
    },
    exampleTwo: function () {
      var returnValue = JSON.stringify(TaxonomyExamples.two, null, 2);
      returnValue = returnValue
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      return returnValue.toString();
    }
  }
};
</script>
