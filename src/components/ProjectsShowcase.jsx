import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';

export const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Showcase = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ShowcaseItem = styled.div`
  height: 15rem;
  width: 15rem;
  margin: 3rem 2rem;
  background: ${props => props.theme.projectColor};
  color: white;
  font-weight: bold;
  flex-flow: dense;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    background: ${props => props.theme.hoverColor};
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }
  ${flex}
  font-size:1.5rem;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
            <ShowcaseItem className="hvr-reveal" key={i}>
              {e.name}
            </ShowcaseItem>
          </ProjectLink>
        ))}
      </Showcase>
    </>
  );
}

export default ProjectsShowcase;