import React, { useReducer, useRef, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from '../state/demoSlice'

const Textfbutton =() =>{

    const dispatch = useDispatch()
    return (
      <div>
        <TextField id="standard-basic" label="choose a number"/>
        <Button variant="contained" >Validate</Button>
      </div>
    )
  }
  export default Textfbutton