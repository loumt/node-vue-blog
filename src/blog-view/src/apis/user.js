import request from '@/utils/request'

/**
 * 登录接口
 * @param username
 * @param password
 */
export function login(username,password){
  const data = {
    username,
    password
  }
  return request({
    url:'/login',
    method:'post',
    data
  })
}
