import { NavigationBar } from '../../navigation/NavigationBar'
import { GlobalStyled} from '../../../styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../../styles/default'
import { Header } from '../../header/Header'
import { Gallery } from '../../gallery/Gallery'
import { Skills } from '../../skill/Skills'
import { Contact } from '../../contact/Contact'
import { useState } from 'react'

export function Home() {

  return (
    <div>
      <ThemeProvider theme={ defaultTheme }>
        <NavigationBar/>
        <Header />
        <Gallery />
        <Skills/>
        <Contact />
        <GlobalStyled/>
      </ThemeProvider>
    </div>
  )
}