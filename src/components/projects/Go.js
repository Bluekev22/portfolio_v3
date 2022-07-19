import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  anchor: {
    textDecoration: "none",
  },
  go: {
    fontSize: "6vw",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}))

const Project = (props) => {
  const classes = useStyles()
  return (
    <Grid item>
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className={classes.anchor}
      >
        <h5 className={classes.go} style={{ color: props.goColor }}>
          GO
        </h5>
      </a>
    </Grid>
  )
}

export default Project
