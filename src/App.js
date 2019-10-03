import React from 'react';
import './styles/App.css';
import './styles/Base.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
// import TestSection from './components/testSection';
import Timeline from './components/Timeline';

const MainWrapper = styled.div`
  padding-top: 10%;
  width: 100vw;
  height: auto;
  background: green;
`;

function App() {
  return (
    <>
      <MainWrapper>
        <Navbar />
        <Timeline />

        {/* <TestSection /> */}
      </MainWrapper>
    </>
  );
}

export default App;
