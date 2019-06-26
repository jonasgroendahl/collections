import React, { useState, useEffect, useContext } from "react";
import { Table, InputAdornment, TextField, TableHead, TableRow, TableCell, TableBody, Typography, Checkbox } from "@material-ui/core";
import { Search, ChevronRight } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import TableStyles from "../../styles/TableStyles";
import { API_URL } from "../../utils/vars";
import { Link } from "react-router-dom";
import SkeletonTable from "./SkeletonTable";
import Context from "../../utils/Context";

const players = [
  {
    id: 0,
    name: "player x",
    clubId: 34,
    chainId: 4,
    selectedWeb: 0,
    selectedVirtual: 1,
    selected: false
  },
  {
    id: 1,
    name: "player x",
    clubId: 34,
    chainId: 4,
    selectedWeb: 0,
    selectedVirtual: 1,
    selected: false
  },
  {
    id: 2,
    name: "player x",
    clubId: 34,
    chainId: 4,
    selectedWeb: 0,
    selectedVirtual: 1,
    selected: false
  },
  {
    id: 3,
    name: "player x",
    clubId: 34,
    chainId: 2,
    selectedWeb: 1,
    selectedVirtual: 1,
    selected: false
  }
];

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

  let renderBody = [];
  let selectedData = 0;

  if (data.length > 0) {
    data.forEach(col => {
      if (col.selected) {
        selectedData++;
      }
      renderBody.push(
        <TableRow>
          <TableCell>
            <Checkbox checked={col.selected} />
          </TableCell>
          <TableCell>{col.name}</TableCell>
          <TableCell>
            <Checkbox checked={col.selectedWeb} />
          </TableCell>
          <TableCell>
            <Checkbox checked={col.selectedVirtual} />
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
            <Checkbox />
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
