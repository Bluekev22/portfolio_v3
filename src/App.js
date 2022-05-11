import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  home: {
    background: "#01020f",
    minHeight: "1080px",
    color: "white",
  },
  linkContainer: { marginTop: "3vh" },
  link: {
    textDecoration: "none",
    fontSize: "28px",
    marginRight: "3vw",
    position: "relative",

    "&:active": {
      color: "white",
    },
    "&:visited": {
      color: "white",
    },

    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: "-8px",
      backgroundColor: "#124ef3",
      webkitTransform: "scaleX(0)",
      transform: "scaleX(0)",
      webkitTransformOrigin: "top left",
      transformOrigin: "top left",
      webkitTransition: "-webkit-transform 0.3s ease",
      transition: "-webkit-transform 0.3s ease",
      transition: "transform 0.3s ease",
      transition: "transform 0.3s ease, -webkit-transform 0.3s ease",
    },
    "&:hover": {
      color: "#124ef3",
      "&::before": {
        transform: "scale(1)",
        webkitTransform: "scale(1)",
      },
    },
  },

  greetingContainer: {
    background: "blue",
  },
  name: {
    fontSize: "100px",
    textAlign: "center",
  },
}));

function App() {
  const classes = useStyles();
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
            <Grid
              container
              item
              className={classes.linkContainer}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item>
                <Link className={classes.link} to="#projects">
                  PROJECTS
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link} to="#skills">
                  SKILLS
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link} to="#about">
                  ABOUT
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link} to="#footer">
                  CONTACT
                </Link>
              </Grid>
            </Grid>
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
                container
                item
                className={classes.greetingContainer}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item className={classes.name}>
                  KEVIN
                </Grid>
                <Grid item className={classes.name}>
                  SHANK
                </Grid>
                <Grid item>I'm a...</Grid>
              </Grid>

              <Grid item xl={6} lg={6}>
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
