import { BASE_URL, HEADERS, TIMEOUT } from './config'
import ZRequest from './request'

const zRequest = new ZRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: HEADERS
})
export default zRequest
