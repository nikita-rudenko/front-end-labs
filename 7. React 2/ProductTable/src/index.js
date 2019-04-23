import React from "react";
import ReactDOM from "react-dom";
import FilterableProductTable from "./components/FilterableProductTable";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <FilterableProductTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
