import React, { useState } from 'react';
import './styles/App.css';
import './styles/Base.css'
import Navbar from './components/Navbar';
import TestSection from './components/testSection';
import styled, { ThemeProvider } from 'styled-components'
import { themes } from './utils/themes';

const lightTheme = () => ({
  ...themes['light'],
})

const darkTheme = () => ({
  ...themes['dark'],
})


const MainWrapper = styled.div`
  padding-top:10%;
  width: 100vw;
  height:auto;
  background: green;
`;

function App() {

  const [theme, setTheme] = useState(lightTheme())
  const setDarkTheme = () => setTheme(darkTheme())
  const setLightTheme = () => setTheme(lightTheme())

  return (
    <>
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <Navbar />
        <TestSection />
      </MainWrapper>
    </ThemeProvider>
    </>
  );
}

export default App;
