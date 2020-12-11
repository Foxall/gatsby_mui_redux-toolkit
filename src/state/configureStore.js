import { configureStore as rtkConfigureStore } from '@reduxjs/toolkit'
import counterReducer from './demoSlice'
import FakeListSliceReducer from './fakelisteSlice'

const configureStore = () => rtkConfigureStore({ reducer: { counter: counterReducer, fakelist: FakeListSliceReducer } })
export default configureStore
