<template>
  <div class="use-case">
    <h3>{{ title }}</h3>
    <slot></slot>
    <CodeDisplay
        :objectContent=jsonObject
        :prefix=prefix
        :filename=filename
    />
  </div>
</template>
<script>
import CodeDisplay from "@apimap/code-display";

export default {
  name: "UseCase",
  components: {
    CodeDisplay
  },
  props: {
    title: String,
    jsonObject: Object,
    filename: String,
    prefix: String
  }
};
</script>
<style scoped>

.use-case{
  margin-top: 2em;
  margin-bottom: 3em;
  text-align: left;
}

p{
  line-height: 1.6em;
}

</style>

