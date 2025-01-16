import { useAppDispatch } from "@imports/core/state/hooks"
import { removeNotification } from "@imports/core/state/slices/notificationSlice"

import { NotificationProps } from "./types"
import "./style.scss"

const Notification = (props: NotificationProps) => {
    const { id, title, content, fadingOut, type } = props.data
    const dispath = useAppDispatch()

    const closeNotification = () => {
        dispath(removeNotification(id))
    }

    return (
        <div className={fadingOut ? "notification fade-out" : "notification"}>
            <button className="close-btn" onClick={closeNotification}>x</button>
            <span className={`title ${type}`}>{title}</span>
            <span className="contents">{content}</span>
        </div>
    )
}

export default Notification