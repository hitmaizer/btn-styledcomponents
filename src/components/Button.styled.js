import React from 'react';
import styled from 'styled-components';

export default function Button(props) {

    const Button = styled.button`
      padding: 1em 2em;
      background-color: ${props.primary ? "blue" : "red"};
      border: none;
      border-radius: 12px;
      color: #fff;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
          transform: translateY(-3%);
          background-color: teal;
      }

    `;

    return (
        <Button>{props.children}</Button>
    )
}