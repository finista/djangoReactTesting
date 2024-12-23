import { ReactNode } from 'react'
export interface ProtectedRouteProps {
    children: ReactNode;
}

export interface AuthContextType {
    isAuthorized: boolean;
}

export type AuthorizationState = "waiting" | "invalid" | "success"