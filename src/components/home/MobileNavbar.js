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
    height: "100px",
  },
  icon: {
    fontSize: "20px",
    color: "#00081a",
    cursor: "pointer",
    zIndex: "20",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  text: {
    fontSize: "20px",
    color: "blue",
    position: "absolute",
    textAlign: "center",
    opacity: 1,
    letterSpacing: "0.1em",
    transform: "translateY(20px)",
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
    console.log(num, active.activeSection, active.previousActiveSection)
    if (active?.activeSection?.id === num + 1) {
      return null
    } else if (active?.activeSection) {
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
  const textsRef = useRef([])

  let master = gsap.timeline({
    repeat: 0,
    paused: true,
  })

  const animate = (icon, text) => {
    let tl = gsap
      .timeline()
      .to(icon, {
        transform: "translateY(-35px)",
        color: "#0091ff",
      })
      .to(
        text,
        {
          autoAlpha: 1,
          transform: "translateY(0px)",
        },
        "-=0.5"
      )
  }

  const animateReverse = (icon, text) => {
    let tl = gsap
      .timeline()
      .to(icon, {
        transform: "translateY(0px)",
        color: "#00081a",
      })
      .to(
        text,
        {
          autoAlpha: 0,
          transform: "translateY(20px)",
        },
        "-=0.5"
      )
  }

  switch (active?.activeSection?.id) {
    case 1:
      master.add(animate(iconsRef.current[0], textsRef.current[0])).play()
      break
    case 2:
      master.add(animate(iconsRef.current[1], textsRef.current[1])).play()
      break
    case 3:
      master.add(animate(iconsRef.current[2], textsRef.current[2])).play()
      break
    case 4:
      master.add(animate(iconsRef.current[3], textsRef.current[3])).play()
      break
  }

  switch (active?.previousActiveSection?.id) {
    case 1:
      master
        .add(animateReverse(iconsRef.current[0], textsRef.current[0]))
        .play()
      break
    case 2:
      master
        .add(animateReverse(iconsRef.current[1], textsRef.current[1]))
        .play()
      break
    case 3:
      master
        .add(animateReverse(iconsRef.current[2], textsRef.current[2]))
        .play()
      break
    case 4:
      master
        .add(animateReverse(iconsRef.current[3], textsRef.current[3]))
        .play()
      break
  }

  /*  active.projects
    ? master.add(animate(iconsRef.current[0], textsRef.current[0])).play()
    : master
        .add(animateReverse(iconsRef.current[0], textsRef.current[0]))
        .play()

  active.skills
    ? master.add(animate(iconsRef.current[1], textsRef.current[1])).play()
    : master
        .add(animateReverse(iconsRef.current[1], textsRef.current[1]))
        .play()

  active.about
    ? master.add(animate(iconsRef.current[2], textsRef.current[2])).play()
    : master
        .add(animateReverse(iconsRef.current[2], textsRef.current[2]))
        .play()

  active.contact
    ? master.add(animate(iconsRef.current[3], textsRef.current[3])).play()
    : master
        .add(animateReverse(iconsRef.current[3], textsRef.current[3]))
        .play()
 */
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
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sm={2}
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
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sm={2}
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
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sm={2}
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
      </Grid>
    </Grid>
  )
}

export default MobileNavbar
