import React, { useState } from 'react';
import './styles/App.css';
import './styles/Base.css';
import './styles/State.css';
import styled, { css, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';
import TickTackToe from './components/TickTackToe';
import { themes } from './utils/themes';
import sunSVG from './assets/sunicon.svg';
import moonSVG from './assets/moonicon.svg';

const ThemeIconSun = css`
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  background-size: cover;
  background-position: 50% 50%;
  background-color: transparent;
  background-repeat: no-repeat;
`;

const ThemeIconMoon = css`
  width: 3rem;
  height: 3rem;
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
`;

const ThemeChangeHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  position: fixed;
  top: 7rem;
  right: 3rem;
`;

const routes = [{ path: '/', component: FrontPage }, { path: '/ticktacktoe', component: TickTackToe }];
const routing = routes.map(({ path, component }, i) => <Route exact path={path} component={component} key={i} />);

function App() {
  const [theme, setTheme] = useState(lightTheme());
  const setDarkTheme = () => setTheme(darkTheme());
  const setLightTheme = () => setTheme(lightTheme());

  return (
    <>
    <Router>
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <ThemeChangeHolder className="hvr-push">
            {theme.type === 'light' && <MoonIcon onClick={setDarkTheme} />}
            {theme.type === 'dark' && <SunIcon onClick={setLightTheme} />}
          </ThemeChangeHolder>
          <Navbar />
          {/* <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/ticktacktoe" exact component={TickTackToe} />
          </Switch> */}
           {routing}
        </MainWrapper>
      </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
