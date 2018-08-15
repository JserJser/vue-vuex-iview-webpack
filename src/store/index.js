/**
 * Created by wiki on 2017/2/27.
 */
import  Vuex from 'vuex'
import {actions,mutations}from './actions'
import * as getters from './getters'

Vue.use(Vuex);

const state = {
  appid:null,
  stores:[],
  DefId:'',
  userwx:{'nickname':"as"}
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
