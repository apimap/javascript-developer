import { mapResourceModules } from "@reststate/vuex";

import client from "../client.js";

export default {
    modules: {
        ...mapResourceModules({
            names: ["taxonomy", "api", "taxonomies", "classification"],
            httpClient: client
        }),
    },
}