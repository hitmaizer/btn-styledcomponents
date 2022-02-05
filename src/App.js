import React from "react"
import { ThemeProvider } from "styled-components"
import Button from "./components/Button"
import Theme from "./theme/theme"
import "./scss/styles.css"

export default function App(props){
    
    return (
        <div className="page__wrapper">
            <ThemeProvider theme={Theme}>
                <Button>Default</Button>    
            </ThemeProvider>
        </div>
    )
}