import React from 'react';
import Btn from "../elements/ButtonStyled";
import styled from 'styled-components';
import { LocalGroceryStore } from '@styled-icons/material';

const WrapperAroundIconsAndText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`; 

const icon = <LocalGroceryStore size="24px" color="#fff" className="btn__icon"/>

const Button = (props) => {

    return (
        <WrapperAroundIconsAndText>
            <Btn secondary lg>
                {icon}
                {props.children} 
            </Btn>
            
        </WrapperAroundIconsAndText>
    )
}

export default Button;