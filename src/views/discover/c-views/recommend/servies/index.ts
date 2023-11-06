import zRequest from '@/services'

export function getBanners() {
  return zRequest.get({
    url: '/banner'
  })
}
