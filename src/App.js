import React from "react";
import "./App.css";
import logo from "./assets/nasa_logo.png";
import PictureData from "../src/components/PictureData"
import styled from 'styled-components';


const CardContainer = styled.div`
  padding: 50px 100px;
  color: darkslategrey;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  background-color: darkseagreen;
`;

const HeadingH1 = styled.h1`
  font-size: 450%;
  width: 85%;

`;

const ImgContainer = styled.div`
  width: 15%;
`;

function App() {
  return (
    <div className="App">
      <CardContainer>
        <Header>
          <HeadingH1>NASA Photo of the Day</HeadingH1>
          <ImgContainer>
            <img className="logo" src={logo} alt="NASA Logo"/>
          </ImgContainer>
        </Header>
        <PictureData />
      </CardContainer>
    </div>
  );
}

export default App;
