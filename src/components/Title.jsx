import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    /* color: ${(props) => props.color}; */
    color: ${props => props.color || '#000000'};
    font-size: ${props => props.size || '2rem'};;
`;

const Title = (props) => {
    return (
      <StyledTitle {...props} />       
    )
};

export default Title;
