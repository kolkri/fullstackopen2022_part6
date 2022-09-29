import { createSlice } from "@reduxjs/toolkit"

const initialState = null

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showNotification(state, action) {
            return action.payload
        }
    }
})

export const {showNotification} = notificationSlice.actions
export const setNotification = (message, duration) => dispatch => {
    dispatch(showNotification(message))
    setTimeout(() =>{
        dispatch(showNotification(null))
    }, duration*1000)
}


export default notificationSlice.reducer