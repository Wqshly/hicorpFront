// 封装axios
import axios from 'axios'
import {Message, Loading} from 'element-ui'
import router from '@/router'
import qs from 'qs'

const service = axios.create({
  // 设置跨域代理接口统一的前置地址
  baseURL: process.env.NODE_ENV === 'production' ? process.env.BASE_API : '/api',
  timeout: 1000 * 3
})

// 请求拦截
service.interceptors.request.use(config => {
  Loading.service({text: 'Loading...'})
  return config
}, error => {
  Message.error({message: '请求超时'})
  return Promise.resolve(error)
})

// 响应拦截
service.interceptors.response.use(res => {
  Loading.service().close()
  if (res.data.code === 200) {
    return res.data
  } else {
    if (res.data.code === 401) {
      Message.error(res.data.msg)
      router.push('/login')
    } else if (res.data.code === 400) {
      Message.error({message: res.data.msg})
    } else if (res.data.code === 404) {
      Message.error('网络连接错误!')
    } else if (res.data.code === 1) {
      Message.error({message: res.data.msg})
    } else if (res.data.code === 2) {
      Message.warning({message: res.data.msg})
    } else {
      return res
    }
    return Promise.reject(res)
  }
}, error => {
  Loading.service().close()
  if (error.response.status === 504 || error.response.status === 404) {
    Message.error({message: '网络或服务器错误! ⊙﹏⊙∥'})
  } else if (error.response.status === 403) {
    Message.error({message: error.response.data.msg})
    if (error.response.data.msg === '未登录!') {
      router.push('/login')
    }
  } else if (error.response.status === 500) {
    Message.error({message: '您没有相应的权限!'})
  } else {
    Message.error({message: '未知错误!'})
  }
  return Promise.reject(error)
})

const http = {
  // get
  async get (url) {
    return service.get(url)
  },
  async getJson (url) {
    let res = await service.get(url, {headers: {'Content-Type': 'application/json'}})
    return res
  },
  async download (url) {
    let res = await service.get(url, {responseType: 'arraybuffer'})
    return res
  },
  // post
  async post (url, param) {
    let res = await service.post(url, qs.stringify(param))
    return res
  },
  async postJson (url, param) {
    let res = await service.post(url, param, {headers: {'Content-Type': 'application/json'}})
    return res
  },
  async upload (url, data) {
    let res = await service.post(url, data, {headers: {'Content-Type': 'multipart/form-data'}})
    return res
  },
  async put (url, param) {
    let res = await service.put(url, qs.stringify(param))
    return res
  },
  async putJson (url, param) {
    let res = await service.put(url, param, {headers: {'Content-Type': 'application/json'}})
    return res
  },
  async delete (url) {
    let res = await service.delete(url)
    return res
  }
}

export default http
