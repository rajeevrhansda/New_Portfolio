import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    padding: 0 11vw 7em 11vw;
`;
const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    /* justify-content: center; */
`;
const FooterLine = styled.div`
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg,transparent,#ff8a00,#3bb57c,transparent);
`;
function Footer() {
    return (
        <FooterContainer>
            <FooterText >
                <p>Handcrafted with <svg stroke="currentColor" fill="red" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg> &amp; imagination.</p>
                <FooterLine/>
                </FooterText>
        </FooterContainer>
    )
}

export default Footer