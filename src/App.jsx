import "./App.css";
import { useRef, useState } from "react";
import Homepage from "./components/Homepage/Homepage";
import EmployeePage from "./components/EmployeePage/EmployeePage";
function App() {
  return (
    <div className="App">
      <Homepage />
      <EmployeePage />
    </div>
  );
}
export default App;
