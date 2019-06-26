import React, { useState } from "react";
import HeaderDiv from "../components/HeaderDiv";
import Tabs from "../components/HeaderTabs";
import MultiLineHeadLine from "../components/MultiLineHeadLine";
import { Typography, TextField, Checkbox } from "@material-ui/core";
import PlayerTable from "../components/Tables/PlayerTable";
import Footer from "../components/Footer";

const styles = {
  display: "grid",
  gridTemplateColumns: "200px 1fr",
  maxWidth: "500px",
  alignItems: "center",
  gridGap: "10px"
};

export default function Provider() {
  const [tab, setTab] = useState(0);
  const [provider, setProvider] = useState({ name: "", id: 0, active: true });

  function handleChange(e) {
    setProvider({ ...provider, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <HeaderDiv renderBottom={<Tabs value={tab} onChange={setTab} items={["Details", "Availability"]} />}>
        <MultiLineHeadLine primary="Content providers" secondary="Edit content provider" />
      </HeaderDiv>
      <div className="indent">
        {tab === 0 && (
          <div style={styles}>
            <Typography variant="caption">Name</Typography>
            <TextField value={Provider.name} disableUnderline name="name" onChange={handleChange} />
            <Typography variant="caption">Active</Typography>
            <Checkbox checked={provider.active} onChange={handleChange} name="active" style={{ justifySelf: "baseline" }} />
          </div>
        )}
        {tab === 1 ? (
          <div>
            <PlayerTable />{" "}
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
}
