import { useState, FC, FormEvent } from "react"
import { useNavigate } from "react-router-dom"

import { useTranslation } from "react-i18next"

import api from "@imports/core/api"
import { apiConstants } from "@imports/core/constants"

import FormProps from "./types"
import "./style.scss"

const AuthForm: FC<FormProps> = ({ route, method }) => {
    const { t } = useTranslation()

    const [isLoading, setLoading] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const name: string = method === "login" ? "Login" : "Register"

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (isLoading) {
            return
        }
        
        if (username === "" || password === "") {
            alert(t('auth_form.username_passwd_not_empty_warn'))
            return
        }
        
        setLoading(true)

        try {
            const res = await api.post(route, { username, password })
            console.log(res)

            if (method === "login") {
                localStorage.setItem(apiConstants.ACCESS_TOKEN, res.data.access)
                localStorage.setItem(apiConstants.REFRESH_TOKEN, res.data.refresh)

                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error: any) {
            switch (error.status){
                case 401:
                    alert(t('auth_form.invalid_credentials'))
                    break
                default:
                    alert(error)
                    break
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h1>{name}</h1>
            <input
                type="text"
                className="form-input"
                onChange={(e) => setUsername(e.target.value)}
                placeholder={t('auth_form.username_placeholder')}
            />
            <input
                type="password"
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('auth_form.password_placeholder')}
            />
            <button className="form-button" type="submit">
                {name}
            </button>
        </form>
    )
}

export default AuthForm