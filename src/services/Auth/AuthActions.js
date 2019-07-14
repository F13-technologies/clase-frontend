import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  login: ['email', 'password'],
  loginSuccess: ['payload'],
  loginFailed: ['error'],
  
  logout: []
})

export default Creators