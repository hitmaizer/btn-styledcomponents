import React from 'react';
import styled, { css } from 'styled-components';

const Btn = styled.button`
      padding: ${(props) => (props.lg ? props.theme.sizes.lg : props.theme.sizes.md)};
      background-color: ${(props) => props.theme.colors.primary};
      border: none;
      border-radius: 6px;
      color: #fff;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
          transform: translateY(-3%);
          background-color: teal;
      }
    `;

const Button = (props) => {

    return (
        <Btn>{props.children}</Btn>
    )
}

export default Button;