import { handleActions } from 'redux-actions'
import actions from '../actions/githubActions'

const initialState = {
  repos: {
    processing: false,
    contents: null,
  },
  // event: {
  //   processing: false,
  //   contents: null,
  // },
}

const reducer = handleActions({
  [actions.setGithubRepos]: (state, action) => ({
    ...state,
    repos: {
      ...state.repos,
      contents: action.payload,
      processing: false,
    },
  })
}, initialState)

export default reducer