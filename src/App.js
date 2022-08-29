import "./App.css"
import React from "react"
import { MuiThemeProvider } from "@material-ui/core"
import { theme } from "./themes/theme"
import Container from "./Container"

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Container />
    </MuiThemeProvider>
  )
}

export default App
