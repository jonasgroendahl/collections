import React from "react";
import { Typography, TextField, Checkbox, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
  formGrid: {
    display: "grid",
    gridTemplateColumns: "200px 1fr",
    maxWidth: "500px",
    alignItems: "center",
    gridGap: "10px"
  }
};

function CollectionDetailTab(props) {
  console.log(props);
  const { classes, name, type, playerType, description, active, onChange, start, end } = props;
  return (
    <div>
      <div className={classes.formGrid}>
        <Typography variant="caption">Name</Typography>
        <TextField placeholder="Featured" value={name} name="name" onChange={onChange} />
        <Typography variant="caption" name="active">
          Active
        </Typography>
        <Checkbox checked={active} style={{ justifySelf: "flex-start" }} />
        <Typography variant="caption">Type</Typography>
        <Select native value={type} className="Select border" disableUnderline name="type" onChange={onChange}>
          <option value="featured">Featured</option>
          <option value="campaign">Campaign</option>
          <option value="automated">Automated</option>
        </Select>
        <Typography variant="caption">Player type</Typography>
        <Select native value={playerType} className="Select border" disableUnderline name="playerType" onChange={onChange}>
          <option value="bike">Bike</option>
          <option value="gx">GX</option>
        </Select>
        <Typography variant="caption">Publish start</Typography>
        <TextField type="date" name="start" onChange={onChange} value={start} />
        <Typography variant="caption">Publish end</Typography>
        <TextField type="date" name="end" onChange={onChange} value={end} />
        <Typography variant="caption" style={{ alignSelf: "flex-start" }}>
          Description
        </Typography>
        <TextField multiline value={description} rows="5" name="description" onChange={onChange} />
      </div>
    </div>
  );
}

export default withStyles(styles)(CollectionDetailTab);
