import React from 'react'
import styled from 'styled-components'
import { experienceData } from '../data/experienceData';







const ExperienceContainer = styled.div`
    padding: 0 11vw;
    margin-bottom: 10em;
    
`;

const PageTitle = styled.h2`
    font-size : clamp(3em, 8vw, 7em);
    color: #7a7a7a9e;
`;

const Card = styled.div`
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
  width: 80%;
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


function Experience() {
  return (
    <ExperienceContainer id='experience'>
      <PageTitle>Experience</PageTitle>
      {experienceData.map(data => {
        if (data.id % 2 === 0) {
          return <Card key={data.id} style={{
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
          </Card>
        }
        return <Card key={data.id} style={{
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
        </Card>
      })}
    </ExperienceContainer>
  )
}

export default Experience