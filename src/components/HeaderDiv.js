import React, { useState } from "react";
import { Select, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  wrapper: {
    background: theme.palette.primary.main,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 30,
    minHeight: 120,
    marginBottom: 30
  },
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center"
  },
  jumpMenu: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    "& >*:first-child": {
      marginRight: 15
    }
  }
});

function HeaderDiv(props) {
  const { classes, children, renderBottom, history, location } = props;

  const [page, setPage] = useState(location.pathname);

  function handleChange(e) {
    const newPage = e.target.value;
    setPage(newPage);
    history.push(newPage);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div>{children}</div>
        <div className={classes.jumpMenu}>
          <Typography variant="caption">JUMP MENU</Typography>
          <Select className="Select" native disableUnderline onChange={handleChange} value={page}>
            <option value="/clients">Clients</option>
            <option value="/global">Global collections</option>
          </Select>
        </div>
      </div>
      {renderBottom}
    </div>
  );
}

export default withRouter(withStyles(styles)(HeaderDiv));
