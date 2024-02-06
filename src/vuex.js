import createPersistedState from "vuex-persistedstate";
import * as Vuex from 'vuex';



const state = {
    user: null,
    enemyID: null,
    raceID: null,
    dndclassID: null
};

const store = new Vuex.Store({
    state,
    plugins: [createPersistedState()],
    getters: {
        enemyID: (state) => {
            return state.enemyID;
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