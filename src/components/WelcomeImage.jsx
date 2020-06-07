import React, { useRef, useState, useEffect } from 'react';
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

const blob1Transform = coordinates =>
  keyframes`
    0%,
    100% {
      border-radius: 55% 45% 57% 43% / 60% 36% 64% 40%;
      transform: translate(${coordinates[0]}px, ${coordinates[1]}px);
    }
    25% {
      border-radius: 75% 25% 42% 58% / 62% 31% 69% 38%;
      width: ${randomWH()}rem;
      height: ${randomWH()}rem;
    }
    50% {
      transform: translate(${coordinates[2]}px, ${coordinates[3]}px);
      border-radius: 44% 56% 29% 71% / 72% 62% 38% 28%;
      width: ${randomWH()}rem;
      height: ${randomWH()}rem;
    }
    75% {
      border-radius: 30% 70% 36% 64% / 69% 52% 48% 31%;
      width: ${randomWH()}rem;
      height: ${randomWH()}rem;
    }`;

// const blob2Transform = keyframes`
//   0%,
//   100% {
//     border-radius: 66% 34% 62% 38% / 40% 66% 34% 60%;
//     width: 15rem;
//     height: 15rem;
//   }
//   25% {
//     border-radius: 58% 42% 44% 56% / 53% 57% 43% 47%;
//     width: ${randomWH()}rem;
//     height: ${randomWH()}rem;
//   }
//   50% {
//     border-radius: 43% 57% 37% 63% / 65% 42% 58% 35%;
//     width: ${randomWH()}rem;
//     height: ${randomWH()}rem;
//   }
//   75% {
//     border-radius: 66% 34% 60% 40% / 49% 33% 67% 51%;
//     width: ${randomWH()}rem;
//     height: ${randomWH()}rem;
//   }
// `;

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
  background: #0a8754;
  width: 15rem;
  height: 15rem;
  z-index: 2;
  animation: ${({ coords }) => blob1Transform(coords)} 10s ease-in-out infinite;
`;

// const Blob2 = styled.div`
//   background: #07393c;
//   z-index: 2;
//   animation: ${blob2Transform} 8s ease-in-out infinite;
// `;

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
  const [blobCoordinates, setBlobCoordinates] = useState([]);
  const [previousPos, setPreviousPos] = useState([]);
  let count = 0;

  useEffect(() => {
    const {
      width: welcomeAreaWidth,
      height: welcomeAreaHeight,
    } = document.getElementById('welcomeArea').getBoundingClientRect();
    const parentWidth = welcomeAreaWidth;
    const parentHeight = welcomeAreaHeight;
    const makeNewPosition = () => {
      const h = parentHeight - 16 * 14.25;
      const w = parentWidth - 16 * 14.25;
      const nh = Math.floor(Math.random() * h);
      const nw = Math.floor(Math.random() * w);

      return [nh, nw];
    };

    /*
      you cannot restart the animation so instead try preloading an array with say 10 - 20
      position points and then when the last point is reached reverse the array and cycle back
      through the points
    */

    const moveBlob = () => {
      const newPos1 = makeNewPosition();
      const newPos2 = makeNewPosition();
      setPreviousPos(newPos2);
      let positions = [];
      if (count < 1) {
        positions = newPos1.concat(newPos2);
        count = 1;
        return positions;
      } else {
        positions = previousPos.concat(newPos1);
        return positions;
      }
    };

    setBlobCoordinates(moveBlob());
  }, []);

  return (
    <WelcomeArea id="welcomeArea">
      {blobCoordinates.length > 0 && <Blob1 coords={blobCoordinates} />}
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
