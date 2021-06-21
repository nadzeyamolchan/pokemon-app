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

export const SELECT_INPUT_ITEM_HEIGHT = 48;
export const SELECT_INPUT_ITEM_PADDING_TOP = 8;