import React from 'react';
import styled, { css } from 'styled-components';

const Btn = styled.button`
      border: none;
      border-radius: 6px;
      box-shadow: ${(props) => props.theme.dropShadow.dropShadow};
      font-family: ${(props) => props.theme.fonts.font};
      cursor: pointer;

      ${(props) => props.default && css `
        padding: 8px 16px;
        color: ${props.theme.colors.defaultText};
        &:hover, &:focus {
            background-color: ${props.theme.colors.defaultHover}
        }
      `}

      
    `;

const Button = (props) => {

    return (
        <Btn default>{props.children}</Btn>
    )
}

export default Button;