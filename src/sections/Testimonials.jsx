import React from 'react'
import styled from 'styled-components'

const TestimonialsContainer = styled.div`
    padding: 0 11vw;
    margin-bottom: 10em;

`;
const PageTitle = styled.h2`
    font-size : clamp(3em, 8vw, 7em);
    color: #7a7a7a9e;
`;
function Testimonials() {
    return (
        <TestimonialsContainer id='testimonials'>
            <PageTitle>Testimonials</PageTitle>
        </TestimonialsContainer>
    )
}

export default Testimonials