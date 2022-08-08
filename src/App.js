import "./App.css"
import { Grid } from "@material-ui/core"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { MuiThemeProvider } from "@material-ui/core"
import { theme } from "./themes/theme"
import Home from "./components/home/Home"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"

gsap.registerPlugin(ScrollTrigger, TextPlugin)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Home />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

export default App
