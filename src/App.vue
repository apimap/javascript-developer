<template>
  <div id="app">
      <TheSideBar width=16>
        <SideBarAction target="/" :image="home"></SideBarAction>
        <SideBarSection title="Step 1: Create Folder">
          <SideBarSectionAction title="Create Folder" target="/folder" />
        </SideBarSection>
        <SideBarSection title="Step 2: Metadata" :sections="metadata">
          <SideBarSectionAction title="Add Metadata" target="/metadata/wizard" />
        </SideBarSection>
        <SideBarSection title="Step 3: Taxonomy" :sections="taxonomy">
          <SideBarSectionAction title="Add Taxonomy" target="/taxonomy/wizard" />
        </SideBarSection>
        <SideBarSection title="Step 4: Publish Changes" :sections="publish">
          <SideBarSectionAction title="Publish Changes" target="/workflow" />
        </SideBarSection>
        <SideBarSection title="Advanced" :sections="advanced"/>
      </TheSideBar>
      <CenterLayout width=60>
        <TheBreadcrumbs/>
        <router-view/>
      </CenterLayout>
  </div>
</template>

<script>
import home from "@/assets/elements/home-element.svg";

import TheBreadcrumbs from "@apimap/the-breadcrumbs";
import { Paths } from "./router/paths.js";
import { ContentHeader, CenterLayout, VerticalStackLayout, TheSideBar, SideBarSection, SideBarAction, AppContent, SideBarSectionAction } from "@apimap/layout-core";
import { NavigationBar } from "@/router/navigation";

export default {
  name: "App",
  components: {
    ContentHeader,
    TheBreadcrumbs,
    TheSideBar,
    CenterLayout,
    VerticalStackLayout,
    SideBarSection,
    SideBarAction,
    AppContent,
    SideBarSectionAction
  },
  methods: {
    redirectToConsumer: function() {
      window.location.href = APIMAP_PORTAL_URL
    }
  },
  data: function(){
    return {
      home,
      rootUrl: Paths.root.url,
      metadata: NavigationBar.metadata,
      taxonomy: NavigationBar.taxonomy,
      publish: NavigationBar.publish,
      advanced: NavigationBar.advanced
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
  color: var(--primary-color);
}
</style>

<style scoped>

</style>
