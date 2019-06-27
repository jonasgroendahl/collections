import React from "react";
import HeaderDiv from "../components/HeaderDiv";
import { Typography } from "@material-ui/core";
import ContentTitlesTable from "../components/Tables/ContentTitlesTable";

export default function ContentTitles() {
  return (
    <div>
      <HeaderDiv>
        <Typography variant="h5">Content titles</Typography>
      </HeaderDiv>
      <ContentTitlesTable />
    </div>
  );
}
