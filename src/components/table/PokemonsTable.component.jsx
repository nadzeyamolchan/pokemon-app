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
    withStyles, StylesProvider, Container
} from '@material-ui/core';
import TablePaginationActions from "./TablePaginationActions";
import {pokemonService} from '../../service/PokemonService';
import {useStyles} from "./Table.component.style";
import HEADER_CELLS from "../../constants/constants";
import './table.style.css';

class PokemonsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            rowsPerPage: 5,
            totalPokemons: 0,
            pokemons: []
        };
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
        this.setState({rowsPerPage: parseInt(event.target.value, 10), page: 0});
    };

    uploadPokemons = () => {
        pokemonService.getPokemonPage(this.state.page + 1, this.state.rowsPerPage)
            .then(pokemons => this.setState({pokemons: pokemons.data, totalPokemons: pokemons.total}));
    }

    render() {
        const {classes} = this.props;
        console.log(this.state.pokemons);
        return (
            <StylesProvider injectFirst>
                <Container maxWidth="lg">
                <TableContainer className={classes.tableContainer} >
                    <Table className={classes.table} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                {HEADER_CELLS.map(cell => (
                                    <TableCell key={HEADER_CELLS.indexOf(cell)} align="center">{cell}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.pokemons.map((pokemon) => (
                                <TableRow key={`${pokemon.id}-${pokemon.name}`}>
                                    <TableCell className={classes.cell}>
                                        <figure>
                                        <img src={pokemon.sprites.other['official-artwork'].front_default}
                                             alt="pokemon"/>
                                            <figcaption> {`# ${pokemon.id}`}</figcaption>
                                        </figure>
                                    </TableCell>
                                    <TableCell className={classes.cell}>
                                        {pokemon.name}
                                    </TableCell>
                                    <TableCell className={classes.cell}>
                                        {pokemon.types.map((pokemonType) => (
                                            <div key={`${pokemon.id}-${pokemonType.type.name}`}>{pokemonType.type.name}</div>
                                        ))}
                                    </TableCell>
                                    <TableCell className={classes.cell}>
                                        {pokemon.weight}
                                    </TableCell>
                                    <TableCell className={classes.cell}>
                                        {pokemon.abilities.map((pokemonType) => (
                                            <div key={`${pokemon.id}-${pokemonType.ability.name}`}>{pokemonType.ability.name}</div>
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
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
                    </Container>
            </StylesProvider>
        );
    }
}

export default withStyles(useStyles)(PokemonsTable);