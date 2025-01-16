import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { lazy, Suspense } from "react"

import { ProtectedRoute, AuthProvider } from '@imports/core/protected_route'

import NotificationContainer from "@imports/components/shared/notification_container";
import LoadingPage from "@imports/pages/LoadingPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './style.scss'

const Home = lazy(() => import('@imports/pages/Home'))
const Login = lazy(() => import('@imports/pages/Login'))
const Register = lazy(() => import('@imports/pages/Register'))
const NotFound = lazy(() => import('@imports/pages/NotFound'))
const Flashcards = lazy(() => import('@imports/pages/Flashcards'))

const Logout = () => {
  localStorage.clear()
  return <Navigate to="/login" />
}

const RegisterAndLogout = () => {
  localStorage.clear()
  return <Register />
}

const App = () => {
  return (
    <BrowserRouter>
      <NotificationContainer />

      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route
            path="/"
            element={
              <AuthProvider>
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              </AuthProvider>
            }
          />
          <Route
            path="/flashcards"
            element={
              <AuthProvider>
                <ProtectedRoute>
                  <Flashcards />
                </ProtectedRoute>
              </AuthProvider>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
    
export default App