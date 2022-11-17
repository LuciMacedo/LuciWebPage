import styled from 'styled-components'

export const ContactTitle = styled.section`
  background: white;
  border-radius: 10px;
  width: 60%;
  margin: 1.5rem auto;
  padding: 1rem;
  text-align: center;

  svg {
    color: ${(props) => props.theme['black-500']};
  }

  h1{
    margin: 1rem;
    color: ${(props) => props.theme['red']};
  }

  p {
    color: ${(props) => props.theme['black-500']};
  }
`

export const ContactStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  color: ${(props) => props.theme['black-500']};
  
    a {
      width: 15%;
      display: flex;
      gap: 0.5rem;
      margin: .5rem;
      padding: 1rem;
      text-decoration: none;
      border: 3px solid ${(props) => props.theme['red']};
      border-radius: 10px;
      color: ${(props) => props.theme['black-500']};
      &:hover {
      background: ${(props) => props.theme['red']};;
      color: white;
    }
    } 

  @media (max-width: 768px){
    flex-direction: column;

    a {
      width: 40%;
    }
  }
`

export const Author = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin: 3rem;
  `
