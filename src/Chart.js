import React, { useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({ allCountriesMain }) => {
  const [country, setCountry] = useState('');

  const inputChange = (event) => {
    setCountry(event.target.value);
  };

  const filteredCountries = allCountriesMain.filter((countryElement) => {
    return countryElement.countriesAndTerritories.toLowerCase().includes(country.toLowerCase());
  });

  return (
    <>
      <div className='main_table'>
        <div className='info_container'>
          <menu>
            <input type='text' placeholder='Поиск страны' value={country} onChange={inputChange}
              id="country" />
            <select className='chart_select'>
              <option selected>Выберете Страну</option>
              {[...new Set(filteredCountries.map((countryElement) => countryElement.countriesAndTerritories))].slice(0, 1000).map((countryName, i) => (
                <option key={i}>{countryName}</option>
              ))}

            </select>
          </menu>
          <LineChart
            width={1200}
            height={400}
            data={allCountriesMain.slice(0, 10)}
            margin={{
              top: 50,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" dataKey="cases" />
            <XAxis stroke="black" />
            <YAxis stroke="black" />
            <Tooltip stroke="black" />
            <Legend />
            <Line type="monotone" dataKey="X ось" stroke="black" />
            <Line type="monotone" dataKey="Y ось" stroke="black" />
            <Line type="monotone" dataKey="deaths" stroke="blue" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="cases" stroke="violet" />
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default Chart;
