import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: 'http://rap2.taobao.org:38080/app/mock/255617',
  imeout: '3000'
})

// 请求拦截器
service.interceptors.request.use((config) => {
  Message.success('request success')
  return config
}, (error) => {
  Message.fail(error)
})

// 响应拦截器
service.interceptors.response.use((config) => {
  Message.success('reponse success')
  return config
}, (error) => {
  console.log(error)
})

export default service
