import React from "react";
import styled from 'styled-components';

const CardContainer = styled.section`
  font-family: helvetica;
`;

const Dateh3 = styled.h3`
  text-align: end;
  margin-bottom: 30px;
  margin-top: 30px
  font-size: 30px;

`;

const PictureTitle = styled.h3`
  margin-top: 50px;
  font-size: 35px;
`;

const Authorh3 = styled.h3`
  margin-top: 50px;
  font-size: 30px;
`;

const ExplanationP = styled.p`
  text-align: justify;
  margin-top: 50px;
  font-size: 25px;
`;

const ImgContainer = styled.div`
  text-align: center;
`;

const NasaImg = styled.img`
  ${props => (props.type === 'primary' ? `width: 100%;` : null)}
`;

const PictureCard = ( {picture} ) => {
  return (
    <CardContainer>
      <Dateh3>Date: {picture.date}</Dateh3>
      <ImgContainer>
        <NasaImg type="primary" src={picture.url} alt={picture.title}></NasaImg>
      </ImgContainer>
      <PictureTitle>Picture Title: {picture.title}</PictureTitle>
      <Authorh3>Author: {picture.copyright}</Authorh3>
      <ExplanationP><b>Explanation:</b> {picture.explanation}</ExplanationP>
    </CardContainer>
  );
};

export default PictureCard;