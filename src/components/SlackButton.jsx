import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import slackSVG from '../assets/slack.svg';

const moveIn = keyframes`
0% {
    transform: translateX(100px);
    opacity:0;
  }
100% {
    transform: translateX(0px);
    opacity:1;
  }
`;

const moveOut = keyframes`
0% {
    transform: translateX(0px);
    opacity:1;
  }
100% {
    transform: translateX(100px);
    opacity:0;
  }
`;

const slackIconTheme = css`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  border: 5px solid white;
  background-size: contain;
  background-color: black;
  position: fixed;
  bottom: 8rem;
  right: 0;
  transform: translateX(100px);
  animation: 0.7s ease-in-out 0s 1 forwards
    ${({ visible }) => (visible ? moveIn : moveOut)};
`;

const SlackIcon = styled.svg`
  ${slackIconTheme}
  background-image: url(${slackSVG});
`;

const SlackButton = ({ visible }) =>
  console.log(visible) || (
    <>
      <SlackIcon visible={visible} onClick={() => console.log('you clicked')} />
    </>
  );

export default SlackButton;
