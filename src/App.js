import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Counter from './components/Counter'

const MUZAKKI = gql`
  {
    muzakkis {
      id
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(MUZAKKI);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
        {data.muzakkis.map(({ id, name }) => {
          return <div key={id}>{name}</div>
        })}
      </header>
    </div>
  );
}

export default App;
