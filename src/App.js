import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Flex from "./components/Flex";
import Title from "./components/Title";
import Cardv2 from "./components/Cardv2";


const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background-color: silver;
`



function App() {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color={"red"}>Привет, мир !!!</Title>
      </Flex>
      <Flex wrap="wrap">
        <Cardv2>ddddddd</Cardv2>
        <Cardv2>ddddddd</Cardv2>
        <Cardv2>ddddddd</Cardv2>
        <Cardv2>ddddddd</Cardv2>
        <Cardv2>ddddddd</Cardv2>
        <Cardv2>ddddddd</Cardv2>
        <Cardv2>ddddddd</Cardv2>
        <Cardv2>ddddddd</Cardv2>
      </Flex>
    </AppWrapper>
  );
}

export default App;
