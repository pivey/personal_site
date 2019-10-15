import React from 'react';
import styled from 'styled-components';
import { flex } from './ProjectsShowcase';

const Holder = styled.div`
  border: 3px dashed red;
  height: 50vh;
  width: 100vw;
  ${flex}
`;

const TickTackToe = () => {
  const peter = 'tired';
  return (
    <>
      <Holder>TickTack</Holder>
    </>
  );
};

export default TickTackToe;
