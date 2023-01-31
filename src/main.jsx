import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'

import {AuthProvider} from './hooks/auth'
import {LikeProvider} from './hooks/like';

import GlobalStyles from './styles/global'
import theme from './styles/theme'

import {Routes} from './Routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AuthProvider>
        <LikeProvider>
          <Routes />
        </LikeProvider>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
