import React from "react";
import { Typography } from "@material-ui/core";

export default function MultiLineHeadLine({ primary, secondary }) {
  return (
    <div style={{ cursor: "default" }}>
      <Typography variant="caption">{primary}</Typography>
      <Typography variant="h5">{secondary}</Typography>
    </div>
  );
}
