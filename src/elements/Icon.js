import React from 'react';
import { LocalGroceryStore } from '@styled-icons/material';

export default function Icon(props) { 
    
        if(props.start || props.end) {
            return <LocalGroceryStore size="24px" color="#fff" className="btn__icon"/>
        } else {
            return null
        }
    
}