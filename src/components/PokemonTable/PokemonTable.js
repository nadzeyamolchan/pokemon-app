import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Container from "@material-ui/core/Container";

import pokemonTableStyles from "./PokemonTable.style";
import TypeSelect from "../Select/Select.component";
import SearchBox from "../SearchBox/SearchBox.component";
import { debounce } from "../../utils";
import { CustomNoRowsOverlayComponent } from "../CustomNoRowsOverlay/CustomNoRowsOverlay.component";
import PokemonModalWindow from "../PokemonModalWindow/PokemonModalWindow";
import * as PropTypes from "prop-types";

PokemonTable.propTypes = {
  pokemonTypes: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  selectedPokemonTypes: PropTypes.array,
  onPokemonTypeSelect: PropTypes.func,
  handleSearchRequest: PropTypes.func,
  handleRowClick: PropTypes.func,
  rows: PropTypes.array,
  columns: PropTypes.array,
  pageSize: PropTypes.number,
  handlePageSizeChange: PropTypes.func,
};

export default function PokemonTable({ ...props }) {
  const classes = pokemonTableStyles();

  return (
    <Container maxWidth="lg">
      <Container className={classes.searchAndSelectWrapper} maxWidth="lg">
        <TypeSelect
          types={props.pokemonTypes}
          selectedTypes={props.selectedPokemonTypes}
          onTypeSelect={props.onPokemonTypeSelect}
        />
        <SearchBox
          placeholder="Type pokemon name"
          handleChange={debounce(props.handleSearchRequest, 500)}
        />
      </Container>
      <div className={classes.dataGridContainer}>
        <DataGrid
          className={classes.dataGrid}
          onRowClick={props.handleRowClick}
          rows={props.rows}
          columns={props.columns}
          pageSize={props.pageSize}
          onPageSizeChange={props.handlePageSizeChange}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          autoHeight="true"
          components={{
            NoRowsOverlay: CustomNoRowsOverlayComponent,
          }}
          getRowClassName={() => classes.dataGridRows}
        />
      </div>
      <PokemonModalWindow />
    </Container>
  );
}