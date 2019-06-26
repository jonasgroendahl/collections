import React from "react";
import { AppBar, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

function Footer({ history }) {
  return (
    <AppBar position="fixed" style={{ top: "auto", bottom: 0 }} color="default">
      <div className="indent" style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Button onClick={() => history.goBack()}>Back to list</Button>
      </div>
    </AppBar>
  );
}

export default withRouter(Footer);
