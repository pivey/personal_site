import React from 'react';
import styled, { css } from 'styled-components';
import globals from '../utils/globals';
import reactLogo from '../assets/reactjsLogo.svg';
import mongoDBLogo from '../assets/mongoDB.svg';
import nodeLogo from '../assets/node.svg';
import postgresLogo from '../assets/postgres.svg';
import firebaseLogo from '../assets/firebase2.svg';
import graphQLLogo from '../assets/graphQL.svg';

const { flex } = globals;

const iconStyling = css`
  height: 6rem;
  width: 6rem;
  transition-duration: 0.3s;
  &:hover {
    transform: scale(1.3);
    transition-duration: 0.5s;
  }
`;

const IconMother = styled.div`
  ${flex('space-between', 'center')}
  width: 100%;
  height: 10rem;
  background: inherit;
  margin-bottom: 4rem;
`;

const Connector = styled.hr`
  border: none;
  border-top: 1px dotted ${props => props.theme.color};
  color: #fff;
  background-color: transparent;
  height: 3px;
  width: 50%;
  margin: 0rem 0.4rem;
`;

const PostGresIcon = styled.img`
  ${iconStyling}
  filter: invert(35%) sepia(41%) saturate(717%) hue-rotate(164deg) brightness(92%) contrast(88%);
`;
const ReactLogoIcon = styled.img`
  ${iconStyling}
`;
const MongoIcon = styled.img`
  ${iconStyling}
`;
const NodeIcon = styled.img`
  ${iconStyling}
`;
const GraphQL = styled.img`
  ${iconStyling}
  filter: invert(26%) sepia(52%) saturate(5135%) hue-rotate(303deg) brightness(102%) contrast(80%);
`;
const FirebaseIcon = styled.img`
  height: 7rem;
  width: 6rem;
  transition-duration: 0.3s;
  &:hover {
    transform: scale(1.3);
    transition-duration: 0.5s;
  }
`;

const Techstack = () => {
  const website = 'under construction';
  return (
    <IconMother>
      <ReactLogoIcon src={reactLogo} />
      <Connector />
      <NodeIcon src={nodeLogo} />
      <Connector />
      <GraphQL src={graphQLLogo} />
      <Connector />
      <PostGresIcon src={postgresLogo} />
      <Connector />
      <MongoIcon src={mongoDBLogo} />
      <Connector />
      <FirebaseIcon src={firebaseLogo} />
    </IconMother>
  );
};

export default Techstack;
