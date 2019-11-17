import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import reactLogo from '../assets/reactjsLogo.svg';
import globals from '../utils/globals';
import construction from '../assets/underConstruction.svg';
import vanillajs from '../assets/jslogo.png';

const { flex, backgroundProvider, noSelect, textBorder, transAll } = globals;

const Showcase = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ShowcaseItem = styled.div`
  ${transAll('0.5')}
  ${noSelect}
  ${flex('center', 'center')}
  height: 15rem;
  width: 15rem;
  margin: 3rem 2rem;
  background: ${props => props.theme.projectColor};
  color: white;
  font-weight: bold;
  flex-flow: dense;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.hoverColor};
    color: ${props => props.theme.listBeforeEven};
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }
  &.reactBgc {
    ${textBorder('white', 'black')}
    ${backgroundProvider(reactLogo)}
    background-color: ${props => props.theme.navTextColor};

  }
  &.vanilla {
    ${textBorder('white', 'black')}
    ${backgroundProvider(vanillajs)}
    background-color: ${props => props.theme.navTextColor};
    font-size: 1.1rem;
  }
  &.reactBgc:hover, &.vanilla:hover, &.construction:hover {
    color: ${props => props.theme.hoverColor};
  }
  &.construction {
    ${textBorder('white', 'black')}
    ${backgroundProvider(construction)}
    background-color: #ededf4;

  }

  &.hvr-reveal:before {
    color: ${props => props.theme.hoverColor};
    color:transparent;
  }

  &.box:hover {
    box-shadow: 0 1px 1px rgba(0,0,0,0.12),
              0 2px 2px rgba(0,0,0,0.12),
              0 4px 4px rgba(0,0,0,0.12),
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
    transform: scale(1.06);
  }

`;

const ProjectLink = styled.a`
  text-decoration:none;
  &:visited, a:hover, a:active {
    color: inherit;
`;

function ProjectsShowcase() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/projects').then(res => setProjects(res.data));
  }, []);
  return (
    <>
      <Showcase className="projectsContainer">
        {projects.map((e, i) => (
          <ProjectLink href={e.link} target="_blank" rel="noopener noreferrer" key={i}>
            <ShowcaseItem className={e.bgc !== null ? `box hvr-reveal ${e.bgc}` : 'hvr-reveal'} key={i}>
              {e.name}
            </ShowcaseItem>
          </ProjectLink>
        ))}
      </Showcase>
    </>
  );
}

export default ProjectsShowcase;
