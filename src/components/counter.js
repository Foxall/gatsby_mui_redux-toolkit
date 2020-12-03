import React, { useReducer, useRef, useEffect } from 'react'

const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

function counter(state = 0, action) {
  switch (action.type) {
    case increment.type:
      return state + 1
    case decrement.type:
      return state - 1
    default:
      return state
  }
  document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment())
})
}

