import React from 'react';
import styled from 'styled-components';
import Title from './Title'

const StyledCard = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid red;
  background-color: #ffffff;
  color: blue;
  margin: ${({margin})=> margin || '0'};
  padding: ${({padding})=> padding || '0'};
`;

const Cardv2 = (...props) => {
    return (
        <StyledCard {...props}>
            <Title>{props.text}</Title>
        </StyledCard> 
    );
};

export default Cardv2;