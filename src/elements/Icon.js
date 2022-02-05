import React from 'react';
import { LocalGroceryStore } from '@styled-icons/material';

export default function Icon(props) { 
    return (
        (props) => props.icon && <LocalGroceryStore size="24px" color="#fff" className="btn__icon"/>
    )
}