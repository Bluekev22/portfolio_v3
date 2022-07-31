import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useLocomotiveScroll } from "react-locomotive-scroll";

const useStyles = makeStyles(() => ({
  linkContainer: { marginTop: "3vh" },
  link: {
    listStyle: "none",
    fontSize: "28px",
    marginRight: "3vw",
    position: "relative",
    transition: " 0.35s ease",
    color: "white",

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
      backgroundColor: "#0091ff",
      webkitTransform: "scaleX(0)",
      transform: "scaleX(0)",
      webkitTransformOrigin: "top left",
      transformOrigin: "top left",
      webkitTransition: "-webkit-transform 0.35s ease",
      transition: "transform 0.35s ease",
    },
    "&:hover": {
      color: "#0091ff",
      cursor: 'pointer',
      "&::before": {
        transform: "scale(1)",
        webkitTransform: "scale(1)",
      },
    },
  },
}))

const Navbar = () => {
  const classes = useStyles()

  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {

    scroll.scrollTo(id, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Grid
      container
      item
      className={classes.linkContainer}
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Grid item>
        <li className={classes.link} onClick={() => handleScroll('#projects')}>
          PROJECTS
        </li>
      </Grid>
      <Grid item>
        <li className={classes.link} onClick={() => handleScroll('#skills')}>
          SKILLS
        </li>
      </Grid>
      <Grid item>
        <li className={classes.link} onClick={() => handleScroll('#about')}>
          ABOUT
        </li>
      </Grid>
      <Grid item>
        <li className={classes.link} onClick={() => handleScroll('#contact')}>
          CONTACT
        </li>
      </Grid>
    </Grid>
  )
}

export default Navbar
