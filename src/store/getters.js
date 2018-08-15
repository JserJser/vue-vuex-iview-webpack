/**
 * Created by wiki on 2017/2/27.
 */
export const  getAppId = state => {
  return state.appid
    ? state.appid
    : ''
}

export const  getStores = state => {
  return state.stores
    ? state.stores
    : []
}

export const  getDefId = state => {
  return state.DefId
    ? state.DefId
    : ''
}

export const  getUserwx = state => {
  return state.userwx
    ? state.userwx
    : {}
}
