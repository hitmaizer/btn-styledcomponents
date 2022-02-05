import React from 'react';
import Btn from "../elements/ButtonStyled"


const Button = (props) => {

    return (
        <Btn danger lg outline>{props.children}</Btn>
    )
}

export default Button;