import { Action, action } from 'easy-peasy'
import { OrderedMap } from 'immutable'

export interface ICvData {
  id: number
  name: string
  text: string
}

export interface IUpdateCvData {
  id: number
  data: ICvData
}

export interface ICvsModel {
  cvs: OrderedMap<number, ICvData>
  createCv: Action<ICvsModel, ICvData>
  updateCv: Action<ICvsModel, IUpdateCvData>
  deleteCv: Action<ICvsModel, number>
}

const cvsModel: ICvsModel = {
  cvs: OrderedMap(),
  createCv: action((state, data) => {
    console.log(data)
    state.cvs = state.cvs.set(data.id, data)
  }),
  updateCv: action((state, data) => {
    state.cvs = state.cvs.set(data.id, data.data)
  }),
  deleteCv: action((state, id) => {
    state.cvs = state.cvs.remove(id)
  }),
}

export default cvsModel
