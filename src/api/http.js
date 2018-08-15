/**
 * Created by wiki on 2017/2/25.
 */
import axios from 'axios'
import config from './config'
import axiosCancel from 'axios-cancel';
import loading from '../components/loading'
var size = 0;
var nub = 0 ;
export default {
  get: function (param, config, success, error) {
    config.params = param;
    // config.requestId = config.url;
    axiosCancel(axios, {
      debug: false // default
    });
    config.method = 'GET';
    loading.showloading(true);
    size = size +1;
    axios.request(config).then(function (res) { 
      if (res.data.status === 1) {
        nub = nub+1;
        try {
          success(res.data);
          setTimeout(() => {
            if(nub==size){
              loading.showloading(false);
            }
          }, 500);
        } catch (e) {
          loading.showloading(false);
        }
      } else if (res.data.status == -200) {
        loading.showMessage('重新登录...');
        error(res.data);
        window.location.href = config.baseURL + 'login.html'
      }else{
        nub = nub+1;
        success(res.data);
        loading.showMessage(res.data.statusMsg);
        error(res.data.statusMsg);
        setTimeout(() => {
          if(nub==size){
            loading.showloading(false);
          }
        }, 500);  
      }
    }).catch(function (errors) {
      size = 0;
      nub =  0;     
      loading.showloading(false);
      console.log(errors);
      // if(errors.constructor.name != 'Cancel') {
      //   // loading.showMessage('请求超时，请检查网络');
      // }
    });
  },
  post:function (param, config, success, error) {
    param = JSON.stringify(param)
    config.data = param;
    config.method = 'POST';

    axios.request(config).then(function (res) {
      if (res.data.status === 1) {
        success(res.data);
      } else if(res.data.status == -200){
        loading.showMessage('重新登录...');
        error(res.data.statusMsg);
        var router = new Router;
        router.push('getOpenId');

      }else{
        loading.showMessage(res.data.statusMsg);
        error(res.data.statusMsg);
      }

    }).catch(function (errors) {
      // loading.showMessage(errors.toString());
      // alert(errors);
      error(errors.toString());
    })
  }
}
