import React, { useState, useEffect } from 'react';

function List() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://opendata.ecdc.europa.eu/covid19/casedistribution/json/')
      .then(response => response.json())
      .then(data => setUsers(data.records))
      .catch(error => console.error('Fetch error: ', error))
  }, []);

    console.log(users)

    return (
      <div>
        <h1>User List</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Countries and territories</th>
              <th>Cases</th>
              <th>Deaths</th>
              <th>PopData2019</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, 10).map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.dateRep}</td>
                  <td>{user.countriesAndTerritories}</td>
                  <td>{user.cases}</td>
                  <td>{user.deaths}</td>
                  <td>{user.popData2019}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

export default List;
