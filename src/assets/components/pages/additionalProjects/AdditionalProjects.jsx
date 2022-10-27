import { ProjectsTitle } from './style';
import { projectsData } from './projectsData';
import { ProjectsStyle } from './style';
import { Code } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { ButtonStyle } from './style';
import { LinksStyled } from './style';
export function AdditionalProjects() {
  return (
    <>
      <ButtonStyle>
        <Link to='/'>
          <button>
            Back to Home
          </button>
        </Link>
      </ButtonStyle>

      <ProjectsTitle >
        <Code size={40} id='gallery' />
        <h1 >A few more apps I have built through my learning journey.</h1>
      </ProjectsTitle>

      <ProjectsStyle>
        {
          projectsData.map((project) => (
            <section key={project.title}>
              <img
                alt='Gallery'
                src={project.image}
              />
              <div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <h2>TECH USED:</h2>
                <p>{project.tech}</p>

                <LinksStyled>
                  <a href={project.link}
                    target='_blank'>
                    <button>Live Project</button>
                  </a>

                  <a href={project.git}
                    target='_blank'>
                    <button>Source Code</button>
                  </a>
                </LinksStyled>
              </div>
            </section>
          ))
        }
      </ProjectsStyle>
    </>
  )
}

