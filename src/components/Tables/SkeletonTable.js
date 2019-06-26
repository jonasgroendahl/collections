import React from "react";
import { withStyles } from "@material-ui/styles";
import { LinearProgress } from "@material-ui/core";

const styles = {
  wrapper: {
    minHeight: 60,
    width: "100%",
    padding: 10,
    display: "flex"
  },
  entry: {
    borderRadius: "4px",
    background: "#eee",
    minWidth: 100,
    minHeight: 50,
    marginRight: 10
  }
};

// minHeight to avoid jank effect when showing/hiding scrollbar
function SkeletonTable({ classes }) {
  return (
    <div style={{ minHeight: "100vh", marginTop: 20 }}>
      <LinearProgress />
    </div>
  );
}

export default withStyles(styles)(SkeletonTable);
