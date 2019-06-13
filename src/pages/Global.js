import React from "react";
import HeaderDiv from "../components/HeaderDiv";
import { Typography } from "@material-ui/core";
import CollectionTable from "../components/Tables/CollectionTable";

export default function Global() {
  return (
    <div>
      <HeaderDiv>
        <Typography variant="h5">Global collections</Typography>
      </HeaderDiv>
      <CollectionTable />
    </div>
  );
}
