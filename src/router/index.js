import Vue from "vue";
import Router from "vue-router";
import {Paths} from "./paths";

// Generic
const Startpage = () => import("@/pages/Startpage");
const StepOverview = () => import("@/pages/StepOverview");

// Create Folder
const CreateFolder = () => import("@/pages/Folder/Folder");

// Tools
const CliTool = () => import("@/pages/Tools/CliTool");

// Help
const Faq = () => import("@/pages/Help/Faq");

// Metadata
const MetadataWizard = () => import("@/pages/Metadata/MetadataWizard");
const MetadataUseCases = () => import("@/pages/Metadata/MetadataExamples");
const MetadataSpecification = () => import("@/pages/Metadata/MetadataSpecification");

// Taxonomy
const TaxonomyWizard = () => import("@/pages/Taxonomy/TaxonomyWizard");
const TaxonomyOverview = () => import("@/pages/Taxonomy/TaxonomyOverview");
const TaxonomyUseCases = () => import("@/pages/Taxonomy/TaxonomyExamples");
const TaxonomySpecification = () => import("@/pages/Taxonomy/TaxonomySpecification");

// Publish
const WorkflowCli = () => import("@/pages/Publish/CliWorkflow");
const WorkflowBuildSystem = () => import("@/pages/Publish/BuildSystemWorkflow");
const Workflow = () => import("@/pages/Publish/Workflow");
const WorkflowAPI = () => import("@/pages/Publish/ApiWorkflow");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: Paths.root.url,
      name: Paths.root.name,
      component: Startpage,
      meta: {
        breadcrumb: [{ name: Paths.root.name }],
      },
    },
    {
      path: Paths.steps.url,
      name: Paths.steps.name,
      component: StepOverview,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: Paths.steps.name },
        ],
      },
    },
    {
      path: Paths.folder.url,
      name: Paths.folder.name,
      component: CreateFolder,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: "Step 1", link: Paths.steps.url},
          { name: Paths.folder.name },
        ],
      },
    },
    {
      path: Paths.faq.url,
      name: Paths.faq.name,
      component: Faq,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: "Advanced"},
          { name: Paths.faq.name },
        ],
      },
    },
    {
      path: Paths["cli-tool"].url,
      name: Paths["cli-tool"].name,
      component: CliTool,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: Paths.tools.name },
          { name: Paths["cli-tool"].name },
        ],
      },
    },
    {
      path: Paths["metadata-specification"].url,
      name: Paths["metadata-specification"].name,
      component: MetadataSpecification,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: "Step 2", link: Paths.steps.url},
          { name: Paths.metadata.name },
          { name: Paths["metadata-specification"].name },
        ],
      },
    },
    {
      path: Paths["metadata-examples"].url,
      name: Paths["metadata-examples"].name,
      component: MetadataUseCases,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: "Step 2", link: Paths.steps.url},
          { name: Paths.metadata.name },
          { name: Paths["metadata-examples"].name },
        ],
      },
    },
    {
      path: Paths["metadata-wizard"].url,
      name: Paths["metadata-wizard"].name,
      component: MetadataWizard,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: "Step 2", link: Paths.steps.url},
          { name: Paths.metadata.name },
          { name: Paths["metadata-wizard"].name },
        ],
      },
    },
    {
      path: Paths.taxonomy.url,
      name: Paths.taxonomy.name,
      component: TaxonomyOverview,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: "Step 3", link: Paths.steps.url},
          { name: Paths.taxonomy.name },
        ],
      },
    },
    {
      path: Paths["taxonomy-specification"].url,
      name: Paths["taxonomy-specification"].name,
      component: TaxonomySpecification,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: "Step 3", link: Paths.steps.url},
          { name: Paths.taxonomy.name, link: Paths.taxonomy.url },
          { name: Paths["taxonomy-specification"].name },
        ],
      },
    },
    {
      path: Paths["taxonomy-wizard"].url,
      name: Paths["taxonomy-wizard"].name,
      component: TaxonomyWizard,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: "Step 3", link: Paths.steps.url},
          { name: Paths.taxonomy.name, link: Paths.taxonomy.url },
          { name: Paths["taxonomy-wizard"].name },
        ],
      },
    },
    {
      path: Paths["taxonomy-examples"].url,
      name: Paths["taxonomy-examples"].name,
      component: TaxonomyUseCases,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: "Step 3", link: Paths.steps.url},
          { name: Paths.taxonomy.name, link: Paths.taxonomy.url },
          { name: Paths["taxonomy-examples"].name },
        ],
      },
    },
    {
      path: Paths["workflow-build-system"].url,
      name: Paths["workflow-build-system"].name,
      component: WorkflowBuildSystem,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: "Step 4", link: Paths.steps.url},
          { name: Paths.workflow.name, link: Paths.workflow.url },
          { name: Paths["workflow-build-system"].name },
        ],
      },
    },
    {
      path: Paths["workflow-cli"].url,
      name: Paths["workflow-cli"].name,
      component: WorkflowCli,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: "Step 4", link: Paths.steps.url},
          { name: Paths.workflow.name, link: Paths.workflow.url },
          { name: Paths["workflow-cli"].name },
        ],
      },
    },
    {
      path: Paths["workflow"].url,
      name: Paths["workflow"].name,
      component: Workflow,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: "Step 4", link: Paths.steps.url},
          { name: Paths.workflow.name }
        ],
      },
    },
    {
      path: Paths["workflow-api"].url,
      name: Paths["workflow-api"].name,
      component: WorkflowAPI,
      meta: {
        breadcrumb: [
          { name: Paths.root.name, link: Paths.root.url },
          { name: "Step 4", link: Paths.steps.url},
          { name: Paths.workflow.name, link: Paths.workflow.url },
          { name: Paths["workflow-api"].name }
        ],
      },
    },
    {
      path: "*",
      redirect: Paths.root.url,
    },
  ],
  scrollBehavior: function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {x:0, y:0}
    }
  },
});
