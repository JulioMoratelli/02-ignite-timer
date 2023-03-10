import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defultTheme } from './styles/themes/default'
import { Router } from './Router'
import { CyclesContextProvider } from './pages/CyclesContext'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
