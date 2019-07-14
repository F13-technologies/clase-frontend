import { put, takeLatest, all } from 'redux-saga/effects';

import { Types } from "./AuthActions";
import Api from '../../common/Api/api';

function* login(data) {  
  const response = yield Api.post('/auth/login', { email: data.email, password: data.password })
    .catch(error => error );
  
  console.log(response)

  if(response.payload){
    yield put({ type: Types.LOGIN_SUCCESS, data: [ 'Pelicula 1', 'Pelicula2' ] })
  } else
    yield put({ type: Types.LOGIN_ERROR, error: response })
}

const logout = () => localStorage.clear();

function* ActionWatcher() {
  yield takeLatest(Types.LOGIN, login)
  yield takeLatest(Types.LOGOUT, logout)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}