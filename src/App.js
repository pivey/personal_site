import React, { useState, useContext } from 'react';
import './styles/App.css';
import './styles/Base.css';
import './styles/State.css';
import styled, { css, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';
import { themes } from './utils/themes';
import sunSVG from './assets/sunicon.svg';
import moonSVG from './assets/moonicon.svg';
import { AppContext } from './context/appContext';

const ThemeIconSun = css`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  background-size: cover;
  background-position: 50% 50%;
  background-color: transparent;
  background-repeat: no-repeat;
`;

const ThemeIconMoon = css`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-size: cover;
  background-position: 50% 50%;
  background-color: transparent;
  background-repeat: no-repeat;
`;

const MoonIcon = styled.svg`
  ${ThemeIconMoon}
  background-image: url(${moonSVG});
`;

const SunIcon = styled.div`
  ${ThemeIconSun}
  background-image: url(${sunSVG});
`;

const lightTheme = () => ({
  ...themes.light,
});

const darkTheme = () => ({
  ...themes.dark,
});

const MainWrapper = styled.div`
  padding-top: 5%;
  width: 100vw;
  height: auto;
  background: ${props => props.theme.bgColor};
  transition-duration: ${props => props.theme.delay};
`;

const ThemeChangeHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  position: fixed;
  top: 6rem;
  right: 2.5rem;
`;

const TransitionX = styled.div`
  .active {
    transition: transform 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
  .hidden {
    transition: transform 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transform: translateX(7rem);
  }
`;

const routes = [{ path: '/', component: FrontPage }];
const routing = routes.map(({ path, component }, i) => (
  <Route exact path={path} component={component} key={i} />
));

function App() {
  const [theme, setTheme] = useState(lightTheme());
  const setDarkTheme = () => setTheme(darkTheme());
  const setLightTheme = () => setTheme(lightTheme());
  const { scrollStatus } = useContext(AppContext);

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <MainWrapper>
            <TransitionX>
              <ThemeChangeHolder
                className={
                  scrollStatus.show ? 'active hvr-push' : 'hidden hvr-push'
                }
              >
                {theme.type === 'light' && <MoonIcon onClick={setDarkTheme} />}
                {theme.type === 'dark' && <SunIcon onClick={setLightTheme} />}
              </ThemeChangeHolder>
            </TransitionX>
            <Navbar />
            {routing}
          </MainWrapper>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
