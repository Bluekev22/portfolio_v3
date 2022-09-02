import React, { useRef, useState } from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gsap } from "gsap"
import {
  FaAddressCard,
  FaProjectDiagram,
  FaBrain,
  FaEnvelope,
} from "react-icons/fa"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    padding: "10px",
    backgroundColor: "white",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  linkContainer: {
    position: "relative",
    height: "25px",
  },
  icon: {
    fontSize: "22px",
    color: "#00081a",
    cursor: "pointer",
    zIndex: "20",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  text: {
    fontSize: "20px",
    color: "#00081a",
    position: "absolute",
    textAlign: "center",
    opacity: 0,
    letterSpacing: "0.1em",
    transform: "translateY(20px)",
    fontWeight: "bold",
    
  },
  indicator: {
    position: "absolute",
    width: "55px",
    height: "55px",
    borderRadius: "100%",
    backgroundColor: "#00b2f0",
    zIndex: 10,
    opacity: 0,
    border: "3px solid white",
  },
}))

const MobileNavbar = () => {
  const classes = useStyles()

  const [active, setActive] = useState({
    activeSection: null,
    previousActiveSection: null,
    sections: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  })

  const handleClick = (num) => {
    if (active && active.activeSection && active.activeSection.id === num + 1) {
      return null
    } else if (active && active.activeSection) {
      setActive({
        ...active,
        previousActiveSection: active.activeSection,
        activeSection: active.sections[num],
      })
    } else {
      setActive({ ...active, activeSection: active.sections[num] })
    }
  }

  const iconsRef = useRef([])
  let icon1 = iconsRef.current[0]
  let icon2 = iconsRef.current[1]
  let icon3 = iconsRef.current[2]
  let icon4 = iconsRef.current[3]
  const textsRef = useRef([])
  let text1 = textsRef.current[0]
  let text2 = textsRef.current[1]
  let text3 = textsRef.current[2]
  let text4 = textsRef.current[3]
  const indicatorsRef = useRef([])
  let indicator1 = indicatorsRef.current[0]
  let indicator2 = indicatorsRef.current[1]
  let indicator3 = indicatorsRef.current[2]
  let indicator4 = indicatorsRef.current[3]

  let master = gsap.timeline({
    repeat: 0,
    paused: true,
  })

  const animate = (icon, text, indicator) => {
    let tl = gsap
      .timeline()
      .to(icon, {
        transform: "translateY(-35px)",
      })
      .to(
        text,
        {
          autoAlpha: 1,
          transform: "translateY(0px)",
        },
        "-=0.5"
      )
      .to(
        indicator,
        {
          autoAlpha: 1,
          transform: "translateY(-35px)",
        },
        "-=0.5"
      )
  }

  const animateReverse = (icon, text, indicator) => {
    let tl = gsap
      .timeline()
      .to(icon, {
        transform: "translateY(0px)",
      })
      .to(
        text,
        {
          autoAlpha: 0,
          transform: "translateY(20px)",
        },
        "-=0.5"
      )
      .to(
        indicator,
        {
          transform: "translateY(0px)",
          autoAlpha: 0,
        },
        "-=0.5"
      )
  }

  switch (active && active.activeSection && active.activeSection.id) {
    case 1:
      master.add(animate(icon1, text1, indicator1)).play()
      break
    case 2:
      master.add(animate(icon2, text2, indicator2)).play()
      break
    case 3:
      master.add(animate(icon3, text3, indicator3)).play()
      break
    case 4:
      master.add(animate(icon4, text4, indicator4)).play()
      break
  }

  switch (active && active.previousActiveSection && active.previousActiveSection.id) {
    case 1:
      master.add(animateReverse(icon1, text1, indicator1)).play()
      break
    case 2:
      master.add(animateReverse(icon2, text2, indicator2)).play()
      break
    case 3:
      master.add(animateReverse(icon3, text3, indicator3)).play()
      break
    case 4:
      master.add(animateReverse(icon4, text4, indicator4)).play()
      break
  }

  return (
    <Grid
      container
      item
      className={classes.root}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sm={2}
        xs={2}
        className={classes.linkContainer}
      >
        <div
          className={classes.icon}
          ref={(element) => {
            iconsRef.current[0] = element
          }}
          onClick={() => handleClick(0)}
        >
          <FaProjectDiagram />
        </div>
        <div
          className={classes.text}
          ref={(element) => {
            textsRef.current[0] = element
          }}
        >
          Projects
        </div>
        <div
          className={classes.indicator}
          ref={(element) => {
            indicatorsRef.current[0] = element
          }}
        ></div>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sm={2}
        xs={2}
        className={classes.linkContainer}
      >
        <div
          className={classes.icon}
          ref={(element) => {
            iconsRef.current[1] = element
          }}
          onClick={() => handleClick(1)}
        >
          <FaBrain />
        </div>
        <div
          className={classes.text}
          ref={(element) => {
            textsRef.current[1] = element
          }}
        >
          {" "}
          Skills
        </div>
        <div
          className={classes.indicator}
          ref={(element) => {
            indicatorsRef.current[1] = element
          }}
        ></div>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sm={2}
        xs={2}
        className={classes.linkContainer}
      >
        <div
          className={classes.icon}
          ref={(element) => {
            iconsRef.current[2] = element
          }}
          onClick={() => handleClick(2)}
        >
          <FaAddressCard />
        </div>
        <div
          className={classes.text}
          ref={(element) => {
            textsRef.current[2] = element
          }}
        >
          About
        </div>
        <div
          className={classes.indicator}
          ref={(element) => {
            indicatorsRef.current[2] = element
          }}
        ></div>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sm={2}
        xs={2}
        className={classes.linkContainer}
      >
        <div
          className={classes.icon}
          ref={(element) => {
            iconsRef.current[3] = element
          }}
          onClick={() => handleClick(3)}
        >
          <FaEnvelope />
        </div>
        <div
          className={classes.text}
          ref={(element) => {
            textsRef.current[3] = element
          }}
        >
          Contact
        </div>
        <div
          className={classes.indicator}
          ref={(element) => {
            indicatorsRef.current[3] = element
          }}
        ></div>
      </Grid>
    </Grid>
  )
}

export default MobileNavbar
