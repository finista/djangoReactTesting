import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "@imports/components/app/component"
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
