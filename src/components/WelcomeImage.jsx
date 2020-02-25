// create a parallax top image with a title
// - the whole thing should smoothly animate in
import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import globals from '../utils/globals';
import {
  BGC_1,
  BGC_2,
  BGC_3,
  BGC_4,
  BGC_5,
  BGC_6,
  BGC_7,
} from '../assets/images/index';

const { flex } = globals;

const WelcomeArea = styled.div`
  ${flex('flex-start', 'flex-end')}
  width: 100vw;
  height: 100vh;
  background-color: mistyrose;
  font-size: 5rem;
  position: relative;
`;

const WelcomImage = styled.img`
  height: 100vh;
  width: 100vw;
  background-attachment: fixed;
`;

const WelcomeText = styled.div`
  color: white;
  text-decoration: bold;
  font-size: 5rem;
  position: absolute;
  margin-left: 8rem;
  margin-top: -8rem;
`;

const WelcomeImage = () => {
  const imageSrc = [BGC_1, BGC_2, BGC_3, BGC_4, BGC_5, BGC_6, BGC_7];
  const randomizer = Math.floor(Math.random() * imageSrc.length);
  const randomImage = imageSrc[randomizer];

  return (
    <WelcomeArea>
      <WelcomImage src={randomImage} source={randomImage} />
      <WelcomeText>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={typewriter => {
            typewriter
              .typeString('Peter Ivey-Hansen')
              .pauseFor(2000)
              .deleteAll()
              .typeString('Coder')
              .deleteChars(6)
              .pauseFor(1500)
              .typeString('Creator')
              .deleteChars(7)
              .pauseFor(1500)
              .typeString('Frontend developer')
              .pauseFor(2000)
              .deleteAll()
              .typeString('Stockholm, Sweden')
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(4000)
              .start();
          }}
        />
      </WelcomeText>
    </WelcomeArea>
  );
};

export default WelcomeImage;
