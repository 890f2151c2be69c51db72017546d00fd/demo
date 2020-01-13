// @ts-ignore
import { formatRoute } from 'react-router-named-routes'

export const CV = '/'
export const REGISTRATION = '/cameras'
export const LOGIN = '/cameras/:terminal'

export default (route: string, params: object) => {
  return formatRoute(route, params)
}
