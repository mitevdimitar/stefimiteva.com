import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import cover from "../img/Cover.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100vh",
    backgroundImage: `url(${cover})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  siteHeader: {
    color: "white",
    fontSize: "80px",
    position: "absolute",
    top: "100px",
    right: "100px",
  },
}));

function WelcomePage() {
  const classes = useStyles();
  return (
    <Grid className={classes.mainContainer}>
      <Grid
        container
        alignItems="flex-end"
        direction="column"
        className={classes.siteHeader}
      >
        <Grid>Приказките на</Grid>
        <Grid>Стефи</Grid>
      </Grid>
    </Grid>
  );
}

export default WelcomePage;
