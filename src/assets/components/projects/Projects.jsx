import { ButtonStyled, ProjectStyle } from "./style";
import { reactProjects } from './dataReact'


export function Projects() {
  return (
    <>
      <ProjectStyle >
        {
          reactProjects.map((reactProject) => (
            <section key={reactProject.title}>
              <img
                alt='Gallery'
                src={reactProject.image}
              />
              <div>
                <h1>{reactProject.title}</h1>
                <p>{reactProject.description}</p>
                <h2>TECH USED:</h2>
                <p>{reactProject.tech}</p>

                <ButtonStyled>
                  <a href={reactProject.link}
                    target='_blank'>
                    <button>Live Project</button>
                  </a>

                  <a href={reactProject.git}
                    target='_blank'>
                    <button>Source Code</button>
                  </a>
                </ButtonStyled>
              </div>
            </section>
          ))
        }
      </ProjectStyle>
    </>
  );
}

