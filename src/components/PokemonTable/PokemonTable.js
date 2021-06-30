import React, {useEffect, useState} from "react";
import {DataGrid} from '@material-ui/data-grid';
import Container from "@material-ui/core/Container";
import {connect, useDispatch, useSelector} from "react-redux";

import pokemonTableStyles from "./PokemonTable.style";
import {HEADER_CELLS} from "../../constants";
import TypeSelect from "../Select/Select.component";
import SearchBox from "../SearchBox/SearchBox.component";
import {debounce} from "../../utils";
import {CustomNoRowsOverlayComponent} from "../CustomNoRowsOverlay/CustomNoRowsOverlay.component";
import PokemonModalWindow from "../PokemonModalWindow/PokemonModalWindow";
import {closeModalWindowAction} from "../../redux/selectedPokemonSlice";

function PokemonTable({closeModalWindowAction}) {
    const pokemonTypes = useSelector(state => state.pokemonTypes);
    const pokemon = useSelector(state => state.pokemon);
    const showModalWindow = useSelector(state => state.selectedPokemon.showPokemonModalWindow);
    const [filteredPokemon, setFilteredPokemon] = useState([]);
    const [selectedPokemonTypes, setSelectedPokemonTypes] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [pageSize, setPageSize] = useState(10);

    const classes = pokemonTableStyles();
    const dispatch = useDispatch();

    const onPokemonTypeSelect = (types) => {
        setSelectedPokemonTypes(types);
    }

    const handleSearchRequest = (event) => {
        setSearchField(event.target.value);
    }

    const handlePageSizeChange = (params) => {
        setPageSize(params.pageSize)
    }

    useEffect(() => {
        if(pokemon.length) {
            let filteredPokemon = pokemon;
            if (searchField) {
                filteredPokemon = filteredPokemon.filter(pokemon =>
                    pokemon.name.toLowerCase().includes(searchField.toLowerCase())
                )
            }
            if (selectedPokemonTypes && selectedPokemonTypes.length) {
                const isTypeSelected = (type) => selectedPokemonTypes.includes(type);
                filteredPokemon = filteredPokemon.filter(pokemon => pokemon.types.map(type => type.type.name).some(isTypeSelected));
            }
            setFilteredPokemon(filteredPokemon);
        }
    }, [pokemon, searchField, selectedPokemonTypes])

    const columns = [
        {
            field: 'id',
            headerName: HEADER_CELLS[0],
            renderCell: params => params.value,
            headerAlign: 'center',
            headerClassName: 'pokemonTableHeader',
            align: 'center',
            flex: 0.5
        },
        {
            field: 'sprite',
            headerName: HEADER_CELLS[1],
            renderCell: (params) =>
                (<img className={classes.pokemonSprite} src={params.value} alt='pokemon-sprite'/>),
            headerAlign: 'center',
            align: 'center',
            flex: 1
        },
        {
            field: 'name',
            headerName: HEADER_CELLS[2],
            width: 260,
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'types',
            headerName: HEADER_CELLS[3],
            headerAlign: 'center',
            align: 'center',
            flex: 1
        }
    ];

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
                      onRowClick={
                          (param ) => {
                              dispatch({type: 'selectPokemon', payload: pokemon.find(pokemon => pokemon.id === param.row.id)});
                          }
                      }
                      rows={filteredPokemon.map(pokemon => {
                          return {
                              id: pokemon.id,
                              sprite: pokemon.sprite,
                              name: pokemon.name,
                              types: pokemon.types.map(pokemonType => pokemonType.type.name)
                          }
                      })}
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
            <PokemonModalWindow
                isOpen={showModalWindow}
                isClose={closeModalWindowAction}
                />
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    closeModalWindowAction: () => dispatch(closeModalWindowAction())
});

export default connect(null, mapDispatchToProps)(PokemonTable);