import React from 'react';
import styled from 'styled-components';
import content from '../utils/text';
import ProjectsShowcase from './ProjectsShowcase';
import Techstack from './Techstack';
import globals from '../utils/globals';

const { noSelect } = globals;

const PageWrapper = styled.div`
  text-align: justify;
  text-justify: inter-word;
  width: 100vw;
  padding: 3rem 12rem 4rem 12rem;
`;

const SectionHeader = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${props => props.theme.headerColor};
`;

const SectionText = styled.div`
  line-height: 2.5rem;
  font-size: 1.4rem;
  height: auto;
  width: auto;
  padding-bottom: 3rem;
  color: ${props => props.theme.color};
`;

const AboutText = styled(SectionText)`
  font-size: 1.4rem;
  height: auto;
  width: auto;
  padding-bottom: 0rem;
  color: ${props => props.theme.color};
`;

const AboutListEl = styled.p`
  ${noSelect}
  position: relative;
  font-size: 1.1rem;
  text-align: left;
  display: block;
  padding: 12.5px 12.5px 12.5px 35px;
  color: ${props => props.theme.listText};
  &:nth-child(odd) {
    background: ${props => props.theme.listOdd};
  }
  &:nth-child(even) {
    background: ${props => props.theme.listEven};
  }
  text-decoration: none;
  transition: all 0.6s;
  &:before {
    transition: all 0.3s;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    width: 20px;
    background: #b2b09b;
  }
  &:hover {
    opacity: 1;
    padding-left: 55px;
    color: ${props => props.theme.listBeforeOdd};
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1rem;
  }
  &:hover::before {
    width: 30px;
  }
  &:nth-child(odd)::before {
    background: ${props => props.theme.listBeforeOdd};
  }
  &:nth-child(even)::before {
    background: ${props => props.theme.listBeforeEven};
  }
  &:hover::before {
    background: ${props => props.theme.listBeforeOdd};
  }
  &:nth-child(1) {
    border-top-right-radius: 20px;
  }
  &:nth-last-child(1) {
    border-bottom-right-radius: 20px;
  }
`;

const AboutList = styled.div`
  max-width: 800px;
  margin: 3rem auto 1rem auto;
  &:hover ${AboutListEl} {
    opacity: 0.4;
  }
  & ${AboutListEl}:hover {
    opacity: 1;
  }
`;

function FrontPage() {
  return (
    <>
      <PageWrapper>
        <SectionHeader id="Home" style={{ paddingTop: '0.5rem' }} className="tracking-in-expand-fwd-top">
          {content.title_1}
        </SectionHeader>

        <SectionText>{content.frontPage_1}</SectionText>
        <SectionText>{content.jobOffer}</SectionText>
        <SectionText>{content.currentStack}</SectionText>

        <Techstack />

        <SectionHeader id="About">{content.title_2}</SectionHeader>
        <AboutText>{content.aboutIntro}</AboutText>

        <SectionText>
          <AboutList>
            {content.aboutInfo.map(e => (
              <AboutListEl>{e}</AboutListEl>
            ))}
          </AboutList>
        </SectionText>

        <SectionHeader id="Projects">Projects</SectionHeader>

        <SectionText>{content.frontPage_3}</SectionText>

        <ProjectsShowcase />
      </PageWrapper>
    </>
  );
}

export default FrontPage;
