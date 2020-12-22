import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/getUser',
    method: 'post',
    data:{
      code:1
    }
  })
}

export function checkCode(data) {
  return request({
    url: '/user/checkCode',
    method: 'post',
    data
  })
}
//看是否扫码
export function loginScan(data) {
  return request({
    url: '/user/loginScan',
    method: 'post',
    data
  })
}
export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
