import React, { Fragment, useState, useEffect } from 'react';
import { getCity } from '../api/meteo';
import { Link } from 'react-router-dom';

const Meteo = () => {

  const [celsius, setCelsius] = useState<Number>(0);
  const [cityName, setCityName] = useState<String>('');

  useEffect(() => {
    // Get city in localStorage
    const cityLS = window.localStorage.getItem('city');
    
    if(cityLS) {
      // Then call api to openweathermap.org
      // with the city in ocalStorage
      getCity(cityLS)
        .then(response => {
          // console.log(response);
          if(response.status === 200) {
            setCelsius(parseInt(response.data.main.temp))
            setCityName(response.data.name)
          }
        })
        .catch(error => {
          console.log(error);
        })
    }

  }, [])

  celsius === 0 ?
  document.body.style.backgroundColor = "#333" : 
  celsius >= 15 ? 
  document.body.style.backgroundColor = "#f49c14" :
  document.body.style.backgroundColor = "#75b4e3"

  return (
    <Fragment>
      {
        // If there's no a city in LS
        celsius === 0 ?
        <Link className="return" to="/">Retour</Link> :

        // If it does have once in LS
        celsius >= 15 ?
        <p className="meteoInfo">À {cityName}, Il fait chaud et fait {celsius} °C <br />Sortez vos tongs !</p> : 
        <p className="meteoInfo">À {cityName}, Il fait froid et fait {celsius} °C <br />Couvrez-vous bien !</p> 
      }
    </Fragment>
  )
}

export default Meteo;
