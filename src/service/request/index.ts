import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

import ZRequestConfig from './types'
class ZRequest {
  instance: AxiosInstance
  // 让当前实例 => axios实例
  constructor(config: ZRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (config) => {
        console.log(config)
        return config
      },
      (err) => {
        console.log(err)
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        console.log(err)
      }
    )

    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccess,
      config.interceptors?.requestError
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccess,
      config.interceptors?.responseError
    )
  }
  // 封装请求方法
  request<T = any>(config: ZRequestConfig<T>) {
    if (config.interceptors?.requestSuccess) {
      config = config.interceptors.requestSuccess(
        config as InternalAxiosRequestConfig
      )
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccess) {
            res = config.interceptors.responseSuccess(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: ZRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: ZRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: ZRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  put<T = any>(config: ZRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PUT' })
  }
  patch<T = any>(config: ZRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default ZRequest
