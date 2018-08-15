/**
 * Created by wiki on 2017/2/27.
 */
import * as types from './mutation-types'
import api from '../api/API'
import apinew from '../api/apinew'

export const actions = {
  setAppId({commit}, appid){
    commit(types.SET_APPID, {
      appid: appid
    })
  },

  fetchStores({commit}){

    return new Promise((resolve, reject) => {
      var  type = ''
      api.shopManage.queryShop('',true,function(resp){
        commit(types.SET_STORES, {
          stores: resp.data
        })
        commit(types.SET_DEFID, {
          DefId: resp.def_sid
        })
        var def_sid = sessionStorage.getItem('def_sid');
        if(def_sid==869 || def_sid ==null){
          sessionStorage.setItem('def_sid',resp.def_sid);
        }else{
           sessionStorage.setItem('def_sid',def_sid);
        }
        resolve();
      },error=>{})
    })

  },

  fetchUser({commit}){
    return new Promise((resolve, reject) => {
      apinew.user.getUserInfo({},resp => {
        commit(types.SET_USERWX, {
          userwx: resp.data
        })
        resolve();
      },error=>{
      })
    })
  },

};


export const mutations = {
  [types.SET_APPID] (state, {appid}) {
    state.appid = appid
  },
  [types.SET_DEFID] (state, {DefId}) {
    state.DefId = DefId
  },
  [types.SET_STORES] (state, {stores}) {
    state.stores = stores
  },
  [types.SET_USERWX] (state, {userwx}) {
    state.userwx = userwx
  }
};
