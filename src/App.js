import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Flex from "./components/Flex";
import Title from "./components/Title";

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background-color: silver;
`



function App() {
  return (
    <AppWrapper>
      <Flex align="center" direction="column">
        <Title color={"#3cff00"}>Привет, мир !!!</Title>
        <Flex justify="flex-start">
          <Card />
          <Card />
        </Flex>

      </Flex>
    </AppWrapper>
  );
}

export default App;
