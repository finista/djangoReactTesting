import { ReactNode } from 'react'

interface ProtectedRouteProps {
    children: ReactNode;
}

type AuthorizationState = "waiting" | "invalid" | "success"

export type { ProtectedRouteProps, AuthorizationState }