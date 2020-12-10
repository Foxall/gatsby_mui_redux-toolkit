import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const FakeListSlice = createSlice({
  name: 'fakeliste',
  initialState,
  reducers: {
    setRedux (state, action) {
        state.value = action.payload
        }
  }
})

export const {setNumbesetRedux} = FakeListSlice.action
export default FakeListSlice.reducer
