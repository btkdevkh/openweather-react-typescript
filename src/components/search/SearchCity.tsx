import React, { Fragment, useState, useEffect } from 'react';
import { getCity } from '../../api/meteo';
import { Redirect} from 'react-router-dom';

const SearchCity = () => {

  const [cityName, setCityName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [redirect, setRedirect] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      setRedirect(false);
    }
  })

  const handleOnSubmit = async () => {
    // Verify if form is empty
    if(!cityName) {
      setMessage('Saisissez une ville pour connaître la météo');

    // If it's ok
    } else {
      // Then call api to openweathermap.org
      const response = await getCity(cityName);
      // console.log(response);

      if(response.status === 200) {
        // Save city in localStorage
        window.localStorage.setItem('city', response.data.name);

        // Set redirect to meteo screen
        setRedirect(true);
      }

      // Empty msg & form
      setMessage('');
      setCityName('');
    }
    
  }

  return (
    <Fragment>
      { redirect && <Redirect to="/meteo" /> }
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <div>
          <input
            placeholder="Saisissez une ville ..."
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Valider</button>
        </div>
      </form>
      <p style={style}>{ message }</p>
    </Fragment>
  )
}

// Error msg style
const style = {
  color: "red",
  padding: "15px",
  textAlign: "center" as "center"
}

export default SearchCity;
