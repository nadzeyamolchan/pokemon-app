import React, {useEffect, useState} from "react";
import {DataGrid} from '@material-ui/data-grid';
import Container from "@material-ui/core/Container";
import pokemonTableStyles from "./PokemonTable.style";
import {HEADER_CELLS, POKEMON_SPRITE, POKEMON_API_URL} from "../../constants";
import TypeSelect from "../Select/Select.component";
import SearchBox from "../SearchBox/SearchBox.component";
import {debounce} from "../../utils";
import {CustomNoRowsOverlayComponent} from "../CustomNoRowsOverlay/CustomNoRowsOverlay.component";
import usePokemonList from "../../hooks/usePokemonList";
import usePokemonTypes from "../../hooks/usePokemonTypes";
import PokemonModalWindow from "../PokemonModalWindow/PokemonModalWindow";

export default function PokemonTable() {
    const pokemonTypes = usePokemonTypes(POKEMON_API_URL);
    const pokemon = usePokemonList(POKEMON_API_URL);
    const [filteredPokemon, setFilteredPokemon] = useState([]);
    const [selectedPokemonTypes, setSelectedPokemonTypes] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [pageSize, setPageSize] = useState(10);
    const [showModalWindow, setShowModalWindow] = useState(false);
    const [currentPokemon, setCurrentPokemon] = useState({});

    const classes = pokemonTableStyles();

    const onPokemonTypeSelect = (types) => {
        setSelectedPokemonTypes(types);
    }

    const handleSearchRequest = (event) => {
        setSearchField(event.target.value);
    }

    const handleCloseModal = () => {
        setShowModalWindow(false)
    };

    const handleCurrentPokemon = (param) => {
        setCurrentPokemon(param.row.sprite);
    }

    const handlePageSizeChange = (params) => {
        setPageSize(params.pageSize)
    }

    useEffect(() => {
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
                (<img className={classes.pokemonSprite} src={POKEMON_SPRITE(params.value)} alt='pokemon-sprite'/>),
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
                              handleCurrentPokemon(param);
                              setShowModalWindow(true);
                          }
                      }
                      rows={filteredPokemon.map(pokemon => {
                          return {
                              id: pokemon.id,
                              sprite: pokemon,
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
                isClose={handleCloseModal}
                id={currentPokemon.id}
                name={currentPokemon.name}
                sprite={POKEMON_SPRITE(currentPokemon)}
                height={currentPokemon.height}
                weight={currentPokemon.weight}
                />
        </Container>
    )
}