import React, { useState } from "react";
import HeaderDiv from "./HeaderDiv";
import { Typography } from "@material-ui/core";
import HeaderTabs from "./HeaderTabs";

export default function Collection() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <HeaderDiv renderBottom={<HeaderTabs items={["Start", "Items", "Display order"]} onChange={setTab} value={tab} />}>
        <Typography variant="caption">Clients / [Client Name]</Typography>
        <Typography variant="h5">[Collection Name]</Typography>
      </HeaderDiv>
    </div>
  );
}
