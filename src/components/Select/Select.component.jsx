import React from "react";
import {FormControl, InputLabel, MenuItem, Input, Chip, Select} from "@material-ui/core";
import {theme} from '../../theme';
import selectStyle from "./Select.style";

function getStyles(type, selectedTypes, theme) {
    return {
        fontWeight:
            selectedTypes.indexOf(type) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function TypeSelect(props) {
    const classes = selectStyle();

    const handleChange = (event) => {
        props.onTypeSelect(event.target.value);
    };

    /*React.useEffect(() => console.log("Props:", props));*/

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-multiple-chip-label">Pokemon Type</InputLabel>
            <Select
                style={{width: 450, marginBottom: 40}}
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={props.selectedTypes}
                onChange={handleChange}
                input={<Input id="select-multiple-chip"/>}
                renderValue={(selected) => (
                    <div className={classes.chips}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} className={classes.chip}/>
                        ))}
                    </div>
                )}
                MenuProps={MenuProps}
            >
                {props.types.map((type) => (
                    <MenuItem key={type} value={type} style={getStyles(type, props.selectedTypes, theme)}>
                        {type}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>)
}
