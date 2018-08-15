/**
 * Created by wiki on 2017/3/14.
 */
import config from './config'
import http from './http'
import axios from 'axios'

export function get(url, data, success, options, cancelobj) {
  config.url = url;

  var CancelToken = axios.CancelToken;
  config.cancelToken = new CancelToken(function executor(c) {
    // An executor function receives a cancel function as a parameter
    if (cancelobj){
      cancelobj.cancel = c;
    }

  });

  return http.get(data, config, success, options.error);
};
