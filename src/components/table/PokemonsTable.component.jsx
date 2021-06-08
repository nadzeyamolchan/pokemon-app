import React from 'react';
import { Table,TableBody,TableCell,TableContainer,TableFooter,TablePagination,TableRow,Paper,TableHead } from '@material-ui/core';
import './table.component.style.css';
import TablePaginationActions from "./TablePaginationActions";
import {pokemonService} from '../../service/PokemonService';

export class CustomPaginationActionsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            rowsPerPage: 5,
            totalPokemons: 0,
            pokemons: []
        };
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.uploadPokemons = this.uploadPokemons.bind(this);
    }

    componentDidMount() {
        this.uploadPokemons();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.page !== prevState.page || this.state.rowsPerPage !== prevState.rowsPerPage) {
            this.uploadPokemons();
        }
    }

    handleChangePage = (event, newPage) => {
        this.setState({page: newPage});
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage: parseInt(event.target.value, 10)});
        this.setState({page: 0});
    };

    uploadPokemons = () => {
        pokemonService.getPokemonPage(this.state.page + 1, this.state.rowsPerPage)
            .then(pokemons => this.setState({pokemons: pokemons.data, totalPokemons: pokemons.total}));
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table className="table" aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sprite</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Weight</TableCell>
                            <TableCell>Height</TableCell>
                            <TableCell>Base experience</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.pokemons.map((pokemon) => (
                            <TableRow key={pokemon.id}>
                                <TableCell style={{width: 160}} align="left">
                                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt="pokemon"
                                         style={{width: 100, height: 100}}/>
                                </TableCell>
                                <TableCell style={{width: 160}} align="left">
                                    {pokemon.name}
                                </TableCell>
                                <TableCell style={{width: 160}} align="left">
                                    {pokemon.weight}
                                </TableCell>
                                <TableCell style={{width: 160}} align="left">
                                    {pokemon.height}
                                </TableCell>
                                <TableCell style={{width: 160}} align="left">
                                    {pokemon.base_experience}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[1, 5, 10, 25, 50]}
                                colSpan={5}
                                count={this.state.totalPokemons}
                                rowsPerPage={this.state.rowsPerPage}
                                page={this.state.page}
                                onChangePage={this.handleChangePage}
                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        );
    }
}
