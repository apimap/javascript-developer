export const definition = {
    root: {
        title: "Root Object",
        entities: [
            {
                title: "Data",
                required: true,
                dataType: "Metadata Data Object",
                description: "Part of the Metadata Root Object. Contains the Data Object holds all elements used to describe how the API has been implemented and other information regarding use of the API."
            },
            {
                valuesKey: "version",
                title: "Api Catalog Version",
                required: true,
                example: "1",
                dataType: "String",
                description: "Part of the Metadata Root Object. Used to describe the file format version and thereby the parser wanted to validate the content specified in the Data Object."
            }
        ]
    },
    data:{
        title: "Data Object",
        entities: [
            {
                title: "Name",
                description: "Part of the Metadata Data Object. The API display name used to describe the API.",
                dataType: "String",
                required: true,
                example: "My First API"
            },
            {
                title: "API version",
                description: "Part of the Metadata Data Object. The API Version described in the metadata and corresponding taxonomy files.",
                dataType: "String",
                required: true,
                example: "1.0.0"
            },
            {
                title: "Release Status",
                description: "Part of the Metadata Data Object. Describes the current status of the source code of the API. Used to enable 'API-First Design First' and 'API-First Code First' by enabling the inclusion of unfinished APIs.",
                dataType: "String",
                required: true,
                valuesKey: "releaseStatusOptions"
            },
            {
                title: "Visibility",
                description: "Part of the Metadata Data Object. Describes the visibility of the API, if it is designed to be publicly available or has restrictions atteched.",
                dataType: "String",
                required: true,
                valuesKey: "visibilityOptions"
            },
            {
                title: "Architecture Layer",
                description: "Part of the Metadata Data Object. Describes the architectural layer in the business unit this API has been developed.",
                dataType: "String",
                required: true,
                valuesKey: "architectureLayerOptions"
            },
            {
                title: "Business Unit",
                description: "Part of the Metadata Data Object. Name of the business unit owning the API.",
                dataType: "String",
                required: true,
                valuesKey: "businessUnitOptions"
            },
            {
                title: "Interface Specification",
                description: "Part of the Metadata Data Object. Defines the standard used to format the resources exposed by the API.",
                dataType: "String",
                required: true,
                valuesKey: "interfaceSpecificationImplementationOptions"
            },
            {
                title: "Interface Description Language",
                description: "Part of the Metadata Data Object. Defines the standard used to describe the resource formatting to clients of the API.",
                dataType: "String",
                required: true,
                valuesKey: "interfaceSpecificationSpecificationOptions"
            },
            {
                title: "System Identifier",
                description: "Part of the Metadata Data Object. Defines a way to connect this API to a system or parent system.",
                dataType: "String",
                example: "SYS001",
                required: false
            },
            {
                title: "Documentation",
                description: "Part of the Metadata Data Object. Defines a array of urls or other definitions of how to find documentation. If your documentation is in the code repository please use the filename (e.g README.md)",
                dataType: "Array<String>",
                example: "[\"<url>\",\"README.md\"]",
                required: false
            }
        ]
    }
}
