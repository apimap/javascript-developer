<template>
  <div class="faq">
    <ContentHeader
        title="Frequently asked questions (FAQ)"
        introduction="More questions?
Please contact us @ https://github.com/apimap"/>
    <Content>
      <Question
        question="What if my application provides multiple services/APIs?"
        answer="As a rule, each API or service provided should have its own metadata and taxonomy files. Read more about organizing folders in 'Step 1'."
      />
      <Question
          question="Do I have to place the files in the recommended location (source code root directory under a folder named 'apimap')?"
          answer="No. This is only a recommendation to enable a consistent location across the organization. The correct location depends on how the CI/CD pipeline is integrated."
      />
      <Question
          question="We already have the information in our source code, do we have to create the metadata and taxonomy files?"
          answer="No. The files are just a part of transforming and keeping a backup of the content. It is recommended to use the Apimap API directly if your workflow uses custom script and/or requires customization."
      />
      <Question
          question="I can't find the correct options when using the metadata wizard"
          answer="Please use the 'none of the above' option and specify your new option"
      />
    </Content>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Elements/Footer";
import Question from "@/components/Elements/Question";
import { Content, ContentHeader } from "@apimap/layout-core"

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
