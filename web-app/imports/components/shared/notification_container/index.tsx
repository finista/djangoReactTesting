import { useSelector } from "react-redux"
import { RootState } from "@imports/core/state"

import Notification from "./notification"
import "./style.scss"

const NotificationContainer = () => {
    const { notifications } = useSelector((state: RootState) => state.notifications)

    return (
        <div className="notification-container">
            {notifications.map((notification, index) => (
                <Notification key={index}
                    data={notification}
                />
            ))}
        </div>
    )
}

export default NotificationContainer