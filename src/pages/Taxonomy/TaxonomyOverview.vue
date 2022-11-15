<template>
  <div class="api-producer-taxonomy-overview">
    <ContentHeader
        introduction="The following taxonomies are available for use in this system."
        title="Available Taxonomies"/>
    <Content>
      <div v-for="taxonomy in getTaxonomies" :key="taxonomy.nid" class="taxonomyOption">
        <div class="button" v-bind:class="{active: (taxonomy.nid === selectedTaxonomyId) }"
             v-on:click="selectTaxonomy(taxonomy)">
          <h3>{{ taxonomy.name }} (Identifier: {{ taxonomy.nid }})</h3>
          <p>{{ taxonomy.description }}</p>
        </div>
        <div>
          <img :src="copyIcon" alt="Copy Identifier" class="copy" title="Copy Identifier"
               @click="copyToClipboard(taxonomy.nid)"/>
        </div>
      </div>
    </Content>
    <Content>
      <div v-if="!this.loadingTaxonomy" id="print-content" class="list">
        <div class="level0">
          <div v-if="this.selectedTaxonomyName !== ''" class="table">
            <div class="level-indicator">Taxonomy</div>
            <h3>{{ this.selectedTaxonomyName }}</h3>
          </div>
          <div v-for="l0 in getTaxonomy" :key="l0.id">
            <div class="button" v-bind:class="{ active: isSelected(l0) }" @click.stop="selectLevel0(l0)">{{ l0.title }}
              ({{ l0.entities.length }})
            </div>
          </div>
        </div>
        <div v-if="this.selectedLevel0 !== undefined" class="level1">
          <div class="toplevel taxonomyOption">
            <div class="flex">
              <div class="table">
                <div class="level-indicator">Level 1</div>
                <h3>{{ this.selectedLevel0.title }} <span class="urn">({{ this.selectedLevel0.urn }})</span></h3>
              </div>
              <p class="description">{{ this.selectedLevel0.description }}</p>
            </div>
            <div>
              <img :src="copyIcon" alt="Copy Identifier" class="copy" title="Copy Identifier"
                   @click="copyToClipboard(selectedLevel0.urn)"/>
            </div>
          </div>
          <div v-for="l1 in this.selectedLevel0.entities" :key="l1.id" class="level1">
            <div class="taxonomyOption">
              <div class="flex">
                <div class="table">
                  <div class="level-indicator">Level 2</div>
                  <h3>{{ l1.attributes.title }} <span class="urn">({{ l1.attributes.urn }})</span></h3>
                </div>
                <p class="description">{{ l1.attributes.description }}</p>
              </div>
              <div>
                <img :src="copyIcon" alt="Copy Identifier" class="copy" title="Copy Identifier"
                     @click="copyToClipboard(l1.attributes.urn)"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
    <Footer/>
  </div>
</template>

<script>
// Assets
import copyIcon from "@/assets/elements/copy-to-clipboard-element.svg";

// Components
import Footer from "@/components/Elements/Footer";
import LoadingIndicator from "@/components/Elements/LoadingIndicator";

// Libs
// noinspection ES6CheckImport
import {Content, ContentHeader} from "@apimap/layout-core";

// Data

export default {
  name: "TaxonomyOverview",
  components: {
    Footer,
    LoadingIndicator,
    Content,
    ContentHeader
  },
  mounted() {
    this.$store.commit('jv/clearRecords', {_jv: {type: 'urn:element'}})
    // TODO: Make this dynamic from returned urls
    this.$store.dispatch('jv/get', "taxonomy").then(() => {
    })
  },
  methods: {
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
    },
    isSelected: function (level) {
      if (this.selectedLevel0 === undefined) return false;
      return level.urn === this.selectedLevel0.urn;
    },
    selectLevel0: function (level) {
      this.selectedLevel0 = level;
    },
    selectTaxonomy: async function (object) {
      if (this.selectedTaxonomyId === object.id) {
        this.selectedTaxonomyName = undefined;
        this.selectedTaxonomyId = undefined;
        this.taxonomyTree = undefined;
      } else {
        this.selectedTaxonomyName = object.name;
        this.selectedTaxonomyId = object.nid;
        this.loadingTaxonomy = true;
        this.$store.commit('jv/clearRecords', {_jv: {type: 'urn:element'}})
        // TODO: Make this dynamic from returned urls
        this.$store.dispatch('jv/get', "taxonomy/" + object.nid + '/version/latest/urn').then(() => {
          this.loadingTaxonomy = false;
        })
      }
    },
  },
  data: function () {
    return {
      taxonomyTree: {},
      selectedTaxonomyId: {
        type: String,
        default: undefined
      },
      selectedTaxonomyName: '',
      loadingTaxonomy: false,
      selectedLevel0: undefined,
      selectedLevel1: undefined,
      copyIcon
    };
  },
  computed: {
    getTaxonomies: function () {
      return this.$store.getters['jv/get']('taxonomy:element');
    },
    getTaxonomy: function () {
      return this.$store.getters['jv/get']('urn:element');
    }
  },
};
</script>

<style>
@media print {
  body * {
    visibility: hidden;
  }

  .the-side-bar * {
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
</style>

<style scoped>

.urn {
  opacity: 0.3;
}

.flex {
  flex: 1;
}

.toplevel {
  margin-bottom: 2em;
  padding-bottom: 1em;
  border-bottom: 1px dashed lightgrey;
}

.taxonomyOption {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
}

.level0 {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 20em;
}

.level1 {
  flex-grow: 1;
}

.description {
  margin: 0 0 1em 0;
  padding: 1em;
  border: 1px solid lightgrey;
}

.list {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 1em;
  gap: 1em;
}

.table {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.level-indicator {
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

</style>
