import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/appContext.js';
import { Link, animateScroll as scroll } from "react-scroll";


export const navText = [
    { section: 'Home' },
    { section: 'About' },
    { section: 'Projects' }
]

const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    height: 3rem;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    // font-weight: bolder;
    z-index: 1000;
    background:#DCEDFF;
    // width:100%;
    // height:50px;
    // display:flex;
    // justify-content:flex-end;
    // align-items:center;
    // margin-bottom:2rem;
`;

const NavBtn = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    min-width: 50px;
    height:100%;
    margin:0 2rem;
    &:hover {
        cursor:pointer;
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
    const { scrollStatus, setScrollStatus } = useContext(AppContext);

    console.log(document.body.getBoundingClientRect().top);


    let count = 0;
    useEffect(() => {
        const handleScroll = () => {
            if (count === 0) {
                setScrollStatus({
                    scrollPos: document.body.getBoundingClientRect().top,
                    show: document.body.getBoundingClientRect().top > scrollStatus.scrollPos
                });
            }
            count = 1;
        };
        window.addEventListener('scroll', () => handleScroll());

    }, [scrollStatus]);

    count = 0;

    return (
        <Transition>
            <Nav className={scrollStatus.show ? "active" : "hidden"} >
                {
                    navText.map((e, i) => {
                        return (
                            <Link
                                activeClass="active"
                                to={e.section}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <NavBtn key={i}>{e.section}</NavBtn>
                            </Link>

                        )
                    })
                }
            </ Nav>
        </Transition >
    )
}

export default Navbar
