import React, { useState } from "react";
import HeaderDiv from "../components/HeaderDiv";
import { Typography } from "@material-ui/core";
import HeaderTabs from "../components/HeaderTabs";

export default function Client() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <HeaderDiv renderBottom={<HeaderTabs items={["Titles", "Collections", "Players"]} onChange={setTab} value={tab} />}>
        <Typography variant="caption">Clients</Typography>
        <Typography variant="h5">Client name</Typography>
      </HeaderDiv>
    </div>
  );
}
