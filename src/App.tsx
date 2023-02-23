import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'
import { defultTheme } from './styles/themes/default'




export function App() {
  return (
    <ThemeProvider theme={defultTheme}>
      <Button variant='primary'/>
      <Button variant='secundary'/>
      <Button variant='success' />
      <Button variant='danger'/>
      <Button/>


      <GlobalStyle/>
    </ThemeProvider>
  )
}

