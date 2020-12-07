import React, { useReducer, useRef, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement } from '../state/demoSlice'
import TextButton from './textbutton'
const Counter =() =>{
  const dispatch = useDispatch()
  const name = useSelector((state) => state.counter.value)
  return (
    <div>
      <Button variant="contained" onClick={() => dispatch(increment())}>+</Button>
      <Button variant="contained" onClick={() => dispatch(decrement())}>-</Button>
      <TextField value={name} id="standard-basic"/>
      <TextButton/>
    </div>
  )
}
export default Counter