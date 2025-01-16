export type NotificationType = "info" | "warn" | "error";

export interface Notification {
    readonly id: string
    readonly type: NotificationType
    readonly title: string
    readonly content: string
    readonly lifeTime?: number
    fadingOut?: boolean
}

export interface NotificationsState {
    notifications: Notification[]
}

export const initialState: NotificationsState = {
    notifications: []
}