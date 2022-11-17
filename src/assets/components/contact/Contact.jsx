import { ChatCenteredText, Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react'
import { Author, ContactStyle } from './style'
import { ContactTitle } from './style';

export function Contact() {
  return (
    <footer>
      <ContactTitle id='contact'>
        <ChatCenteredText size={40}/>
        <h1 >Contact</h1>
        <p>Feel free to reach out through the links below:
        </p>
      </ContactTitle>

      <ContactStyle>
        <a href="https://github.com/LuciMacedo">
          <GithubLogo size={24} />
          <p>GitHub</p>
        </a>
        <a href="https://www.linkedin.com/in/lucimaramacedom">
          <LinkedinLogo size={24} />
          <p>LinkedIn</p>
        </a>
        <a href="mailto:lucimacedom@gmail.com">
          <Envelope size={24} />
          <p>Email</p>
        </a>

      </ContactStyle>

      <Author>
        <p>Developed by Luci Macedo</p>
      </Author>
      </footer>
    );
}
