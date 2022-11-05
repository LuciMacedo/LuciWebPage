import { List, X } from "phosphor-react";
import { Link } from "react-scroll";
import { StyledBurguer, StyledNavigation, StyledBackground } from "./style";
import { useState } from 'react'

export function MenuMobile() {

  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <>
      <StyledBurguer>
        <List size={30} onClick={handleClick} />
      </StyledBurguer>
      <StyledBackground isopen={isOpen}>
      </StyledBackground>
        <StyledNavigation isopen={isOpen}>
          <ul>
            <li>
              <Link
                to='gallery'
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                onClick={handleClick}
              > Projects
              </Link>
            </li>

            <li>
              <Link
                to='skills'
                spy={true}
                smooth={true}
                offset={50}
                duration={2000}
                onClick={handleClick}
              >Technology
              </Link>
            </li>

            <li>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={50}
                duration={3000}
                onClick={handleClick}
              >Contact
              </Link>
            </li>
          </ul>
        </StyledNavigation>
      
    </>
  );
}

