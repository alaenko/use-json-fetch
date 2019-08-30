import React from 'react';
import UseHook from './components/UseHook'

export default function App() {
  return (
    <div className="App">
      <UseHook url={process.env.REACT_APP_DATA_URL} />
      <UseHook url={process.env.REACT_APP_ERROR_URL} />
      <UseHook url={process.env.REACT_APP_LOADING_URL} />
    </div>
  );
}
