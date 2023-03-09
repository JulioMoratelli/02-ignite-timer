import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defultTheme } from './styles/themes/default'
import { Router } from './Router'
import { CyclesContextProvider } from './pages/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defultTheme}>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
