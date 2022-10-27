import { NavigationBar } from '../../navigation/NavigationBar'
import { GlobalStyled} from '../../../styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../../styles/default'
import { Header } from '../../header/Header'
import { Gallery } from '../../gallery/Gallery'
import { Skills } from '../../skill/Skills'
import { Contact } from '../../contact/Contact'
import { MenuMobile } from '../../menuMobile/menuMobile'
import { useState } from 'react'

export function Home() {
const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <ThemeProvider theme={ defaultTheme}>
        <NavigationBar setIsOpen={setIsOpen}/>
        <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Header />
        <Gallery />
        <Skills/>
        <Contact />
        <GlobalStyled/>
      </ThemeProvider>
    </div>
  )
}