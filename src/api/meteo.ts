import axios from 'axios';

// API endpoint openweathermap.org
export const getCity = async (city: string) => {
  const api_key = "98b7465353d383f3d0f3bc4a284a48ae";
  const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=fr`;
  return await axios.get(api_url)
}
