import React, { useReducer, useRef, useEffect } from 'react'
import Button from '@material-ui/core/Button'

const Counter =() =>{
  return (
    <div>
      <Button variant="contained">+</Button>
      <Button variant="contained">-</Button>
    </div>
  )
}
export default Counter