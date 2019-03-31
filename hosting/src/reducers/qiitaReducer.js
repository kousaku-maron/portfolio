import { handleActions } from 'redux-actions'
import actions from '../actions/qiitaActions'

const initialState = {
  articles: {
    processing: false,
    contents: null,
  },
}

const reducer = handleActions({
  [actions.setQiitaArticles]: (state, action) => ({
    ...state,
    articles: {
      ...state.articles,
      contents: action.payload,
      processing: false,
    },
  })
}, initialState)

export default reducer
