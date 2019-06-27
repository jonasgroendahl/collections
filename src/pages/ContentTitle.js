import React, { useState, useEffect } from "react";
import HeaderDiv from "../components/HeaderDiv";
import MultiLineHeadLine from "../components/MultiLineHeadLine";
import HeaderTabs from "../components/HeaderTabs";
import DetailTab from "../components/ContentTitle/DetailTab";
import { titles } from "../utils/vars";
import AvailabilityTab from "../components/ContentTitle/AvailabilityTab";
import { Button } from "@material-ui/core";
import Footer from "../components/Footer";

export default function ContentTitle({ match }) {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    active: false,
    providerName: "",
    providerId: 0,
    instructor: "",
    category: "",
    equipment: []
  });

  useEffect(() => {
    setData(titles[match.params.id]);
  }, []);

  function handleChange(e) {
    let value;

    switch (e.target.type) {
      case "checkbox":
        value = e.target.checked;
        break;
      case "text":
        value = e.target.value;
        break;
      case undefined /* multi select MUI */:
        value = e.target.value;
        break;
      default:
        return new Error("Invalid type");
    }
    setData({ ...data, [e.target.name]: value });
  }

  return (
    <div>
      <HeaderDiv renderBottom={<HeaderTabs value={tab} onChange={setTab} items={["Details", "Availability"]} />}>
        <MultiLineHeadLine primary="Content titles" secondary={data.name} />
      </HeaderDiv>
      <div className="indent">
        {tab === 0 && <DetailTab onChange={handleChange} {...data} />}
        {tab === 1 && <AvailabilityTab />}
      </div>
      <Footer>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Footer>
    </div>
  );
}
