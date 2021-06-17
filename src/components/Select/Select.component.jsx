import React from "react";
import {FormControl, InputLabel, MenuItem, Input, Chip, Select} from "@material-ui/core";
import {SELECT_INPUT_ITEM_HEIGHT} from "../../constants";
import {SELECT_INPUT_ITEM_PADDING_TOP} from "../../constants";
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

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: SELECT_INPUT_ITEM_HEIGHT * 4.5 + SELECT_INPUT_ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function TypeSelect(props) {
    const classes = selectStyle();

    const handleChange = (event) => {
        props.onTypeSelect(event.target.value);
    };


    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-multiple-chip-label">Choose pokemon Type</InputLabel>
            <Select
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
