import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Theme'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Services from './sections/Services'
import Experience from './sections/Experience'
import Clients from './sections/Clients'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

import NightlightIcon from '@mui/icons-material/Nightlight';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Servicesxx from './sections/Servicesxx';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const Left = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 52px;
    height: calc(99vh - 52px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
    width: 10vw;
    transform:translateX(-10px); opacity: 0;
    animation: Left 1s forwards 2s;
    @keyframes Left {
        from   {transform:translateX(-50px); opacity: 0;}
        to {transform:translateX(0px) ;opacity:100;}
    }
`;
const IconLInk = styled.a`
    font-size : clamp(1.5em, 3vw, 2em);
    color: ${({ theme }) => theme.text};
    :hover{
      color: ${({ theme }) => theme.themeColor};
    }
`;



const Right = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 52px;
    height: calc(99vh - 52px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
    width: 10vw;
    transform:translateX(10px); opacity: 0;
    animation: Right 1s forwards 2s;
    @keyframes Right {
        from   {transform:translateX(50px); opacity: 0;}
        to {transform:translateX(0px) ;opacity:100;}
    }
`;
const MobileThemeToggle = styled.div`
    display: none;
    @media (max-width: 540px) {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    }

`;
const TopMargin = styled.div`
    display: block;
    width: 100%;
    height: 55px;
    @media (max-width: 540px) {
    display: none;
    }
`;


function App() {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const getThemeInMemory = localStorage.getItem('theme');
  const themeInMemory = (getThemeInMemory === 'true');
  const [darkMode, setDarkmode] = useState(themeInMemory == null ? systemTheme : themeInMemory);
  localStorage.setItem('theme', darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

      <Container className="app">
        <MobileThemeToggle onClick={() => setDarkmode(!darkMode)}>
          {darkMode ? <pre>lightmode  </pre> : <pre>darkmode  </pre>}
          {darkMode ? <Brightness5Icon /> : <NightlightIcon />}
        </MobileThemeToggle>
        <Navbar darkMode={darkMode} setDarkmode={setDarkmode} />
        <Left >
          <IconLInk href="https://www.linkedin.com/in/rajeevrhansda/" aria-label="Linkedin" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </IconLInk>

          <IconLInk href="https://github.com/rajeevrhansda/" aria-label="GitHub" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </IconLInk>

          <IconLInk href="https://twitter.com/rajeev_hansda" aria-label="Twitter" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </IconLInk>

          <IconLInk href="https://www.instagram.com/rajeevhansda/" aria-label="Instagram" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </IconLInk>


        </Left>
        <Right>
          <a
            href="mailto:rajeevrhansda@gmail.com?subject=Job Offer from <Company_name>&body=Dear <Candidate_name>,
            "
            style={{ color: "inherit", transform: "rotate(-90deg)", cursor: "pointer" }}>
            rajeevrhansda@gmail.com
          </a>
        </Right>
        <TopMargin />
        <Home />
        <About />
        {/* <Servicesxx/> */}
        <Services />
        {/* <Experience /> */}
        {/* <Clients /> */}
        <Projects />
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </Container>

    </ThemeProvider>
  );
}

export default App;
