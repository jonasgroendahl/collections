import React from "react";
import { Typography, TextField, Checkbox, Select, MenuItem } from "@material-ui/core";
import { providersRaw } from "../../utils/vars";

export default function ContentTitleDetailTab({ onChange, name, active, provider, category, equipment, instructor }) {
  return (
    <div>
      <div className="form-grid">
        <Typography variant="caption">Name</Typography>
        <TextField name="name" onChange={onChange} value={name} />
        <Typography variant="caption">Active</Typography>
        <Checkbox checked={active} onChange={onChange} name="active" />
        <Typography variant="caption">Provider</Typography>
        <Select className="Select" native onChange={onChange} value={provider} name="provider">
          {providersRaw.map(p => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </Select>
        <Typography variant="caption">Category</Typography>
        <Select className="Select" native onChange={onChange} value={category} name="category" />
        <Typography variant="caption">Equipment</Typography>
        <Select className="Select" onChange={onChange} multiple value={equipment} name="equipment">
          <MenuItem value="Barbells">Barbells</MenuItem>
          <MenuItem value="Test">Test</MenuItem>
          <MenuItem value="Test 2">Test 2</MenuItem>
        </Select>
        <Typography variant="caption">Instructor</Typography>
        <TextField name="instructor" value={instructor} onChange={onChange} />
      </div>
    </div>
  );
}
