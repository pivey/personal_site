import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';

const flex = css`
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
  background: orange;
  color: white;
  font-weight: bold;
  //   flex-grow: 1;
  flex-flow: dense;
  //   flex-shrink: 2;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    background: ${props => props.theme.hoverColor};
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }
  ${flex}
  font-size:1.5rem;
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
          <ShowcaseItem className="hvr-reveal" key={i}>
            {e}
          </ShowcaseItem>
        ))}
      </Showcase>
    </>
  );
}

export default ProjectsShowcase;
