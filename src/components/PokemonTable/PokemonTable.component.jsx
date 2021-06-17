import React from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TablePagination,
    TableRow,
    TableHead,
    withStyles, Container
} from '@material-ui/core';

import {Link} from "react-router-dom";

import TablePaginationActionsComponent from "../TablePaginationActions/TablePaginationActions.component";
import {pokemonService} from "../../service/PokemonService";
import {HEADER_CELLS} from "../../constants";
import {POKEMON_SPRITE} from "../../constants";

import pokemonTableStyles from "./PokemonTable.style";
import TypeSelect from "../Select/Select.component";

class PokemonTableComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            rowsPerPage: 5,
            totalPokemons: 0,
            pokemons: [],
            filteredPokemon: [],
            selectedPokemonTypes: [],
            pokemonTypes: []
        };
    }

    componentDidMount() {
        this.uploadPokemons();
        this.uploadPokemonTypes();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            this.state.page !== prevState.page || this.state.rowsPerPage !== prevState.rowsPerPage ||
            this.state.pokemons.length !== prevState.pokemons.length ||
            this.state.selectedPokemonTypes.length !== prevState.selectedPokemonTypes.length
        ) {
            this.setPokemonPage();
        }
    }

    handleChangePage = (event, newPage) => {
        this.setState({page: newPage});
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage: parseInt(event.target.value, 10), page: 0});
    };

    uploadPokemons = () => {
        pokemonService.getAllPokemon()
            .then(pokemons => this.setState({pokemons: pokemons.data, totalPokemons: pokemons.total}));
    };

    uploadPokemonTypes = () => {
        pokemonService.getPokemonTypes().then(types => {
            this.setState({pokemonTypes: types.data})
        });
    }

    setPokemonPage = () => {
        let pageNumber = this.state.page + 1;
        let rowsNumber = this.state.rowsPerPage;

        let filteredPokemons;

        if (this.state.selectedPokemonTypes.length !== 0) {
            const isTypeSelected = (type) => this.state.selectedPokemonTypes.includes(type)
            filteredPokemons = this.state.pokemons.filter(pokemon => pokemon.types.map(type => type.type.name).some(isTypeSelected));
            let filteredPokemonPage = filteredPokemons.slice((pageNumber - 1) * rowsNumber, pageNumber * rowsNumber);
            this.setState({filteredPokemon: filteredPokemonPage, totalPokemons: filteredPokemons.length});
        } else {
            let pokemonPage = this.state.pokemons.slice((pageNumber - 1) * rowsNumber, pageNumber * rowsNumber);
            this.setState({filteredPokemon: pokemonPage, totalPokemons: this.state.pokemons.length});
        }
    };

    onPokemonTypeSelect = (types) => {
        this.setState({selectedPokemonTypes: types})
    }

    render() {
        const {classes} = this.props;
        return (
            <Container maxWidth="lg">
                <TypeSelect
                    types={this.state.pokemonTypes}
                    selectedTypes={this.state.selectedPokemonTypes}
                    onTypeSelect={this.onPokemonTypeSelect}
                />
                <TableContainer>
                    <Table className={classes.table} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                {HEADER_CELLS.map(cell => (
                                    <TableCell key={HEADER_CELLS.indexOf(cell)}
                                               className={classes.cell}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.filteredPokemon.map((pokemon) => (
                                <TableRow key={`${pokemon.id}-${pokemon.name}`}>
                                    <TableCell className={classes.cell}>
                                        <Link to={'/pokemon/' + pokemon.id}>
                                            <figure>
                                                <img src={POKEMON_SPRITE(pokemon)}
                                                     alt="pokemon"/>
                                                <figcaption> {`# ${pokemon.id}`}</figcaption>
                                            </figure>
                                        </Link>
                                    </TableCell>

                                    <TableCell className={classes.cell}>
                                        {pokemon.name}
                                    </TableCell>
                                    <TableCell className={classes.cell}>
                                        {pokemon.types.map((pokemonType) => (
                                            <div
                                                key={`${pokemon.id}-${pokemonType.type.name}`}>{pokemonType.type.name}</div>
                                        ))}
                                    </TableCell>
                                    <TableCell className={classes.cell}>
                                        {pokemon.weight}
                                    </TableCell>
                                    <TableCell className={classes.cell}>
                                        {pokemon.abilities.map((pokemonType) => (
                                            <div
                                                key={`${pokemon.id}-${pokemonType.ability.name}`}>{pokemonType.ability.name}</div>
                                        ))}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter className={classes.tableFooter}>
                            <TableRow>
                                <TablePagination
                                    className={classes.paginationRow}
                                    rowsPerPageOptions={[1, 5, 10, 25, 50]}
                                    colSpan={5}
                                    count={this.state.totalPokemons}
                                    labelRowsPerPage='Pokemon per page'
                                    rowsPerPage={this.state.rowsPerPage}
                                    page={this.state.page}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActionsComponent}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Container>
        );
    }
}

export default withStyles(pokemonTableStyles, {withTheme: true})(PokemonTableComponent);