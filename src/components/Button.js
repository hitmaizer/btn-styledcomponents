import React from 'react';
import Btn from "../elements/ButtonStyled"


const Button = (props) => {

    return (
        <Btn primary lg>{props.children}</Btn>
    )
}

export default Button;