import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import content from '../utils/text';
import ProjectsShowcase from './ProjectsShowcase';
import globals from '../utils/globals';
import WelcomeImage from './WelcomeImage';

const { textBorder, flex, transAll } = globals;

const PageWrapper = styled.div`
  text-align: justify;
  text-justify: inter-word;
  width: 100vw;
  padding: 0rem 20rem 6rem 20rem;
`;

const SectionHeader = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${props => props.theme.headerColor};
`;

const FrontPageHeaderHolder = styled.div`
  width: auto;
  height: auto;
  word-break: break-all;
  margin: 5rem 0rem;
  ${flex('center', 'center')}
`;

const FrontPageHeader = styled(SectionHeader)`
  font-size: 8rem;
`;

const HireBtnWrapper = styled.div`
  ${flex('flex-end', 'center')}
  height: auto;
  width: auto;
  margin: 4rem 4rem 0rem;
  top: 5rem;
  position: sticky;
`;

const HireButton = styled.div`
  ${transAll('0.3')}
  font-weight: 700;
  font-size: 1.5rem;
  height: auto;
  width: auto;
  padding: 0.8rem 0.8rem;
  border: 5px solid #3cc47c;
  background: #1e392a;
  ${textBorder('#3cc47c', 'black')}
  &:hover {
    cursor: pointer;
    transform: scale(0.95);
    ${textBorder('white', '#1e392a')}
  }
`;

const SectionText = styled.div`
  line-height: 2.5rem;
  font-size: 1.5rem;
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
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            exit={{ opacity: 0 }}
          >
            <WelcomeImage />
          </motion.div>
        )}
      </AnimatePresence>
      <HireBtnWrapper>
        <HireButton>{content.jobOffer}</HireButton>
      </HireBtnWrapper>
      <PageWrapper>
        <SectionHeader>Welcome</SectionHeader>
        <SectionText>{content.frontPage_1}</SectionText>

        {/* <Techstack /> */}

        {/* <SectionHeader id="About">{content.title_2}</SectionHeader>
        <AboutText>{content.aboutIntro}</AboutText> */}
        {/* <SectionText>
          <AboutList>
            {content.aboutInfo.map(e => (
              <AboutListEl>{e}</AboutListEl>
            ))}
          </AboutList>
        </SectionText> */}

        <SectionHeader id="Projects">Projects</SectionHeader>
        <SectionText>{content.frontPage_3}</SectionText>
        <ProjectsShowcase />
      </PageWrapper>
    </>
  );
}

export default FrontPage;
