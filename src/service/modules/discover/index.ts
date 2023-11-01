import zRequest from '../..'

interface IHomeMultidata {
  data: any
  returnCode: string
  success: false
}
zRequest
  .request<IHomeMultidata>({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res.data, res.returnCode, '-------')
  })
