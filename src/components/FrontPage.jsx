import React, { useState, useEffect, useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Frame, Scroll } from 'framer';
import styled from 'styled-components';
import websiteText from '../utils/text';
import ProjectsShowcase from './ProjectsShowcase';
import globals from '../utils/globals';
import WelcomeImage from './WelcomeImage';
import ContactForm from './ContactForm';
import { AppContext } from '../context/appContext';
import SectionText from './SectionText';
import { device } from '../utils/themes';

const { textBorder, flex, transAll, noSelect } = globals;

const PageWrapper = styled.div`
  text-align: justify;
  text-justify: inter-character;
  width: 100vw;
  @media ${device.laptop} {
    padding: 0rem 20rem 6rem 20rem;
  }
  @media ${device.tablet} {
    padding: 0rem 5rem 6rem 5rem;
  }
  @media ${device.belowMobileL} {
    padding: 0rem 2.5rem 5rem 2.5rem;
  }
`;

const SectionHeader = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${props => props.theme.headerColor};
  @media ${device.belowMobileL} {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const HireBtnWrapper = styled.div`
  ${flex('flex-end', 'center')}
  height: auto;
  width: auto;
  margin: 4rem 4rem;
  top: 5rem;
  position: sticky;
  z-index: 999;
  @media ${device.belowMobileL} {
    margin: 0rem;
    margin-top: 2rem;
  }
`;

const HireButton = styled.div`
  ${transAll('0.3')}
  ${noSelect}
  font-weight: 700;
  font-size: 1.5rem;
  height: auto;
  width: auto;
  padding: 0.8rem;
  border: 5px solid #3cc47c;
  background: #1e392a;
  ${textBorder('#3cc47c', 'black')}
  &:hover {
    cursor: pointer;
    transform: scale(0.95);
    ${textBorder('white', '#1e392a')}
  }
  @media ${device.belowMobileL} {
    transform-origin: bottom right;
    transform: rotate(270deg);
    font-size: 0.9rem;
    border: 2px solid #3cc47c;
    border-bottom: none;
    padding: 0.4rem;
    &:hover {
      transform-origin: bottom right;
      transform: rotate(270deg);
    }
  }
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

const StyledAnchor = styled.a`
  color: orange;
  font-weight: bold;
`;

const FrontPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const createAnchor = (link, label) => (
    <StyledAnchor rel="noopener noreferrer" target="_blank" href={link}>
      {label}
    </StyledAnchor>
  );

  const {
    contactFormShow,
    setContactFormShow,
    contactFormInitState,
    setContactFormValues,
  } = useContext(AppContext);

  const content = websiteText();

  const {
    frontPage_1,
    frontPage_3,
    jobOffer,
    projectsTitle,
    welcomeTitle,
  } = content;

  const welcomeLinks = {
    qyreLink: createAnchor('http://qyre.com/', 'Qyre'),
    saltLink: createAnchor('https://salt.study/', '<SALT/>'),
    treWebshopLink: createAnchor(
      'https://www.tre.se/handla/mobiltelefoner',
      'Tre webshop',
    ),
  };

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
        <HireButton
          onClick={() => {
            setContactFormValues({ ...contactFormInitState });
            setContactFormShow(true);
          }}
        >
          {jobOffer}
        </HireButton>
      </HireBtnWrapper>
      <PageWrapper>
        <SectionHeader>{welcomeTitle}</SectionHeader>

        <SectionText markdown={frontPage_1} replacements={welcomeLinks} />

        {contactFormShow && <ContactForm display={contactFormShow} />}
        {/*
          <AboutList>
            {aboutInfo.map(e => (
              <AboutListEl>{e}</AboutListEl>
            ))}
          </AboutList>
         */}
        <SectionHeader id="Projects">{projectsTitle}</SectionHeader>
        <SectionText markdown={frontPage_3} />
        <ProjectsShowcase />
      </PageWrapper>
    </>
  );
};

export default FrontPage;
