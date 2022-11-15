import { HeaderWrapper } from "./style";
import LuciPic from '../../img/luci4.jpeg'

export function Header() {
 

  return (  
    <HeaderWrapper>
      <article>
        <strong>Hello, World! I am Luci</strong>
        <h1>Front End Developer</h1>
        <p>Enthusiastic Front End developer motivated to learn and prepared to contribute to your company's success while developing new skills and gaining experience.</p>
      </article>
      <img src={LuciPic} alt="Luci picture" />
    </HeaderWrapper>
  );
}

