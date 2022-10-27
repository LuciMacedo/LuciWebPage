import { X } from "phosphor-react";
import { Link } from "react-scroll";
import { StyledMenu } from "./style";

export function MenuMobile({isOpen, setIsOpen}) {
  
  return (
    <StyledMenu isOpen={isOpen}>
        <X size={35} onClick={() => setIsOpen(!isOpen)}/>
        <ul>
          <li>
            <Link
              to='gallery'
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
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
            >Technogoly
            </Link>
          </li>

          <li>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={50}
              duration={3000}
            >Contact
            </Link>
          </li>
        </ul>
    </StyledMenu>
  );
}

