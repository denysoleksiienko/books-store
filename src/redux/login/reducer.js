import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  isLoggedIn: false,
};

export const reducer = handleActions(
  {
    [actions.login]: (state, { payload }) => ({
      ...state,
      isLoggedIn: true,
    }),
    [actions.logout]: (state, { payload }) => ({
      ...state,
      isLoggedIn: false,
    }),
  },
  initialState
);
