<template>
  <div class="faq">
    <ContentHeader
        introduction="More questions?
Please contact us @ https://github.com/apimap"
        title="Frequently asked questions (FAQ)"/>
    <Content>
      <Question
          answer="As a rule, each API or service provided should have its own metadata and taxonomy files. Read more about organizing folders in 'Step 1'."
          question="What if my application provides multiple services/APIs?"
      />
      <Question
          answer="No. This is only a recommendation to enable a consistent location across the organization. The correct location depends on how the CI/CD pipeline is integrated."
          question="Do I have to place the files in the recommended location (source code root directory under a folder named 'apimap')?"
      />
      <Question
          answer="No. The files are just a part of transforming and keeping a backup of the content. It is recommended to use the Apimap API directly if your workflow uses custom script and/or requires customization."
          question="We already have the information in our source code, do we have to create the metadata and taxonomy files?"
      />
      <Question
          answer="Please use the 'none of the above' option and specify your new option"
          question="I can't find the correct options when using the metadata wizard"
      />
    </Content>
    <Footer/>
  </div>
</template>

<script>
// Assets

// Components
import Footer from "@/components/Elements/Footer";
import Question from "@/components/Elements/Question";

// Libs
// noinspection ES6CheckImport
import {Content, ContentHeader} from "@apimap/layout-core"

// Data

export default {
  name: "Faq",
  components: {
    Content,
    ContentHeader,
    Footer,
    Question
  }
};
</script>

<style scoped>
</style>
