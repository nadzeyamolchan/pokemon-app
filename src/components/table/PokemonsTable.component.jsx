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
    withStyles
} from '@material-ui/core';
import TablePaginationActions from "./TablePaginationActions";
import {pokemonService} from '../../service/PokemonService';
import {useStyles} from "./Table.component.style";

const headerCells = [
    'Sprite',
    'Name',
    'Weight',
    'Height',
    'Base experience'
];

class PokemonsTable extends React.Component {
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
        this.setState({rowsPerPage: parseInt(event.target.value, 10), page: 0});
    };

    uploadPokemons = () => {
        pokemonService.getPokemonPage(this.state.page + 1, this.state.rowsPerPage)
            .then(pokemons => this.setState({pokemons: pokemons.data, totalPokemons: pokemons.total}));
    }

    render() {
        const {classes} = this.props;
        return (
            <TableContainer className={classes.tableContainer}>
                <Table className={classes.table} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            {headerCells.map(cell => (
                                <TableCell key={headerCells.indexOf(cell)} align="center">{cell}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.pokemons.map((pokemon) => (
                            <TableRow key={pokemon.id}>
                                <TableCell className={classes.cell}>
                                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt="pokemon"/>
                                </TableCell>
                                <TableCell className={classes.cell}>
                                    {pokemon.name}
                                </TableCell>
                                <TableCell className={classes.cell}>
                                    {pokemon.weight}
                                </TableCell>
                                <TableCell className={classes.cell}>
                                    {pokemon.height}
                                </TableCell>
                                <TableCell className={classes.cell}>
                                    {pokemon.base_experience}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className={classes.tableFooter}>
                        <TableRow >
                            <TablePagination
                                className={classes.paginationRow}
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

export default withStyles(useStyles, {withTheme: true})(PokemonsTable);