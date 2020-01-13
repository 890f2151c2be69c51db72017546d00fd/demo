import { createStore } from 'easy-peasy'
import users from './users/users'
import cvs from './cvs/cvs'

export const storeModel = {
  users,
  cvs

}

export default createStore(storeModel)
