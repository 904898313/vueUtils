import axios from './http.js'

export function get(url, params) {
  return new Promise(function (reslove, reject) {
    axios.get(url, { params }).then((res) => {
      if(res) {
        reslove(res)
      } else {
        reject(res)
      }
    },(err) => {
      reject(err)
    })
  })
}