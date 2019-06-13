import React from "react";
import HeaderDiv from "../components/HeaderDiv";
import { Typography } from "@material-ui/core";
import ClientTable from "../components/Tables/ClientTable";

export default function Home() {
  return (
    <div>
      <HeaderDiv>
        <Typography variant="h5">Clients</Typography>
      </HeaderDiv>
      <ClientTable />
    </div>
  );
}
