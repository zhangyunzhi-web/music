import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

interface Zinterceptors<T> {
  requestSuccess?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestError?: (err: any) => void
  responseSuccess?: (res: T) => T
  responseError?: (err: any) => void
}
export default interface ZRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: Zinterceptors<T>
}
