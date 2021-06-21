import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {DataGrid} from '@material-ui/data-grid';
import Container from "@material-ui/core/Container";
import pokemonTableStyles from "./PokemonTable.style";
import {pokemonService} from "../../service/PokemonService";
import {HEADER_CELLS, POKEMON_SPRITE} from "../../constants";
import TypeSelect from "../Select/Select.component";
import SearchBox from "../SearchBox/SearchBox.component";
import {debounce} from "../../utils";
import {CustomNoRowsOverlayComponent} from "../CustomNoRowsOverlay/CustomNoRowsOverlay.component";

export default function PokemonTable() {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [selectedPokemonTypes, setSelectedPokemonTypes] = useState([]);
    const [searchField, setSearchField] = useState('');

    const classes = pokemonTableStyles();

    const uploadInitialPage = () => {
        pokemonService.getPokemonTypes().then(types => {
            setPokemonTypes(types.data);
        });
        pokemonService.getAllPokemon()
            .then(pokemon => {
                setPokemon(pokemon.data);
            });
    }

    const onPokemonTypeSelect = (types) => {
        setSelectedPokemonTypes(types);
    }

    const handleSearchRequest = (event) => {
        setSearchField(event.target.value);
    }
    //TODO fix filter and search
    useEffect(() => {
        uploadInitialPage();

        /*if(searchField || selectedPokemonTypes){
            let filteredPokemon = pokemon;
            if (searchField) {
                filteredPokemon = filteredPokemon.filter(pokemon =>
                    pokemon.name.toLowerCase().includes(searchField.toLowerCase())
                )
            }
            if (selectedPokemonTypes) {
                const isTypeSelected = (type) => selectedPokemonTypes.includes(type);
                filteredPokemon = filteredPokemon.filter(pokemon => pokemon.types.map(type => type.type.name).some(isTypeSelected));
            }
            setPokemon(filteredPokemon);
        }*/
    }, []);

    const columns = [
        {
            field: 'id',
            headerName: HEADER_CELLS[0],
            width: 300,
            renderCell: params => (<Link to={'/pokemon/' + params.value}>{`# ${params.value}`}</Link>)
        },
        {
            field: 'sprite',
            headerName: HEADER_CELLS[1],
            width: 300,
            renderCell: (params) =>
                (<img className={classes.pokemonSprite} src={POKEMON_SPRITE(params.value)} alt='pokemon-sprite'/>)
        },
        {
            field: 'name',
            headerName: HEADER_CELLS[2],
            width: 300
        },
        {
            field: 'types',
            headerName: HEADER_CELLS[3],
            width: 300
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
                <DataGrid className={classes.dataGrid}
                          rows={pokemon.map(pokemon => {
                              return {
                                  id: pokemon.id,
                                  sprite: pokemon,
                                  name: pokemon.name,
                                  types: pokemon.types.map(pokemonType => pokemonType.type.name)
                              }
                          })}
                          columns={columns}
                          pageSize={10}
                          autoHeight='true'
                          components={{
                              NoRowsOverlay: CustomNoRowsOverlayComponent,
                          }}
                />
            </Container>
    )
}