export const definition = {
    root: {
        title: "Root Object",
        entities: [
            {
                title: "Data",
                required: true,
                dataType: "Taxonomy Data Object",
                description: "Part of the Taxonomy Root Object. Contains the Data Object that holds all classifications used to describe the functionality provided by the API."
            },
            {
                title: "Api Catalog Version",
                required: true,
                example: "1",
                dataType: "String",
                description: "Part of the Taxonomy Root Object. Used to describe the file format version and thereby the parser wanted to validate the content specified in the Data Object."
            }
        ]
    },
    data: {
        title: "Data Object",
        entities: [
            {
                title: "Classification",
                description: "Part of the Taxonomy Data Object. An array of the appropriate classifications selected from the Taxonomy defined.",
                dataType: "Array[String]",
                required: true,
                example: "[ \"urn:apimap:1\" ]"
            },
            {
                title: "Taxonomy",
                description: "Part of the Taxonomy Data Object. Defines the taxonomy all classifications has been selected from.",
                dataType: "String",
                required: true,
                example: "Apimap"
            }
        ]
    }
}