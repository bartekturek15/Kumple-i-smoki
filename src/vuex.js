import createPersistedState from "vuex-persistedstate";
import * as Vuex from 'vuex';



const state = {
    user: null,
    enemyID: null,
    raceID: null,
    dndclassID: null,
    subclassID: null
};

const store = new Vuex.Store({
    state,
    plugins: [createPersistedState()],
    getters: {
        enemyID: (state) => {
            return state.enemyID;
        },
        subclassID: (state) => {
            return state.subclassID;
        },
        raceID: (state) => {
            return state.raceID;
        },
        dndclassID: (state) => {
            return state.dndclassID;
        },
        user: (state) => {
            return state.user;
        }
    },
    actions: {
        enemyID(context, enemyID) {
            context.commit('enemyID', enemyID);
        },
        subclassID(context, subclassID) {
            context.commit('subclassID', subclassID);
        },
        raceID(context, raceID) {
            context.commit('raceID', raceID);
        },
        dndclassID(context, dndclassID) {
            context.commit('dndclassID', dndclassID);
        },
        user(context, user) {
            context.commit('user', user);
        }
    },
    mutations: {
        enemyID(state, enemyID) {
            state.enemyID = enemyID;
        },
        subclassID(state, subclassID) {
            state.subclassID = subclassID;
        },
        raceID(state, raceID) {
            state.raceID = raceID;
        },
        dndclassID(state, dndclassID) {
            state.dndclassID = dndclassID;
        },
        user(state, user) {
            state.user = user;
        }
    }
});

export default store;