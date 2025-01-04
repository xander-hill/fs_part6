import { createSlice, current } from '@reduxjs/toolkit'

const initialState = 'hello world'

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            return initialState
        }
    }
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer