import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MathJaxContext } from 'better-react-mathjax'

const config = {
  loader: { load: ["input/tex", "output/chtml"] },
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MathJaxContext config={config}>
      <App />
    </MathJaxContext>
  </StrictMode>,
)
