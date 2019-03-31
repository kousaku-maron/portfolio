import { handleActions } from 'redux-actions'
import actions from '../actions/authActions'

const initialState = { 
  uid: null,
  token: null,
}

const reducer = handleActions({
  [actions.setUid]: (state, action) => ({
    ...state,
    uid: action.payload,
  }),
}, initialState)

export default reducer