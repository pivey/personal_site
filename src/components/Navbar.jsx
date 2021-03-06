import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';
import useAppContext from '../hooks/useAppContext';

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
  height: 4.5rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
  align-items: center;
  z-index: 1000;
  background: ${props => props.theme.navColor};
  transition-duration: ${props => props.theme.delay};
`;

const NavBtn = styled.div`
  display: flex;
  color: ${props => props.theme.navTextColor};
  transition-duration: ${props => props.theme.delay};
  align-items: center;
  justify-content: center;
  min-width: 50px;
  height: 100%;
  margin: 0 2rem;
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

function Navbar() {
  const { scrollStatus, setScrollStatus } = useAppContext();

  let count = 0;
  useEffect(() => {
    const handleScroll = () => {
      if (count === 0) {
        setScrollStatus({
          scrollPos: document.body.getBoundingClientRect().top,
          show:
            document.body.getBoundingClientRect().top > scrollStatus.scrollPos,
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
            duration={600} //
            key={i}
          >
            <NavBtn className="noSelect" key={i}>
              {e.section}
            </NavBtn>
          </Link>
        ))}
      </Nav>
    </Transition>
  );
}

export default Navbar;
