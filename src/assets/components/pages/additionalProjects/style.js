import styled from "styled-components";

export const ButtonStyle = styled.div `
  margin: 4rem 5rem;
  
  button {
    background: #8C0000;
    color: white;
    padding: 1.5rem;
    border: 1px solid #8C0000;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
    background: #720C11;
  }
  }
  
`

export const ProjectsTitle = styled.section `
  background: ${(props) => props.theme['black-500']};
  border-radius: 10px;
  width: 60%;
  margin: 3.5rem auto;
  padding: 1rem;
  text-align: center;
  background: white;

  svg {
    color: ${(props) => props.theme['black-900']};
  }

  h1{
    margin: 1rem;
    color: ${(props) => props.theme['red']};
  }

  h3 {
    color: ${(props) => props.theme['black-900']};
  }
`

export const ProjectsStyle = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
  
  section {
      width: 25rem;
      height: 16rem;
      position: relative;
      
      img {
      border-radius: 10px;
      width: 25rem;
      height: 16rem;
      box-shadow: 8px 11px 33px 5px rgba(0,0,0,0.59)
      }
    
      div {
        width: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 100;
        margin-top: 1.5rem;
        top: 0; 
        visibility: hidden;
        
        h1 {
          color: #8C0000;
          margin: .2rem auto;
        }
        p {
          margin: .2rem auto;
          padding: .5rem;
          color: ${(props) => props.theme['gray-100']};
        }
        h2 {
          color: ${(props) => props.theme['gray-100']};
          font-size: 1rem;
        }
      }

      &:hover {
        img {
          opacity: 0.1;
        }
        div {
          visibility: visible;
        }
      }
    }
`

export const LinksStyled = styled.section `
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.4rem;

  button {
    border: 1px solid #8C0000;
    border-radius: 10px;
    margin-top: 0.3rem;
    padding: 0.4rem;
    cursor: pointer;
  
    &:hover {
    background: #8C0000;
    color: white;
    }
  }
  `