import { createSlice, current } from '@reduxjs/toolkit'

const initialState = 'hello world'

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            return action.payload
        },
        removeNotification() {
            return null
        }
    }
})

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer