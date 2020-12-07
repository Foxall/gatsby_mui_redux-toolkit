import React, { useReducer, useRef, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement, incrementByAmount } from '../state/demoSlice'
const Counter =() =>{

  const dispatch = useDispatch()
  const name = useSelector((state) => state.counter.value)
  return (
    <div>
      <Button variant="contained" onClick={() => dispatch(increment())}>+</Button>
      <Button variant="contained" onClick={() => dispatch(decrement())}>-</Button>
      <TextField value={name} id="standard-basic"/>
      <TextField id="standard-basic" label="choose a number"/>
      <Button variant="contained" >Validate</Button>
    </div>
  )
}
export default Counter