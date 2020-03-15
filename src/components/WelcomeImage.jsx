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
  font-size: 5rem;
  position: relative;
`;

const WelcomImage = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${({ src }) => src});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const WelcomeText = styled.div`
  width: auto;
  height: auto;
  padding: 1rem 1.5rem;
  background-color: black;
  color: #3cc47c;
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
      <WelcomImage src={randomImage} />
      <WelcomeText>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={typewriter => {
            typewriter
              .pauseFor(1500)
              .typeString('Peter Ivey-Hansen')
              .pauseFor(2000)
              .deleteAll()
              .typeString('Coder')
              .deleteChars(6)
              .pauseFor(1200)
              .typeString('Creative')
              .deleteChars(8)
              .pauseFor(1200)
              .typeString('Frontend developer')
              .pauseFor(1500)
              .deleteAll()
              .typeString('React | Next')
              .pauseFor(1500)
              .deleteAll()
              .typeString('Node | Express')
              .pauseFor(1500)
              .deleteAll()
              .typeString('Firebase | GraphQL')
              .pauseFor(1500)
              .deleteAll()
              .typeString('Flutter')
              .pauseFor(1500)
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
