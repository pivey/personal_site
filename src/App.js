import React, { useState } from 'react';
import './styles/App.css';
import './styles/Base.css';
import styled, { css, ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import TestSection from './components/testSection';
import { themes } from './utils/themes';
// import { ReactComponent as moonSVG} from './assets/logos/moon.svg'
import sunSVG from './assets/sun.svg';
import moonSVG from './assets/moon.svg';

const ThemeIcon = css`
  width: 3rem;
  height: 3rem;
  margin-left: auto;
  cursor: pointer;
  background-size: cover;
  background-position: 50% 50%;
  background-color: transparent;
  background-repeat: no-repeat;

`

const MoonIcon = styled.svg`
  ${ThemeIcon}
  background-image: url(${moonSVG});
`;

const SunIcon = styled.div`
  ${ThemeIcon}
  background-image: url(${sunSVG});
`

const lightTheme = () => ({
  ...themes.light,
});

const darkTheme = () => ({
  ...themes.dark,
});

const MainWrapper = styled.div`
  padding-top: 10%;
  width: 100vw;
  height: auto;
  background: green;
`;

const ThemeChangeHolder = styled.div`
  padding:10px;
  width:100px;
  height:50px;
`;

function App() {
  const [theme, setTheme] = useState(lightTheme());
  const setDarkTheme = () => setTheme(darkTheme());
  const setLightTheme = () => setTheme(lightTheme());

  return (
    <>
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <Navbar />
          <ThemeChangeHolder>
          {theme.type === 'light' && <MoonIcon onClick={setDarkTheme} />}
          {theme.type === 'dark' && <SunIcon onClick={setLightTheme} />}
          </ ThemeChangeHolder>
          {/* {theme.type === 'dark' && (
            <button type="button" onClick={setLightTheme}>
              Light
            </button>
          )}
          {theme.type === 'light' && (
            <button type="button" onClick={setDarkTheme}>
              Dark
            </button>
          )} */}

          <TestSection />
        </MainWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
