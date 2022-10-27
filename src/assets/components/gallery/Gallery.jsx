import { Projects } from "../projects/Projects";
import { GalleryTitle } from "./style";
import { Code, HandPointing } from 'phosphor-react';
import { Link } from "react-router-dom";
import { AdditionalProjects } from "../pages/additionalProjects/AdditionalProjects";

export function Gallery() {
  return (
    <>
      <GalleryTitle>
        <Code size={40} id='gallery' />
        <h1 >Apps I have Built</h1>
        <h2>I’ve developed applications, using HTML, CSS, JAVASCRIPT AND REACT. Currently, I’m focused on building react applications.</h2>
        <Link to='additionalprojects'>
          <p>Would you like to see more! Have a look!</p>
          <HandPointing size={25} />
        </Link>
      </GalleryTitle>
      <Projects />
    </>
  );
}

