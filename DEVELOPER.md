Apimap.io Developer Portal
=====

🥳 **Happy Coding** 🥳

This section is targeted to developers that want to customize the Developer Portal.

## Table of Contents

* [Introduction](#introduction)
* [Getting Started](#getting-started)
* [Custom Metadata Content](#custom-metadata-content)
* [Other Resources](#other-resources)

## Introduction

## Getting Started

### Build and Run

Based on Vue 2.x, all the usual targets exist. The easiest way to get started is using **run start**

> npm run start

#### Build 

Based on Vue 2.x, all the usual targets exist. The easiest way to build the artifacts is using **run build**

> npm run build

#### Build Docker Image

Since the dockerfile only copies files already assembled the build target must have been run before any docker build commands.

> **Step 1:** npm run build

> **Step 2:** docker build -t apimap/developer .

## Custom Metadata Content

A very important part of configuring the Apimap solution is to have coherence between the options and filters shown in the Developer Portal
and the Portal. This makes it possible to search and discover with the same options as the files are created.

```shell
docker run -e APIMAP_API_URL="http://localhost" 
 -e APIMAP_PORTAL_URL="http://localhost" 
 -e APIMAP_TITLE="Apimap.io" 
 -e APIMAP_SUPPORT="Visit github for support" 
 -p 8080:8080 
 -v $(pwd)/metadata-options.json:/app/dist/content/metadata-options.json 
 apimap/developer
```

### metadata-options.json

Contains all predefined Metadata options.

```json
{
  "fileOptions": {
    "version": [
      { "label": "1", "value": "1", "description": "Currently used version" }
    ]
  },
  "apiOptions": {
    "visibilityOptions":[
      {
      "label": "Content Missing",
      "value": "Content Missing",
      "description": "Content Missing",
      "filter": "Content Missing"
      }
    ]
  },
  "apiVersionOptions": {
    "releaseStatusOptions": [
      {
        "label": "Content Missing",
        "value": "Content Missing",
        "description": "Content Missing",
        "filter": "Content Missing"
      }
    ] 
  },
  "organizationOptions": {
    "architectureLayerOptions": [
      {
        "label": "Content Missing",
        "value": "Content Missing",
        "description": "Content Missing",
        "filter": "Content Missing"
      }
    ],
    "businessUnitOptions": [
      {
        "label": "Content Missing",
        "value": "Content Missing",
        "description": "Content Missing",
        "filter": "Content Missing"
      }
    ]
  },
  "implementationDetailsOptions": {
    "interfaceSpecificationImplementationOptions": [
      {
        "label": "Content Missing",
        "value": "Content Missing",
        "description": "Content Missing",
        "filter": "Content Missing"
      }
    ],
    "interfaceSpecificationSpecificationOptions": [
      {
        "label": "Content Missing",
        "value": "Content Missing",
        "description": "Content Missing",
        "filter": "Content Missing"
      }
    ],
    "interfaceDescriptionLanguageOptions": [
      {
        "label": "Content Missing",
        "value": "Content Missing",
        "description": "Content Missing",
        "filter": "Content Missing"
      }
    ]
  }
}
```

### Format

Each record should be described with the following variables:

| Variable    | Description                                                                                                                                                                                                                         |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| label       | The text to be shown to the user                                                                                                                                                                                                    |
| value       | The value that will be used to populate the filter                                                                                                                                                                                  |
| description | A short description of this option and when it should be used                                                                                                                                                                       |
| filter      | The filter key, possible values are: [metadata][visibility], [metadata][release status], [metadata][architecture layer], [metadata][business unit], [metadata][interface specification], [metadata][interface description language] |

Resulting in a object like this:
````json
{ 
  "label": "Programming language : Java 6", 
  "value": "JAVA 6", 
  "description": "This SDK/API has been created using java 6",
  "filter":"[metadata][interface specification]"
}
````

#### Filter Key Values

| Key | Description                               |
|--------|-------------------------------------------|
| [metadata][visibility] | Visibility options                        |
| [metadata][release status] | Release Status options                    |
| [metadata][architecture layer] | Architecture Layer options                |
| [metadata][business unit] | Business Unit options                     |
| [metadata][interface specification] | Interface Specification options           |
| [metadata][interface description language] | Interface Description Language options    |

#### File Version Option (Special option)

The following part of the metadata-options.json should be copied and not altered. 
Any changes here will just affect the specification overview presented to the user.

```json
  "fileOptions": {
    "version": [
      { "label": "1", "value": "1", "description": "Currently used version" }
    ]
  },
```

## Other Resources
___

- [Hypermedia as the Engine of Application State (HATEOAS) ](https://en.wikipedia.org/wiki/HATEOAS)
- [JSON:API — A specification for building APIs in JSON](https://jsonapi.org/)