import React, { Component } from 'react';
import './App.css';
import List from './Component';
import './Style.css';
import Table from './Table';

function App() {
  return (

    <>
      <List />
      <Table />
    </>

  );
}

function stylde() {
  return <div className='main'>Test</div>
}

export default App;