<template>
  <div class="taxonomy-specification">
    <ContentHeader
        title="Taxonomy Specification"
        introduction="Your API provides functionality to others, and this functionality needs to be described using a common taxonomy." />
    <Content>
      <HorizontalLargeSmallStackLayout>
      <HorizontalStackLayout>
        <TableOfContents>
          <TableOfContentsItem :scroll="introduction" title="Introduction" section="I." />
          <TableOfContentsItem :scroll="apimap" title="Apimap" section="II." />
          <TableOfContentsItem :scroll="taxonomydocument" title="Taxonomy Document" section="III.">
            <TableOfContentsItem :scroll="namingconventions" title="Naming Conventions" />
            <TableOfContentsItem :scroll="levels" title="Levels" />
            <TableOfContentsItem :scroll="selection" title="Selecting the correct level" />
            <TableOfContentsItem :scroll="urn" title="Taxonomy URN" />
            <TableOfContentsItem :scroll="usage" title="Usage" />
          </TableOfContentsItem>
          <TableOfContentsItem :scroll="structure" title="Taxonomy Document Structure" section="IV.">
            <TableOfContentsItem :scroll="rootsection" title="Root Section" />
            <TableOfContentsItem :scroll="datasection" title="Data Section" />
          </TableOfContentsItem>
          <TableOfContentsItem :scroll="changemanagement" title="Change Management" section="V."/>
        </TableOfContents>
        <ContentSection ref="introduction" title="I. Introduction">
          <p>
            The objective of this document is to describe the taxonomy used
            alongside the API Metadata Standard to enable API discoverability.
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
            <li>
              Taxonomy: Taxonomy (general) is the practice and science of
              classification of things or concepts, including the principles
              that underlie such classification
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
          <p>The Apimap is a part of the source code and not
            the instances of the API.</p>
          <p>
            Please note the important difference between an API and the
            instances of that API. Regarding metadata, this implies that all
            attributes included in the definition must be equal across all
            possible instances.
          </p>
          <p>
            It is thereby not possible to add attributes that describes i.e.
            hostname, SLA, machine identifiers, instance contact information and so on.
          </p>
        </ContentSection>
        <ContentSection ref="taxonomydocument" title="III. Taxonomy Document">
          <h4 ref="namingconventions">Naming Conventions</h4>
          <p>
            It is recommended to name your taxonomy file taxonomy.apimap . This will ensure automatic recognition from current and future tools.
          </p>
          <Recommendation recommendation="Recommended filename: taxonomy.apimap"></Recommendation>
          <h4 ref="levels">Levels</h4>
          <h5>Level 1 (Required)</h5>
          <p>Gives little value to the consumer, and SHALL be seen as guidance to the governance team when seeking help.</p>
          <h5>Level 2 (Required)</h5>
          <p>Gives value to the consumer and used to categorize the API when the producer is unable to find an appropriate level 3 category.</p>
          <h5>Level 3 (Optional)</h5>
          <p>This level gives real value when restricting searches and separating functionality. Producers MUST use multiple level 3 categorizations instead of level 2 to span a wide range of possibilities.</p>
          <h4 ref="roles">Roles</h4>
          <h5>Producer</h5>
          <p>A producer MUST select the appropriate options from the taxonomy collection by using the URN associated with the entity. An updated taxonomy collection is availed from the Apimap Portal.</p>
          <h5>Consumer</h5>
          <p>A consumer should discovery APIs based on the descriptive names and not the URN.</p>
          <h4 ref="selection">Selecting the correct level</h4>
          <ul>
            <li>
              Each API MUST be categorized into at least one level 2 category
            </li>
            <li>
              Each API SHOULD be categorized into as many categories as the
              producer finds reasonable to describe the provided functionality
            </li>
            <li>An API SHALL NOT be categorized only by a level 1 category</li>
          </ul>
          <h4 ref="urn">Taxonomy URN</h4>
          <p>
            Decoupling the search definition from the specification definition
            creates a dynamic taxonomy definition. The following schema is used: urn:&lt;taxonomy name&gt;:&lt;random number&gt;
          </p>
          <h4 ref="usage">Usage</h4>
          <p>
            None of the tools created nor the API enforce a specific workflow,
            git-flow or any other methodology. The file paths and folders defined herein are just
            suggestions to give the users a easier overview and recognizable implementation.
          </p>
          <h5>Multi-repo</h5>
          <p>
            A single repository for each API is the most basic and widely adopted
            approach. In this case we recommend to have the taxonomy file
            located in a folder named "apimap" located in the root folder of
            your repository.
          </p>
          <p>
            Keeping your metadata and taxonomy files in the same folder will enable the build system to automatically detect and
            upload the information. If the location is not appropriate you must specify
            the custom location in the jenkins publish build step.
          </p>
          <h5>Mono-repo</h5>
          <p>
            Keeping multiple APIs in the same repository is a more complex but
            frequently adopted approach. This approach requires a custom jenkins
            pipeline and triggering the publish and validate plugins from code
            yourself. Calling the steps individually enables the use inside
            already existing pipelines and there is no predefined
            file paths to the taxonomy file.
          </p>
          <Recommendation recommendation="Although not a requirement it is recommended to create individual folders for each API and keep the metadata and taxonomy files together."/>
        </ContentSection>
        <ContentSection ref="structure" title="IV. Taxonomy Document Structure">
          <Recommendation recommendation="A key concept of the taxonomy.apimap file is that there will never be a requirement to update the content unless your API changes."/>
          <h3 ref="rootsection">Root Section</h3>
          <SpecificationDefinition
            v-for="option in rootObject"
            :key="option.title"
            :dataType="option.dataType"
            :description="option.description"
            :required="option.required"
            :title="option.title"
            :example="option.example"
            :allowedValues="option.allowedValues"
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
            :allowedValues="option.allowedValues"
          />
        </ContentSection>
        <ContentSection ref="changemanagement" title="V. Change Management">
          <p>
            The Apimap.io project governs the content of this document and the Taxonomy Specification herein. Any organization that
            needs other attributes and changes is encouraged to fork the project and/or contact us to get the official specification
            updated.
          </p>
          <h5>Change Management Rules</h5>
          <ul>
            <li>
              New definitions: New definitions MUST be added to the hierarchy
              and associated with a new URN
            </li>
            <li>
              If in use: Deprecated definitions MUST be retained since APIs
              using them was originally categorized correctly. New APIs MUST not
              be categorized using these definition(s)
            </li>
            <li>
              If unused: If the definition(s) is unused they MUST be removed
            </li>
            <li>
              Removed definitions is to be handled as deprecated definitions.
            </li>
          </ul>
        </ContentSection>
      </HorizontalStackLayout>
      <SideTableOfContents isSticky>
        <SideTableOfContents>
          <SideTableOfContentsItem :scroll="introduction" title="Introduction" />
          <SideTableOfContentsItem :scroll="apimap" title="Apimap" />
          <SideTableOfContentsItem :scroll="taxonomydocument" title="Taxonomy Document" />
          <SideTableOfContentsItem :scroll="structure" title="Taxonomy Document Structure" />
          <SideTableOfContentsItem :scroll="changemanagement" title="Change Management" />
        </SideTableOfContents>
      </SideTableOfContents>
    </HorizontalLargeSmallStackLayout>
    </Content>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Elements/Footer";
import SpecificationDefinition from "@/components/Elements/SpecificationDefintion";

import { Content, ContentHeader, HorizontalStackLayout, ContentSection, HorizontalLargeSmallStackLayout } from "@apimap/layout-core";

import TableOfContents from "@/components/Navigation/TableOfContents";
import TableOfContentsItem from "@/components/Navigation/TableOfContentsItem";
import SideTableOfContentsItem from "@/components/Navigation/SideTableOfContentsItem";
import SideTableOfContents from "@/components/Navigation/SideTableOfContents";
import Recommendation from "@/components/Elements/Recommendation";

import { definition } from "@/data/TaxonomyDefinition";

export default {
  name: "TaxonomySpecification",
  components: {
    Content,
    ContentHeader,
    Footer,
    TableOfContents,
    TableOfContentsItem,
    SideTableOfContentsItem,
    HorizontalLargeSmallStackLayout,
    Recommendation,
    SideTableOfContents,
    ContentSection,
    SpecificationDefinition,
    HorizontalStackLayout,
  },
  data: function() {
    return {
      rootObject: definition.root.entities,
      dataObject: definition.data.entities
    };
  },
  methods: {
    namingconventions: function() {
      this.$refs["namingconventions"].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    levels: function() {
      this.$refs["levels"].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    selection: function() {
      this.$refs["selection"].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    urn: function() {
      this.$refs["urn"].scrollIntoView({
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
    datasection: function() {
      this.$refs["datasection"].scrollIntoView({
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
    taxonomydocument: function() {
      this.$refs["taxonomydocument"].$el.scrollIntoView({
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
