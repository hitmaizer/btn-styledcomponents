import React from 'react';
import Btn from "../elements/ButtonStyled";
import styled from 'styled-components';
import Icon from "../elements/Icon";


const WrapperAroundIconsAndText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`; 



const Button = (props) => {

    return (
        <WrapperAroundIconsAndText>
            <Btn secondary lg>
                <Icon />
                {props.children} 
                <Icon />
            </Btn>
        </WrapperAroundIconsAndText>
    )
}

export default Button;