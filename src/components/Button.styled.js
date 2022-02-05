import React from 'react';
import styled, { css } from 'styled-components';

const Btn = styled.button`
      border: none;
      border-radius: 6px;
      box-shadow: ${(props) => props.theme.dropShadow.dropShadow};
      font-family: ${(props) => props.theme.fonts.font};
      cursor: pointer;
      

      ${(props) => props.default && css `
        color: ${props.theme.colors.defaultText};
        &:hover, &:focus {
            background-color: ${props.theme.colors.defaultHover}
        }
        
        ${(props) => props.disableShadow && css `
            box-shadow: none;
        `}

      `}
      
      ${(props) => props.primary && css `
        background-color: ${props.theme.colors.primary};
        color: #fff;
        &:hover, &:focus {
            background-color: ${props.theme.colors.primaryHover};
        }
        
        ${(props) => props.disableShadow && css `
            box-shadow: none;
        `}

      `}
      
      ${(props) => props.secondary && css `
        background-color: ${props.theme.colors.secondary};
        color: #fff;
        &:hover, &:focus {
            background-color: ${props.theme.colors.secondaryHover};
        }

        ${(props) => props.disableShadow && css `
            box-shadow: none;
        `}

      `}
      
      ${(props) => props.danger && css `
        background-color: ${props.theme.colors.danger};
        color: #fff;
        &:hover, &:focus {
            background-color: ${props.theme.colors.dangerHover};
        }

        ${(props) => props.disableShadow && css `
            box-shadow: none;
        `}

      `}
      
      ${(props) => props.disabled && css `
        background-color: ${props.theme.colors.disabled};
        color: ${props.theme.colors.disabledText};
      `}
      
      ${(props) => props.lg && css `
        padding: ${props.theme.sizes.lg}
      `}
      
      ${(props) => props.md && css `
        padding: ${props.theme.sizes.md}
      `}
      
      ${(props) => props.sm && css `
        padding: ${props.theme.sizes.sm}
      `}
      
      


    `;

const Button = (props) => {

    return (
        <Btn primary lg>{props.children}</Btn>
    )
}

export default Button;