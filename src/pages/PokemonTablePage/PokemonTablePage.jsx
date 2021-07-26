import React from "react";

import PokemonTable from "../../components/PokemonTable/PokemonTableContainer";
import store from "../../redux/store";
import {fetchPokemonTypes} from "../../redux/pokemonTypesSlice";

const PokemonTablePage = () => {
    store.dispatch(fetchPokemonTypes);
  return (
    <React.Fragment>
      <PokemonTable />
    </React.Fragment>
  );
};

export default PokemonTablePage;