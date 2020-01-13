import { Action, action } from 'easy-peasy'
import { Map } from 'immutable'

export interface IUser {
  id: number
  username: string
  password: string
}

export interface IUserModel {
  isLogged: boolean
  users: Map<string, IUser>
  login: Action<IUserModel, any>
  createUser: Action<IUserModel, IUser>
}

const users: IUserModel = {
  users: Map(),
  isLogged: false,
  login: action((state, value) => {
    const user = state.users.get(value.username)
    if (user.password === value.password) {
      state.isLogged = true
    }
  }),
  createUser: action((state, data) => {
    state.users = state.users.set(data.username, data)
  }),
}

export default users
