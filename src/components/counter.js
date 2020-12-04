import React, { useReducer, useRef, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

const Counter =() =>{
  return (
    <div>
      <Button variant="contained">+</Button>
      <Button variant="contained">-</Button>
      <TextField id="standard-basic" label="choose a number" />
    </div>
  )
}
export default Counter