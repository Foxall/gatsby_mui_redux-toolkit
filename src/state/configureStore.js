import { configureStore as rtkConfigureStore } from '@reduxjs/toolkit'
import incrementReducer from './demoSlice'

const configureStore = () => rtkConfigureStore({ reducer: {increment: incrementReducer} })
export default configureStore