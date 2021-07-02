import React, { useEffect } from 'react';
import SearchCity from '../components/search/SearchCity';

const Home = () => {

  useEffect(() => {
    document.body.style.backgroundColor = "#333";
  }, [])
  
  return (
    <main>
      <SearchCity />
    </main>
  )
}

export default Home;
