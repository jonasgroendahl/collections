import React, { useState, useEffect } from "react";
import { Table, FormControlLabel, Checkbox, InputAdornment, TextField, TableHead, TableRow, TableCell, TableBody, Button } from "@material-ui/core";
import { Search, ChevronRight, CheckBoxOutlineBlank, CheckBox, Add, CheckBoxTwoTone } from "@material-ui/icons";
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

function getActiveIcon(col) {
  if (col.type === "featured") {
    return <CheckBoxTwoTone />;
  } else if (col.active) {
    return <CheckBox />;
  } else {
    return <CheckBoxOutlineBlank />;
  }
}

function ClientTable({ classes, id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const newData = collections.map(el => ({ ...el, selected: false }));
    setData(newData);
    setLoading(false);
  }, []);

  function handleBulkSelect(e) {
    const newData = data.map(el => ({ ...el, selected: e.target.checked }));
    setData(newData);
  }

  function handleSelect(e, item) {
    const newData = [...data];
    const index = newData.findIndex(el => el.id === item.id);
    newData[index].selected = e.target.checked;
    setData(newData);
  }

  return (
    <div className="indent">
      <div className={classes.container}>
        <FormControlLabel control={<Checkbox color="primary" onChange={handleBulkSelect} />} label="Select items" />
        <div className={classes.filters}>
          <Link to="/collections/0">
            <Button>
              Add <Add style={{ marginLeft: 10 }} />
            </Button>
          </Link>
          <TextField
            variant="outlined"
            color="primary"
            placeholder="Search"
            autoFocus
            value={search}
            onChange={e => setSearch(e.target.value)}
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
            {data
              .filter(col => col.name.toLowerCase().includes(search.toLowerCase()))
              .map(col => (
                <TableRow key={col.id}>
                  <TableCell>
                    <Checkbox checked={col.selected} onChange={e => handleSelect(e, col)} color="primary" />
                  </TableCell>
                  <TableCell>{col.name}</TableCell>
                  <TableCell>{col.type}</TableCell>
                  <TableCell>{col.playerType}</TableCell>
                  <TableCell>{col.type === "featured" ? "∞" : col.start}</TableCell>
                  <TableCell>{col.type === "featured" ? "∞" : col.end}</TableCell>
                  <TableCell>{getActiveIcon(col)}</TableCell>
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
