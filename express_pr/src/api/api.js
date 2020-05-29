import service from '../tools/index'

// 登录
export const doLogin = ({ username, password }) => {
  return service.post('/login', {
    params: {
      username: username,
      password: password
    }
  }).then((res) => {
    console.log(res)
  })
}

// 获取主页数据
export const getData = () => {
  return service.get('/order').then((res) => {
    return res
  }).catch((error) => {
    console.log(error)
  })
}

// 获取图表数据
export const getChartData = () => {
  return service.get('/chart').then((res) => {
    return res
  }).catch((error) => {
    console.log(error)
  })
}
