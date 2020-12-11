import React from 'react'
import { Button } from 'gatsby-theme-material-ui'
import TextField from '@material-ui/core/TextField'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../state/demoSlice'
import TextButton from './textbutton'

const Counter = () => {
  const dispatch = useDispatch()
  const name = useSelector(state => state.counter.value)
  return (
    <div>
      <Button variant='contained' onClick={() => dispatch(increment())}>
        +
      </Button>
      <Button variant='contained' onClick={() => dispatch(decrement())}>
        -
      </Button>
      <TextField value={name} id='standard-basic' />
      <TextButton />
    </div>
  )
}
export default Counter
