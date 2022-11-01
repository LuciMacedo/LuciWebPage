import styled from "styled-components"

export const SkillsTitle = styled.section`
  background: ${(props) => props.theme['black-500']};
  max-width: 100%;
  margin-top: 4rem;
  padding: 3rem;
  text-align: center;

  h1{
    margin: 1rem;
    color: ${(props) => props.theme['red']};
  }

  p {
    color: white;  
  }
`

export const Skill = styled.article`
  display: flex;
  margin-top: -1rem;
  gap: 1rem;
  padding: 1rem;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['black-500']};

  div {
    width: 40%;
    background: ${(props) => props.theme['black-500']};
    display: flex;
    gap: 1rem;
    padding: 1rem;
    margin: 1rem;
    border: 3px solid ${(props) => props.theme['red']};
    border-radius: 10px;
  }
`

