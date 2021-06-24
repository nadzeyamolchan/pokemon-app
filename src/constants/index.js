import objectPath from 'object-path';

export const HEADER_CELLS = [
    'ID',
    'Sprite',
    'Name',
    'Types'
];

export const POKEMON_SPRITE = (pokemon) => {
    return objectPath.get(pokemon, ['sprites','other','official-artwork','front_default'])
}

export const SELECT_SIZE = () => {
    const SELECT_INPUT_ITEM_HEIGHT = 48;
    const SELECT_INPUT_ITEM_PADDING_TOP = 8;

    return  SELECT_INPUT_ITEM_HEIGHT * 4.5 + SELECT_INPUT_ITEM_PADDING_TOP
}

export const POKEMON_API_URL = 'https://pokeapi.co/api/v2';