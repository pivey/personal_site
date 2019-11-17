import React from 'react';
import styled from 'styled-components';
import content from '../utils/text';
import ProjectsShowcase from './ProjectsShowcase';
import Techstack from './Techstack';
import globals from '../utils/globals';

const { noSelect, textBorder, flex, transAll } = globals;

const PageWrapper = styled.div`
  text-align: justify;
  text-justify: inter-word;
  width: 100vw;
  padding: 3rem 12rem 4rem 12rem;
`;

const SectionHeader = styled.div`
  ${noSelect}
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${props => props.theme.headerColor};
`;

const HireHolder = styled.div`
  ${flex('center', 'center')}
  height: auto;
  width: auto;
  margin: 4rem 0rem 6rem 0rem;
`;

const HireText = styled.div`
  ${noSelect}
  ${transAll('0.5')}
  font-weight: 700;
  font-size: 3.5em;
  height: auto;
  width: auto;
  padding: 1.5rem 2rem;
  border:  ${props => `1rem solid ${props.theme.headerColor}`}
  background: repeating-linear-gradient(45deg, #e03616, #e03616 10px, #f4f4f9 10px, #f4f4f9 20px);
  ${props => textBorder(props.theme.headerColor, 'black')}
  &:hover {
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09), 0 8px 4px rgba(0, 0, 0, 0.09),
      0 16px 8px rgba(0, 0, 0, 0.09), 0 32px 16px rgba(0, 0, 0, 0.09);
    transform: scale(1.1);
    cursor: pointer;
  }
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
    ${props => textBorder(props.theme.listBeforeOdd, props.theme.textBorder)}

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
  margin: 3rem auto 1rem 2rem;
  &:hover ${AboutListEl} {
    opacity: 0.6;
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
          <h1 className="ml11">
            <span className="text-wrapper">
              <span className="line line1" />
              <span className="letters">{content.title_1}</span>
            </span>
          </h1>
        </SectionHeader>

        <SectionText>{content.frontPage_1}</SectionText>
        <HireHolder>
          <HireText>{content.jobOffer}</HireText>
        </HireHolder>
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
