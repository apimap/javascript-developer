<template>
  <div class="api-producer-metadata-specification">
    <ContentHeader
        title="Metadata Specification"
        introduction="This specification contains all options and values available to describe the technical preferences and architectural decisions that needs to be communicated in order to enable other developer to reuse the functionality." />
    <Content>
      <HorizontalLargeSmallStackLayout>
        <HorizontalStackLayout>
          <TableOfContents>
            <TableOfContentsItem :scroll="introduction" title="Introduction" section="I." />
            <TableOfContentsItem :scroll="apimap" title="Apimap" section="II." />
            <TableOfContentsItem :scroll="metadatadocument" title="Metadata Document" section="III.">
              <TableOfContentsItem :scroll="namingconventions" title="Naming Conventions" />
              <TableOfContentsItem :scroll="usage" title="Usage" />
            </TableOfContentsItem>
            <TableOfContentsItem :scroll="structure" title="Metadata Document Structure" section="IV.">
              <TableOfContentsItem :scroll="rootsection" title="Root Section" />
              <TableOfContentsItem :scroll="datasection" title="Data Section" />
            </TableOfContentsItem>
            <TableOfContentsItem :scroll="changemanagement" title="Change Management" section="V."/>
          </TableOfContents>
          <ContentSection ref="introduction" title="I. Introduction">
            <p>
              The objective of this document is to describe the metadata used
              alongside the API Taxonomy Standard to enable API discoverability.
            </p>
            <h2>Key Definitions</h2>
            <ul>
              <li>
                Application programming interface (API): Point of functional
                integration between two or more systems connected through commonly
                known standards
              </li>
              <li>
                Apimap: A system created to provide ease of discoverability
                to a given set of APIs
              </li>
              <li>
                Consumer: Person/team using the taxonomy to discover API(s)
              </li>
              <li>
                Producer: Person/team using the taxonomy to describe the API(s)
                they produce
              </li>
              <li>
                API Taxonomy Standard: The taxonomy definition used in Apimap
              </li>
              <li>Mono-repo: Multiple projects share the same repository</li>
              <li>
                Multi-repo: Each project is contained in its own separated
                repository
              </li>
            </ul>
            <h2>Conventions</h2>
            <p>
              The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”,
              “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this
              document are to be interpreted as described in RFC 2119 [RFC2119].
            </p>
          </ContentSection>
          <ContentSection ref="apimap" title="II. Apimap">
            <h5>Focus on API and not API Instances</h5>
            <p>
              Apimap is a part of the source code and not the instances of the API thereby becoming a integrated part of any git workflow and not operations.
            </p>
            <p>
              Please note the important difference between an API and the
              instances of that API. Regarding metadata, this implies that all
              attributes included in the definition must be equal across all
              possible instances where the code is running.
            </p>
            <p>
              It is thereby not possible to add attributes that describes i.e.
              hostname, SLA, machine identifiers, instance contact information and so on.
            </p>
          </ContentSection>
          <ContentSection ref="metadatadocument" title="III. Metadata Document">
            <h4 ref="namingconventions">Naming Conventions</h4>
            <p>
              It is recommened to name your metadata file metadata.apimap . This will ensure automatic recognition from current and future tools.
            </p>
            <Recommendation recommendation="Recommended filename: metadata.apimap" />
            <h4 ref="usage">Usage</h4>
            <p>
              None of the Apimap tools nor the Apimap API enforce a specific workflow,
              git-flow or any other methodology. The file paths and folders defined herein are just
              suggestions to give the users a easier overview and recognizable implementation.
            </p>
            <h5>Multi-repo</h5>
            <p>
              A single repository for each API is the most basic and widely adopted
              approach. In this case we recommend to have the metadata file
              located in a folder named "apimap" located in the root folder of
              your repository.
            </p>
            <p>
              Keeping your metadata and taxonomy files in the same folder will enable easy usage of the tools provided by
              Apimap. If the location is not appropriate you must specify
              the custom location when using the provided tools and implementation.
            </p>
            <h5>Mono-repo</h5>
            <p>
              Keeping multiple APIs in the same repository is a more complex but a
              frequently adopted approach. This approach requires the use of input arguments and configuration
              when using the tools provided by Apimap and is not supported by default.
            </p>
            <Recommendation recommendation="Although not a requirement it is recommended to create individual folders for each API and use the default metadata and taxonomy filenames."/>
          </ContentSection>
          <ContentSection ref="structure" title="IV. Metadata Document Structure">
            <Recommendation recommendation="A key concept of the metadata.apimap file is that there will never be a requirement to updated the content unless your API features changes." />
            <h3 ref="rootsection">Root Section</h3>
            <SpecificationDefinition
              v-for="option in rootObject"
              :key="option.title"
              :dataType="option.dataType"
              :description="option.description"
              :required="option.required"
              :title="option.title"
              :example="option.example"
              :allowedValues="allowedValues(option.valuesKey)"
            />
            <h3 ref="datasection">Data Section</h3>
            <SpecificationDefinition
              v-for="option in dataObject"
              :key="option.title"
              :dataType="option.dataType"
              :description="option.description"
              :required="option.required"
              :title="option.title"
              :example="option.example"
              :allowedValues="allowedValues(option.valuesKey)"
            />
          </ContentSection>
          <ContentSection ref="changemanagement" title="V. Change Management">
            <p>
              The Apimap.io project governs the content of this document and the Metadata Specification herein. Any organization that
              needs other attributes and changes is encouraged to fork the project and/or contact us to get the official specification
              updated.
            </p>
            <Recommendation recommendation="All future updates will be backwards compatible, if not possible the version identifier will be changed to ensure no breaking changes in existing data." />
          </ContentSection>
        </HorizontalStackLayout>
        <SideTableOfContents isSticky>
          <SideTableOfContents>
            <SideTableOfContentsItem :scroll="introduction" title="Introduction" />
            <SideTableOfContentsItem :scroll="apimap" title="Apimap" />
            <SideTableOfContentsItem :scroll="metadatadocument" title="Metadata Document" />
            <SideTableOfContentsItem :scroll="structure" title="Metadata Document Structure" />
            <SideTableOfContentsItem :scroll="changemanagement" title="Change Management" />
          </SideTableOfContents>
        </SideTableOfContents>
      </HorizontalLargeSmallStackLayout>
    </Content>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Elements/Footer";
import SpecificationDefinition from "@/components/Elements/SpecificationDefintion";

import {LOAD_METADATA_OPTIONS} from "@/store/content/store";

import { Content, ContentHeader, HorizontalStackLayout, ContentTable, ContentSection, HorizontalLargeSmallStackLayout } from "@apimap/layout-core";

import TableOfContents from "@/components/Navigation/TableOfContents";
import TableOfContentsItem from "@/components/Navigation/TableOfContentsItem";
import SideTableOfContentsItem from "@/components/Navigation/SideTableOfContentsItem";
import SideTableOfContents from "@/components/Navigation/SideTableOfContents";

import { definition } from "@/data/MetadataDefinition";
import Recommendation from "@/components/Elements/Recommendation";

export default {
  name: "MetadataSpecification",
  components: {
    Footer,
    TableOfContentsItem,
    Recommendation,
    HorizontalStackLayout,
    ContentSection,
    TableOfContents,
    SideTableOfContentsItem,
    SideTableOfContents,
    HorizontalLargeSmallStackLayout,
    ContentTable,
    SpecificationDefinition,
    Content,
    ContentHeader
  },
  data: function() {
    return {
      rootObject: definition.root.entities,
      dataObject: definition.data.entities
    }
  },
  mounted() {
    this.$store.dispatch(LOAD_METADATA_OPTIONS);
  },
  methods: {
    allowedValues: function(valuesKey){
      if(valuesKey === "version"){
        return this.$store.getters.metadataOptions['fileOptions'] ? this.$store.getters.metadataOptions['fileOptions']['version'] : [];
      }else if(valuesKey === "releaseStatusOptions"){
        return this.$store.getters.metadataOptions['apiVersionOptions'] ? this.$store.getters.metadataOptions['apiVersionOptions']['releaseStatusOptions'] : [];
      }else if(valuesKey === "visibilityOptions"){
        return this.$store.getters.metadataOptions['apiOptions'] ? this.$store.getters.metadataOptions['apiOptions']['visibilityOptions'] : [];
      }else if(valuesKey === "architectureLayerOptions"){
        return this.$store.getters.metadataOptions['organizationOptions'] ? this.$store.getters.metadataOptions['organizationOptions']['architectureLayerOptions'] : [];
      }else if(valuesKey === "businessUnitOptions"){
        return this.$store.getters.metadataOptions['organizationOptions'] ? this.$store.getters.metadataOptions['organizationOptions']['businessUnitOptions'] : [];
      }else if(valuesKey === "interfaceSpecificationImplementationOptions"){
        return this.$store.getters.metadataOptions['implementationDetailsOptions'] ? this.$store.getters.metadataOptions['implementationDetailsOptions']['interfaceSpecificationImplementationOptions'] : [];
      }else if(valuesKey === "interfaceSpecificationSpecificationOptions"){
        return this.$store.getters.metadataOptions['implementationDetailsOptions'] ? this.$store.getters.metadataOptions['implementationDetailsOptions']['interfaceSpecificationSpecificationOptions'] : [];
      }else{
        return null;
      }
    },
    introduction: function() {
      this.$refs["introduction"].$el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    apimap: function() {
      this.$refs["apimap"].$el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    metadatadocument: function() {
      this.$refs["metadatadocument"].$el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    namingconventions: function() {
      this.$refs["namingconventions"].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    usage: function() {
      this.$refs["usage"].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    structure: function() {
      this.$refs["structure"].$el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    rootsection: function() {
      this.$refs["rootsection"].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    datasection: function() {
      this.$refs["datasection"].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    changemanagement: function() {
      this.$refs["changemanagement"].$el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  },
};
</script>
