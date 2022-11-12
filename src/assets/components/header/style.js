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
    }
  }

  img {
    width: 35%;
    height: 30rem;
  }

  @media (max-width: 425px) {

    article {
      width: 80%;
      padding: 1rem;

      h1 {
       font-size: 2rem;      
      }
    }

    img {
      width: 80%;
      height: 23rem;
      padding: 0.5rem;
      margin-left: 5rem;
    }
  }

`