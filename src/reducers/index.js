import { combineReducers } from 'redux';
import auth from './auth_reducer';
import userFormReducer from './user_formReducer';
import userReducer from './user_reducer';

////////////////////////////////////////////////////////////////////////
// Combines reducers and assigns reducer names
export default combineReducers({
  auth,
  userFormReducer,
  userReducer
});
