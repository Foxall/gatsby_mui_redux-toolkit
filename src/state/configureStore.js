import { configureStore as rtkConfigureStore } from '@reduxjs/toolkit'
import counterReducer from './demoSlice'

const configureStore = () => rtkConfigureStore({ reducer: { counter: counterReducer } })
export default configureStore
