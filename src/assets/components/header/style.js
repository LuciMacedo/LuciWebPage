import styled from "styled-components";

export const HeaderWrapper = styled.header`
  
  width: 100%;
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
      color: ${(props) => props.theme['gray-100']};
      line-height: 2;
    }
  }

  img {
    width: 35%;
    height: 30rem;
  }

  @media (max-width: 425px) {

    section {
      width: 100%;
      padding: 3rem;

      h1 {
       font-size: 2rem;      
      }
    }

    img {
      width: 80%;
      height: 23rem;
      margin-left: 6rem;
    }
  }

`