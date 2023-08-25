import "./Homepage.css";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import EmployeeList from "../EmployeeList/EmployeeList";

function Homepage() {
  return (
    <div className="Homepage">
      {" "}
      <Header title = "Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
export default Homepage;
