import React, { useEffect, useState } from "react";
import {
  FormControlLabel,
  Checkbox,
  Select,
  TextField,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Grid,
  InputAdornment
} from "@material-ui/core";
import { ChevronRight, Search } from "@material-ui/icons";
import Footer from "../Footer";

export default function CollectionItemsTab({ item, onChange, titles, onChangeAll }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const newProviders = titles.reduce((acc, cu) => {
      if (!acc.find(provider => provider.id === cu.providerId)) {
        acc.push({ name: cu.providerName, id: cu.providerId });
      }
      return acc;
    }, []);
    setProviders(newProviders);
  }, []);

  return (
    <div className="CollectionItemsTab">
      <Grid container alignItems="center" className="menu">
        <FormControlLabel label="Select items" control={<Checkbox onChange={onChangeAll} />} />
        <div style={{ flexGrow: 1 }} />
        <Select native className="Select border" disableUnderline>
          <option>Choose action</option>
        </Select>
        <Select native className="Select border" disableUnderline>
          <option>Filter by provider</option>
          {providers.map(provider => (
            <option value={provider.id}>{provider.name}</option>
          ))}
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
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Provider</TableCell>
            <TableCell>Web</TableCell>
            <TableCell>Virtual</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {titles.map(title => (
            <TableRow>
              <TableCell>
                <Checkbox name="selected" checked={item.selected.includes(title.id)} onChange={e => onChange(e, title.id)} />
              </TableCell>
              <TableCell>{title.name}</TableCell>
              <TableCell>{title.providerName}</TableCell>
              <TableCell>
                <Checkbox name="selectedVirtual" checked={item.selectedVirtual.includes(title.id)} onChange={e => onChange(e, title.id)} />
              </TableCell>
              <TableCell>
                <Checkbox name="selectedWeb" checked={item.selectedWeb.includes(title.id)} onChange={e => onChange(e, title.id)} />
              </TableCell>
              <TableCell>
                <ChevronRight />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Footer />
    </div>
  );
}
