import React from "react";
import Table from "./components/Table";
import Title from "./components/Title";

function App() {
  return (
    <div className="page-wrap">
      <Title>React Version: {React.version}</Title>
      <Table />
    </div>
  );
}

export default App;
