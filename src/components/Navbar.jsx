import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';
import { AppContext } from '../context/appContext.js';

// import { Link as RouteLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import history from '../history';

export const navText = [
  { section: 'Home' }, //
  { section: 'About' },
  { section: 'Projects' },
];

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
  background: ${props => props.theme.navColor};
`;

const NavBtn = styled.div`
  display: flex;
  color: ${props => props.theme.navTextColor};
  align-items: center;
  justify-content: center;
  min-width: 50px;
  height: 100%;
  margin: 0 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.hoverColor};
  }
`;

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.navTextColor};
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: ${props => props.theme.hoverColor};
    text-decoration: none;
  }
`;

function Navbar() {
  const { scrollStatus, setScrollStatus } = useContext(AppContext);

  console.log(document.body.getBoundingClientRect().top);

  let count = 0;
  useEffect(() => {
    const handleScroll = () => {
      if (count === 0) {
        setScrollStatus({
          scrollPos: document.body.getBoundingClientRect().top,
          show: document.body.getBoundingClientRect().top > scrollStatus.scrollPos,
        });
      }
      count = 1;
    };
    window.addEventListener('scroll', () => handleScroll());
  }, [scrollStatus]);

  count = 0;

  return (
    <Transition>
      <Nav className={scrollStatus.show ? 'active' : 'hidden'}>
        {navText.map((e, i) => (
          <Link
            activeClass="active" //
            to={e.section} //
            spy //
            smooth //
            offset={-80} //
            duration={700} //
            key={i}
          >
            <NavBtn className="noSelect" key={i}>
              {e.section}
            </NavBtn>
          </Link>
        ))}
         {/* <NavBtn>
          <StyledLink to="/">Home</StyledLink>
        </NavBtn>
        <NavBtn>
          <StyledLink to="/ticktacktoe">Ticktacktoe</StyledLink>
        </NavBtn> */}
      </Nav>
    </Transition>
  );
}

export default Navbar;
