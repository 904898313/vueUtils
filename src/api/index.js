import { get } from '../utils/serve'

export function getList(params) {
  return get('adminmenu/list', params)
}