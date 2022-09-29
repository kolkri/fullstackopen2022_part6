import { createSlice } from "@reduxjs/toolkit"

const initialState = 'all'

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state, action) {
            console.log('action.payload', action.payload);
            return action.payload
        }
    }
})


export const { setFilter } = filterSlice.actions
export default filterSlice.reducer