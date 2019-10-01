import React from 'react';
import './styles/App.css';
import './styles/Base.css'
import Navbar from './components/Navbar';
import TestSection from './components/testSection';
import styled from 'styled-components';


const MainWrapper = styled.div`
  width: 100vw;
  height:auto;
  background: green;
`;

function App() {
  return (
    <>
      <MainWrapper>
        <Navbar />
        <TestSection />
      </MainWrapper>
    </>
  );
}

export default App;
