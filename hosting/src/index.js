import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './App'

const store = configureStore()

const render = (_App, _store) => {
  ReactDOM.render(
    <Provider store={_store}>
      <_App />
    </Provider>,
    document.getElementById('root')
  )
}

render(App, store)
