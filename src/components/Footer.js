import React from "react";
import { AppBar, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

function Footer({ history, children }) {
  return (
    <AppBar position="fixed" style={{ top: "auto", bottom: 0 }} color="default">
      <div className="indent" style={{ paddingTop: 10, paddingBottom: 10, display: "flex" }}>
        <Button onClick={() => history.goBack()}>Back to list</Button>
        <div style={{ marginLeft: "auto" }}>{children}</div>
      </div>
    </AppBar>
  );
}

export default withRouter(Footer);
