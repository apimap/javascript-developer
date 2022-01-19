<template>
  <div class="context-menu-bar-item">
    <ul>
      <li v-for="option in elements" :key="option.title">
        <router-link :to="option.url" class="url" v-if="option.url.startsWith('/')">{{ option.title }}</router-link>
        <a :href="option.url" class="url" v-if="option.url.startsWith('http')">{{ option.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "ContextMenuBarItem",
  props: {
    sections: Array
  },
  computed: {
    elements: function () {
      return this.sections.flatMap(e => e.options)
    }
  }
};
</script>

<style scoped>

.context-menu-bar-item {
  color: #5c5470;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: left;
  justify-content: left;
}

ul {
  display: inline-block;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  border: 1px solid #5c5470;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin-top: 1em;
  margin-left: 0.6em;
  margin-right: 0.6em;
}

</style>
