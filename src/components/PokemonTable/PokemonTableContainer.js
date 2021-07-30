import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';

import pokemonTableStyles from "./PokemonTable.style";
import { HEADER_CELLS } from "../../constants";
import PokemonTable from "./PokemonTable";
import store from "../../redux/store";
import { fetchPokemon } from "../../redux/pokemonSlice";
import {fetchPokemonById} from "../../redux/pokemonSlice";

export default function PokemonTableContainer() {
  const { pokemon, total, pokemonTypes } = useSelector((state) => state.pokemon);

  const [selectedPokemonTypes, setSelectedPokemonTypes] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectionModel, setSelectionModel] = React.useState([]);

  const classes = pokemonTableStyles();

  const onPokemonTypeSelect = (types) => {
    setSelectedPokemonTypes(types);
  };

  const onPokemonDelete = async (selectedPokemon) => {
    for (let i = 0; i < selectedPokemon.length; i++) {
      await axios({
        method: 'delete',
        url: `/pokemon/${selectedPokemon[i]}`
      });
    }
    store.dispatch(
        fetchPokemon(
            searchField,
            selectedPokemonTypes,
            pageSize,
            currentPage
        )
    );
  }

  const handleSearchRequest = (event) => {
    setSearchField(event.target.value);
  };

  const handlePageSizeChange = (params) => {
    setPageSize(params.pageSize);
  };

  const handlePageChange = (params) => {
    setCurrentPage(params.page);
  };

  const handleRowClick = (param) => {
    store.dispatch(fetchPokemonById(param.row.id));
  };

  useEffect(() => {
    setLoading(true)

    let active = true;

    (async () => {
      if (!active) {
        return;
      }
      store.dispatch(
        fetchPokemon(
            searchField,
            selectedPokemonTypes,
            pageSize,
            currentPage
        )
      );
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [
      searchField,
      selectedPokemonTypes,
      pageSize,
      currentPage
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
      selectedPokemonTypes={selectedPokemonTypes}
      onPokemonTypeSelect={onPokemonTypeSelect}
      handleSearchRequest={handleSearchRequest}
      handleRowClick={handleRowClick}
      page={currentPage}
      paginationMode="server"
      pagination
      rowCount={total}
      onPageChange={handlePageChange}
      onPageSizeChange={handlePageSizeChange}
      loading={loading}
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
      checkboxSelection
      onSelectionModelChange={(selection) => {
        const newSelectionModel = selection.selectionModel;
          setSelectionModel(newSelectionModel);
      }}
      selectionModel={selectionModel}
      onPokemonDelete={onPokemonDelete}
    />
  );
}