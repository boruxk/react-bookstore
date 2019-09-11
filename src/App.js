import React, { useState } from 'react';
import './App.css';
import BookList from "./BookList";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const options = [
    { value: 5 },
    { value: 10 },
    { value: 15 },
    { value: 30 },
    { value: 60 },
    { value: 100 }
  ];
  const [selectedOption, setSelectedOption] = useState(options[5].value);

  return (
    <div className="App">
      <div className="container">
        <h2>My Book Store</h2>
        <h3 style={{ display: "inline" }}>books to view </h3>
        <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
          {options.map(o => (
            <option value={o.value} key={o.value}>{o.value}</option>
          ))}
        </select>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <BookList value={selectedOption} />
            </div>
          </div>
          <div className="col-md-4" style={{ backgroundColor: "#cccccc" }}>
            <div className="row" style={{ padding: 20 + "px" }}>
              <h4>Your cart:</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
