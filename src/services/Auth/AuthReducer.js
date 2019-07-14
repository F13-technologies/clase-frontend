import { createReducer } from 'reduxsauce'

import Token from '../../common/LocalStorage/token';
import { Types } from './AuthActions'

export const INITIAL_STATE = {
  authentication: Token.isTokenValid(),
}

const loginSucces = (states, { data }) => {
  return { ...states, movies: data }
}

const logout = (states) => ({ ...states, authentication: false })

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSucces,
  [Types.LOGOUT]: logout
})