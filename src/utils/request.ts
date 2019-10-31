import axios from 'axios';
// import { Loading } from 'element-ui';

const serve = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
})

// let loadingInstance = Loading.service({});

// 请求拦截器
serve.interceptors.request.use(config => {
    // loadingInstance.open()
    const token = localStorage.getItem('userToken');
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.accessToken = token;
    }
    return config;
  }, 
  error => {
    return Promise.reject(error);
  })

// 响应拦截器
serve.interceptors.response.use(response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  })

export default {
    install(Vue: any) {
        Vue.prototype.$axios = serve;
    }
}
