import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { ProtectedRoute, AuthProvider } from '@imports/core/protected_route'

import Login from '@imports/pages/Login'
import Register from '@imports/pages/Register'
import Home from '@imports/pages/Home'
import NotFound from '@imports/pages/NotFound'
import Flashcards from "@imports/pages/Flashcards"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
    </BrowserRouter>
  )
}

export default App