/**
 * Created by wiki on 2017/3/17.
 */
import config from './config'
import http from './http'

export default {
  wx:{
    getOpenId(param, success, error){
      config.url = 'weChat/getOpenId';
      http.get(param, config, success, error);
    },


  },

  user:{
    getUserInfo(param, success, error){
      config.url = 'user/getUserInfo';
      http.get(param, config, success, error);
    },
    logout(param, success, error){
      config.url = 'user/logout';
      http.get(param, config, success, error);
    },
  },


  shop:{
    setWorktime(param,success,error){
      config.url = 'shop/setWorktime';
      http.get(param,config,success,error);
    }
  },
  addvice:{
    addAdvice(param,success,error){
      config.url = 'advice/addAdvice';
      http.post(param,config,success,error);
    }
  },
  export:{
    download(param, success, error){
      config.url = 'export/download';
      http.get(param, config, success, error);
    },
  }
}


