import "./App.css"
import { useRef } from "react"
import { Grid } from "@material-ui/core"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Home from "./components/home/Home"
import ScrollTriggerProxy from "./components/ScrollTriggerProxy"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"

gsap.registerPlugin(ScrollTrigger, TextPlugin)

function App() {

  const containerRef = useRef(null)

  return (
<LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
      smartphone:{
        smooth:true,
      },
      tablet:{
        smooth:true,
      }
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
>
<ScrollTriggerProxy />
      <div className="App" data-scroll-container ref={containerRef}>
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
      </LocomotiveScrollProvider>
  )
}

export default App
