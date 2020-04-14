import React,{useState, useEffect } from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';

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
      <NativeSelect defaultValue="" onChange={(e) => {handleCountryChange(e.target.value)}}>
        <option value="">Global</option>
          {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default Country;