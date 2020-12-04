import React, { useReducer, useRef, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useSelector, useDispatch } from 'react-redux'

const Counter =() =>{

  const dispatch = useDispatch()
  const name = useSelector((state) => state.counter.value)
  return (
    <div>
      <Button variant="contained" onClick={() => dispatch(increment())}>+</Button>
      <Button variant="contained">-</Button>
      <TextField value={name} id="standard-basic" label="choose a number" />
    </div>
  )
}
export default Counter