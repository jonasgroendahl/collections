import React, { useState, useContext } from "react";
import HeaderDiv from "../components/HeaderDiv";
import HeaderTabs from "../components/HeaderTabs";
import CollectionTable from "../components/Tables/CollectionTable";
import MultiLineHeadLine from "../components/MultiLineHeadLine";
import Context from "../utils/Context";
import CollectionPlayersTab from "../components/CollectionPlayersTab";

export default function Client() {
  const [tab, setTab] = useState(0);
  const { selectedClient } = useContext(Context);

  return (
    <div>
      <HeaderDiv renderBottom={<HeaderTabs items={["Titles", "Collections", "Players"]} onChange={setTab} value={tab} />}>
        <MultiLineHeadLine primary="Clients" secondary={selectedClient.name} />
      </HeaderDiv>
      {tab === 1 && <CollectionTable />}
      {tab === 2 && <CollectionPlayersTab />}
    </div>
  );
}
