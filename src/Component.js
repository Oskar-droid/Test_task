import React, { Component } from 'react';

class List extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('https://opendata.ecdc.europa.eu/covid19/casedistribution/json/')
      .then(response => response.json())
      .then(data => this.setState({ users: data.records }))
      .catch(error => console.error('Fetch error: ', error))
  }

  render() {
    const { users } = this.state;

    console.log(users)
    return (
      <div>
        <h1>User List</h1>
        <ul>
        {users.slice(0, 10).map((users, i) => {
          return <li key={i}>text</li>
        })}
        </ul>
      </div>
    );
  }
}

export default List;
