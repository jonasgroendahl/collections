import React, { useState, useEffect } from "react";
import { Table, FormControlLabel, Checkbox, InputAdornment, TextField, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { Search, ChevronRight, CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import TableStyles from "../../styles/TableStyles";
import { Link } from "react-router-dom";
import SkeletonTable from "./SkeletonTable";
import { clients } from "../../utils/vars";

const styles = theme => ({
  container: {
    display: "flex"
  },
  filters: {
    display: "flex",
    marginLeft: "auto",
    alignItems: "center",
    "& > *": {
      marginLeft: 15
    }
  },
  ...TableStyles(theme)
});

function ClientTable({ classes }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const newData = clients.map(el => ({ ...el, selected: false, selectedWeb: false, selectedVirtual: false }));
    setData(newData);
    setLoading(false);
  }, []);

  function handleBulkSelect(e) {
    const newData = data.map(el => ({ ...el, selected: e.target.checked }));
    setData(newData);
  }

  function handleSelect(e, provider) {
    const index = data.findIndex(prov => prov.id === provider.id);
    const newData = [...data];
    newData[index][e.target.name] = e.target.checked;
    setData(newData);
  }

  return (
    <div className="indent">
      <div className={classes.container}>
        <FormControlLabel control={<Checkbox color="primary" onChange={handleBulkSelect} />} label="Select items" />
        <div className={classes.filters}>
          <TextField
            variant="outlined"
            color="primary"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            autoFocus
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search color="primary" />
                </InputAdornment>
              )
            }}
          />
        </div>
      </div>
      {loading ? (
        <SkeletonTable />
      ) : (
        <Table className={classes.TableStyles}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell>Web</TableCell>
              <TableCell>Virtual</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
              .map((el, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox checked={el.selected} color="primary" name="selected" onChange={e => handleSelect(e, el)} />
                  </TableCell>
                  <TableCell>{el.name}</TableCell>
                  <TableCell>
                    <Checkbox checked={el.selectedWeb} name="selectedWeb" onChange={e => handleSelect(e, el)} />
                  </TableCell>
                  <TableCell>
                    <CheckBox checked={el.selectedVirtual} name="selectedVirtual" onChange={e => handleSelect(e, el)} />
                  </TableCell>
                  <TableCell />
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default withStyles(styles)(ClientTable);
