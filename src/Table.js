import React, {useState} from 'react';
//import {useAtom} from "jotai";

function Table({allCountriesMain, setTableState}) {

  const [allCountries, setAllCountries] = useState([]);
  const [country, setCountry] = useState('');
  //const [dateRage, setDateRange] = useState('');

  const inputChange = (event) => {
    setCountry(event.target.value);
  };

  const filteredCountries = allCountriesMain.filter((countryElement) => {
    return countryElement.countriesAndTerritories.toLowerCase().includes(country.toLowerCase());
  });

  const filteredData = allCountries.filter((countryElement) => {
    return {
      name: countryElement.countriesAndTerritories,
      uv: countryElement.cases,
      pv: countryElement.deaths,
      amt: countryElement.cases + countryElement.deaths
    };
  });

  return (
    <>
      <div className='main_table'>

        <div className='info_container'>
          <menu>
            <input type='text' placeholder='Поиск страны' value={country} onChange={inputChange}
                   id="country"/>
            <select>
              <option selected>Выберете Фильтр</option>
              <option>Фильтр 1</option>
              <option>Фильтр 2</option>
              <option>Фильтр 3</option>
            </select>
            <input type='text' placeholder='Значение от'/>
            <input type='text' placeholder='Значение до'/> <br/><br/>

            <input type='button' value='Сбросить фильтры' className='filer_remove_btn'/>
          </menu>
          <table>
            <thead>
            <tr>
              <th>Страна</th>
              <th>Колличество случаев</th>
              <th>Колличество смертей</th>
              <th>Колличество случаев всего</th>
              <th>Колличество смертей всего</th>
              <th>Колличество случаев на 1000 жителей</th>
              <th>Колличество смертей на 1000 жителей</th>
            </tr>
            </thead>
            <tbody>
            {filteredCountries.slice(0, 10).map((countryElement, i) => {
              return (
                <tr key={i}>
                  <td>{countryElement.countriesAndTerritories}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{countryElement.cases}</td>
                  <td>{countryElement.deaths}</td>
                  <td>{}</td>
                  <td>{}</td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
