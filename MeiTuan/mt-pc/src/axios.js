import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com';
//Add a request interceptor 请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.params={
        ...config.params,//合并基本参数
        appkey:'WebTIanJie_1559114331759'
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

  export default axios;