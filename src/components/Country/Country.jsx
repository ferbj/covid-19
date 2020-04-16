import React,{useState, useEffect } from 'react';
import { /*NativeSelect,*/ TextField , FormControl} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { fetchCountries } from '../../api';
import styles from './Country.module.css';

const Country = ({handleCountryChange}) =>{
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const countriesData = async () => {
      setFetchedCountries(await fetchCountries());
    }
    
    countriesData();
  }, [setFetchedCountries]);

  return(
    <FormControl className={styles.formControl}>
      <Autocomplete 
       id="country"
       style={{ width: 300 }}
       defaultValue="Global"
       autoHighlight
       options={fetchedCountries}        
      getOptionLabel={option => option}
      onChange={(e,value) => { handleCountryChange(e.target.textContent,value)}}
      renderOption={(option) => (
        <React.Fragment>
           {option} 
        </React.Fragment>
      )}  
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          variant="standard"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password'
          }}
        />
      )}
      />
      {/*<NativeSelect defaultValue="" onChange={(e) => {handleCountryChange(e.target.value)}}>
        <option value="">Global</option>
          {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
  </NativeSelect>*/}
    </FormControl>
  )
}

export default Country;