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
        <ul>
        {users.slice(0, 10).map((user, i) => {
          return <li key={i}>{user.dateRep}</li>
        })}
        </ul>
      </div>
    );
  }

export default List;
