import { combineReducers } from 'redux'

import { Types } from '../services/Auth//AuthActions';
import reducerAuth from '../services/Auth/AuthReducer'

const appReducer = combineReducers({
  auth: reducerAuth
})

const rootReducer = (state, action) => {
  if (action.type === Types.LOGOUT) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
