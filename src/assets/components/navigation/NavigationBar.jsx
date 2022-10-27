import Logo from '../../img/luci.png'
import { NavWrapper } from './style';
import { Link } from "react-scroll";
import { List } from 'phosphor-react';


export function NavigationBar({ setIsOpen }) {

  return (
    <NavWrapper>
      <img src={Logo} alt="Logo LM" />
      <div>
        <List size={30} onClick={() => setIsOpen(true)} />
      </div>
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
    </NavWrapper>

  );
}
