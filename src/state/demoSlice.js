import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const incrementSlice = createSlice({
  name: 'increment',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = incrementSlice.actions
export default incrementSlice.reducer