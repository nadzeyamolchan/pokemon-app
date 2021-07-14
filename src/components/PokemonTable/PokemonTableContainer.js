import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import pokemonTableStyles from "./PokemonTable.style";
import { HEADER_CELLS } from "../../constants";
import PokemonTable from "./PokemonTable";
import store from "../../redux/store";
import {fetchPokemon, fetchPokemonByFilter} from "../../redux/pokemonSlice";
import {fetchPokemonById} from "../../redux/selectedPokemonSlice";

export default function PokemonTableContainer() {
  const { pokemonTypes, pokemon} = useSelector((state) => state);
  const [selectedPokemonTypes, setSelectedPokemonTypes] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [pageSize, setPageSize] = useState(10);

  const classes = pokemonTableStyles();

  const onPokemonTypeSelect = (types) => {
    setSelectedPokemonTypes(types);
  };

  const handleSearchRequest = (event) => {
    setSearchField(event.target.value);
  };

  const handlePageSizeChange = (params) => {
    setPageSize(params.pageSize);
  };

  const handleRowClick = (param) =>  {
    store.dispatch(fetchPokemonById(param.row.id));
  };

  useEffect(() => {
    if (selectedPokemonTypes || searchField) {
      store.dispatch(fetchPokemonByFilter(searchField, selectedPokemonTypes))
    }
    else {
      store.dispatch(fetchPokemon);
    }
  }, [searchField, selectedPokemonTypes]);

  const columns = [
    {
      field: "id",
      headerName: HEADER_CELLS[0],
      renderCell: (params) => params.value,
      headerAlign: "center",
      headerClassName: "pokemonTableHeader",
      align: "center",
      flex: 0.5,
    },
    {
      field: "sprite",
      headerName: HEADER_CELLS[1],
      renderCell: (params) => (
        <img
          className={classes.pokemonSprite}
          src={params.value}
          alt="pokemon-sprite"
        />
      ),
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "name",
      headerName: HEADER_CELLS[2],
      width: 260,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "types",
      headerName: HEADER_CELLS[3],
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
  ];

  return (
    <PokemonTable
      pokemonTypes={pokemonTypes}
      selectedPokemonTypes={selectedPokemonTypes}
      onPokemonTypeSelect={onPokemonTypeSelect}
      handleSearchRequest={handleSearchRequest}
      handleRowClick={handleRowClick}
      rows={pokemon.map((pokemon) => {
        return {
          id: pokemon.id,
          sprite: pokemon.sprite,
          name: pokemon.name,
          types: pokemon.types.map((pokemonType) => pokemonType.name),
        };
      })}
      columns={columns}
      pageSize={pageSize}
      handlePageSizeChange={handlePageSizeChange}
    />
  );
}