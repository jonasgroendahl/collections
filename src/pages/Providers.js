import React from "react";
import HeaderDiv from "../components/HeaderDiv";
import { Typography } from "@material-ui/core";
import ProviderTable from "../components/Tables/ProviderTable";

export default function Providers() {
  return (
    <div>
      <HeaderDiv>
        <Typography variant="h5">Content providers</Typography>
      </HeaderDiv>
      <ProviderTable />
    </div>
  );
}
