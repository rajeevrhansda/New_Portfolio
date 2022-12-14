import React, { useState } from 'react'
import styled from 'styled-components'
import { MongoDB, NodeJS, FontAwesome, MaterialUI, Bootstrap, Sass, Tailwind, Redux, ReactJS, NextJS, Photoshop, Illustrator, Figma, XD, JavaScript, CSS, HTML } from '../svg/svg';

import { serviceData } from '../data/serviceData';



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Pagination } from "swiper";

const ServicesContainer = styled.div`
    padding: 0 11vw;
    margin-bottom: 10em;

`;
const PageTitle = styled.h2`
    font-size : clamp(3em, 8vw, 7em);
    color: #7a7a7a9e;
`;

const Box = styled.div`
    display: flex;
    @media (max-width: 810px) {
        display: none;
    }
`;
const BoxLeft = styled.div`
    flex: 1;
`;
const BoxRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 810px) {
            display: none;
        }
`;
const Row3 = styled.div`
    display: flex;
    gap: 3em;
    margin-bottom: 1em;
`;
const Row4 = styled.div`
    display: flex;
    gap: 3em;
    margin-bottom: 1em;
`;
const Icon = styled.div`
    width: clamp(2.5em, 4vw, 6.5em);
    height: clamp(2.5em, 4vw, 6.5em);
    border-radius: 10px;
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.themeColor};
    box-shadow: inset 0 0 10px #000000;
    cursor: pointer;
`;
const IconText = styled.div`
    transform: rotate(-45deg);
    color: white;
`;
const SVG = styled.h2`
    width: clamp(1em,2.5vw, 2.6em);
    margin-top: 5px;
`;
// ==========================================================


const Section = styled.div`
    display: none;
    width: 50%;
    @media (max-width: 810px) {
        display: block;
        width: 100%;
        }
        .swiper-slide{
            width: max-content;
            height: max-content;
        }
        .swiper-scrollbar-drag{
            background-color: ${({ theme }) => theme.themeColor};
        }
`;

const ServiceName = styled.h2`
    font-size: clamp(1.5em, 8vw, 5em);
    color: rgb(6, 147, 227);
`;
const LineContainer = styled.div`
    display: flex;
    gap: 0.5em;
`;
const Line = styled.div`
    background-color: rgb(6, 147, 227);
    width: 50%;
    height: clamp(0.1em, 1vw, 0.6em);
    border-radius: 5px;
    border: 2px solid #ccdde8;
`;
const LineTwo = styled.div`
    background-color: rgb(6, 147, 227);
    width: 10%;

    height: clamp(0.1em, 1vw, 0.6em);
    border-radius: 5px;
    border: 2px solid #ccdde8;
`;

const ServiceDesc = styled.h2`
    font-weight: 300;
    margin: 2em 0em;
    font-size: clamp(1em,2vw, 2em);
`;


function Servicesxx() {
    const [serviceNumber, setServiceNumber] = useState(0);

    return (
        <ServicesContainer id='services'>
            <PageTitle>Services</PageTitle>

            <Section>
                <Swiper
                    scrollbar={{
                        hide: false,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper"
                >
                    {serviceData.map(data => (
                        <SwiperSlide key={data.id}>
                            <ServiceName>{data.sName}</ServiceName>
                            <LineContainer>
                                <Line></Line><LineTwo></LineTwo>
                            </LineContainer>
                            <ServiceDesc>{data.sDescription}</ServiceDesc>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <h2 style=
                    {{
                        marginTop: "1em",
                        fontSize: "clamp(1em, 8vw, 3em)",
                        color: "rgba(0, 162, 255, 0.527)",
                    }}>
                    growing more
                </h2>
            </Section>


            <Box>


                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <BoxLeft>
                            <h2 style=
                                {{
                                    fontSize: "clamp(1.5em, 8vw, 5em)",
                                    color: "rgb(6, 147, 227)",
                                }}>
                                {serviceData[serviceNumber].sName}
                            </h2>
                            <div style=
                                {{
                                    display: "flex",
                                    gap: "0.5em",
                                }}>
                                <div style=
                                    {{
                                        backgroundColor: "rgb(6, 147, 227)",
                                        width: "50%",
                                        height: "clamp(0.1em, 1vw, 0.6em)",
                                        borderRadius: "5px",
                                        border: "2px solid #ccdde8"
                                    }}>
                                </div>
                                <div style=
                                    {{
                                        backgroundColor: "rgb(6, 147, 227)",
                                        width: "10%",
                                        height: "clamp(0.1em, 1vw, 0.6em)",
                                        borderRadius: "5px",
                                        border: "2px solid #ccdde8"
                                    }}>
                                </div>
                            </div>
                            <h2 style=
                                {{
                                    fontWeight: "300",
                                    marginTop: "2em",
                                    fontSize: "clamp(1em,2vw, 2em)",
                                }}>
                                {serviceData[serviceNumber].sDescription}
                            </h2>
                            <h2 style=
                                {{
                                    marginTop: "1em",
                                    fontSize: "clamp(1em, 8vw, 3em)",
                                    color: "rgba(0, 162, 255, 0.527)",
                                }}>
                                growing more
                            </h2>
                        </BoxLeft>
                    </SwiperSlide>


                </Swiper>



                <BoxRight>
                    {/* ===================    ROW 1 =================== */}
                    <Row3>
                        <Icon onClick={() => setServiceNumber(1)}>
                            <IconText>
                                <SVG>
                                    {HTML}
                                </SVG>
                            </IconText>
                        </Icon>
                        <Icon onClick={() => setServiceNumber(2)}>
                            <IconText>
                                <SVG>
                                    {CSS}
                                </SVG>
                            </IconText>
                        </Icon>
                        <Icon onClick={() => setServiceNumber(3)}>
                            <IconText>
                                <SVG>
                                    {JavaScript}
                                </SVG>
                            </IconText>
                        </Icon>
                    </Row3>
                    {/* ===================    ROW 1 =================== */}
                    {/* ===================    ROW 2 =================== */}
                    <Row4>
                        <Icon onClick={() => setServiceNumber(15)}>
                            <IconText>
                                <SVG>
                                    {XD}
                                </SVG>
                            </IconText>
                        </Icon>
                        <Icon onClick={() => setServiceNumber(14)}>
                            <IconText>
                                <SVG>
                                    {Figma}
                                </SVG>
                            </IconText>
                        </Icon>
                        <Icon onClick={() => setServiceNumber(16)}>
                            <IconText>
                                <SVG>
                                    {Illustrator}
                                </SVG>
                            </IconText>
                        </Icon>
                        <Icon onClick={() => setServiceNumber(17)}>
                            <IconText>
                                <SVG>
                                    {Photoshop}
                                </SVG>
                            </IconText>
                        </Icon>
                    </Row4>
                    {/* ===================    ROW 2 =================== */}
                    {/* ===================    ROW 3 =================== */}
                    <Row3>
                        <Icon onClick={() => setServiceNumber(7)}>
                            <IconText>
                                <SVG>
                                    {NextJS}
                                </SVG>
                            </IconText>
                        </Icon>
                        <Icon onClick={() => setServiceNumber(18)}>
                            <IconText>
                                <SVG>
                                    {ReactJS}
                                </SVG>
                            </IconText>
                        </Icon>
                        <Icon onClick={() => setServiceNumber(6)}>
                            <IconText>
                                <SVG>
                                    {Redux}
                                </SVG>
                            </IconText>
                        </Icon>
                    </Row3>
                    {/* ===================    ROW 3 =================== */}
                    {/* ===================    ROW 4 =================== */}
                    <Row4>
                        <Icon onClick={() => setServiceNumber(9)}>
                            <IconText>
                                <SVG>
                                    {Tailwind}
                                </SVG>
                            </IconText>
                        </Icon>
                        <Icon  onClick={() => setServiceNumber(10)}>
                            <IconText>
                                <SVG>
                                    {Sass}
                                </SVG>
                            </IconText>
                        </Icon>
                        <Icon onClick={() => setServiceNumber(11)}>
                            <IconText>
                                <SVG>
                                    {Bootstrap}
                                </SVG>
                            </IconText>
                        </Icon>
                        <Icon onClick={() => setServiceNumber(12)}>
                            <IconText>
                                <SVG>
                                    {MaterialUI}
                                </SVG>
                            </IconText>
                        </Icon>
                    </Row4>
                    {/* ===================    ROW 4 =================== */}
                    {/* ===================    ROW 5 =================== */}
                    <Row3>
                        <Icon onClick={() => setServiceNumber(13)}>
                            <IconText>
                                <SVG>
                                    {FontAwesome}
                                </SVG>
                            </IconText>
                        </Icon>
                        <Icon onClick={() => setServiceNumber(5)}>
                            <IconText>
                                <SVG>
                                    {NodeJS}
                                </SVG>
                            </IconText>
                        </Icon>
                        <Icon onClick={() => setServiceNumber(8)}>
                            <IconText>
                                <SVG>
                                    {MongoDB}
                                </SVG>
                            </IconText>
                        </Icon>
                    </Row3>
                    {/* ===================    ROW 5 =================== */}
                </BoxRight>
            </Box>
        </ServicesContainer>
    )
}

export default Servicesxx