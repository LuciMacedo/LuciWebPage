import styled  from 'styled-components'


export const GalleryTitle = styled.section`
  background: ${(props) => props.theme['black-500']};
  border-radius: 10px;
  width: 60%;
  margin: 5rem auto;
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

  h2 {
    color: ${(props) => props.theme['black-900']};
  }

  a {
    color: ${(props) => props.theme['black-900']};
    text-decoration: none;
    p {
      margin-top: 2rem;
    }
    svg {
      color: ${(props) => props.theme['red']};
    }
  }
`
  

    
  