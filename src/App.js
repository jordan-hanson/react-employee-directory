import React from "react";
import Data from "./pages/dataTable";
import styles from "./App.css";


function App() {
  return (
    <div className="container">
      <div className="row">
        <h1>Employee Directory</h1>
        <div className="searchBy-type">
          <label for="type">Search By:</label>
          <select className="type" id="type">
            <option selected>Select Search By Type</option>
            <option value="department">Department</option>
            <option value="current">Currently an Employee</option>
          </select>
        </div>
      </div>
      <div className="row">
        <Data />
      </div>
    </div>
  );
}

export default App;
