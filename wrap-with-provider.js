import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './src/state/configureStore'
import SetRedux from './src/state/fakelist'

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  const store = configureStore()
  return (
    <Provider store={store}>
      <SetRedux />
      {element}
    </Provider>
  )
}
