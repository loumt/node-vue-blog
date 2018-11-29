
import Cookie from 'js-cookie'

const TokenKey = 'node-vue-blog'

export function getToken(){
  return Cookie.get(TokenKey)
}

export function setToken(token){
  return Cookie.set(TokenKey,token)
}

export function remoteToken(){
  return Cookie.remove(TokenKey)
}
