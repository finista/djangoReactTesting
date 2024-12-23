import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import ProtectedRoute from '@imports/components/protected_route/component'

import Login from '@imports/pages/Login'
import Register from '@imports/pages/Register'
import Home from '@imports/pages/Home'
import NotFound from '@imports/pages/NotFound'

import './style.scss'

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
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App