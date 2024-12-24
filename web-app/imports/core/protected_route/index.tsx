import { useState, useEffect, FC, createContext, ReactNode, useContext } from "react"

import { Navigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"

import api from "@imports/core/api"
import { apiConstants } from "@imports/core/constants"

import './style.scss'
import { ProtectedRouteProps, AuthorizationState, AuthContextType } from "./types"

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthorized, setIsAuthorized] = useState<AuthorizationState>("waiting")

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(apiConstants.REFRESH_TOKEN)
        try {
            const res = await api.post("/user/refresh/", { refresh: refreshToken })
            if (res.status === 200) {
                localStorage.setItem(apiConstants.ACCESS_TOKEN, res.data.access)
                setIsAuthorized("success")
            } else {
                setIsAuthorized("invalid")
            }
        } catch (error) {
            console.log(`Failed to authorize user, error: ${error}`)
            setIsAuthorized("invalid")
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(apiConstants.ACCESS_TOKEN) ?? ""
        if (!token || token === "") {
            setIsAuthorized("invalid")
            return
        }

        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.exp ?? 0
        const now = Date.now() / 1000

        if (tokenExpiration < now) {
            await refreshToken()
        } else {
            setIsAuthorized("success")
        }
    }

    useEffect(() => {
        auth().catch((error) => {
            console.log(`Failed to authorize user, error: ${error}`)
            setIsAuthorized("invalid")
        })
    }, [])

    return (
        <AuthContext.Provider value={{ isAuthorized: isAuthorized }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        console.log('useAuthContext must be used with an AuthProvider!')
        return { isAuthorized: 'invalid' }
    }

    return context
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthorized } = useAuthContext()

    switch (isAuthorized) {
        case 'waiting':
            return <h1 className="middle-text">Authorizing...</h1>
        case 'success':
            return children
        default:
            return <Navigate to="/login" />
    }
}