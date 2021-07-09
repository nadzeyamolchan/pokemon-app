import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Input,
  Chip,
  Select,
} from "@material-ui/core";
import { SELECT_SIZE } from "../../constants";
import { theme } from "../../theme";
import selectStyle from "./Select.style";

function getStyles(type, selectedTypes, theme) {
  return {
    fontWeight:
      selectedTypes.indexOf(type) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: SELECT_SIZE(),
      width: 250,
    },
  },
};

export default function TypeSelect({ types, selectedTypes, onTypeSelect }) {
  const classes = selectStyle();
  const handleChange = (event) => {
    onTypeSelect(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-multiple-chip-label">Choose pokemon Type</InputLabel>
      {types.length ? (
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedTypes}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {types.map((type) => (
            <MenuItem
              key={type}
              value={type}
              style={getStyles(type, selectedTypes, theme)}
            >
              {type}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Skeleton type="text" />
      )}
    </FormControl>
  );
}
