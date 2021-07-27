import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import pokemonTableStyles from "./PokemonTable.style";
import { HEADER_CELLS } from "../../constants";
import PokemonTable from "./PokemonTable";
import store from "../../redux/store";
import { fetchPokemon } from "../../redux/pokemonSlice";
import { fetchPokemonById } from "../../redux/selectedPokemonSlice";

export default function PokemonTableContainer() {
  const { pokemonTypes } = useSelector((state) => state);
  const { pokemon, total } = useSelector((state) => state.pokemon);
  const [data, setData] = useState({
    selectedPokemonTypes: [],
    searchField: "",
    pageSize: 10,
    currentPage: 0,
    loading: false,
  });

  const classes = pokemonTableStyles();

  const updateData = (k, v) => setData((prev) => ({ ...prev, [k]: v }));

  const onPokemonTypeSelect = (types) => {
    updateData("selectedPokemonTypes", types);
  };

  const handleSearchRequest = (event) => {
    updateData("searchField", event.target.value);
  };

  const handlePageSizeChange = (params) => {
    updateData("pageSize", params.pageSize);
  };

  const handlePageChange = (params) => {
    updateData("currentPage", params.page);
  };

  const handleRowClick = (param) => {
    store.dispatch(fetchPokemonById(param.row.id));
  };

  useEffect(() => {
    updateData("loading", true);

    let active = true;

    (async () => {
      if (!active) {
        return;
      }
      store.dispatch(
        fetchPokemon(
          data.searchField,
          data.selectedPokemonTypes,
          data.pageSize,
          data.currentPage
        )
      );
      updateData("loading", false);
    })();

    return () => {
      active = false;
    };
  }, [
    data.searchField,
    data.selectedPokemonTypes,
    data.pageSize,
    data.currentPage,
  ]);

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
      selectedPokemonTypes={data.selectedPokemonTypes}
      onPokemonTypeSelect={onPokemonTypeSelect}
      handleSearchRequest={handleSearchRequest}
      handleRowClick={handleRowClick}
      page={data.currentPage}
      paginationMode="server"
      pagination
      rowCount={total}
      onPageChange={handlePageChange}
      onPageSizeChange={handlePageSizeChange}
      loading={data.loading}
      rows={pokemon.map((pokemon) => {
        //
        return {
          id: pokemon.id,
          sprite: pokemon.sprite,
          name: pokemon.name,
          types: pokemon.types.map((pokemonType) => pokemonType.name),
        };
      })}
      columns={columns}
      pageSize={data.pageSize}
    />
  );
}