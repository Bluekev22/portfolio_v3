import React from 'react'
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    about: {
        background: "linear-gradient(90deg, #0048f0 0,#00b2f0 100%)",
        minHeight: "1080px",
        color: "white",
        position: "relative",
        "&::before": {
          position: "absolute",
          bottom: "-5vw",
          left: "0",
          height: "90%",
          width: "100%",
          content: "''",
          backgroundImage: "linear-gradient(90deg, #0048f0 0%, #00b2f0 100%)",
          transform: "skewY(-10deg)",
          zIndex: 1,
        },
        "&::after": {
          position: "absolute",
          bottom: "90%",
          left: "0",
          height: "90%",
          width: "100%",
          content: "''",
          background: "#01020f",
          transform: "skewY(5deg)",
        
        },
      },
    aboutContainer: {
        marginTop: "35vh",
        zIndex: 1 ,
        fontSize: '35px'
    },
header: {
    fontSize: "6vw",
      color: "white",
},
description:{margin: "15vh 10vw 10vh 10vw",},
  }))

const About = () => {
    const classes = useStyles()
  return (
    <Grid
            container
            item
            className={classes.about}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          ><Grid
          container
          item
          className={classes.aboutContainer}
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
            <Grid item> <h1 className={classes.header}>About</h1></Grid>
            <Grid item className={classes.description}><p>Hi! I'm <strong>Kevin Shank</strong>.
            I'm a Web Developer currently based in Dearborn, MI.
            I recently completed a boot camp course through Michigan State University.
I certainly enjoy the design aspect of front-end UX/UI development and the creativity it allows me to have.
At the end of the day, I'm just a creative guy who loves to solve problems, no matter what they may be.
I enjoy biking, playing the piano, grilling, and long walks on the beach.</p>
</Grid>         
        </Grid>
        </Grid>
  )
}

export default About