export const SET_METADATA_FORM_SELECTIONS = 'SET_METADATA_FORM_SELECTIONS';
export const RESET_METADATA_FORM_SELECTIONS = 'RESET_METADATA_FORM_SELECTIONS';
export const SET_TAXONOMY_FORM_SELECTIONS = 'SET_TAXONOMY_FORM_SELECTIONS';
export const RESET_TAXONOMY_FORM_SELECTIONS = 'RESET_TAXONOMY_FORM_SELECTIONS';
export const RESET_TAXONOMY_FORM = 'RESET_TAXONOMY_FORM';

const defaultMetadata = {
    "data": {
        "name": "",
        "description": "",
        "visibility": "",
        "api version": "",
        "release status": "",
        "interface specification": "",
        "interface description language": "",
        "architecture layer": "",
        "business unit": "",
        "system identifier": "",
        "documentation" : []
    },
    "api catalog version": "1"
};

const defaultTaxonomy = {
    "data": {
        "classifications": [],
        "taxonomy": undefined
    },
    "api catalog version": "1"
};

export default {
    getters: {
        metadata: state => {
            return state.metadata;
        },
        taxonomy: state => {
            return state.taxonomy;
        },
    },
    state: {
        metadata: { ...defaultMetadata.data },
        taxonomy: { ...defaultTaxonomy.data },
    },
    mutations: {
        [SET_METADATA_FORM_SELECTIONS](state, payload) {
            state.metadata = payload
        },
        [SET_TAXONOMY_FORM_SELECTIONS](state, payload) {
            state.taxonomy = payload
        },
        [RESET_METADATA_FORM_SELECTIONS](state) {
            state.metadata = {...defaultMetadata.data}
        },
        [RESET_TAXONOMY_FORM_SELECTIONS](state) {
            state.taxonomy.classifications = []
        },
        [RESET_TAXONOMY_FORM](state) {
            state.taxonomy = {...defaultTaxonomy.data}
        }
    },
    actions: {
        SET_METADATA_FORM_SELECTIONS({commit}, payload) {
            commit(SET_METADATA_FORM_SELECTIONS, payload)
        },
        SET_TAXONOMY_FORM_SELECTIONS({commit}, payload){
            commit(SET_TAXONOMY_FORM_SELECTIONS, payload)
        },
        RESET_METADATA_FORM_SELECTIONS({commit}){
            commit(RESET_METADATA_FORM_SELECTIONS)
        },
        RESET_TAXONOMY_FORM_SELECTIONS({commit}){
            commit(RESET_TAXONOMY_FORM_SELECTIONS)
        },
        RESET_TAXONOMY_FORM({commit}){
            commit(RESET_TAXONOMY_FORM)
        }
    }
}