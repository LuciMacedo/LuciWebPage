import { HeaderWrapper } from "./style"
import LuciPic from '../../img/luci5.webp'
import {Link} from "react"
import { DownloadSimple } from "phosphor-react";
import lucicv from '../../img/lucicv.pdf'

export function Header() {
 

  return (  
    <HeaderWrapper>
      <article>
        <strong>Hello, World! I am Luci</strong>
        <h1>Front End Developer</h1>
        <p>Enthusiastic Front End developer motivated to learn and prepared to contribute to your company's success while developing new skills and gaining experience.</p>
        <button>
          <a href={lucicv} target="_blank" download>
            Download CV 
            <DownloadSimple size={20}/>
          </a>
        </button>
      </article>
      <img src={LuciPic} alt="Luci picture" />
    </HeaderWrapper>
  );
}

