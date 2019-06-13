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
import { API_URL } from "../../utils/vars";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    fetch(`${API_URL}/v2/collections?kundeid=3000`)
      .then(res => res.json())
      .then(collections => setData(collections.slice(0, 10)));
  }, []);

  return (
    <div className="indent">
      <div className={classes.container}>
        <FormControlLabel control={<Checkbox color="primary" />} label="Select items" />
        <div className={classes.filters}>
          <Select
            label="Filter by country"
            color="primary"
            input={<OutlinedInput labelWidth={0} name="age" id="outlined-age-simple" />}
            defaultValue={""}
            native
          >
            <option value="" disabled>
              Filter by country
            </option>
            <option>Denmark</option>
          </Select>
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
      <Table className={classes.TableStyles}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Publish start</TableCell>
            <TableCell>Publish end</TableCell>
            <TableCell>Active</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(col => (
            <TableRow>
              <TableCell>{col.name}</TableCell>
              <TableCell>{col.type}</TableCell>
              <TableCell>{""}</TableCell>
              <TableCell>{""}</TableCell>
              <TableCell>{""}</TableCell>
              <TableCell>
                <Link to={`/collections/${col.id}`}>
                  <ChevronRight color="primary" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default withStyles(styles)(ClientTable);
