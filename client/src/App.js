import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';

const fetchData = () => {
  return fetch("https://api.tidepool.finance/v1/stats/latest/")
        .then((response) => response.json());
      }



function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const data = fetchData()
    console.log(data);
    setData(data.toString());
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { data }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
