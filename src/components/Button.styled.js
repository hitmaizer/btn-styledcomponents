import React from 'react';
import styled, { css } from 'styled-components';

const Btn = styled.button`
      // comum a todos
      border: none;
      border-radius: 6px;
      box-shadow: ${(props) => props.theme.dropShadow.dropShadow};
      font-family: ${(props) => props.theme.fonts.font};
      cursor: pointer;
      
      // default
      ${(props) => props.default && css `
        color: ${props.theme.colors.defaultText};
        &:hover, &:focus {
            background-color: ${props.theme.colors.defaultHover}
        }
        
        ${(props) => props.disableShadow && css `
            box-shadow: none;
        `}
        
        ${(props) => props.outline && css `
            background-color: transparent;
            border: 2px solid ${props.theme.colors.defaultText};
            color: ${props.theme.colors.defaultText};
        `}


      `}
      
      // primary
      ${(props) => props.primary && css `
        background-color: ${props.theme.colors.primary};
        color: #fff;
        &:hover, &:focus {
            background-color: ${props.theme.colors.primaryHover};
        }
        
        ${(props) => props.disableShadow && css `
            box-shadow: none;
        `}

        ${(props) => props.outline && css `
            background-color: transparent;
            border: 2px solid ${props.theme.colors.primary};
            color: ${props.theme.colors.primary};
            &:hover {
                background-color: ${props.theme.colors.outlinePrimaryHover};
            }
        `}


      `}
      
      //secondary
      ${(props) => props.secondary && css `
        background-color: ${props.theme.colors.secondary};
        color: #fff;
        &:hover, &:focus {
            background-color: ${props.theme.colors.secondaryHover};
        }

        ${(props) => props.disableShadow && css `
            box-shadow: none;
        `}

        ${(props) => props.outline && css `
            background-color: transparent;
            border: 2px solid ${props.theme.colors.secondary};
            color: ${props.theme.colors.secondary};
            &:hover {
                color: white;
                background-color: ${props.theme.colors.secondary};
            }
        `}

      `}
      
      //danger
      ${(props) => props.danger && css `
        background-color: ${props.theme.colors.danger};
        color: #fff;
        &:hover, &:focus {
            background-color: ${props.theme.colors.dangerHover};
        }

        ${(props) => props.disableShadow && css `
            box-shadow: none;
        `}

        ${(props) => props.outline && css `
            background-color: transparent;
            border: 2px solid ${props.theme.colors.danger};
            color: ${props.theme.colors.danger};
            &:hover {
                color: white;
                background-color: ${props.theme.colors.danger};
            }
        `}

      `}
      
      //disabled 
      ${(props) => props.disabled && css `
        background-color: ${props.theme.colors.disabled};
        color: ${props.theme.colors.disabledText};
      `}
      

      //size large
      ${(props) => props.lg && css `
        padding: ${props.theme.sizes.lg}
      `}
      
      //size medium
      ${(props) => props.md && css `
        padding: ${props.theme.sizes.md}
      `}
      
      //size small
      ${(props) => props.sm && css `
        padding: ${props.theme.sizes.sm}
      `}
      
      


    `;

const Button = (props) => {

    return (
        <Btn secondary lg outline>{props.children}</Btn>
    )
}

export default Button;