import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import auth from './reducers/authReducer'
import drawer from './reducers/drawerReducer'
import github from './reducers/githubReducer'
import qiita from './reducers/qiitaReducer'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if(process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const reducers = combineReducers({
  drawer,
  github,
  qiita,
  auth,
})

const configureStore = initialState => {
  const store = createStore(reducers, initialState, applyMiddleware(...middlewares))
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
