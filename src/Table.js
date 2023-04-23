import React, { useState, useEffect } from 'react';
import Country from './Country.js';

function Table() {

    const [users, setUsers] = useState([]);

    //API
    useEffect(() => {
        fetch('https://opendata.ecdc.europa.eu/covid19/casedistribution/json/')
            .then(response => response.json())
            .then(data => setUsers(data.records))
            .catch(error => console.error('Fetch error: ', error))
    }, []);

    return (
        <>
            <div className='main_table'>
                Период от <input type='date' /> до <input type='date' /> <br /><br />

                <input type='button' value='Taблица' className='table_btn' autoFocus />
                <input type='button' value='График' className='char_btn' />
                <div className='info_container'>
                    <menu>
                    <Country />
                        <select>
                            <option selected>Выберете Фильтр</option>
                            <option>Фильтр 1</option>
                            <option>Фильтр 2</option>
                            <option>Фильтр 3</option>
                        </select>
                        <input type='text' placeholder='Значение от' />
                        <input type='text' placeholder='Значение до' /> <br /><br />

                        <input type='button' value='Сбросить фильтры' className='filer_remove_btn' />
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
                            {users.slice(0, 10).map((user, i) => {
                                return (

                                    <tr key={i}>
                                        <td>{user.countriesAndTerritories}</td>
                                        <td>{}</td>
                                        <td>{}</td>
                                        <td>{user.cases}</td>
                                        <td>{user.deaths}</td>
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