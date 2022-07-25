import { useRef, useEffect } from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5"
import { DiHtml5, DiReact, DiNodejsSmall } from "react-icons/di"
import {
  SiMaterialui,
  SiMysql,
  SiMongodb,
  SiRedux,
  SiGraphql,
  SiGreensock,
} from "react-icons/si"
import { FaNode } from "react-icons/fa"

const useStyles = makeStyles(() => ({
    skills: {
      background: "#01020f",
      minHeight: "1280px",
      position: "relative",
      "&::before": {
        position: "absolute",
        bottom: "100px",
        left: "0",
        height: "90%",
        width: "100%",
        content: "''",
        background: "#01020f",
        transform: "skewY(-10deg)",
        zIndex: 0,
      },
      "&::after": {
        position: "absolute",
        bottom: "90%",
        left: "0",
        height: "90%",
        width: "100%",
        content: "''",
        background: "#e0e1e6",
        transform: "skewY(5deg)",
        zIndex: 0,
      },
    },
    skillsContainer: { marginTop: "40vh", zIndex: 3 },
    header: {
      fontSize: "6vw",
      color: "white",
      marginBottom: "5vh",
    },
    skillContainer: {
      borderRadius: "40px",
      width: "calc(50px + 10vw)",
      background: "white",
      margin: "2.5vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        background:
          "linear-gradient(90deg, #ff7842, #f79022, #e5a800, #cabf00, #a4d500, #81de44)",
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        textShadow:
          "-1px 1px #ff7842, -2px 2px #f79022,-3px 3px #e5a800,-4px 4px #cabf00, -5px 5px #a4d500,-6px 6px #81de44,-7px 7px #58e56d,-8px 8px #00ea93,-9px 9px #00e1c0,-10px 10px #00d4e1,-11px 11px #00c4f2,-12px 12px #00b2f0",
      },
    },
    skill: {
      borderRadius: "40px",
      padding: "10px",
      textAlign: "center",
      fontSize: "1.75vw",
      background: "linear-gradient(90deg, black, black)",
      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
      "&:hover": {
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
      },
    },
    skillIcon: { color: "#00d4e1", fontSize: "1.667vw" },
  }))

const Skills = () => {
    const classes = useStyles()
    let skillRef1 = useRef([]);
    let skillRef2 = useRef([]);
    let skillRef3 = useRef([]);
    let skillRef4 = useRef([]);

    useEffect(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillRef1.current,
          start: "top 85%",
          end: 'top 10%',
          markers: "true",
          onToggle:(self)=>{
            if(self.isActive){
              gsap.fromTo(skillRef1.current, {x:-600, autoAlpha:0},{x:0, autoAlpha:1, stagger: 0.1,})
            } else {
              gsap.to(skillRef1.current, {x:-600, autoAlpha:0, stagger: 0.1,},)
            }
          }
        },
        
      })
     .fromTo(skillRef1.current, {x:-600, autoAlpha:0},{x:0, autoAlpha:1, stagger: 0.1,})
    }, [])

    useEffect(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillRef2.current,
          start: "top 85%",
          end: 'top 10%',
          markers: "true",
          onToggle:(self)=>{
            if(self.isActive){
              gsap.fromTo(skillRef2.current, {x:-600, autoAlpha:0},{x:0, autoAlpha:1, stagger: 0.1,})
            } else {
              gsap.to(skillRef2.current, {x:-600, autoAlpha:0, stagger: 0.1,},)
            }
          }
        },
        
      })
     .fromTo(skillRef2.current, {x:-600, autoAlpha:0},{x:0, autoAlpha:1, stagger: 0.1,})
    }, [])

    useEffect(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillRef3.current,
          start: "top 85%",
          end: 'top 10%',
          markers: "true",
          onToggle:(self)=>{
            if(self.isActive){
              gsap.fromTo(skillRef3.current, {x:-600, autoAlpha:0},{x:0, autoAlpha:1, stagger: 0.1,})
            } else {
              gsap.to(skillRef3.current, {x:-600, autoAlpha:0, stagger: 0.1,},)
            }
          }
        },
        
      })
     .fromTo(skillRef3.current, {x:-600, autoAlpha:0},{x:0, autoAlpha:1, stagger: 0.1,})
    }, [])

    useEffect(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillRef4.current,
          start: "top 85%",
          end: 'top 10%',
          markers: "true",
          onToggle:(self)=>{
            if(self.isActive){
              gsap.fromTo(skillRef4.current, {x:-600, autoAlpha:0},{x:0, autoAlpha:1, stagger: 0.1,})
            } else {
              gsap.to(skillRef4.current, {x:-600, autoAlpha:0, stagger: 0.1,},)
            }
          }
        },
        
      })
     .fromTo(skillRef4.current, {x:-600, autoAlpha:0},{x:0, autoAlpha:1, stagger: 0.1,})
    }, [])
  

  return (
    <Grid
            container
            item
            className={classes.skills}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid
              container
              item
              className={classes.skillsContainer}
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.header}>Skills</h1>
              <Grid
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item ref={element => {skillRef1.current[0] = element}}>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>JavaScript</h1>
                    <IoLogoJavascript className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item ref={element => {skillRef1.current[1] = element}}>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>CSS</h1>
                    <IoLogoCss3 className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item ref={element => {skillRef1.current[2] = element}}>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>HTML</h1>
                    <DiHtml5 className={classes.skillIcon} />
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item ref={element => {skillRef2.current[0] = element}}>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>React</h1>
                    <DiReact className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item ref={element => {skillRef2.current[1] = element}}>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>Redux</h1>
                    <SiRedux className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item ref={element => {skillRef2.current[2] = element}}>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>Node.js</h1>
                    <FaNode className={classes.skillIcon} />
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item ref={element => {skillRef3.current[0] = element}}>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>Express.js</h1>
                    <DiNodejsSmall className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item ref={element => {skillRef3.current[1] = element}}>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>MySQL</h1>
                    <SiMysql className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item ref={element => {skillRef3.current[2] = element}}>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>GraphQL</h1>
                    <SiGraphql className={classes.skillIcon} />
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item ref={element => {skillRef4.current[0] = element}}>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>MongoDB</h1>
                    <SiMongodb className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item ref={element => {skillRef4.current[1] = element}}>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>MaterialUI</h1>
                    <SiMaterialui className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item ref={element => {skillRef4.current[2] = element}}>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>Greensock</h1>
                    <SiGreensock className={classes.skillIcon} />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
  )
}

export default Skills