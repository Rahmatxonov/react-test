import axios from 'axios';
import { useEffect, useState } from 'react';
import RenderCountry from './RenderCountry';

function GetData() {
  let [error, setError] = useState('');
  const [country, setCountry] = useState([]);

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
      <RenderCountry davlatlar={country} />
    </div>
  );
}

export default GetData;
