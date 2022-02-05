import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import App from "./App"
import Theme from "./theme/theme"


ReactDOM.render(
<ThemeProvider theme={Theme}>
    <App />
</ThemeProvider>
, document.getElementById('root'))