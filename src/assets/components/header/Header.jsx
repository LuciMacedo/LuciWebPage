import { HeaderWrapper } from "./style"
import LuciPic from '../../img/luci5.webp'
import { DownloadSimple } from "phosphor-react";
import lucicv from '../../img/lucicv.pdf'

export function Header() {
 

  return (  
    <HeaderWrapper>
      <article>
        <strong>Hello, World! I am Luci</strong>
        <h1>Front End Developer</h1>
        <p>A focused, results-driven, and highly capable Front- End Developer offering sound theoretical knowledge and practical experience across projects using HTML, CSS, JavaScript, React, Git, and GitHub.</p>
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

