import React from 'react';
import styled from 'styled-components';
import content from '../utils/text';
import ProjectsShowcase from './ProjectsShowcase';

const PageWrapper = styled.div`
  text-align: justify;
  text-justify: inter-word;
  width: 100vw;
  padding: 3rem 10rem 4rem 10rem;
`;

const SectionHeader = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${props => props.theme.headerColor};
`;

const SectionText = styled.div`
  line-height: 1.8rem;
  height: auto;
  width: auto;
  padding-bottom: 6rem;
  color: ${props => props.theme.color};
`;

function FrontPage() {
  return (
    <>
      <PageWrapper>
        <SectionHeader id="Home" style={{ paddingTop: '0.5rem' }}>
          {content.title_1}
        </SectionHeader>

        <SectionText>{content.frontPage_1}</SectionText>

        <SectionHeader id="About">{content.title_2}</SectionHeader>

        <SectionText>{content.frontPage_2}</SectionText>

        <SectionHeader id="Projects">Projects</SectionHeader>

        <SectionText>{content.frontPage_3}</SectionText>

        <ProjectsShowcase />
      </PageWrapper>
    </>
  );
}

export default FrontPage;
