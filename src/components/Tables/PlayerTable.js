import React, { useState, useEffect } from "react";
import { Table, InputAdornment, TextField, TableHead, TableRow, TableCell, TableBody, Typography, Checkbox } from "@material-ui/core";
import { Search, ChevronRight } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import TableStyles from "../../styles/TableStyles";
import { Link } from "react-router-dom";
import SkeletonTable from "./SkeletonTable";
import { players } from "../../utils/vars";

const styles = theme => ({
  container: {
    display: "flex"
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  filters: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& > *:not(:first-child)": {
      marginLeft: 15
    }
  },
  ...TableStyles(theme)
});

function PlayerTable({ classes }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(players);
    setLoading(false);
  }, []);

  function handleCheckboxChange(e, item) {
    console.log(e, item);
    const index = data.findIndex(player => player.id === item.id);
    const newData = [...data];
    newData[index][e.target.name] = e.target.checked;
    setData(newData);
  }

  function handleBulkChange(e) {
    const newData = data.map(el => ({ ...el, selected: e.target.checked }));
    setData(newData);
  }

  let renderBody = [];
  let selectedData = 0;

  if (data.length > 0) {
    data.forEach(col => {
      if (col.selected) {
        selectedData++;
      }
      renderBody.push(
        <TableRow key={col.id}>
          <TableCell>
            <Checkbox checked={Boolean(col.selected)} onChange={e => handleCheckboxChange(e, col)} name="selected" />
          </TableCell>
          <TableCell>{col.name}</TableCell>
          <TableCell>
            <Checkbox checked={Boolean(col.selectedWeb)} onChange={e => handleCheckboxChange(e, col)} name="selectedWeb" />
          </TableCell>
          <TableCell>
            <Checkbox checked={Boolean(col.selectedVirtual)} onChange={e => handleCheckboxChange(e, col)} name="selectedVirtual" />
          </TableCell>
          <TableCell style={{ textAlign: "right" }}>
            <Link to={`/collections/${col.id}`}>
              <ChevronRight color="primary" />
            </Link>
          </TableCell>
        </TableRow>
      );
    });
  }

  return (
    <div className="indent">
      <div className={classes.container}>
        <div className={classes.filters}>
          <div className={classes.flex}>
            <Checkbox onChange={handleBulkChange} />
            <Typography>{`${selectedData} items on this page selected.`}</Typography>
          </div>
          <div style={{ flexGrow: 1 }} />
          <Typography>Actions:</Typography>
          <TextField
            variant="outlined"
            color="primary"
            placeholder="Search"
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
              <TableCell>Available - web</TableCell>
              <TableCell>Available - virtual</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>{renderBody}</TableBody>
        </Table>
      )}
    </div>
  );
}

export default withStyles(styles)(PlayerTable);
