import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const FakeListSlice = createSlice({
  name: 'fakeliste',
  initialState,
  reducers: {
    setNumber (state, action) {
        state.value = action.payload
        }
  }
})

export const {setNumber} = FakeListSlice.action
export default FakeListSlice.reducer
