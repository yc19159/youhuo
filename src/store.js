import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchShow:true,
    active:0,
  
  },
  mutations: {
   changeSearch(state,searchShow){
       state.searchShow=searchShow;
   },
   changeActive(state,active){
    state.active=active;
   }
  },
  actions: {

  }
})
