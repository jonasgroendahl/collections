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

function ClientTable({ classes, id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(collections);
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
              <TableCell>Type</TableCell>
              <TableCell>Player type</TableCell>
              <TableCell>Publish start</TableCell>
              <TableCell>Publish end</TableCell>
              <TableCell>Active</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(col => (
              <TableRow>
                <TableCell>
                  <Checkbox checked={col.selected} color="primary" />
                </TableCell>
                <TableCell>{col.name}</TableCell>
                <TableCell>{col.type}</TableCell>
                <TableCell>{col.playerType}</TableCell>
                <TableCell>{col.type === "featured" ? "∞" : col.start}</TableCell>
                <TableCell>{col.type === "featured" ? "∞" : col.end}</TableCell>
                <TableCell>
                  <Checkbox checked={col.type === "featured" ? true : col.active} color="primary" />
                </TableCell>
                <TableCell>
                  <Link to={`/collections/${col.id}`}>
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

export default withStyles(styles)(ClientTable);
