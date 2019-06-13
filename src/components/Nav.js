import React from "react";
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";
import logo from "../assets/wexer-white.svg";
import { Link } from "react-router-dom";

const styles = theme => ({
  logoDiv: {
    display: "flex",
    alignItems: "center",
    "& img": {
      marginLeft: 5
    },
    "& p": {
      fontSize: "1.35rem",
      color: theme.palette.primary.light,
      fontWeight: 600
    }
  },
  toolbar: {
    paddingLeft: 40,
    paddingRight: 40
  }
});

function Nav({ classes }) {
  return (
    <AppBar color="secondary">
      <Toolbar className={classes.toolbar}>
        <Link className={classes.logoDiv} to="/">
          <Typography>MY</Typography>
          <img src={logo} height={18} alt="" />
        </Link>
        <div style={{ flexGrow: 1 }} />
        <Typography style={{ color: "#fff" }}>MASTER</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Nav);
