import React from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

//extend the personalized color scheme

const colors = {
  colors: {
    900: '#1a365d',
    800: '#153e75',
    700: '#33a4f0',
  },
}

const theme = extendTheme({ colors })




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
