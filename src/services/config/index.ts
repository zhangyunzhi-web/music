// let BASE_URL = ''
// if (
//   process.env.NODE_ENV === 'development' ||
//   process.env.REACT_APP_ENV === 'dev'
// ) {
//   console.log('🚀 ~ file: index.ts:3 ~ process.env:', process.env)
//   BASE_URL = 'http://codercba.com:9002'
// } else {
//   BASE_URL = 'http://codercba.com:9003'
// }
const BASE_URL = process.env.REACT_APP_API_URL
export const TIMEOUT = 10000
export const HEADERS = {
  'Content-Type': 'application/json'
}
export { BASE_URL }
