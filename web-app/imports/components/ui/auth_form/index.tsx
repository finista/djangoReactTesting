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
        e.preventDefault()
        
        if (isLoading) {
            return
        }
        
        if (username === "" || password === "") {
            alert("Username and password must not be empty.")
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
                    alert("Invalid credentials, please make sure the password and username is correct.")
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