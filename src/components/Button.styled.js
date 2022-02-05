import React from 'react';
import styled from 'styled-components';

export default function Button(props) {

    const Button = styled.button`
      padding: 1em 2em;
      background-color: red;
      border: none;
      border-radius: 12px;
      color: #fff;
    `;

    return (
        <Button>{props.children}</Button>
    )
}