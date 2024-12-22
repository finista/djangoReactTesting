import { useState, FC, FormEvent } from "react"
import { useNavigate } from "react-router-dom"

import api from "@imports/core/api"
import { apiConstants } from "@imports/core/constants"

import FormProps from "./types"
import "./style.scss"

const AuthForm: FC<FormProps> = ({ route, method }) => {
    const [isLoading, setLoading] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const name: string = method === "login" ? "Login" : "Register"

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        if (isLoading) {
            return
        }

        setLoading(true)
        e.preventDefault()

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(apiConstants.ACCESS_TOKEN, res.data.access)
                localStorage.setItem(apiConstants.REFRESH_TOKEN, res.data.refresh)

                console.log(localStorage.getItem(apiConstants.ACCESS_TOKEN))

                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
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
                placeholder="Username"
            />
            <input
                type="password"
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button className="form-button" type="submit">
                {name}
            </button>
        </form>
    )
}

export default AuthForm