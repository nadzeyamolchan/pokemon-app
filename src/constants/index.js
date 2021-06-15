import objectPath from 'object-path';

export const HEADER_CELLS = [
    '',
    'Name',
    'Type',
    'Weight',
    'Abilities'
];

export const POKEMON_SPRITE = (pokemon) => {
    return objectPath.get(pokemon, ['sprites','other','official-artwork','front_default'])
}