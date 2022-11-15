<template>
  <div id="app">
    <TheSideBar :width="16" class="sidebar">
      <img :src="logo" alt="Apimap.io" class="logo"/>
      <SideBarSection title="">
        <a :href="portalUrl" class="inverted-button portal">Discover available APIs</a>
      </SideBarSection>
      <SideBarSection title="Step 1: Create Folder">
        <SideBarSectionAction target="/folder" title="Create Folder"/>
      </SideBarSection>
      <SideBarSection :sections="metadata" title="Step 2: Metadata">
        <SideBarSectionAction target="/metadata/wizard" title="Add Metadata"/>
      </SideBarSection>
      <SideBarSection :sections="taxonomy" title="Step 3: Taxonomy">
        <SideBarSectionAction target="/taxonomy/wizard" title="Add Taxonomy"/>
      </SideBarSection>
      <SideBarSection :sections="publish" title="Step 4: Publish Changes">
        <SideBarSectionAction target="/workflow" title="Publish Changes"/>
      </SideBarSection>
      <SideBarSection :sections="advanced" title="Advanced"/>
    </TheSideBar>
    <CenterLayout offset="true" width="60em">
      <TheBreadcrumbs/>
      <router-view/>
    </CenterLayout>
  </div>
</template>

<!--suppress JSUnresolvedVariable -->
<script>

// Assets
import home from "@/assets/elements/home-element.svg";
import logo from "@/assets/illustrations/logo-illustration.svg";

// Components
// Libs
import TheBreadcrumbs from "@apimap/the-breadcrumbs";

// noinspection ES6CheckImport
import {CenterLayout, SideBarSection, SideBarSectionAction, TheSideBar} from "@apimap/layout-core";

// Data
import {Paths} from "./router/paths.js";
import {NavigationBar} from "@/router/navigation";

export default {
  name: "App",
  components: {
    TheBreadcrumbs,
    TheSideBar,
    CenterLayout,
    SideBarSection,
    SideBarSectionAction
  },
  computed: {
    portalUrl() {
      return APIMAP_PORTAL_URL;
    }
  },
  data: function () {
    return {
      home,
      rootUrl: Paths.root.url,
      metadata: NavigationBar.metadata,
      taxonomy: NavigationBar.taxonomy,
      publish: NavigationBar.publish,
      advanced: NavigationBar.advanced,
      logo
    }
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  height: inherit;
}

</style>

<style scoped>

.logo {
  width: 60%;
}

.portal {
  width: 100%;
}

</style>
