import Mock from 'mockjs'
import user from './user'

Mock.mock(/\/login/,'post',user.login)

export default Mock
