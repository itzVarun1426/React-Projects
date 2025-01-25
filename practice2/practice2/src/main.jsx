import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GradientText from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GradientText className='gradientText'>hello world</GradientText>
  </StrictMode>
)
