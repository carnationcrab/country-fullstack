import React from 'react';
import ReactDOM from 'react-dom';
import { Button, TextField, ButtonGroup, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    }
  },
}));


export default function CountryForm() {
  const [search, setSearch] = React.useState({
    searchby: '',
    keyword: ''
  });
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic"
          name='keyword'
          onChange={(event) => {
            event.preventDefault()
            setSearch({ ...search, keyword: event.target.value });
            console.log(search);
          }}
          label="Search for Country" variant="outlined" />
       <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Search By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={search.searchby}
            onChange={(event) => {
              event.preventDefault()
              setSearch({ ...search, searchby: event.target.value });
              console.log(search);
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {/* <Button variant="contained" color="primary" type='submit'>
          Submit
        </Button> */}
        <input onClick={() => console.log('search ====', search)} value="Submit" />
      </form>
    </div>
  );
}

