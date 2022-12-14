import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

const transition = { duration: 2, type: "spring" };

const AboutContainer = styled.div`
    padding: 0 11vw;
    margin-bottom: 10em;
    
`;
const PageTitle = styled.h2`
    font-size : clamp(3em, 8vw, 7em);
    color: #7a7a7a9e;
    
`;
const AboutMe = styled.h2`
    font-weight: 400;
    color: ${({ theme }) => theme.themeColor};
    font-size : clamp(1em, 2vw, 2em);
    text-align: center;
    margin: 1em;

    
`;
const BlockQuote = styled.blockquote`
    font-weight: 100;
    font-size : clamp(1.1em, 2.1vw, 2.1em);
    font-style: italic;
    text-align: center;
    color: #a8a8a8;
    position: relative;
    ::before {
        content: open-quote;
        font-size : clamp(2em, 3vw, 2.1em);
    }
    ::after{
        content: close-quote;
        font-size : clamp(2em, 3vw, 2.1em);
        position: absolute;
        transform: translateY(-5px);
    }
    
`;

function About() {
    return (
        <AboutContainer id='about'>
            <PageTitle>About</PageTitle>
            <motion.div
                initial={{ top: "-4%", left: "74%" }}
                whileInView={{ left: "68%" }}
                transition={transition}
                viewport={{ once: true }}
            >
                <AboutMe>I'm a front-end developer and UI designer from the city of IT hub Bangalore, India.</AboutMe>
            </motion.div>
            <BlockQuote>I enjoy the challenge of creating something new from scratch, and that's drive me to push my creative imagination</BlockQuote>
        </AboutContainer>
    )
}

export default About