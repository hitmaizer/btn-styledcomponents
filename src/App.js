import React from "react"
import { ThemeProvider } from "styled-components"
import Button from "./components/Button.styled"
import Theme from "./theme/theme"

export default function App(props){
    
    return (
        <ThemeProvider theme={Theme}>
            <Button lg={(props) => props.theme.sizes.lg}>click me!</Button>    
        </ThemeProvider>
    )
}