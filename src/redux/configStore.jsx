import {configureStore} from '@reduxjs/toolkit'
import fakebookMessReducer from './fakebookMessReducer'

export const store = configureStore({
    reducer: {
        fakebookMessReducer:fakebookMessReducer
    }
})