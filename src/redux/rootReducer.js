import { combineReducers } from 'redux';
import { reducer as login } from './login/reducer';

export const rootReducer = combineReducers({
  user: login,
});
