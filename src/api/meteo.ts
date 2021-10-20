import axios from 'axios';

// API endpoint openweathermap.org
export const getCity = async (city: string) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=fr`;
  return await axios.get(api_url)
}
