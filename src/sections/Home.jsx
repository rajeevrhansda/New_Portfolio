import React from "react";
import styled from "styled-components";
import Resume from "../Resume.pdf";

const HomeContainer = styled.div`
  height: calc(100vh - 55px);
  padding: 0 11vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const WelcomeText = styled.h2`
  color: ${({ theme }) => theme.themeColor};
  font-size: clamp(0.9em, 1vw, 1.5em);
  text-align: start;

  transform: translateY(10px);
  opacity: 0;
  animation: WelcomeText 1s forwards 0.5s;
  @keyframes WelcomeText {
    from {
      transform: translateY(10px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 100;
    }
  }
`;
const NameText = styled.h2`
  font-size: clamp(3em, 8vw, 7em);
  transform: translateY(10px);
  opacity: 0;
  animation: NameText 1s forwards 1s;
  @keyframes NameText {
    from {
      transform: translateY(10px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 100;
    }
  }
`;
const AboutText = styled.h2`
  color: ${({ theme }) => theme.themeColor};
  font-size: clamp(3em, 8vw, 7em);
  transform: translateY(10px);
  opacity: 0;
  animation: AboutText 1s forwards 1.5s;
  @keyframes AboutText {
    from {
      transform: translateY(10px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 100;
    }
  }
`;
const SummeryText = styled.h2`
  font-weight: 300;
  font-size: clamp(0.9em, 1vw, 1.5em);
  transform: translateY(10px);
  opacity: 0;
  animation: SummeryText 1s forwards 2s;
  @keyframes SummeryText {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 100;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin: 2em 0;
  transform: translateY(10px);
  opacity: 0;
  animation: ButtonContainer 1s forwards 2.5s;
  @keyframes ButtonContainer {
    from {
      transform: translateX(50px);
      opacity: 0;
    }
    to {
      transform: translateX(0px);
      opacity: 100;
    }
  }
`;
const Button = styled.button`
  font-weight: 900;

  padding: 1em;
  border-radius: 35px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.themeColor};
  color: ${({ theme }) => theme.text};
  font-size: clamp(0.7em, 1.1vw, 1em);
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.themeColor};
  }
`;
const Link = styled.a`
  font-weight: 900;

  padding: 1em;
  border-radius: 35px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.themeColor};
  color: ${({ theme }) => theme.text};
  font-size: clamp(0.7em, 1.1vw, 1em);
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.themeColor};
  }
`;
function Home() {
  return (
    <HomeContainer className="app">
      <WelcomeText>Welcome, I'm</WelcomeText>
      <NameText>Rajeev Hansda.</NameText>
      <AboutText>I build web apps.</AboutText>

      {/* <SummeryText>
            I'm a self taught web developer based in India, specializing in building exceptional websites.
            </SummeryText> */}

      <SummeryText>
        I'm a web developer based in Bengaluru, India, specializing in building exceptional
        websites and mobile applications, and everything in between.
      </SummeryText>
      <ButtonContainer>
        

        <a href={Resume}>
          <Button>Resume</Button>
        </a>
        <Link href="#contact">Get in touch</Link>
      </ButtonContainer>
    </HomeContainer>
  );
}

export default Home;
