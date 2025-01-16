import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch } from "../.."

import { initialState, NotificationsState, Notification } from "./types"
import { DEFAULT_NOTIFICATION_LIFETIME } from "./constants"

const notificationSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        addNotification: (state: NotificationsState, action: PayloadAction<Notification>) => {
            state.notifications.push(action.payload)
        },
        removeNotification: (state: NotificationsState, action: PayloadAction<string>) => {
            state.notifications = state.notifications.filter((notification) => notification.id !== action.payload)
        },
        startFadeOut: (state: NotificationsState, action: PayloadAction<string>) => {
            const notification = state.notifications.find((notifcation) => notifcation.id === action.payload)

            if (notification) {
                notification.fadingOut = true
            }
        }
    }
})

export default notificationSlice.reducer
export const { addNotification, removeNotification, startFadeOut } = notificationSlice.actions

export const sendNotification = (notificationData: Omit<Notification, 'id'>) => (dispatch: AppDispatch) => {
    const id = crypto.randomUUID()
    const lifeTime = notificationData.lifeTime || DEFAULT_NOTIFICATION_LIFETIME

    dispatch(addNotification({...notificationData, id}))

    const fadeOutTimeout = setTimeout(() => {
        dispatch(startFadeOut(id))
    }, lifeTime)

    const removeTimeout = setTimeout(() => {
        dispatch(removeNotification(id))
    }, lifeTime + 500)

    return () => {
        clearTimeout(fadeOutTimeout)
        clearTimeout(removeTimeout)
    }
}