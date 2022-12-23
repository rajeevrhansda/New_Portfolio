import React from 'react'
import styled from 'styled-components'
import { projectData } from '../data/projectData';

import { experienceData } from '../data/experienceData';


import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const ProjectsContainer = styled.div`
    padding: 0 11vw;
    margin-bottom: 10em;

`;
const PageTitle = styled.h2`
    font-size : clamp(3em, 8vw, 7em);
    color: #7a7a7a9e;
`;
const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 540px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    margin-bottom: 3em;
    border-radius: 10px;
    background-color: rgb(0, 162, 255);
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2em;
`;
const IconLeft = styled.h2`
    font-size: clamp(2em,4.5vw, 4em);
`;
const IconRight = styled.h2`
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-size: clamp(1.4em,4.5vw, 1.8em);

`;
const TextContainer = styled.div`
    
`;
const Pname = styled.h2`
    font-weight: 400;
    font-size: clamp(1.4em,4.5vw, 1.8em);
    margin-bottom: 0.5em;
`;
const PDesc = styled.h2`
    font-size: clamp(1.2em,4.5vw, 1.4em);
    font-weight: 300;
    margin-bottom: 0.5em;    
`;
const PSkillContainer = styled.div`
    display: flex;
    gap: 1em;
`;
const PSkills = styled.h2`
    font-size: clamp(0.2em,3.5vw, 0.8em);
    font-weight: 300;
    
`;

// =============================================
const ExperienceContainer = styled.div`
    padding: 0 11vw;
    margin-bottom: 10em;
    
`;

const CardExperience = styled.div`
  margin-bottom: 4em;
  position: relative;
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    }
`;
const TextCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-bottom: 1em;
    z-index: 2;
    margin-bottom: 10em;
    @media (max-width: 540px) {
    width: 100%;
    margin-bottom: 1em;
    }
    
`;
const ProjectName = styled.h2`
  margin-bottom: 1em;
  color: ${({ theme }) => theme.themeColor};
  
`;
const ProjectDesc = styled.h2`
  font-weight: 300;
  font-size : clamp(1.2em, 2vw, 2em);
  margin-bottom: 1em;
  background: linear-gradient(to top left,rgb(6, 147, 227),#39b57b);
  padding: 1em;
  border-radius: 10px;
  
  
`;
const FeatureCard = styled.div`
  width: 80%;
  margin-bottom: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Features = styled.h2`
font-weight: 300;
  font-size : clamp(0.8em, 2vw, 1.5em);
  padding-bottom: 1em ;
`;
const SkillsCard = styled.div`
  /* width: 80%; */
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;
  @media (max-width: 540px) {
    width: 100%;
    }

`;
const Skill = styled.h2`
  font-weight: 300;
  font-size : clamp(0.8em, 2vw, 1.2em);
`;
const ImageHolder = styled.div`
width: 50%;
position: absolute;
border-radius: 10px;
@media (max-width: 540px) {
    position: relative;
    width: 100%;
    margin-bottom: 10em;
    }
`;
const ProjectLink = styled.div`
  display: none;
  position: absolute;
  flex-direction: column;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 100%;
  height: 100%;
  background-color: #00000073;
  ${ImageHolder}:hover & {
    display: flex;
  }
`;
const ProjectLinkButton = styled.a`
  padding: 0.5em;
  border-radius: 20px;
  color: inherit;
  background-color: ${({ theme }) => theme.themeColor};
  border: 1px solid white;

`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  -webkit-box-shadow: 5px 4px 29px -11px #000000; 
  box-shadow: 5px 4px 29px -11px #000000;
`;
const MobileImage = styled.img`
  position: absolute;
  right: 2%;
  top: 30%;
  width: 30%;
  object-fit: cover;
  border-radius: 10px;
  -webkit-box-shadow: 5px 4px 29px -11px #000000; 
  box-shadow: 5px 4px 29px -11px #000000;
`;
const ImageLeft = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  -webkit-box-shadow: 5px 4px 29px -11px #000000; 
  box-shadow: 5px 4px 29px -11px #000000;
`;
const MobileImageLeft = styled.img`
  position: absolute;
  left: 2%;
  top: 30%;
  width: 30%;
  object-fit: cover;
  border-radius: 10px;
  -webkit-box-shadow: 5px 4px 29px -11px #000000; 
  box-shadow: 5px 4px 29px -11px #000000;
`;

function Projects() {
    return (
        <ProjectsContainer id='projects'>
            <PageTitle>Projects</PageTitle>

            {experienceData.map(data => {
                if (data.id % 2 === 0) {
                    return <CardExperience key={data.id} style={{
                        display: "flex",
                        justifyContent: "right"
                    }}>
                        <TextCard style={{ alignItems: "flex-end" }}>
                            <ProjectName className='exp' style={{
                                textAlign: "right"
                            }}>{data.pName}</ProjectName>
                            <ProjectDesc style={{
                                textAlign: "right"
                            }}>{data.pDescription}</ProjectDesc>
                            <FeatureCard
                            >
                                {data.pFeature.map((pf, pfIndex) => (
                                    <Features key={pfIndex} style={{
                                        textAlign: "right"
                                    }}>
                                        {pf}
                                    </Features>
                                ))}
                            </FeatureCard>
                            <SkillsCard>
                                {data.pSkill.map((ps, psIndex) => (
                                    <Skill key={psIndex} >
                                        {ps}
                                    </Skill>
                                ))}
                            </SkillsCard>
                        </TextCard>
                        <ImageHolder
                            style={{
                                left: "0",
                            }}>
                            <ProjectLink>
                                <ProjectLinkButton href={data.pLink} target="_blank">Live Project</ProjectLinkButton>
                                <ProjectLinkButton href={data.pGitLink} target="_blank">Github</ProjectLinkButton>
                            </ProjectLink>
                            <ImageLeft src={data.pImage} />
                            <MobileImageLeft src={data.pMobileImage} />
                        </ImageHolder>
                    </CardExperience>
                }
                return <CardExperience key={data.id} style={{
                    display: "flex",
                    justifyContent: "left"
                }}>
                    <TextCard >
                        <ProjectName>{data.pName}</ProjectName>
                        <ProjectDesc>{data.pDescription}</ProjectDesc>
                        <FeatureCard>
                            {data.pFeature.map((pf, pfIndex) => (
                                <Features key={pfIndex}>
                                    {pf}
                                </Features>
                            ))}
                        </FeatureCard>
                        <SkillsCard>
                            {data.pSkill.map((ps, psIndex) => (
                                <Skill key={psIndex}>
                                    {ps}
                                </Skill>
                            ))}
                        </SkillsCard>
                    </TextCard>

                    <ImageHolder
                        style={{
                            right: "0",
                        }}
                    >
                        <ProjectLink>
                            <ProjectLinkButton href={data.pLink} target="_blank">Live Project</ProjectLinkButton>
                            <ProjectLinkButton href={data.pGitLink} target="_blank">Github</ProjectLinkButton>
                        </ProjectLink>
                        <Image src={data.pImage} />
                        <MobileImage src={data.pMobileImage} />
                    </ImageHolder>
                </CardExperience>
            })}



            {/* ================================ */}
            {/* <CardContainer>
                {projectData.map(data => (

                    <Card key={data.id}>
                        <IconContainer>
                            <IconLeft>
                                <i className="fa-solid fa-folder-open"></i>
                            </IconLeft>
                            <IconRight>
                                <a href={data.pLink} target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href={data.pGitLink} target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                                    <i className="fa-solid fa-share-from-square"></i>
                                </a>
                            </IconRight>
                        </IconContainer>
                        <TextContainer>
                            <Pname>{data.pName}</Pname>
                            <PDesc>{data.pDescription}</PDesc>
                            <PSkillContainer>
                                {data.pSkill.map((ps, psIndex) => (
                                    <PSkills key={psIndex} >
                                        {ps}
                                    </PSkills>
                                ))}
                            </PSkillContainer>
                        </TextContainer>
                    </Card>
                ))}
            </CardContainer> */}

            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {projectData.map(data => (
                    <SwiperSlide key={data.id}>
                        <Card >
                            <IconContainer>
                                <IconLeft>
                                    <i className="fa-solid fa-folder-open"></i>
                                </IconLeft>
                                <IconRight>
                                    <a href={data.pGitLink} target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                    <a href={data.pLink} target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                                        <i className="fa-solid fa-share-from-square"></i>
                                    </a>
                                </IconRight>
                            </IconContainer>
                            <TextContainer>
                                <Pname>{data.pName}</Pname>
                                <PDesc>{data.pDescription}</PDesc>
                                <PSkillContainer>
                                    {data.pSkill.map((ps, psIndex) => (
                                        <PSkills key={psIndex} >
                                            {ps}
                                        </PSkills>
                                    ))}
                                </PSkillContainer>
                            </TextContainer>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>


        </ProjectsContainer>
    )
}

export default Projects