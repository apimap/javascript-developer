<template>
  <div class="faq-question">
    <div class="question">{{ question }}</div>
    <div class="answer">{{ answer }}</div>
  </div>
</template>

<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "FaqQuestion",
  props: {
    question: String,
    answer: String
  },
  components: {},
  data: function () {
    return {};
  },
};
</script>

<style scoped>

.faq-question {
  text-align: left;
  margin-bottom: 4em;
}

.question {
  line-height: 1.2em;
  color: #DBD8E3;
  background-color: #5c5470;
  padding: 0.4em 1em;
  font-size: 1.4em;
  margin-bottom: 1em;
}

.answer {
  font-size: 1.2em;
  line-height: 1.2em;
}


</style>
