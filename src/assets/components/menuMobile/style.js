import styled, { css } from "styled-components";

export const StyledMenu = styled.nav `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);

  background: rgb(140,0,0);
  background: linear-gradient(45deg, rgba(140,0,0,1) 0%, rgba(22,22,22,0.8534007352941176) 95%);

  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  transform: translateY(50px);

  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  ${({ isOpen }) => isOpen && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
  `}
`