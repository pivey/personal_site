import React, { useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import globals from '../utils/globals';
import anime from 'animejs/lib/anime.es.js';
import {
  BGC_1,
  BGC_2,
  BGC_3,
  BGC_4,
  BGC_5,
  BGC_6,
  BGC_7,
  BGC_RED,
  BGC_BLUE,
} from '../assets/images/index';
import { device } from '../utils/themes';

const WelcomeArea = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${BGC_RED});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
`;

const Blob1 = styled.div`
  fill: #0a8754;
  z-index: -1;
  animation: blob1Transform 20s ease-in-out infinite;
  transform-origin: 50%;
  @media ${device.belowMobileL} {
    width: 60vw;
  }
  @media ${device.belowTablet} {
    width: 45vw;
  }
  @media ${device.laptop} {
    width: 25vw;
  }
`;

const Blob2 = styled.div`
  fill: #634133;
  z-index: -1;
  animation: blob2Transform 15s ease-in-out infinite;
  transform-origin: -100%;
  @media ${device.belowMobileL} {
    width: 60vw;
  }
  @media ${device.belowTablet} {
    width: 45vw;
  }
  @media ${device.laptop} {
    width: 25vw;
  }
`;

const BlobHolder = styled.div`
  height: 100vh;
  width: 100vw;
`;

const WelcomeText = styled.div`
  width: auto;
  height: auto;
  color: white;
  text-decoration: bold;
  position: absolute;
  top: 75%;
  left: 5vw;

  @media ${device.laptop} {
    font-size: 6rem;
    top: 75%;
    left: 5vw;
  }
  @media ${device.tablet} {
    font-size: 5rem;
    top: 80%;
    left: 5vw;
  }
  @media ${device.belowMobileL} {
    display: table-caption;
    font-size: 3.5rem;
    top: 70%;
  }
`;

const Title = styled.h2`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 8rem;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  top: 5rem;
  left: 5vw;
  z-index: 999;
  @media ${device.tablet} {
    font-size: 6rem;
    top: 3rem;
    left: 5vw;
  }
  @media ${device.belowMobileL} {
    font-size: 4rem;
    top: 2rem;
  }
`;

const WelcomeImage = () => {
  return (
    <WelcomeArea>
      <BlobHolder>
        <Blob1>
          <svg viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
          </svg>
        </Blob1>
      </BlobHolder>
      <BlobHolder>
        <Blob2>
          <svg viewBox="0 0 600 600">
            <g transform="translate(300,300)">
              <path
                d="M163.6,-172.3C200.5,-126.8,210.7,-63.4,208.9,-1.9C207,59.6,192.9,119.3,156.1,155.3C119.3,191.3,59.6,203.6,8.4,195.3C-42.9,186.9,-85.8,157.8,-125.1,121.8C-164.5,85.8,-200.2,42.9,-199.9,0.4C-199.5,-42.2,-163,-84.4,-123.7,-129.9C-84.4,-175.4,-42.2,-224.2,10.6,-234.8C63.4,-245.4,126.8,-217.8,163.6,-172.3Z"
                fill="#00d084"
              />
            </g>
          </svg>
        </Blob2>
      </BlobHolder>
      <Title>
        <div>Peter</div>
        <div>Ivey</div>
        <div>Hansen</div>
      </Title>
      <WelcomeText>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={typewriter => {
            typewriter
              .pauseFor(1500)
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
