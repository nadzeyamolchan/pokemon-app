import { makeStyles } from "@material-ui/core";

const pokemonTableStyles = makeStyles((theme) => ({
  searchAndSelectWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    margin: theme.spacing(10, "auto"),
  },
  pokemonSprite: {
    height: "100%",
  },
  dataGridContainer: {
    flexGrow: 1,
  },
  dataGridRows: {
    cursor: "pointer",
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    '&>*': {
      marginRight: '1.5rem'
    },
  },
  createButton: {
    color: '#e5b441'
  },
  removeButton: {
    color: 'rgb(232,83,130)'
  }
}));

export default pokemonTableStyles;