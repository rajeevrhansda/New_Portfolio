import React from 'react'
import styled from 'styled-components'
import './navbar.css'
import NightlightIcon from '@mui/icons-material/Nightlight';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';

import Scrollspy from 'react-scrollspy'

const NavbarContainer = styled.div`
`;
const Nav = styled.nav`
    z-index: 99;
    position: fixed;
    right: 0;
    background-color: ${({ theme }) => theme.bg};
    height: 55px;
    width: 100%;
    @media (max-width: 540px) {
    display: none;
    }
`;
const Ul = styled.ul`

    ul li.active{
        ::after{
            position: absolute;
            content: "";
            width: 80%;
            height: 4px;
            margin-top: 0.4em;
            border-radius: 50px;
            background-color: ${({ theme }) => theme.themeColor};
        }
    }
    li:nth-child(1) {
        transform:translateY(-10px); opacity: 0;
        animation: one 0.1s forwards 0s;
        @keyframes one {
            from   {transform: translateY(-10px) ; opacity: 0;}
            to {transform: translateY(0px) ;opacity:100;}
        }
}
li:nth-child(2) {
        transform:translateY(-10px); opacity: 0;
        animation: two 0.1s forwards 0.1s;
        @keyframes two {
            from   {transform: translateY(-10px) ; opacity: 0;}
            to {transform: translateY(0px) ;opacity:100;}
        }
}
li:nth-child(3) {
        transform:translateY(-10px); opacity: 0;
        animation: three 0.1s forwards 0.2s;
        @keyframes three {
            from   {transform: translateY(-10px) ; opacity: 0;}
            to {transform: translateY(0px) ;opacity:100;}
        }
}
li:nth-child(4) {
        transform:translateY(-10px); opacity: 0;
        animation: four 0.1s forwards 0.3s;
        @keyframes four {
            from   {transform: translateY(-10px) ; opacity: 0;}
            to {transform: translateY(0px) ;opacity:100;}
        }
}
    
`;
const Li = styled.li`
    
`;
const SlNo = styled.h2`
    color: ${({ theme }) => theme.themeColor};
    font-size : clamp(0.7em, 2vw, 1em);
    `;
const NavText = styled.h2`
    font-size : clamp(0.7em, 2vw, 1em);
    
`;
const ThemeToggle = styled.div`
    
`;

const MobileNavContainer = styled.div`
        display: none;
        @media (max-width: 540px) {
            display: flex;
            position: fixed;
            bottom: 5%;
            width: 100vw;
            color: black;
            justify-content: center;
            align-items: center;
            z-index: 99;
        }
`;
const MobileNav = styled.div`
    a{
        padding: 0.3em;
        border-radius: 50%;
    }
    a.active{
        background-color: ${({ theme }) => theme.themeColor};
    }
`;


function Navbar({ darkMode, setDarkmode }) {
    return (
        <NavbarContainer>

            <Nav>
                <Ul>
                    <Scrollspy
                        items={['about', 'services', 'projects', 'contact']} currentClassName="active"
                        style={{
                            display: "flex", gap: "1em", justifyContent: "flex-end", padding: "1em 4em",
                        }}
                    >
                        <Li>
                            <a href="#about" style={{ display: "flex", color: "inherit" }}><SlNo>01.</SlNo><NavText>About</NavText></a>
                        </Li>
                        <Li>
                            <a href="#services" style={{ display: "flex", color: "inherit" }}><SlNo>02.</SlNo><NavText>Services</NavText></a>
                        </Li>
                        <Li>
                            <a href="#projects" style={{ display: "flex", color: "inherit" }}><SlNo>03.</SlNo><NavText>Project</NavText></a>
                        </Li>
                        <Li>
                            <a href="#contact" style={{ display: "flex", color: "inherit" }}><SlNo>04.</SlNo><NavText>Contact</NavText></a>
                        </Li>
                        <ThemeToggle onClick={() => setDarkmode(!darkMode)}>
                            {darkMode ? <Brightness5Icon /> : <NightlightIcon />}
                        </ThemeToggle>
                    </Scrollspy>
                </Ul>
            </Nav>
            <MobileNavContainer>

                <MobileNav>
                    <Scrollspy
                        items={['about', 'services', 'projects', 'contact']} currentClassName="active"
                        style={{
                            display: "flex",
                            width: "max-content",
                            gap: "1em",
                            padding: "0.5em 2em",
                            borderRadius: "30px",
                            backdropFilter: "blur(5px)",
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            outline: "2px solid rgb(6, 147, 227)",
                            color: "white",
                        }}
                    >
                        <a href="#about" style={{ color: "inherit" }} >
                            <PersonIcon />
                        </a>

                        <a href="#services" style={{ color: "inherit" }}>
                            <BookIcon />
                        </a>

                        <a href="#projects" style={{ color: "inherit" }}>
                            <BookmarksIcon />
                        </a>

                        <a href="#contact" style={{ color: "inherit" }}>
                            <AlternateEmailRoundedIcon />
                        </a>

                    </Scrollspy>
                </MobileNav>
            </MobileNavContainer>
        </NavbarContainer >
    )
}

export default Navbar