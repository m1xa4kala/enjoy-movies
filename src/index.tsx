import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ColorModeScript } from '@chakra-ui/react'
import { App } from './app/App'
import theme from './theme'

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </Router>
  </React.StrictMode>
)
