import React, { useState, useEffect } from "react";
import { Table, FormControlLabel, Checkbox, InputAdornment, TextField, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { Search, ChevronRight, CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import TableStyles from "../../styles/TableStyles";
import { Link } from "react-router-dom";
import SkeletonTable from "./SkeletonTable";
import { providersRaw } from "../../utils/vars";

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

function ProviderTable({ classes }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setData(providersRaw);
    setLoading(false);
  }, []);

  function handleBulkSelect(e) {
    const newData = data.map(el => ({ ...el, selected: e.target.checked }));
    setData(newData);
  }

  function handleSelect(e, provider) {
    const index = data.findIndex(prov => prov.id === provider.id);
    const newData = [...data];
    newData[index].selected = e.target.checked;
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
              <TableCell>Titles</TableCell>
              <TableCell>Active</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter(provider => provider.name.toLowerCase().includes(search.toLowerCase()))
              .map((provider, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox checked={provider.selected} color="primary" name="selected" onChange={e => handleSelect(e, provider)} />
                  </TableCell>
                  <TableCell>{provider.name}</TableCell>
                  <TableCell>{provider.titles}</TableCell>
                  <TableCell>{provider.active ? <CheckBox /> : <CheckBoxOutlineBlank />}</TableCell>
                  <TableCell>
                    <Link to={`/providers/${provider.id}`}>
                      <ChevronRight color="primary" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default withStyles(styles)(ProviderTable);
