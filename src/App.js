import "./App.css";
import { useRef, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./components/home/Navbar";
import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin, RoughEase);

const useStyles = makeStyles(() => ({
  home: {
    background: "#01020f",
    minHeight: "1080px",
    color: "white",
  },

  greetingContainer: {
    marginTop: "15vh",
  },
  name: {
    fontSize: "6vw",
    textAlign: "center",
    marginLeft: "10vw",
  },
  aboutContainer: {
    backgroundImage: "linear-gradient(90deg, #0048f0 0%, #00b2f0 100%)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    mozTextFillColor: "transparent",
  },
  about: {
    fontSize: "4vw",
    marginLeft: "10vw",
  },
  text: {
    fontSize: "4vw",
  },
  cursor: {
    fontSize: "4vw",
    marginLeft: ".5vw",
    backgroundImage: "linear-gradient(90deg, #00b2f0 0%,#00b2f0 100%)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    mozTextFillColor: "transparent",
  },
}));

function App() {
  const classes = useStyles();
  const cursorRef = useRef();
  const textRef = useRef();

  const words = ["Developer.", "Designer.", "Creator."];

  useEffect(() => {
    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      duration: 0.85,
    });
    let masterTl = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(textRef.current, { duration: 1.5, text: word });
      masterTl.add(tl);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            item
            className={classes.home}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Navbar />
            <Grid
              container
              item
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                xl={6}
                lg={6}
                md={6}
                sm={6}
                container
                item
                className={classes.greetingContainer}
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item className={classes.name}>
                  KEVIN
                </Grid>
                <Grid item className={classes.name}>
                  SHANK
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="baseline"
                  className={classes.aboutContainer}
                >
                  <Grid item className={classes.about}>
                    The &nbsp;
                  </Grid>
                  <Grid item className={classes.text}>
                    <p ref={textRef}></p>
                  </Grid>
                  <Grid item className={classes.cursor} ref={cursorRef}>
                    _
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xl={6} lg={6} md={6} sm={6}>
                hi
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </BrowserRouter>
  );
}

export default App;
