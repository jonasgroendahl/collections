import React from "react";
import { withStyles, Button } from "@material-ui/core";
import TabStyles from "../styles/TabStyles";
import PropTypes from "prop-types";

function HeaderTabs({ classes, value, onChange, items }) {
  return (
    <div className={classes.flex}>
      {items.map((option, index) => (
        <Button
          onClick={() => onChange(index)}
          fullWidth
          variant="contained"
          color="primary"
          className={value === index ? "selected" : ""}
          key={index}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

HeaderTabs.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withStyles(TabStyles)(HeaderTabs);
