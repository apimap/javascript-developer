<template>
  <div class="api-producer-taxonomy-overview">
    <ContentHeader
        title="Available Taxonomies"
        introduction="The following taxonomies are available for use in this system." />
    <Content>
      <div v-for="taxonomy in allTaxonomies" :key="taxonomy.id" v-on:click="selectTaxonomy(taxonomy)" v-bind:class="(taxonomy.id === selectedTaxonomyId) ? 'taxonomySelected' : 'taxonomyNotSelected'">
        <h5>{{taxonomy.attributes.name}}</h5>
        <p>{{taxonomy.attributes.description}}</p>
      </div>
      <p>Select a taxonomy to view the complete list of categorization options.</p>
    </Content>
    <Content>
      <div class="list" id="print-content">
        <h2 v-show="this.selectedTaxonomyId">{{ this.selectedTaxonomyName }}</h2>
        <div v-for="l0 in taxonomyTree" :key="l0.id" class="tree">
          <div class="level0-heading"><div class="level-indicator">Level 1</div>{{l0.attributes.title}}</div>
          <pre class="description" v-show="l0.attributes.description">{{l0.attributes.description}}</pre>
          <div v-for="l1 in l0.attributes.entities" :key="l1.id" class="level1">
            <div class="level1-heading"><div class="level-indicator">Level 2</div>{{l1.attributes.title}}</div>
            <pre class="description" v-show="l1.attributes.description">{{l1.attributes.description}}</pre>
            <div v-for="l2 in l1.attributes.entities" :key="l2.id">
              <h4>{{l2.attributes.title}}</h4>
              <pre class="description">{{l2.attributes.description}}</pre>
            </div>
          </div>
        </div>
      </div>
    </Content>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Elements/Footer";

import { Content, ContentHeader, VerticalStackLayout } from "@apimap/layout-core";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "TaxonomyOverview",
  components: {
    VerticalStackLayout,
    Footer,
    Content,
    ContentHeader
  },
  mounted() {
    this.loadTaxonomyList({ rel: "taxonomy:collection" });
  },
  methods: {
    ...mapActions({
      loadTaxonomyList: "taxonomies/loadByRel",
      loadTaxonomy: "taxonomy/loadByRelationship"
    }),
    selectTaxonomy: async function(object) {
      if(this.selectedTaxonomyId === object.id){
        this.selectedTaxonomyName = undefined;
        this.selectedTaxonomyId = undefined;
        this.taxonomyTree = undefined;
      } else {
        this.selectedTaxonomyName = object.attributes.name;
        this.selectedTaxonomyId = object.id;
        await this.loadTaxonomy({ resource: object, relationship:"urn:collection" })
        this.taxonomyTree = this.taxonomy
      }
    },
  },
  data: function() {
    return {
      taxonomyTree: {},
      selectedTaxonomyId: String,
      selectedTaxonomyName: ''
    };
  },
  computed: {
    ...mapGetters({
      allTaxonomies: "taxonomies/all",
      taxonomy: "taxonomy/all"
    })
  },
};
</script>

<style scoped>

@media print {
  body * {
    visibility: hidden;
  }
  #print-content * {
    visibility: visible;
  }
  #print-content {
    position: absolute;
    left: 0;
    top: 40px;
  }
}

.level-indicator{
  padding-left: 0.4em;
  padding-right: 0.4em;
  background-color: #5c5470;
  text-align: center;
  color: white;
  border-radius: 0.2em;
  font-size: 0.8em;
  font-weight: normal;
  margin-right: 0.8em;
  display: inline-block;
}

.tree{
  margin-bottom: 3em;
  margin-top: 2em;
}

.level0-heading{
  line-height: 1em;
  font-size: 2em;
  margin-bottom: 0.6em;
}

.level1-heading{
  line-height: 1em;
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 0.2em;
}

pre.description {
  padding: .6em;
  border-radius: .2em;
  margin-top: .4em;
  margin-bottom: 1em;
  border: 1px solid #dbd8e3;
  color: #5c5470;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
  line-height: 1.2em;
}

.taxonomySelected {
  cursor: pointer;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  margin-bottom: 1em;
  color: #5c5470;
  border-color: #5c5470;
  border-style: solid;
  border-width: 0.1em;
  border-radius: 0.2em;
  padding-left: 0.8em;
  padding-right: 0.8em;
  line-height: 1.2em;
}

.taxonomyNotSelected {
  cursor: pointer;
  background-color: #DBD8E3;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  margin-bottom: 1em;
  color: #5c5470;
  border-radius: 0.2em;
  padding-left: 0.8em;
  padding-right: 0.8em;
  line-height: 1.2em;
}

.taxonomyNotSelected:hover {
  color: #DBD8E3;
  background-color: #5c5470;
  cursor: pointer;
}

</style>
