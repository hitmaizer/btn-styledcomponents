import React from 'react';
import styled, { css } from 'styled-components';

const Btn = styled.button`
      border: none;
      border-radius: 6px;
      box-shadow: ${(props) => props.theme.dropShadow.dropShadow};
      font-family: ${(props) => props.theme.fonts.font};
      cursor: pointer;
      padding: 8px 16px;

      ${(props) => props.default && css `
        color: ${props.theme.colors.defaultText};
        &:hover, &:focus {
            background-color: ${props.theme.colors.defaultHover}
        }
      `}
      
      ${(props) => props.primary && css `
        background-color: ${props.theme.colors.primary};
        color: #fff;
        &:hover, &:focus {
            background-color: ${props.theme.colors.primaryHover};
        }
      `}
      
      ${(props) => props.secondary && css `
        background-color: ${props.theme.colors.secondary};
        color: #fff;
        &:hover, &:focus {
            background-color: ${props.theme.colors.secondaryHover};
        }
      `}
      
      ${(props) => props.danger && css `
        background-color: ${props.theme.colors.danger};
        color: #fff;
        &:hover, &:focus {
            background-color: ${props.theme.colors.dangerHover};
        }
      `}


    `;

const Button = (props) => {

    return (
        <Btn danger>{props.children}</Btn>
    )
}

export default Button;