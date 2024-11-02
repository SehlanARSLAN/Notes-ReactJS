import {configureStore} from '@reduxjs/toolkit'
import colorSlice from './colorThema/ColorSlice'
import filterSlice from './Filter/FİlterSlice'
import notesSlice from './Notes/NotesSlice'

export const store = configureStore({
    reducer:{
        color:colorSlice,
        filter:filterSlice,
        notes:notesSlice
    }
})