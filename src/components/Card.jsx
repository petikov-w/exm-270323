import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Flex from './Flex';

const StyledCard = styled.div`  
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: 300px;
    width: 200px;
    margin-right: 10px;
    margin-top: 20px;
    background-color: #ffffff;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }    
`;

const Card = () => {
    return (
        <StyledCard>
            <Title size="0.8rem">Карточка товара</Title>           
        </StyledCard>
    );
};

export default Card;