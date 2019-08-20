import Vue from 'vue'
import Vuex from 'vuex'
import userstore from './module/user'
const state = {
      
}
const getters = {

}
const mutations = {

}

Vue.use(Vuex);
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    modules: {
        userstore
    }
})
export default store;
