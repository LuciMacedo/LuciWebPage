import styled from "styled-components";

export const NavWrapper = styled.nav`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
  background: ${(props) => props.theme['black-900']};

  div {
    display: none;
  }

  img {
    width: 5rem;
    height: 5rem;
  }

  nav {
    padding: 1.5rem;
  }

  ul {
    display: flex;
    gap: 1.5rem;
    list-style-type: none;
  }

  li {
    font-weight: 400;
    font-size: 1.4rem;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    padding: 1rem;
    cursor: pointer;
  
    &:hover {
      border-bottom: 2px solid ${(props) => props.theme['red']};
    }
  }

  @media (max-width:768px){
    div {
      display: block;
    }
    ul {
      display: none;
    }
  }
`
