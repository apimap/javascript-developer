import {Paths} from "./paths";

export const NavigationBar = {
    advanced: [
        {
            title: "Tools ",
            sidebar: true,
            options: [
                { url: Paths["cli-tool"].url, title: Paths["cli-tool"].name , sidebar: true},
                { url: Paths["jenkins-tool"].url, title: Paths["jenkins-tool"].name , sidebar: true}
            ]
        },
        {
            title: "Help",
            sidebar: true,
            options: [
                { url: Paths.faq.url, title: Paths.faq.name , sidebar: true}
            ]
        }
    ],
    publish: [
        {
            sidebar: true,
            options: [
                { url: Paths["workflow-build-system"].url, title: Paths["workflow-build-system"].name , sidebar: true},
                { url: Paths["workflow-cli"].url, title: Paths["workflow-cli"].name , sidebar: true},
                { url: Paths["workflow-api"].url, title: Paths["workflow-api"].name , sidebar: true}
            ]
        },
    ],
    taxonomy: [
        {
            sidebar: true,
            options: [
                { url: Paths["taxonomy-specification"].url, title: Paths["taxonomy-specification"].name, sidebar: true },
                { url: Paths["taxonomy-examples"].url, title: Paths["taxonomy-examples"].name, sidebar: true },
                { url: Paths.taxonomy.url, title:Paths.taxonomy.name, sidebar: true }
            ]
        },
        {
            title: "Wizard",
            sidebar: false,
            options:[
                { url: Paths["taxonomy-wizard"].url, title:Paths["taxonomy-wizard"].name, sidebar: false }
            ]
        }
    ],
    metadata: [
        {
            sidebar: true,
            options: [
                { url: Paths["metadata-specification"].url, title:Paths["metadata-specification"].name, sidebar: true },
                { url: Paths["metadata-examples"].url, title:Paths["metadata-examples"].name, sidebar: true }
            ]
        },
        {
            title: "Wizard",
            sidebar: false,
            options:[
                { url: Paths["metadata-wizard"].url, title:Paths["metadata-wizard"].name, sidebar: false }
            ]
        }
    ]
}