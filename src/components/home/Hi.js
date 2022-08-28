import React from "react"
import { useRef, useEffect, useLayoutEffect } from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const useStyles = makeStyles(() => ({
  hiContainer: { position: "relative", marginTop: "10vh" },
  hi: {
    color: "white",
    fontSize: "8vw",
    textAlign: "center",
    marginTop: "8vh",
    letterSpacing: "5px",
    position: "relative",
    transform: "rotateX(-30deg) skew(40deg)",
    fontWeight: "bold",
    zIndex: "2",
  },
}))

const Hi = () => {
  gsap.registerPlugin(ScrollTrigger)
  const classes = useStyles()
  const hiRef = useRef()
  const shadowRef = useRef()

  //animation on load
  useEffect(() => {
    //hi
    gsap.fromTo(
      hiRef.current,
      {
        textShadow:
          "-1px 1px #ff7842, -2px 2px #ff7842,-3px 3px #ff7842,-4px 4px #f79022,-5px 5px #e79022,-6px 6px #e5a800,-7px 7px #e5a800,-8px 8px #cabf00,-9px 9px #cabf00,-10px 10px #cabf00,-11px 11px #a4d500,-12px 12px #a4d500,-13px 13px #81de44,-14px 14px #81de44,-15px 15px #81de44,-16px 16px #58e56d,-17px 17px #58e56d,-18px 18px #00ea93,-19px 19px #00ea93,-20px 20px #00ea93,-21px 21px #00e1c0,-22px 22px #00e1c0,-23px 23px #00d4e1,-24px 24px #00d4e1,-25px 25px #00d4e1,-26px 26px #00c4f2,-27px 27px #00c4f2,-28px 28px #00b2f0,-29px 29px #00b2f0,-30px 30px #00b2f0",
      },
      {
        rotation: "25",
        skewY: "-26",
        skewX: "25",
        duration: 2,
        ease: "power2.out",
        delay: 1.8,
        textShadow:
          "0px 0px #ff7842, 0px 0px #ff7842,0px 0px #ff7842,0px 0px #f79022,0px 0px #e79022,0px 0px #e5a800,0px 0px #e5a800,0px 0px #cabf00,0px 0px #cabf00,0px 0px #cabf00,0px 0px #a4d500,0px 0px #a4d500,0px 0px #81de44,0px 0px #81de44,0px 0px #81de44,0px 0px #58e56d,0px 0px #58e56d,0px 0px #00ea93,0px 0px #00ea93,0px 0px #00ea93,0px 0px #00e1c0,0px 0px #00e1c0,0px 0px #00d4e1,0px 0px #00d4e1,0px 0px #00d4e1,0px 0px #00c4f2,0px 0px #00c4f2,0px 0px #00b2f0,0px 0px #00b2f0,0px 0px #00b2f0",
      }
    )
    //shadow
    gsap.fromTo(
      shadowRef.current,
      {
        fontSize: "8vw",
        position: "absolute",
        letterSpacing: "5px",
        top: "12.2vw",
        left: "5.5vw",
        color: "transparent",
        transform: "rotateX(-30deg) skew(40deg)",
        textShadow:
          "-1px 1px #ff7842, -2px 2px #ff7842,-3px 3px #ff7842,-4px 4px #f79022,-5px 5px #e79022,-6px 6px #e5a800,-7px 7px #e5a800,-8px 8px #cabf00,-9px 9px #cabf00,-10px 10px #cabf00,-11px 11px #a4d500,-12px 12px #a4d500,-13px 13px #81de44,-14px 14px #81de44,-15px 15px #81de44,-16px 16px #58e56d,-17px 17px #58e56d,-18px 18px #00ea93,-19px 19px #00ea93,-20px 20px #00ea93,-21px 21px #00e1c0,-22px 22px #00e1c0,-23px 23px #00d4e1,-24px 24px #00d4e1,-25px 25px #00d4e1,-26px 26px #00c4f2,-27px 27px #00c4f2,-28px 28px #00b2f0,-29px 29px #00b2f0,-30px 30px 30px #00b2f0",
        filter: "blur(15px)",
        zIndex: "1",
      },
      {
        fontSize: "8vw",
        position: "absolute",
        top: "1.5vw",
        left: "16vw",
        rotation: "25",
        skewY: "-26",
        skewX: "25",
        color: "transparent",
        textShadow:
          "-30px 30px #ff7842, -30px 30px #ff7842,-30px 30px #ff7842,-30px 30px #f79022,-30px 30px #e79022,-30px 30px #e5a800,-30px 30px #e5a800,-30px 30px #cabf00,-30px 30px #cabf00,-30px 30px #cabf00,-30px 30px #a4d500,-30px 30px #a4d500,-30px 30px #81de44,-30px 30px #81de44,-30px 30px #81de44,-30px 30px #58e56d,-30px 30px #58e56d,-30px 30px #00ea93,-30px 30px #00ea93,-30px 30px #00ea93,-30px 30px  #00e1c0,-30px 30px #00e1c0,-30px 30px #00d4e1,-30px 30px #00d4e1,-30px 30px  #00d4e1,-30px 30px #00c4f2,-30px 30px #00c4f2,-30px 30px #00b2f0,-30px 30px #00b2f0,-30px 30px #00b2f0",
        filter: "blur(5px)",
        zIndex: "1",
        duration: 2,
        ease: "power2.out",
        delay: 1.8,
      }
    )
  }, [])

  //animation on scroll
  useLayoutEffect(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: hiRef.current,
          start: "top 30%",
          end: "bottom 20%",
          scrub: 1,
          immediateRender: false,
          markers: true,
        },
      })
      //hi
      .to(hiRef.current, {
        transform: "rotateX(-30deg) skew(40deg)",
        textShadow:
          "-1px 1px #ff7842, -2px 2px #ff7842,-3px 3px #ff7842,-4px 4px #f79022,-5px 5px #e79022,-6px 6px #e5a800,-7px 7px #e5a800,-8px 8px #cabf00,-9px 9px #cabf00,-10px 10px #cabf00,-11px 11px #a4d500,-12px 12px #a4d500,-13px 13px #81de44,-14px 14px #81de44,-15px 15px #81de44,-16px 16px #58e56d,-17px 17px #58e56d,-18px 18px #00ea93,-19px 19px #00ea93,-20px 20px #00ea93,-21px 21px #00e1c0,-22px 22px #00e1c0,-23px 23px #00d4e1,-24px 24px #00d4e1,-25px 25px #00d4e1,-26px 26px #00c4f2,-27px 27px #00c4f2,-28px 28px #00b2f0,-29px 29px #00b2f0,-30px 30px #00b2f0",
        color: "white",
      })
      //shadow
      .to(
        shadowRef.current,
        {
          transform: "rotateX(-30deg) skew(40deg)",
          textShadow:
            "-1px 1px #ff7842, -2px 2px #ff7842,-3px 3px #ff7842,-4px 4px #f79022,-5px 5px #e79022,-6px 6px #e5a800,-7px 7px #e5a800,-8px 8px #cabf00,-9px 9px #cabf00,-10px 10px #cabf00,-11px 11px #a4d500,-12px 12px #a4d500,-13px 13px #81de44,-14px 14px #81de44,-15px 15px #81de44,-16px 16px #58e56d,-17px 17px #58e56d,-18px 18px #00ea93,-19px 19px #00ea93,-20px 20px #00ea93,-21px 21px #00e1c0,-22px 22px #00e1c0,-23px 23px #00d4e1,-24px 24px #00d4e1,-25px 25px #00d4e1,-26px 26px #00c4f2,-27px 27px #00c4f2,-28px 28px #00b2f0,-29px 29px #00b2f0,-30px 30px 30px #00b2f0",
          filter: "blur(15px)",
          top: "10.2vw",
          left: "5.5vw",
        },
        0
      )
  }, [])

  return (
    <Grid
      container
      item
      direction="column"
      justifyContent="center"
      alignItems="center"
      xl={6}
      lg={6}
      md={6}
      sm={6}
      xs={6}
      className={classes.hiContainer}
    >
      <Grid item className={classes.hi} ref={hiRef} data-text="&#60;Hi /&#62;">
        <span>&#60;Hi /&#62;</span>
      </Grid>
      <span className={classes.hiShadow} ref={shadowRef}>
        {" "}
        &#60;Hi /&#62;
      </span>
    </Grid>
  )
}

export default Hi
