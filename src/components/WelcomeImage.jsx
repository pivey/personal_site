import React, { useRef, useState, useEffect } from 'react';
import Anime, { anime } from 'react-anime';
import styled, { keyframes } from 'styled-components';
import Typewriter from 'typewriter-effect';
import { BGC_RED } from '../assets/images/index';
import { device } from '../utils/themes';

const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

const randomWH = () => {
  const rangeLimits = range(12.5, 15.5);
  const randomIndex = Math.ceil(Math.random() * rangeLimits.length);
  return rangeLimits[randomIndex];
};

const blob1Transform = keyframes`
      0%,
      100% {
        border-radius: 55% 45% 57% 43% / 60% 36% 64% 40%;
      }
      25% {
        border-radius: 75% 25% 42% 58% / 62% 31% 69% 38%;
        width: ${randomWH()}rem;
        height: ${randomWH()}rem;
      }
      50% {
        border-radius: 44% 56% 29% 71% / 72% 62% 38% 28%;
        width: ${randomWH()}rem;
        height: ${randomWH()}rem;
      }
      75% {
        border-radius: 30% 70% 36% 64% / 69% 52% 48% 31%;
        width: ${randomWH()}rem;
        height: ${randomWH()}rem;
      }`;

const blob2Transform = keyframes`
  0%,
  100% {
    border-radius: 66% 34% 62% 38% / 40% 66% 34% 60%;
  }
  25% {
    border-radius: 58% 42% 44% 56% / 53% 57% 43% 47%;
    width: ${randomWH()}rem;
    height: ${randomWH()}rem;
  }
  50% {
    border-radius: 43% 57% 37% 63% / 65% 42% 58% 35%;
    width: ${randomWH()}rem;
    height: ${randomWH()}rem;
  }
  75% {
    border-radius: 66% 34% 60% 40% / 49% 33% 67% 51%;
    width: ${randomWH()}rem;
    height: ${randomWH()}rem;
  }
`;

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

const Blob = ({ bgc, animationName, duration }) =>
  styled.div`
    background: ${bgc};
    width: 15rem;
    height: 15rem;
    z-index: 2;
    animation: ${animationName} ${duration} ease-in-out infinite;
  `;

const WelcomeText = styled.div`
  width: auto;
  height: auto;
  color: white;
  text-decoration: bold;
  position: absolute;
  top: 75%;
  left: 5vw;
  z-index: 999;

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
  const [blob1Coordinates, setBlob1Coordinates] = useState([]);
  const [blob2Coordinates, setBlob2Coordinates] = useState([]);

  useEffect(() => {
    const {
      width: welcomeAreaWidth,
      height: welcomeAreaHeight,
    } = document.getElementById('welcomeArea').getBoundingClientRect();
    const parentWidth = welcomeAreaWidth;
    const parentHeight = welcomeAreaHeight;
    const makeNewPosition = () => {
      const blobDimensions = 16 * 15;
      const h = parentHeight - blobDimensions;
      const w = parentWidth - blobDimensions;
      const nh = Math.floor(Math.random() * h);
      const nw = Math.floor(Math.random() * w);

      return [nh, nw];
    };

    const createCoordinates = () => {
      let positions = [];
      for (let i = 1; i < 30; i++) {
        const coordinates = makeNewPosition();
        positions.push(coordinates);
      }
      return positions;
    };

    setBlob1Coordinates(createCoordinates());
    setBlob2Coordinates(createCoordinates());
  }, []);

  const blob1Coords = blob1Coordinates.map(coords => ({
    translateX: coords[0],
    translateY: coords[1],
    duration: Math.ceil(Math.random() * 5000) + 3500,
  }));
  const blob2Coords = blob2Coordinates.map(coords => ({
    translateX: coords[0],
    translateY: coords[1],
    duration: Math.ceil(Math.random() * 5000) + 3500,
  }));

  const animationProps = coordinates => ({
    autoplay: true,
    keyframes: [
      { opacity: [0, 1], duration: 3000 },
      ...coordinates,
      { opacity: [1, 0], duration: 3000 },
    ],
    easing: 'easeInOutCubic',
    loop: true,
  });

  const Blob1 = Blob({
    bgc: '#543864',
    animationName: blob1Transform,
    duration: '8s',
  });

  const Blob2 = Blob({
    bgc: '#12947f',
    animationName: blob2Transform,
    duration: '8s',
  });

  return (
    <WelcomeArea id="welcomeArea">
      <Anime {...animationProps(blob1Coords)}>
        <Blob1 />
      </Anime>
      <Anime {...animationProps(blob2Coords)}>
        <Blob2 />
      </Anime>
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
              .typeString('Typescript')
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
