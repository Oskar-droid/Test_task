import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './Table';
import Config from './config'
import { atom, useAtom } from "jotai";
import Example from "./ChartExample";

function App() {
  const tabsNames = {
    table: 'table',
    chart: 'chart'
  }
  
  const [allCountries, setAllCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [currentTab, setCurrentTab] = useState(tabsNames.table);
  const [tableState, setTableState] = useState('');

  //API
  useEffect(() => {
    console.log('effect')
    fetch(Config.apiUrl)
      .then(response => response.json())
      .then(data => setAllCountries(data.records))
      .catch(error => console.error('Fetch error: ', error))
  }, []);

  return (

    <>
      Период от <input type='date' onInput={(e) => {
        /*
        const filterdByDate = allCountries.filter((countryElement) => {
          //return countryElement.dateRep === e.target.value.replace(/-/g, '/');
        });
        */
      }
      } />
      до <input type='date' onInput={(e) => {
      }} /> <br /><br />


      <input type='button' value='Taблица' className='table_btn' autoFocus
        onClick={() => setCurrentTab(tabsNames.table)} />
      <input type='button' value='График' className='chart_btn'
        onClick={() => setCurrentTab(tabsNames.chart)} />

      {currentTab === tabsNames.table &&
        <Table allCountriesMain={allCountries} setTableState={setTableState} tableState={tableState} />}
      {currentTab === tabsNames.chart && <Example allCountriesMain={allCountries} />}
    </>
  );
}

export default App;
