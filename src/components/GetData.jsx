import axios from 'axios';
import { useEffect, useState } from 'react';
import RenderCountry from './RenderCountry';
import Navbar from './Navbar';

function GetData({ darkMode, setDarkMode }) {
  let [error, setError] = useState('');
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState('');

  const searchData = country.filter((item) =>
    item.name.common.toLowerCase().includes(search),
  );

  const errorData = String(error);

  const URL =
    'https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,area,languages,currencies,timezones';

  useEffect(() => {
    try {
      axios(URL).then((data) => {
        setCountry(data.data);
      });
    } catch (error) {
      setError(new Error('Miyam yo`qligi uchun ma`lumot kelmadi'));
    }
  }, []);

  return (
    <div>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        search={search}
        setSearch={setSearch}
      />
      <RenderCountry davlatlar={searchData} />
    </div>
  );
}

export default GetData;
