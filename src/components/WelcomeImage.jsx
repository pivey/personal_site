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
import { BLOB_1, BLOB_2, BLOB_3, BLOB_4 } from '../assets/blobs/index';
import { AppContext } from '../context/appContext';

const { flex } = globals;

const WelcomeArea = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  font-size: 5rem;
  background-image: url(${BGC_RED});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
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

const Blob1 = styled.div`
  fill: #0a8754;
  width: 25vw;
  z-index: -1;
  animation: blob1Transform 20s ease-in-out infinite;
  transform-origin: % 50%;
`;

const Blob2 = styled.div`
  fill: #634133;
  width: 25vw;
  z-index: -1;
  animation: blob2Transform 15s ease-in-out infinite;
  transform-origin: -100% -100%;
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
  font-size: 6rem;
  position: absolute;
  top: 75%;
  left: 5vw;
`;

const Title = styled.h2`
  color: white;
  line-height: 1;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  top: 5rem;
  left: 5vw;
  z-index: 1000;
`;

const WelcomeImage = () => {
  const blobRef = useRef(null);
  const { frontPageImage, setFrontPageImage } = useContext(AppContext);
  const imageSrc = [BGC_1, BGC_2, BGC_3, BGC_4, BGC_5, BGC_6, BGC_7];
  useEffect(() => {
    const randomizer = Math.floor(Math.random() * imageSrc.length);
    const randomImage = imageSrc[randomizer];
    setFrontPageImage(randomImage);
  }, []);
  const paths = [
    'M158,-131.3C187.2,-89.3,181.4,-24.6,169.8,43.8C158.2,112.3,140.9,184.5,95.1,212.4C49.2,240.3,-25.3,223.7,-83.3,189.5C-141.3,155.2,-182.8,103.2,-199.2,42.3C-215.7,-18.7,-207.1,-88.5,-169.8,-132.4C-132.4,-176.2,-66.2,-194.1,-0.9,-193.4C64.4,-192.7,128.7,-173.3,158,-131.3Z',
    'M163.6,-172.3C200.5,-126.8,210.7,-63.4,208.9,-1.9C207,59.6,192.9,119.3,156.1,155.3C119.3,191.3,59.6,203.6,8.4,195.3C-42.9,186.9,-85.8,157.8,-125.1,121.8C-164.5,85.8,-200.2,42.9,-199.9,0.4C-199.5,-42.2,-163,-84.4,-123.7,-129.9C-84.4,-175.4,-42.2,-224.2,10.6,-234.8C63.4,-245.4,126.8,-217.8,163.6,-172.3Z',
    'M139.3,-156.7C166,-112.7,163,-56.3,150.6,-12.4C138.3,31.6,116.5,63.2,89.8,97.7C63.2,132.2,31.6,169.6,-2.7,172.3C-37,175,-74,143,-94.3,108.5C-114.7,74,-118.3,37,-128,-9.7C-137.7,-56.3,-153.3,-112.7,-133,-156.7C-112.7,-200.7,-56.3,-232.3,0,-232.3C56.3,-232.3,112.7,-200.7,139.3,-156.7Z',
    'M166.2,-164.8C200.3,-132,202.7,-66,204.2,1.5C205.7,69.1,206.5,138.1,172.3,187.5C138.1,236.8,69.1,266.4,0.4,266C-68.4,265.7,-136.7,235.4,-171.2,186C-205.7,136.7,-206.4,68.4,-195.4,11C-184.4,-46.4,-161.9,-92.9,-127.4,-125.7C-92.9,-158.5,-46.4,-177.8,9.8,-187.5C66,-197.3,132,-197.7,166.2,-164.8Z',
  ];

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
      {/* <BlobHolder> */}
      {/* {[...Array(3).keys()].map(() => (
        ))} */}
      {/* <Blob src={BLOB_1} ref={blobRef} /> */}
      {/* </BlobHolder> */}
      {/* <WelcomImage src={frontPageImage} /> */}
      <Title>
        Peter
        <br /> Ivey-Hansen
      </Title>
      <WelcomeText>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={typewriter => {
            typewriter
              .pauseFor(1500)
              // .typeString('Peter Ivey-Hansen')
              // .pauseFor(2000)
              // .deleteAll()
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
