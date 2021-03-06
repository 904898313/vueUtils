import axios from 'axios'

const instance = axios.create({
  baseURL: window.location.origin,
  // baseURL: process.env,
  timeout: 2000
});
instance.defaults.headers.UADMIN = 169;
instance.defaults.headers.SADMIN = 'af465d912ca50fb30ae1ab96f54227f9';
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  console.log('服务器错误');
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance