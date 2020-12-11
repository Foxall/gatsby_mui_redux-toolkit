import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useDispatch } from 'react-redux'
import { setNumber } from '../state/demoSlice'

const TextButton = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(setNumber(event.target.value))
  }

  return (
    <div>
      <TextField onChange={handleChange} />
    </div>
  )
}
export default TextButton
