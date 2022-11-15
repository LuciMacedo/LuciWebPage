import styled from "styled-components";


export const ProjectStyle = styled.main `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
  section {
    display: flex;
    justify-content: center;
    color: white;
    width: 35rem;
    height: 20rem;
    position: relative;
      
      img {
      border-radius: 10px;
      width: 35rem;
      height: 20rem;
      box-shadow: 8px 11px 33px 5px rgba(0,0,0,0.59)
      }
    
      div {
        width: 90%;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 100;
        top: 0; 
        visibility: hidden;
        padding: 0;
        
        h1 {
          color: ${(props) => props.theme['red']};
          margin: 1.5rem auto;
        }
        p {
          margin: .2rem auto;
          color: ${(props) => props.theme['gray-100']};
        }
        h2 {
          color: ${(props) => props.theme['gray-100']};
          font-size: 1rem;
        }
        section {
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 0.4rem;
        }
        
      }

      &:hover {
        div {
          visibility: visible;
        }
        img {
          opacity: 0.1;
        }
      }
  }

  @media (max-width: 425px) {
    section {
      width: 90%;

      img {
      width: 95%;
      margin: 1rem;
      }
    }
  }
`

export const ButtonStyled = styled.section `
  display: flex;
  button {
    border: 1px solid ${(props) => props.theme['red']};
    border-radius: 10px;
    margin-top: 0.3rem;
    padding: 0.4rem;
    cursor: pointer;
  
    &:hover {
    background: ${(props) => props.theme['red']};
    color: white;
    }
  }
`