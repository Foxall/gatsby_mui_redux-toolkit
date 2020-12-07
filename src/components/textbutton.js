import React, { useReducer, useRef, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from '../state/demoSlice'

const TextButton =() =>{

  const [value, setValue] = React.useState('Controlled');
    const dispatch = useDispatch()
    const handleChange = (event) => { dispatch(incrementByAmount(event.target.value))};

    return (
      <div>
         <TextField id="standard-basic" onChange={handleChange}/>
      </div>
    )
  }
  export default TextButton