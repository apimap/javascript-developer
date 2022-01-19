<template>
  <div class="header">
    <div class="header-container">
      <div class="center-container">
        <div class="text-container">
          {{ title }}
        </div>
      </div>
    </div>
    <VerticalStackLayout v-if="$route.path.startsWith('/metadata')">
      <ContextMenuBarItem :sections="metadataNavigationBar" />
    </VerticalStackLayout>
    <VerticalStackLayout v-if="$route.path.startsWith('/taxonomy')">
      <ContextMenuBarItem :sections="taxonomyNavigationBar" />
    </VerticalStackLayout>
    <VerticalStackLayout v-if="$route.path.startsWith('/specification')" >
      <ContextMenuBarItem :sections="metadataNavigationBar" />
    </VerticalStackLayout>
    <VerticalStackLayout v-if="$route.path.startsWith('/workflow')">
      <ContextMenuBarItem :sections="workfloNavigationBar" />
    </VerticalStackLayout>
    <VerticalStackLayout v-if="$route.path.startsWith('/tools')">
      <ContextMenuBarItem :sections="workfloNavigationBar" />
    </VerticalStackLayout>
  </div>
</template>

<script>

import apiIllustration from "@/assets/illustrations/api-illustration.svg";

import { NavigationBar } from "@/router/navigation";
import ContextMenuBarItem from "@/components/Navigation/ContextMenuBarItem";
import {VerticalStackLayout} from "@apimap/layout-core";

export default {
  name: "Header",
  components: {
    VerticalStackLayout,
    ContextMenuBarItem
  },
  data: function() {
    return {
      apiIllustration,
      taxonomyNavigationBar: NavigationBar.taxonomy,
      metadataNavigationBar: NavigationBar.metadata
    };
  },
  props: {
    title: String,
    description: String,
    type: String,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
}

.header-container {
  min-height: 10em;
  align-items: center;
  display: flex;
  justify-content: center;
}

.center-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

.text-container {
  margin-top: 1em;
  width: 60em;
  text-align: left;
  color: #5c5470;
  font-size: 3.4em;
  font-weight: lighter;
  line-height: 1.6em;
}

</style>
