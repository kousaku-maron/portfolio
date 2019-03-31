import { createActions } from 'redux-actions'

const actions = createActions(
  {
    MENU_CHANGE: (args) => (args),
  },
  'SHOW_MENU_TOGGLE',
)

export default actions
