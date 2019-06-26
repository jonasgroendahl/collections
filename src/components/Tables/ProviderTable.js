import React, { useState, useEffect } from "react";
import {
  Table,
  FormControlLabel,
  Checkbox,
  Select,
  InputAdornment,
  TextField,
  OutlinedInput,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import { Search, ChevronRight } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import TableStyles from "../../styles/TableStyles";
import { Link } from "react-router-dom";
import SkeletonTable from "./SkeletonTable";
import { collections } from "../../utils/vars";

const providersRaw = [
  {
    id: 1,
    name: "test1",
    titles: 43,
    active: false
  },
  {
    id: 1,
    name: "test1",
    titles: 43,
    active: false
  },
  {
    id: 1,
    name: "test1",
    titles: 43,
    active: false
  },
  {
    id: 1,
    name: "test1",
    titles: 43,
    active: false
  }
];

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

  useEffect(() => {
    setData(providersRaw);
    setLoading(false);
  }, []);

  return (
    <div className="indent">
      <div className={classes.container}>
        <FormControlLabel control={<Checkbox color="primary" />} label="Select items" />
        <div className={classes.filters}>
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
              <TableCell>Titles</TableCell>
              <TableCell>Active</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(provider => (
              <TableRow>
                <TableCell>
                  <Checkbox checked={provider.selected} color="primary" />
                </TableCell>
                <TableCell>{provider.name}</TableCell>
                <TableCell>{provider.titles}</TableCell>
                <TableCell>
                  <Checkbox checked={provider.active} color="primary" />
                </TableCell>
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
