import styled from "styled-components";

export const HeaderWrapper = styled.header`
  
  max-width: 100%;
  margin-top: -0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['black-900']};

  article {
    width: 50%;
    padding: 8rem;

    strong {
      color: ${(props) => props.theme['red']};
      font-size: 1.5rem;
    }

    h1 {
      font-size: 2.7rem;
      font-weight: 700;
      color:white;
    }
    
    p {
      color: #dadad7d9;
      line-height: 2;
      text-align: justify;
    }

    button {
      margin-top: 3rem;
      padding: .5rem;
      border-radius: 8px;
      background: ${(props) => props.theme['red']};
      border: none;

      a {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem;
        color: white;

        svg {
          margin-left: 0.4rem;
        }
      }
    }
  }

  img {
    width: 35%;
    height: 35%;
    
  }

  @media (max-width: 768px) {

    article {
      width: 80%;
      padding: 1rem;

      h1 {
       font-size: 2rem;      
      }
    }

    img {
      width: 70%;
      height: 70%;
      padding: 0.5rem;
      margin-left: 2.5rem;
    }
  }

`