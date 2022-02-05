import React from 'react';
import Btn from "../elements/ButtonStyled";
import styled from 'styled-components';
import { LocalGroceryStore } from '@styled-icons/material';

const WrapperAroundIconsAndText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`; 

const Button = (props) => {

    return (
        <WrapperAroundIconsAndText>
            <Btn primary lg>{props.children} <LocalGroceryStore size="24px" color="#fff" /></Btn>
            
            
        </WrapperAroundIconsAndText>
    )
}

export default Button;