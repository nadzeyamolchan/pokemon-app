import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import pokemonTableStyles from "./PokemonTable.style";
import { HEADER_CELLS } from "../../constants";
import { actionTypes } from "../../redux/actionTypes";
import PokemonTable from "./PokemonTable";

export default function PokemonTableContainer() {
  const { pokemon, pokemonTypes } = useSelector((state) => state);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [selectedPokemonTypes, setSelectedPokemonTypes] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [pageSize, setPageSize] = useState(10);

  const classes = pokemonTableStyles();
  const dispatch = useDispatch();

  const onPokemonTypeSelect = (types) => {
    setSelectedPokemonTypes(types);
  };

  const handleSearchRequest = (event) => {
    setSearchField(event.target.value);
  };

  const handlePageSizeChange = (params) => {
    setPageSize(params.pageSize);
  };

  const handleRowClick = (param) => {
    dispatch({
      type: actionTypes.SELECT_POKEMON,
      payload: pokemon.find((pokemon) => pokemon.id === param.row.id),
    });
  };

  useEffect(() => {
    if (pokemon.length) {
      let filteredPokemon = pokemon;
      if (searchField) {
        filteredPokemon = filteredPokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchField.toLowerCase())
        );
      }
      if (selectedPokemonTypes && selectedPokemonTypes.length) {
        const isTypeSelected = (type) => selectedPokemonTypes.includes(type);
        filteredPokemon = filteredPokemon.filter((pokemon) =>
          pokemon.types.map((type) => type.type.name).some(isTypeSelected)
        );
      }
      setFilteredPokemon(filteredPokemon);
    }
  }, [pokemon, searchField, selectedPokemonTypes]);

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
      rows={filteredPokemon.map((pokemon) => {
        return {
          id: pokemon.id,
          sprite: pokemon.sprite,
          name: pokemon.name,
          types: pokemon.types.map((pokemonType) => pokemonType.type.name),
        };
      })}
      columns={columns}
      pageSize={pageSize}
      handlePageSizeChange={handlePageSizeChange}
    />
  );
}