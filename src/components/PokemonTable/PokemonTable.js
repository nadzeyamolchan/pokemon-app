import React from "react";
import {DataGrid} from '@material-ui/data-grid';
import Container from "@material-ui/core/Container";

import pokemonTableStyles from "./PokemonTable.style";
import TypeSelect from "../Select/Select.component";
import SearchBox from "../SearchBox/SearchBox.component";
import {debounce} from "../../utils";
import {CustomNoRowsOverlayComponent} from "../CustomNoRowsOverlay/CustomNoRowsOverlay.component";
import PokemonModalWindow from "../PokemonModalWindow/PokemonModalWindow";

export default function PokemonTable({pokemonTypes, selectedPokemonTypes, onPokemonTypeSelect, handleSearchRequest, handleRowClick, rows, columns, pageSize, handlePageSizeChange }) {
    const classes = pokemonTableStyles();
    return (
        <Container maxWidth='lg'>
            <Container className={classes.searchAndSelectWrapper} maxWidth="lg">
                <TypeSelect
                    types={pokemonTypes}
                    selectedTypes={selectedPokemonTypes}
                    onTypeSelect={onPokemonTypeSelect}
                />
                <SearchBox placeholder='Type pokemon name' handleChange={debounce(handleSearchRequest, 500)}/>
            </Container>
            <div className={classes.dataGridContainer}>
            <DataGrid className={classes.dataGrid}
                      onRowClick={handleRowClick}
                      rows={rows}
                      columns={columns}
                      pageSize={pageSize}
                      onPageSizeChange={handlePageSizeChange}
                      rowsPerPageOptions={[5, 10, 20]}
                      pagination
                      autoHeight='true'
                      components={{
                          NoRowsOverlay: CustomNoRowsOverlayComponent,
                      }}
                      getRowClassName={() => classes.dataGridRows}
            />
            </div>
            <PokemonModalWindow/>
        </Container>
    )
}