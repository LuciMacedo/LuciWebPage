import styled from "styled-components";


export const StyledBurguer = styled.div `
  svg {
    z-index: 1000;
    cursor: pointer;
    position: absolute;
    top: 3.2rem;
    right: 2rem;
  }
`

export const StyledBackground = styled.div `
  position: fixed;
  top: 1.5rem;
  right: 0.2rem;  
  background-image: radial-gradient(rgba(140,0,0,1) 0%, rgba(22,22,22,0.8534007352941176) 95%);
  width: 6rem;
  height: 6rem;
  border-radius: 50%;

  transform: ${(props) => (props.isopen ? 'scale(80)' : 'scale(0)')};
  transition: transform 1s;
`

export const StyledNavigation = styled.nav `
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 600;
    visibility: ${(props) => (props.isopen ? 'visible' : 'hidden')};
  

  ul {
    position: absolute;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    top: 5rem;
    left: 7rem;
    
  }
`