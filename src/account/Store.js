import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexlocal = new VuexPersistence({
    storage:window.localStorage
})

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        logon:false,
        userIdentity:null,
        authenticated:false
        },

    mutations:{
        authenticate(state){
            state.logon=true;
            },
        authenticated(state,identity){
            state.userIdentity=identity;
            state.authenticated=true;
            state.logon=false;
        },
        logout(state){
            state.userIdentity=null;
            state.authenticated=false;
        }
    },
    getters: {
        logon:state=>state.logon,
        account:state => state.userIdentity,
        authenticated:state =>state.authenticated
    },
    plugins:[vuexlocal.plugin]
});






