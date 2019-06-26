import React, { useState, useEffect, useContext } from "react";
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
import SkeletonTable from "./SkeletonTable";
import Context from "../../utils/Context";

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
  const context = useContext(Context);

  useEffect(() => {
    fetch(`${API_URL}/v3/clubs`)
      .then(res => res.json())
      .then(clubs => {
        console.log(clubs);
        setData(clubs.slice(0, 10));
        setLoading(false);
      });
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
      {loading ? (
        <SkeletonTable />
      ) : (
        <div className="TableWrapper">
          <Table className={classes.TableStyles}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Active</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(client => (
                <TableRow key={client.id}>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.country}</TableCell>
                  <TableCell>{client.active}</TableCell>
                  <TableCell>
                    <Link to={`/clients/${client.id}`} onClick={() => context.setSelectedClient(client)}>
                      <ChevronRight color="primary" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default withStyles(styles)(ClientTable);
