import React, { useRef, useState, useEffect } from 'react';
import Anime from 'react-anime';
import styled, { keyframes, css } from 'styled-components';
import SplitText from './SplitTitle';
import { device } from '../utils/themes';
import useMediaQuery from './useMediaQuery';

const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

const randomWH = belowTablet => {
  const rangeLimits = belowTablet ? range(7.5, 10.5) : range(12.5, 15.5);
  const randomIndex = Math.ceil(Math.random() * rangeLimits.length);
  return rangeLimits[randomIndex];
};

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  100% {
    opacity:1;
    transform: translateY(0);
  }
}
`;

const blob1Transform = belowTablet => keyframes`
      0%,
      100% {
        border-radius: 55% 45% 57% 43% / 60% 36% 64% 40%;
      }
      25% {
        border-radius: 75% 25% 42% 58% / 62% 31% 69% 38%;
        width: ${randomWH(belowTablet)}rem;
        height: ${randomWH(belowTablet)}rem;
      }
      50% {
        border-radius: 44% 56% 29% 71% / 72% 62% 38% 28%;
        width: ${randomWH(belowTablet)}rem;
        height: ${randomWH(belowTablet)}rem;
      }
      75% {
        border-radius: 30% 70% 36% 64% / 69% 52% 48% 31%;
        width: ${randomWH(belowTablet)}rem;
        height: ${randomWH(belowTablet)}rem;
      }`;

const blob2Transform = belowTablet => keyframes`
  0%,
  100% {
    border-radius: 66% 34% 62% 38% / 40% 66% 34% 60%;
  }
  25% {
    border-radius: 58% 42% 44% 56% / 53% 57% 43% 47%;
    width: ${randomWH(belowTablet)}rem;
    height: ${randomWH(belowTablet)}rem;
  }
  50% {
    border-radius: 43% 57% 37% 63% / 65% 42% 58% 35%;
    width: ${randomWH(belowTablet)}rem;
    height: ${randomWH(belowTablet)}rem;
  }
  75% {
    border-radius: 66% 34% 60% 40% / 49% 33% 67% 51%;
    width: ${randomWH(belowTablet)}rem;
    height: ${randomWH(belowTablet)}rem;
  }
`;

const moveText = keyframes`
    0% { bottom: -0.2em; opacity: 1; color: white; }
    50% { bottom: 0.5em; }
    100% { bottom: 0; opacity: 1; }
`;

const WelcomeArea = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #111344;
  overflow: hidden;

  h1 {
    text-align: center;
    font-family: 'Helvetica';
    font-weight: 600;
    color: #fcedd8;
    text-transform: uppercase;
    z-index: 999;
    margin: 0;
    text-shadow: 4px 4px 0px #eb452b, 6px 6px 0px #efa032, 8px 8px 0px #46b59b,
      10px 10px 0px #017e7f, 12px 12px 0px #052939, 14px 14px 0px #c11a2b;
    @media ${device.mobileS} {
      font-size: 4rem;
    }
    @media ${device.tablet} {
      font-size: 6rem;
    }
  }

  h1 span span {
    color: #0779e4;
    animation: ${moveText} 0.75s forwards;
    position: relative;
    opacity: 0;
  }
`;

const Blob = ({ bgc, animationName, duration, startingPos }) =>
  styled.div`
    background: ${bgc};
    z-index: 2;
    top: ${startingPos[0]}px;
    left: ${startingPos[1]}px;
    position: absolute;
    animation: ${animationName} ${duration} ease-in-out infinite;
    background: ${bgc};
    @media ${device.belowTablet} {
      width: 10rem;
      height: 10rem;
    }
    @media ${device.tablet} {
      width: 15rem;
      height: 15rem;
    }
  `;

const AboutContainer = styled.div`
  position: absolute;
  font-family: 'Helvetica';
  font-weight: 600;
  color: #fcedd8;
  text-transform: uppercase;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 4px 4px 0px #eb452b, 6px 6px 0px #efa032, 8px 8px 0px #46b59b,
    10px 10px 0px #017e7f, 12px 12px 0px #052939, 14px 14px 0px #c11a2b;
  text-align: center;

  li {
    list-style-type: none;
    margin-top: 2rem;
    font-size: 3rem;
    scroll-snap-align: start;
    :first-child {
      margin-top: 0;
    }
    :last-child {
      margin-bottom: 2rem;
    }
    @media ${device.mobileS} {
      font-size: 1rem;
    }
    @media ${device.mobileM} {
      font-size: 2rem;
    }
    @media ${device.tablet} {
      font-size: 3rem;
    }
  }
  ul {
    vertical-align: middle;
    height: 7rem;
    width: 100vw;
    margin: 0;
    padding: 0;
    position: fixed;
    position: relative;
    overflow: auto;
    animation: ${fadeUp} 3s forwards;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    margin-top: 2rem;
    @media ${device.belowTablet} {
      height: 5rem;
    }
    @media ${device.tablet} {
      height: 7rem;
    }
  }
`;

const WelcomeImage = () => {
  const [blob1Coordinates, setBlob1Coordinates] = useState([]);
  const [blob2Coordinates, setBlob2Coordinates] = useState([]);
  const [blob1StartingPos, setBlob1StartingPos] = useState([]);
  const [blob2StartingPos, setBlob2StartingPos] = useState([]);
  const scrollRef = useRef(null);

  const belowTabletSize = useMediaQuery('belowTablet');

  useEffect(() => {
    const {
      width: welcomeAreaWidth,
      height: welcomeAreaHeight,
    } = document.getElementById('welcomeArea').getBoundingClientRect();
    const parentWidth = welcomeAreaWidth / 1.5;
    const parentHeight = welcomeAreaHeight / 1.5;
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
    setBlob1StartingPos(makeNewPosition());
    setBlob2StartingPos(makeNewPosition());
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
    bgc: `radial-gradient(
        circle at 100%,
        #eb452b 15%,
        #efa032 30%,
        #46b59b 45%,
        #017e7f 60%,
        #052939 75%,
        #c11a2b 90%
      );`,
    animationName: blob1Transform(belowTabletSize),
    duration: '6s',
    startingPos: blob1StartingPos,
  });

  const Blob2 = Blob({
    bgc: `radial-gradient(
        circle at 100%,
        #c11a2b 15%,
        #052939 30%,
        #017e7f 45%,
        #46b59b 60%,
        #efa032 75%,
        #eb452b 90%
      );`,
    animationName: blob2Transform(belowTabletSize),
    duration: '6s',
    startingPos: blob2StartingPos,
  });

  const scrollStop = scroller => {
    let timer;
    scroller.addEventListener('scroll', () => {
      clearTimeout(timer);
      timer = setTimeout(refresh, 20);
    });
    const refresh = () => {
      scroller.style.filter = `blur(0px)`;
    };
  };

  useEffect(() => {
    if (scrollRef.current && window && document) {
      const ulHeight = scrollRef.current.scrollHeight;
      const children = scrollRef.current.childElementCount;
      setInterval(() => {
        if (
          scrollRef.current.scrollTop >=
          ulHeight - ulHeight / children - 50
        ) {
          scrollRef.current.scrollTop = 0;
        } else {
          scrollRef.current.scrollTop += 100;
        }
      }, 1500);

      window.addEventListener(
        'scroll',
        () => {
          if (window.scrollY > 50) {
            scrollRef.current.scrollTop = 100;
          }
        },
        false,
      );
      scrollRef.current.addEventListener(
        'scroll',
        () => {
          scrollRef.current.style.filter = `blur(6px)`;
        },
        false,
      );
      scrollStop(scrollRef.current);
    }
  }, []);

  const aboutCarousel = [
    'Developer',
    'Creative',
    'React | Next',
    'Typescript',
    'Express',
    'Firebase',
    'GraphQL',
    'Stockholm',
  ];

  return (
    <>
      <WelcomeArea id="welcomeArea">
        <Anime {...animationProps(blob1Coords)}>
          <Blob1 />
        </Anime>
        <Anime {...animationProps(blob2Coords)}>
          <Blob2 />
        </Anime>
        <AboutContainer>
          <h1>
            <SplitText copy="Peter Ivey Hansen" role="heading" />
          </h1>
          <ul id="scrollMeToo" ref={scrollRef}>
            {aboutCarousel.map(el => (
              <li>
                <h2>{el}</h2>
              </li>
            ))}
          </ul>
        </AboutContainer>
      </WelcomeArea>
    </>
  );
};

export default WelcomeImage;
