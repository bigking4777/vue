import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { resetRouter } from '@/router/index'

// create an axios instance
const service = axios.create({
  // baseURL: 'http://192.168.0.145:8080/', // 肖耿
  // baseURL: 'http://192.168.0.106:8090/',//刘畅
  // baseURL: 'http://192.168.0.248/Api/', // 开发环境
  // baseURL: 'http://111.229.244/Api/', // 测试环境
  // baseURL: 'http://192.168.0.126:8090', // 魏碧晨

     baseURL: 'https://www.xibuyj.com/Api/',//正式环境
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error,222) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    if(res.code=='500'){
      console.log(res.data,'error')
          removeToken() // must remove  token  first
          resetRouter()
          // commit('RESET_STATE')
          // this.$router.push({path: '/login'})
          resolve()
    }
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200&&res.code !==201) {
      // console.log(res,2212)
      Message({
        message: res.msg || '请联系管理员',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || '请联系管理员'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message||'请稍等，正在全速加载中',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
